import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { memo } from "react";
import RecommendList from "./RecommendList";

const Message = ({ isAI, data }) => {
  return (
    <div
      className={`flex py-2 h-full items-start ${
        isAI ? "" : "justify-end"
      }`}
    >
      {isAI && (
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>
            AI
          </AvatarFallback>
        </Avatar>
      )}
      <div
        className={`p-4 w-fit ${
          isAI
            ? "max-w-full"
            : "bg-main w-3/4 rounded-2xl text-white"
        }`}
      >
        {isAI ? (
          <>
            <p>
              {!data.messageError
                ? (data?.description
                    ? data.description +
                      " "
                    : "") +
                  data?.reasonToChooseThis
                : data.messageError}
            </p>
            {data?.productsRecommend
              ?.length > 0 ? (
              <>
                <h2 className="text-lg py-2">
                  Recommend Products
                </h2>
                <RecommendList
                  productList={
                    data?.productsRecommend
                  }
                />
              </>
            ) : null}
          </>
        ) : (
          data
        )}
      </div>
    </div>
  );
};

export default memo(Message);
