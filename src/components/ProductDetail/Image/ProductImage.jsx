import React, { Fragment, memo } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { v4 } from "uuid";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Expand } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProductImage = ({ shoeImageList, image, handleSelectedImage }) => {
  return (
    <Fragment>
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
                <img src={image} alt="Nike Shoe" className="w-full h-full" />
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
                      alt={item}
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
    </Fragment>
  );
};

export default memo(ProductImage);
