import { productDetailApi } from "@/api";
import { handleColorList } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export const useProductDetail = ({ productName }) => {
  return useQuery({
    queryKey: ["product-detail", productName],
    queryFn: productDetailApi.getProductDetail,
  });
};

export const useRelatedProduct = ({ categoryId }) => {
  return useQuery({
    queryKey: ["related-product", categoryId],
    queryFn: productDetailApi.getRelatedProduct,
  });
};

export const useInitializeProductDetail = ({ product, isFetched }) => {
  const [shoeSize, setShoeSize] = useState("");
  const [shoeColor, setShoeColor] = useState("");
  const [selectedProduct, setSelectedProduct] = useState({});
  const [shoeSizeList, setShoeSizeList] = useState([]);
  const [shoeColorList, setShoeColorList] = useState([]);
  const [shoeImageList, setShoeImageList] = useState([]);
  const [image, setImage] = useState("");

  const calcFirstActiveItem = (colorList) => {
    return colorList?.find((item) => item.isAvailable === true);
  };

  const handleSelectedProduct = (size, color) => {
    let item = product.find(
      (item) => item.size === size && handleColorList(item.color) === color
    );
    setSelectedProduct(item);
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

  return {
    shoeSize,
    setShoeSize,
    shoeColor,
    setShoeColor,
    selectedProduct,
    setSelectedProduct,
    shoeSizeList,
    setShoeSizeList,
    shoeColorList,
    setShoeColorList,
    shoeImageList,
    setShoeImageList,
    image,
    setImage,
  };
};
