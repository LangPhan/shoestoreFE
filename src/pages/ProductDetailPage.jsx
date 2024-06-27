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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import React, { useEffect, useState } from "react";
import { Copy, Expand, Search } from "lucide-react";
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

const MAXIMUM_QUANTITY = 5;
const MINIMUM_QUANTITY = 1;
const arrayProductImage = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 10, 11, 12, 13, 14, 15,
];

const ProductDetailPage = (props) => {
  const [shoeSize, setShoeSize] = useState("");
  const [shoeColor, setShoeColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [stock, isStock] = useState(false);
  const [image, setImage] = useState("");
  const linkUrl = window.location.href;

  const { totalItems, totalAmount, cart, addToCart, calcCartTotal } =
    useCartStore((state) => state);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    calcCartTotal();
  }, [cart]);

  const handleShoeSizeChange = (value) => {
    setShoeSize(value);
  };
  const handleShoeColorChange = (value) => {
    setShoeColor(value);
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
    toast.success("Copy to clipboard successfully!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  const handleAddToCart = () => {
    const product = {
      id: "1",
      name: "test",
      desc: "this is test",
      color: "blue",
      imageUrl:
        "https://images.unsplash.com/photo-1603787081207-362bcef7c144?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c25lYWtlcnxlbnwwfHwwfHx8MA%3D%3D",
      price: "10",
      quantity: "1",
    };
    const tempProduct = cart?.find((cartItem) => cartItem.id === product.id);

    if (tempProduct?.quantity >= MAXIMUM_QUANTITY) {
      toast.warn("Sorry, you have reached the limit of adding item!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      return;
    }

    addToCart(product);
    toast.success("Add item to cart successfully!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  return (
    <section className="mb-8 product-detail">
      <Banner />
      <div
        className="mt-8 grid gap-10 mb-[100px] max-[767px]:p-4 max-[767px]:grid-cols-1
      md:grid-cols-product-detail container-main"
      >
        <div className="product-left">
          <div className="relative w-full mb-5 cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1580902215262-9b941bc6eab3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c25lYWtlciUyMHdoaXRlfGVufDB8MHwwfHx8MA%3D%3D"
              alt="Nike Shoe"
              className="object-cover w-full h-full"
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
                    src="https://images.unsplash.com/photo-1580902215262-9b941bc6eab3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c25lYWtlciUyMHdoaXRlfGVufDB8MHwwfHx8MA%3D%3D"
                    alt="Nike Shoe"
                    className="w-full h-full"
                  />
                </div>
                <DialogTitle className="hidden">Zoom out of image</DialogTitle>
                <DialogDescription className="hidden">
                  Zoom out of image
                </DialogDescription>
              </DialogContent>
            </Dialog>
          </div>
          <Carousel>
            <CarouselContent>
              {arrayProductImage.map((item, index) => {
                return (
                  <CarouselItem
                    className="flex basis-1/3"
                    key={v4()}
                    onClick={() => handleSelectedImage("TEST")}
                  >
                    <div>
                      <img
                        src="https://images.unsplash.com/photo-1580902215262-9b941bc6eab3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c25lYWtlciUyMHdoaXRlfGVufDB8MHwwfHx8MA%3D%3D"
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
            Nike Lebron 16 Low
          </h3>
          <div className="mb-5 text-base font-medium">
            A sleek, low profile design combining style, comfort, and
            performance for basketball enthusiasists.
          </div>
          <ProductSize
            handleShoeSizeChange={() => handleShoeSizeChange}
            shoeSize={shoeSize}
          ></ProductSize>
          <ProductColor
            handleShoeColorChange={() => handleShoeColorChange}
            shoeColor={shoeColor}
          ></ProductColor>
          <ProductInfo></ProductInfo>
          <div className="mb-5 text-4xl font-bold text-black price">
            $350.00
          </div>
          <ProductQuantity
            quantity={quantity}
            onQuantityIncrement={() => onQuantityIncrement}
            onQuantityDecrement={() => onQuantityDecrement}
          ></ProductQuantity>
          <div className="flex items-center justify-between">
            <button
              className="px-10 py-3 text-lg text-white border shrink-0 rounded-3xl bg-main"
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
              {arrayProductImage.map((item, index) => {
                return (
                  <CarouselItem
                    className="flex cursor-pointer md:basis-1/5 max-[767px]:basis-1/3"
                    key={v4()}
                  >
                    <ProductCard
                      name="Nike Jordan"
                      price="10000"
                      sale="50"
                      image="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c25lYWtlcnxlbnwwfHwwfHx8MA%3D%3D"
                    ></ProductCard>
                    {/* <div>TEST</div> */}
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="absolute top-[50%] left-0 translate-y-[-50%]" />
            <CarouselNext className="absolute top-[50%] right-0 translate-y-[-50%]" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailPage;
