import Banner from "@/components/Products/Banner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import React, { Fragment, useEffect, useState } from "react";
import { Copy, Expand } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { v4 } from "uuid";
import ProductSize from "@/components/ProductDetail/ProductSize";
import ProductColor from "@/components/ProductDetail/ProductColor";
import ProductInfo from "@/components/ProductDetail/ProductInfo";
import ProductQuantity from "@/components/ProductDetail/ProductQuantity";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/Products/Card";
import CopyToClipboard from "react-copy-to-clipboard";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useCartStore from "@/stores/cartStore";
import { useProductDetail, useRelatedProduct } from "@/hooks/useProductDetail";
import {
  BEGIE_TAUPE,
  BLACK,
  BOLD_ORANGE,
  BROWN,
  BUBBLEGUM_PINK,
  MAXIMUM_QUANTITY,
  METALLICS,
  MINIMUM_QUANTITY,
  MUSTARD_YELLOW,
  NAVY_BLUE,
  OLIVE_GREEN,
  PISTACHIO_GREEN,
  RED,
  WHITE,
} from "@/constant";
import { covertConcurrency } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
import Spinner from "@/components/ui/spinner";
import { useParams } from "react-router-dom";

const ProductDetailPage = (props) => {
  const [shoeSize, setShoeSize] = useState("");
  const [shoeColor, setShoeColor] = useState("");
  const [selectedProduct, setSelectedProduct] = useState({});
  const [shoeSizeList, setShoeSizeList] = useState([]);
  const [shoeColorList, setShoeColorList] = useState([]);
  const [shoeImageList, setShoeImageList] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [image, setImage] = useState("");
  const linkUrl = window.location.href;

  const { productName, categoryId } = useParams();

  const { totalItems, totalAmount, cart, addToCart, calcCartTotal } =
    useCartStore((state) => state);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    calcCartTotal();
  }, [cart]);

  const {
    data: product,
    isLoading,
    isError,
    error,
    isFetched,
  } = useProductDetail({
    productName,
  });

  const {
    data: relatedProducts,
    isFetched: isFetchedRelatedProduct,
    isLoading: isLoadingRelatedProducts,
  } = useRelatedProduct({
    categoryId,
  });

  const calcFirstActiveItem = (colorList) => {
    return colorList?.find((item) => item.isAvailable === true);
  };

  const handleSelectedProduct = (size, color) => {
    let item = product.find(
      (item) => item.size === size && handleColorList(item.color) === color
    );
    setSelectedProduct(item);
  };

  const handleShoeSizeChange = (event) => {
    let size = Number(event.target.value);

    setShoeSize(size);
    handleSelectedProduct(size, shoeColor);
  };
  const handleShoeColorChange = (color) => {
    let result = shoeSizeList[color].find((item) => item.size === shoeSize);

    setShoeColor(color);
    if (!result) {
      let result = calcFirstActiveItem(shoeSizeList[color]);
      setShoeSize(result.size);
      handleSelectedProduct(result.size, color);
    } else {
      handleSelectedProduct(shoeSize, color);
    }
  };

  const onQuantityIncrement = () => {
    if (quantity === MAXIMUM_QUANTITY) return;
    setQuantity(quantity + 1);
  };

  const onQuantityDecrement = () => {
    if (quantity === MINIMUM_QUANTITY) return;
    setQuantity(quantity - 1);
  };

  const handleSelectedImage = (value) => {
    setImage(value);
  };

  const onCopyClipboard = () => {
    toast.success("Copy to clipboard successfully!");
  };

  const handleAddToCart = () => {
    debugger;
    let product = { ...selectedProduct, quantity };

    addToCart(product);
    toast.success("Add item to cart successfully!");
  };

  const handleColorList = (color) => {
    if (color === "Red") {
      return RED;
    } else if (color === "Brown") {
      return BROWN;
    } else if (color === "Bubblegum Pink") {
      return BUBBLEGUM_PINK;
    } else if (color === "Bold Orange") {
      return BOLD_ORANGE;
    } else if (color === "Pistachio Green") {
      return PISTACHIO_GREEN;
    } else if (color === "Navy Blue") {
      return NAVY_BLUE;
    } else if (color === "Metallics") {
      return METALLICS;
    } else if (color === "White") {
      return WHITE;
    } else if (color === "Black") {
      return BLACK;
    } else if (color === "Beige/Taupe") {
      return BEGIE_TAUPE;
    } else if (color === "Olive Green") {
      return OLIVE_GREEN;
    } else if (color === "Mustard Yellow") {
      return MUSTARD_YELLOW;
    }
  };

  useEffect(() => {
    if (!product) return;

    let sizeList = [];
    let colorList = [];
    let imageList = [];
    let firstSize = {};

    for (let item of product) {
      const currentColor = handleColorList(item.color);
      if (!sizeList[currentColor]) sizeList[currentColor] = [];
      if (sizeList[currentColor].length > 0) continue;
      for (let i = 0; i < product.length; i++) {
        if (item.color === product[i].color) {
          sizeList[currentColor].push({
            size: product[i].size,
            isAvailable: true,
          });
        }
      }
      sizeList[currentColor].sort((a, b) => a.size - b.size);
    }
    setShoeSizeList(sizeList);

    colorList = product
      ?.sort((a, b) => {
        if (a.color > b.color) return 1;
        if (a.color < b.color) return -1;
        return 0;
      })
      ?.map((item) => {
        return handleColorList(item.color);
      });
    colorList = [...new Set(colorList)];
    setShoeColorList(colorList);

    imageList = product?.map((item) => {
      return item.imgLink;
    });
    setShoeImageList(imageList);

    firstSize = calcFirstActiveItem(sizeList[colorList[0]]);
    handleSelectedProduct(firstSize.size, colorList[0]);
    setShoeSize(firstSize.size);
    setShoeColor(colorList[0]);
    setImage(imageList[0]);
  }, [isFetched, product]);

  return (
    <section className="mb-8 product-detail">
      {(isLoading || isLoadingRelatedProducts) && (
        <Skeleton
          className={`rounded-2xl w-full h-screen flex justify-center items-center my-4`}
        >
          <Spinner />
        </Skeleton>
      )}
      {!isLoading && !isLoadingRelatedProducts && (
        <Fragment>
          <div
            className="mt-8 grid gap-10 mb-[100px] max-[767px]:p-4 max-[767px]:grid-cols-1
            md:grid-cols-product-detail container-main"
          >
            <div className="product-left">
              <div className="relative w-full mb-5 cursor-pointer">
                <img
                  src={image}
                  alt="Nike Shoe"
                  className="object-cover w-full h-full max-h-[650px] overflow-hidden"
                />
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      className="absolute p-2 bg-transparent border-2 rounded-full bottom-4 right-4 hover:bg-transparent text-mainForeground border-mainForeground hover:text-main hover:border-main"
                    >
                      <Expand size={24} />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="min-w-[90vw] h-[90vh]">
                    <div className="object-cover w-full h-full p-10 overflow-hidden">
                      <img
                        src={image}
                        alt="Nike Shoe"
                        className="w-full h-full"
                      />
                    </div>
                    <DialogTitle className="hidden">
                      Zoom out of image
                    </DialogTitle>
                    <DialogDescription className="hidden">
                      Zoom out of image
                    </DialogDescription>
                  </DialogContent>
                </Dialog>
              </div>
              <Carousel>
                <CarouselContent>
                  {shoeImageList.map((item, index) => {
                    return (
                      <CarouselItem
                        className="flex basis-1/3"
                        key={v4()}
                        onClick={() => handleSelectedImage(item)}
                      >
                        <div>
                          <img
                            src={item}
                            alt="Nike Shoe"
                            className="object-cover transition-all duration-200 ease-linear border-2 border-transparent rounded-lg cursor-pointer hover:border-main"
                          />
                        </div>
                      </CarouselItem>
                    );
                  })}
                </CarouselContent>
                <CarouselPrevious className="absolute top-[50%] left-0 translate-y-[-50%]" />
                <CarouselNext className="absolute top-[50%] right-0 translate-y-[-50%]" />
              </Carousel>
            </div>
            <div className="flex flex-col md:pl-10 product-right text-mainForeground">
              <h3 className="mb-5 text-4xl font-semibold leading-none">
                {selectedProduct && selectedProduct.name}
              </h3>
              <div className="mb-5 text-base font-medium">
                {selectedProduct && selectedProduct?.description}
              </div>
              <ProductSize
                handleShoeSizeChange={handleShoeSizeChange}
                shoeSize={shoeSize}
                shoeColor={shoeColor}
                shoeSizeList={shoeSizeList}
              ></ProductSize>
              <ProductColor
                handleShoeColorChange={() => handleShoeColorChange}
                shoeColor={shoeColor}
                shoeColorList={shoeColorList}
              ></ProductColor>
              <ProductInfo></ProductInfo>
              <div className="mb-8 text-4xl font-bold text-black price">
                {selectedProduct
                  ? covertConcurrency(selectedProduct.price)
                  : covertConcurrency(0)}
              </div>
              <ProductQuantity
                quantity={quantity}
                onQuantityIncrement={() => onQuantityIncrement}
                onQuantityDecrement={() => onQuantityDecrement}
              ></ProductQuantity>
              <div className="flex items-center justify-between">
                <button
                  className={`px-10 py-3 text-lg text-white border shrink-0 rounded-3xl bg-main `}
                  onClick={handleAddToCart}
                >
                  ADD TO CART
                </button>
                <CopyToClipboard text={linkUrl}>
                  <button
                    className="w-12 h-12 border-[1px] rounded-full text-xs flex items-center justify-center cursor-pointer"
                    onClick={onCopyClipboard}
                  >
                    <Copy className="hover:text-main" />
                  </button>
                </CopyToClipboard>
              </div>
            </div>
          </div>
          <div className="related-product container-main max-[767px]:p-4">
            <h2 className="flex justify-center mb-8 font-bold text-black text-mt product-heading">
              Related Product
            </h2>
            <div className="w-full related-product-list">
              <Carousel className="relative w-full">
                <CarouselContent>
                  {relatedProducts &&
                    relatedProducts?.content.length > 0 &&
                    relatedProducts.content.map((item, index) => {
                      return (
                        <CarouselItem
                          className="flex cursor-pointer 2xl:basis-1/5 max-[500px]:basis-1/1 md:basis-1/3"
                          key={v4()}
                        >
                          <ProductCard
                            name={item.name}
                            price={item.price}
                            sale="50"
                            image={item.imgLink}
                            categoryId={item?.category?.id}
                          ></ProductCard>
                        </CarouselItem>
                      );
                    })}
                </CarouselContent>
                <CarouselPrevious className="absolute top-[50%] left-0 translate-y-[-50%]" />
                <CarouselNext className="absolute top-[50%] right-0 translate-y-[-50%]" />
              </Carousel>
            </div>
          </div>
        </Fragment>
      )}
    </section>
  );
};

export default ProductDetailPage;
