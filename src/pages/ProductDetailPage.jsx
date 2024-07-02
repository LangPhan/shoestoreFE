import React, {
  Fragment,
  memo,
  useEffect,
  useState,
} from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useCartStore from "@/stores/cartStore";
import {
  useInitializeProductDetail,
  useProductDetail,
  useRelatedProduct,
} from "@/hooks/useProductDetail";
import { handleColorList } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
import Spinner from "@/components/ui/spinner";
import { useParams } from "react-router-dom";
import {
  MAXIMUM_QUANTITY,
  MINIMUM_QUANTITY,
} from "@/constant";
import {
  RelatedProduct,
  ProductImage,
} from "@/components/ProductDetail";
import ProductContent from "@/components/ProductDetail/Content/ProductContent";

const ProductDetailPage = () => {
  const [quantity, setQuantity] =
    useState(1);
  const { productName, categoryId } =
    useParams();
  const { addToCart } = useCartStore(
    (state) => state
  );

  const {
    data: product,
    isLoading,
    isFetched,
  } = useProductDetail({
    productName,
  });

  console.log(product);
  const {
    data: relatedProducts,
    isLoading: isLoadingRelatedProducts,
  } = useRelatedProduct({
    categoryId,
  });

  const {
    shoeSize,
    setShoeSize,
    shoeColor,
    setShoeColor,
    selectedProduct,
    setSelectedProduct,
    shoeSizeList,
    shoeColorList,
    shoeImageList,
    image,
    setImage,
  } = useInitializeProductDetail({
    product,
    isFetched,
  });

  const calcFirstActiveItem = (
    colorList
  ) => {
    return colorList?.find(
      (item) =>
        item.isAvailable === true
    );
  };

  const handleSelectedProduct = (
    size,
    color
  ) => {
    let item = product.find(
      (item) =>
        item.size === size &&
        handleColorList(item.color) ===
          color
    );
    setSelectedProduct(item);
  };

  const handleShoeSizeChange = (
    event
  ) => {
    let size = Number(
      event.target.value
    );

    setShoeSize(size);
    handleSelectedProduct(
      size,
      shoeColor
    );
  };
  const handleShoeColorChange = (
    color
  ) => {
    let result = shoeSizeList[
      color
    ].find(
      (item) => item.size === shoeSize
    );

    setShoeColor(color);
    if (!result) {
      let result = calcFirstActiveItem(
        shoeSizeList[color]
      );
      setShoeSize(result.size);
      handleSelectedProduct(
        result.size,
        color
      );
    } else {
      handleSelectedProduct(
        shoeSize,
        color
      );
    }
  };

  const onQuantityIncrement = () => {
    if (quantity === MAXIMUM_QUANTITY)
      return;
    setQuantity(quantity + 1);
  };

  const onQuantityDecrement = () => {
    if (quantity === MINIMUM_QUANTITY)
      return;
    setQuantity(quantity - 1);
  };

  const handleSelectedImage = (
    image
  ) => {
    setImage(image);
  };

  const handleAddToCart = () => {
    let product = {
      ...selectedProduct,
      quantity,
    };
    addToCart(product);
    toast.success(
      "Add item to cart successfully!"
    );
  };

  return (
    <section className="mb-8 product-detail">
      {(isLoading ||
        isLoadingRelatedProducts) && (
        <Skeleton
          className={`rounded-2xl w-full h-screen flex justify-center items-center my-4`}
        >
          <Spinner />
        </Skeleton>
      )}
      {!isLoading &&
        !isLoadingRelatedProducts && (
          <Fragment>
            <div
              className="mt-8 grid gap-10 mb-[100px] max-[767px]:p-4 max-[767px]:grid-cols-1
            md:grid-cols-product-detail container-main"
            >
              <ProductImage
                shoeImageList={
                  shoeImageList
                }
                image={image}
                handleSelectedImage={
                  handleSelectedImage
                }
              ></ProductImage>
              <ProductContent
                handleShoeSizeChange={
                  handleShoeSizeChange
                }
                shoeSize={shoeSize}
                shoeColor={shoeColor}
                shoeSizeList={
                  shoeSizeList
                }
                handleShoeColorChange={
                  handleShoeColorChange
                }
                shoeColorList={
                  shoeColorList
                }
                selectedProduct={
                  selectedProduct
                }
                quantity={quantity}
                onQuantityIncrement={
                  onQuantityIncrement
                }
                onQuantityDecrement={
                  onQuantityDecrement
                }
                handleAddToCart={
                  handleAddToCart
                }
              ></ProductContent>
            </div>
            <RelatedProduct
              relatedProducts={
                relatedProducts
              }
            ></RelatedProduct>
          </Fragment>
        )}
    </section>
  );
};

export default memo(ProductDetailPage);
