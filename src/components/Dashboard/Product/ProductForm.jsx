import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
  DialogOverlay,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Fragment, useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { productAdminApi } from "@/api/productAdminApi";
import InputForm from "../Form/InputForm";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";
import Spinner from "@/components/ui/spinner";
import ImageUpload from "../Form/ImageUpload";
import { CloudCog, PlusCircle } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { COLOR_LIST } from "@/constant";
import { v4 } from "uuid";
import productSchema from "../Schemas/productSchema";
import { categoryAdminApi } from "@/api/categoryAdminApi";

const ProductForm = ({ productId, isAddProduct = false, ...props }) => {
  const accessToken = JSON.parse(localStorage.getItem("token")).accessToken;
  const [productDetail, setProductDetail] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [categoryList, setCategoryList] = useState({});
  const [selectedCategoryId, setSelectedCategoryId] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [img, setImg] = useState("");
  const queryClient = useQueryClient();

  const productDetailMutation = useMutation({
    mutationKey: "product-detail-admin",
    mutationFn: () =>
      productAdminApi.getProductDetail({ accessToken, productId }),
    onSuccess: (result) => {
      getCategoryList();
      reset({
        name: result.name,
        description: result.description,
        color: result.color,
        imgLink: result.imgLink,
        size: result.size,
        quantity: result.quantity,
        price: result.price,
        category: result?.category?.name,
      });
      setProductDetail(result);
      setSelectedCategoryId(result?.category?.id);
      setSelectedColor(result.color);
      // setIsLoading(false);
    },
    onError: (err) => {
      toast.error(err?.message);
    },
    onMutate: () => {
      setIsLoading(true);
    },
  });

  const getProductDetailData = () => {
    productDetailMutation.mutate();
  };

  const updateProductDetail = async (product) => {
    product.categoryId = selectedCategoryId;
    product.color = selectedColor;
    product.price = Number(product.price);
    product.quantity = Number(product.quantity);
    product.size = Number(product.size);
    await productAdminApi.createProduct({ accessToken, product, img });
    setOpen(false);
    queryClient.invalidateQueries({ queryKey: ["product-list-admin"] });
  };

  const getCategoryList = async () => {
    let result = await categoryAdminApi.getCategoryList({ accessToken });
    setCategoryList(result);
    setIsLoading(false);
  };

  const openProductForm = async () => {
    getCategoryList();
    reset({
      name: "",
      description: "",
      color: "",
      imgLink: "",
      image: "",
      size: 0,
      quantity: 0,
      price: 0,
      category: "",
    });
    setSelectedCategoryId("");
    setSelectedColor("");
  };

  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    reset,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(productSchema),
  });

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {isAddProduct ? (
          <Button
            size="sm"
            className="h-8 gap-1"
            onClick={() => openProductForm()}
          >
            <PlusCircle className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
              Add Product
            </span>
          </Button>
        ) : (
          <Button variant="outline" onClick={() => getProductDetailData()}>
            Edit
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-screen scrollable">
        {!isLoading && (
          <Fragment>
            <DialogHeader>
              <DialogTitle>
                {isAddProduct ? "Add Product" : "Edit Product"}
              </DialogTitle>
              <DialogDescription></DialogDescription>
            </DialogHeader>
            <form
              className="text-base form"
              onSubmit={handleSubmit(updateProductDetail)}
              autoComplete="off"
            >
              <div className="mb-1">
                <div>
                  <Label htmlFor="name">Product Name</Label>
                  <InputForm
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Enter your product name"
                    control={control}
                  ></InputForm>
                  {errors?.name && (
                    <p className="mr-auto text-sm text-red-500">
                      {errors.name.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="mb-1">
                <div>
                  <Label htmlFor="description">Product Description</Label>
                  <InputForm
                    id="description"
                    type="text"
                    name="description"
                    placeholder="Enter your product description"
                    control={control}
                  ></InputForm>
                  {errors?.description && (
                    <p className="mr-auto text-sm text-red-500">
                      {errors.description.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="mb-1">
                <Label htmlFor="category">Product Color</Label>
                <Select
                  value={selectedColor}
                  onValueChange={(value) => setSelectedColor(value)}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select Color" />
                  </SelectTrigger>
                  <SelectContent>
                    {COLOR_LIST.map((color) => (
                      <SelectItem key={v4()} value={color}>
                        {color}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              {isAddProduct ? (
                <div className="mb-1">
                  <ImageUpload setImg={setImg}></ImageUpload>
                </div>
              ) : (
                <div className="mb-1">
                  <div>
                    <Label htmlFor="image">Product Image</Label>
                    <img
                      className="object-cover w-[80px] h-[80px] overflow-hidden shrink-0"
                      src={productDetail?.imgLink}
                      alt=""
                    />
                  </div>
                </div>
              )}
              <div className="mb-1">
                <div>
                  <Label htmlFor="size">Product Size</Label>
                  <InputForm
                    id="size"
                    type="number"
                    name="size"
                    placeholder="Enter your product size"
                    control={control}
                  ></InputForm>
                  {errors?.size && (
                    <p className="mr-auto text-sm text-red-500">
                      {errors.size.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="mb-1">
                <div>
                  <Label htmlFor="quantity">Product Quantity</Label>
                  <InputForm
                    id="quantity"
                    type="number"
                    name="quantity"
                    placeholder="Enter your product quantity"
                    control={control}
                  ></InputForm>
                  {errors?.quantity && (
                    <p className="mr-auto text-sm text-red-500">
                      {errors.quantity.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="mb-1">
                <div>
                  <Label htmlFor="price">Product Price</Label>
                  <InputForm
                    id="price"
                    type="number"
                    name="price"
                    placeholder="Enter your product price"
                    control={control}
                  ></InputForm>
                  {errors?.price && (
                    <p className="mr-auto text-sm text-red-500">
                      {errors.price.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="mb-3">
                <div>
                  <Label htmlFor="category">Product Category</Label>
                  <Select
                    value={selectedCategoryId}
                    onValueChange={(value) => setSelectedCategoryId(value)}
                  >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select Category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categoryList &&
                        categoryList.length > 0 &&
                        categoryList.map((category) => (
                          <SelectItem key={v4()} value={category.id}>
                            {category.name}
                          </SelectItem>
                        ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <Button
                type="submit"
                disabled={
                  !isValid || (!img && isAddProduct) || !selectedCategoryId
                }
              >
                {isAddProduct ? " Create New Product" : "Save Changes"}
              </Button>
            </form>
            <DialogFooter></DialogFooter>
          </Fragment>
        )}
        {isLoading && (
          <Skeleton
            className={`rounded-2xl w-full h-screen flex justify-center items-center my-4 overflow-hidden`}
          >
            <Spinner></Spinner>
          </Skeleton>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ProductForm;
