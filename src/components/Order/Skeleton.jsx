import { Skeleton } from "../ui/skeleton";

const OrderSkeleton = () => {
  return (
    <>
      <Skeleton
        className={
          "w-full h-[122px] rounded-xl px-4 py-2 my-5"
        }
      ></Skeleton>{" "}
      <Skeleton
        className={
          "w-full h-[122px] rounded-xl px-4 py-2 my-5"
        }
      ></Skeleton>{" "}
      <Skeleton
        className={
          "w-full h-[122px] rounded-xl px-4 py-2 my-5"
        }
      ></Skeleton>{" "}
      <Skeleton
        className={
          "w-full h-[122px] rounded-xl px-4 py-2 my-5"
        }
      ></Skeleton>{" "}
      <Skeleton
        className={
          "w-full h-[122px] rounded-xl px-4 py-2 my-5"
        }
      ></Skeleton>
    </>
  );
};

export default OrderSkeleton;
