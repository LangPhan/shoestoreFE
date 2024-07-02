import { ArrowRight } from "lucide-react";
import React, { Fragment } from "react";

const ProductInfo = () => {
  return (
    <Fragment>
      <div className="grid grid-cols-2 mb-10 gap-x-8 gap-y-2 product-info">
        <div className="flex items-center justify-between">
          <span>Description</span>
          <ArrowRight></ArrowRight>
        </div>
        <div className="flex items-center justify-between">
          <span>Size & Fit</span>
          <ArrowRight></ArrowRight>
        </div>
        <div className="flex items-center justify-between">
          <span>Free Shipping</span>
          <ArrowRight></ArrowRight>
        </div>
        <div className="flex items-center justify-between">
          <span>Free Returns</span>
          <ArrowRight></ArrowRight>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductInfo;
