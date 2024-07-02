import React, { Fragment, memo } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProductCard from "../../Products/Card";
import { v4 } from "uuid";

const RelatedProduct = ({ relatedProducts }) => {
  return (
    <Fragment>
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
                      className="flex cursor-pointer xl:basis-1/5 max-[500px]:basis-1/1 sm:basis-1/3"
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
  );
};

export default memo(RelatedProduct);
