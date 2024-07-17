import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProductCard from "../Products/Card";
import { v4 } from "uuid";

const RecommendList = ({
  productList,
}) => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-[300px]"
    >
      <CarouselContent className="max-w-full">
        {productList &&
          productList.map((product) => {
            return (
              <CarouselItem
                key={v4()}
                className="basic-1 translate-x-2"
              >
                <div className="p-1">
                  <ProductCard
                    name={product.name}
                    price={
                      product.price
                    }
                    sale={0}
                    image={
                      product.imgLink
                    }
                    categoryId={
                      product.category
                        .id
                    }
                  />
                </div>
              </CarouselItem>
            );
          })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default RecommendList;
