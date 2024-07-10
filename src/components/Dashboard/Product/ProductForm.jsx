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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import { Copy } from "lucide-react";
import { getProductDetail } from "@/api/productAdminApi";

import { Form, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import InputForm from "./InputForm";

const schema = yup.object({
  name: yup.string().required("Please enter your name"),
  description: yup.string().required("Please enter your description"),
  size: yup.number().required("Please enter your size"),
  quantity: yup.number().required("Please enter your quantity"),
  price: yup.number().required("Please enter your price"),
});

const ProductForm = ({ productId, ...props }) => {
  let accessToken =
    "eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJob2FidWkxMjM0NSIsInJvbGUiOiJVU0VSIiwiaWF0IjoxNzIwNTgyMzc1LCJleHAiOjE3MjA2Njg3NzV9.Ifm_uYbbAQtHMTWTCDLz32RN4tK72iDuRX-9sf94-bMPZTMSRbeFxDyP_ew-zWY8";
  const [productDetail, setProductDetail] = useState({});

  const getProductDetailData = async () => {
    const result = await getProductDetail({ accessToken, productId });
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
  };

  const updateProductDetail = (productDetailValue) => {
    debugger;
  };

  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    reset,
  } = useForm({
    mode: "onChange",
    // resolver: yupResolver(schema),
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" onClick={() => getProductDetailData()}>
          Edit
        </Button>
      </DialogTrigger>
      <DialogOverlay>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Edit product</DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <form
            className="text-base form"
            onSubmit={handleSubmit(updateProductDetail)}
            autoComplete="off"
          >
            <div className="mb-1">
              <div>
                <Label htmlFor="name">Product name</Label>
                <InputForm
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Enter your product name"
                  control={control}
                ></InputForm>
              </div>
            </div>
            <div className="mb-1">
              <div>
                <Label htmlFor="description">Product description</Label>
                <InputForm
                  id="description"
                  type="text"
                  name="description"
                  placeholder="Enter your product description"
                  control={control}
                ></InputForm>
              </div>
            </div>
            <div className="mb-1">
              <div>
                <Label htmlFor="color">Product color</Label>
                <InputForm
                  id="color"
                  type="text"
                  name="color"
                  placeholder="Enter your product color"
                  control={control}
                ></InputForm>
              </div>
            </div>
            <div className="mb-1">
              <div>
                <Label htmlFor="image">Product image</Label>
                <img
                  className="object-cover w-[80px] h-[80px] overflow-hidden shrink-0"
                  src={productDetail?.imgLink}
                  alt=""
                />
              </div>
            </div>
            <div className="mb-1">
              <div>
                <Label htmlFor="size">Product size</Label>
                <InputForm
                  id="size"
                  type="text"
                  name="size"
                  placeholder="Enter your product size"
                  control={control}
                ></InputForm>
              </div>
            </div>
            <div className="mb-1">
              <div>
                <Label htmlFor="quantity">Product quantity</Label>
                <InputForm
                  id="quantity"
                  type="text"
                  name="quantity"
                  placeholder="Enter your product quantity"
                  control={control}
                ></InputForm>
              </div>
            </div>
            <div className="mb-1">
              <div>
                <Label htmlFor="price">Product price</Label>
                <InputForm
                  id="price"
                  type="text"
                  name="price"
                  placeholder="Enter your product price"
                  control={control}
                ></InputForm>
              </div>
            </div>
            <div className="mb-1">
              <div>
                <Label htmlFor="category">Product category</Label>
                <InputForm
                  id="category"
                  type="text"
                  name="category"
                  placeholder="Enter your product category"
                  control={control}
                ></InputForm>
              </div>
            </div>
            <Button type="submit">Save changes to product</Button>
          </form>
          <DialogFooter></DialogFooter>
        </DialogContent>
      </DialogOverlay>
    </Dialog>
  );
};

export default ProductForm;
