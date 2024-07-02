import React, { Fragment } from "react";
import ProductSize from "./ProductSize";
import ProductColor from "./ProductColor";
import ProductInfo from "./ProductInfo";
import ProductQuantity from "./ProductQuantity";
import CopyToClipboard from "react-copy-to-clipboard";
import { Copy } from "lucide-react";
import { toast } from "react-toastify";
import { convertConcurrency } from "@/lib/utils";

const ProductContent = ({
  handleShoeSizeChange,
  shoeSize,
  shoeColor,
  shoeSizeList,
  handleShoeColorChange,
  shoeColorList,
  selectedProduct,
  quantity,
  onQuantityIncrement,
  onQuantityDecrement,
  handleAddToCart,
}) => {
  const linkUrl = window.location.href;

  const onCopyClipboard = () => {
    toast.success(
      "Copy to clipboard successfully!"
    );
  };
  return (
    <Fragment>
      <div className="flex flex-col md:pl-10 product-right text-mainForeground">
        <h3 className="mb-5 text-4xl font-semibold leading-none">
          {selectedProduct &&
            selectedProduct.name}
        </h3>
        <div className="mb-5 text-base font-medium">
          {selectedProduct &&
            selectedProduct?.description}
        </div>
        <ProductSize
          handleShoeSizeChange={
            handleShoeSizeChange
          }
          shoeSize={shoeSize}
          shoeColor={shoeColor}
          shoeSizeList={shoeSizeList}
        ></ProductSize>
        <ProductColor
          handleShoeColorChange={() =>
            handleShoeColorChange
          }
          shoeColor={shoeColor}
          shoeColorList={shoeColorList}
        ></ProductColor>
        <ProductInfo></ProductInfo>
        <div className="mb-8 text-4xl font-bold text-black price">
          {selectedProduct
            ? convertConcurrency(
                selectedProduct.price
              )
            : convertConcurrency(0)}
        </div>
        <ProductQuantity
          quantity={quantity}
          onQuantityIncrement={() =>
            onQuantityIncrement
          }
          onQuantityDecrement={() =>
            onQuantityDecrement
          }
        ></ProductQuantity>
        <div className="flex items-center justify-between">
          <button
            className={`px-10 py-3 text-lg text-white border shrink-0 rounded-3xl bg-main `}
            onClick={handleAddToCart}
          >
            ADD TO CART
          </button>
          <CopyToClipboard
            text={linkUrl}
          >
            <button
              className="w-12 h-12 border-[1px] rounded-full text-xs flex items-center justify-center cursor-pointer"
              onClick={onCopyClipboard}
            >
              <Copy className="hover:text-main" />
            </button>
          </CopyToClipboard>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductContent;
