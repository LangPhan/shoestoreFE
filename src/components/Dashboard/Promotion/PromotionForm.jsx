import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Fragment, memo, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { promotionAdminApi } from "@/api/promotionAdminApi";
import { format } from "date-fns";
import { Calendar as CalendarIcon, PlusCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { categoryAdminApi } from "@/api/categoryAdminApi";
import { v4 } from "uuid";
import { Skeleton } from "@/components/ui/skeleton";
import Spinner from "@/components/ui/spinner";
import { ScrollArea } from "@/components/ui/scroll-area";
import InputForm from "../Form/InputForm";
import promotionSchema from "../Schemas/promotionSchema";

const PromotionForm = ({ promotionId, isAddPromotion = false, ...props }) => {
  const accessToken = JSON.parse(localStorage.getItem("token")).accessToken;
  const [promotionDetail, setPromotionDetail] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(new Date());
  const [openCalendar, setOpenCalendar] = useState(false);
  const [expiredDate, setExpiredDate] = useState(new Date());
  const [openCalendarExpiredDate, setOpenCalendarExpiredDate] = useState(false);
  const [categoryList, setCategoryList] = useState({});
  const [selectedCategoryId, setSelectedCategoryId] = useState("");
  const queryClient = useQueryClient();
  const [isValidExpiredDate, setIsValidExpiredDate] = useState(true);

  const handleChangeDate = (value) => {
    setDate(value);
    setOpenCalendar(false);
  };

  const handleChangeExpiredDate = (value) => {
    setExpiredDate(value);
    setOpenCalendarExpiredDate(false);
  };

  const promotionDetailMutation = useMutation({
    mutationKey: "promotion-detail-admin",
    mutationFn: () =>
      promotionAdminApi.getPromotionDetail({ accessToken, promotionId }),
    onSuccess: (result) => {
      let startedDate = new Date();
      startedDate.setDate(result.startedDate[2]);
      startedDate.setUTCMonth(result.startedDate[1] - 1);
      startedDate.setUTCFullYear(result.startedDate[0]);

      let expiredDate = new Date();
      expiredDate.setDate(result.expiredDate[2]);
      expiredDate.setUTCMonth(result.expiredDate[1] - 1);
      expiredDate.setUTCFullYear(result.expiredDate[0]);

      setDate(startedDate);
      setExpiredDate(expiredDate);
      reset({
        id: result.id,
        name: result.name,
        discountPercent: result.discountPercent,
        expiredDate: result.expiredDate,
        startedDate: result.startedDate,
        active: result.active,
        category: result.category,
      });
      setPromotionDetail(result);
      setIsLoading(false);
    },
    onError: (err) => {
      toast.error(err?.message);
    },
    onMutate: () => {
      setIsLoading(true);
    },
  });

  const getPromotionDetailData = () => {
    promotionDetailMutation.mutate();
  };

  const addPromotionDetail = async (promotion) => {
    promotion.discountPercent = Number(promotion.discountPercent);
    promotion.startedDate = date.toLocaleDateString("fr-CA");
    promotion.expiredDate = expiredDate.toLocaleDateString("fr-CA");
    promotion.category_id = [selectedCategoryId];

    const result = await promotionAdminApi.createPromotion({
      accessToken,
      promotion,
    });

    reset({
      id: 0,
      name: "",
      discountPercent: 0,
      expiredDate: "",
      startedDate: "",
      active: true,
    });
    setDate("");
    setExpiredDate("");
    setSelectedCategoryId("");
    setOpen(false);
    queryClient.invalidateQueries({ queryKey: ["promotion-list-admin"] });
  };

  const getCategoryList = async () => {
    if (isAddPromotion) {
      let result = await categoryAdminApi.getCategoryList({ accessToken });
      setCategoryList(result);
    }
  };

  const handleSelectCategory = (categoryId) => {
    setSelectedCategoryId(categoryId);
  };

  const openPromotionForm = () => {
    getCategoryList();
    reset({
      id: 0,
      name: "",
      discountPercent: 0,
      expiredDate: "",
      startedDate: "",
      active: true,
    });
    setDate(new Date());
    setExpiredDate(new Date());
    setSelectedCategoryId("");
  };

  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    reset,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(promotionSchema),
  });

  useEffect(() => {
    if (expiredDate && expiredDate < date.getTime()) {
      setIsValidExpiredDate(false);
    } else {
      setIsValidExpiredDate(true);
    }
  }, [expiredDate]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {isAddPromotion ? (
          <Button
            size="sm"
            className="h-8 gap-1"
            onClick={() => openPromotionForm()}
          >
            <PlusCircle className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
              Add Promotion
            </span>
          </Button>
        ) : (
          <Button variant="outline" onClick={() => getPromotionDetailData()}>
            View
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] sm:max-h-screen">
        <ScrollArea className="sm:max-h-screen">
          {!isLoading && (
            <Fragment>
              <DialogHeader>
                <DialogTitle>Promotion Detail</DialogTitle>
                <DialogDescription></DialogDescription>
              </DialogHeader>
              <form
                className="text-base form"
                onSubmit={handleSubmit(addPromotionDetail)}
                autoComplete="off"
              >
                <div className="mb-1">
                  <div>
                    <Label htmlFor="name">Promotion Name</Label>
                    <InputForm
                      id="name"
                      type="text"
                      name="name"
                      placeholder="Enter your promotion name"
                      control={control}
                      disabled={!isAddPromotion}
                    ></InputForm>
                    {errors?.name && (
                      <p className="mr-auto text-sm text-red-500">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="mb-1">
                  <div>
                    <Label htmlFor="discountPercent">Discount Percent</Label>
                    <InputForm
                      id="discountPercent"
                      type="number"
                      name="discountPercent"
                      placeholder="Enter your discount percent"
                      control={control}
                      disabled={!isAddPromotion}
                    ></InputForm>
                    {errors?.discountPercent && (
                      <p className="mr-auto text-sm text-red-500">
                        {errors.discountPercent.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex flex-col mb-1">
                  <Label htmlFor="startedDate" className="mb-1">
                    Start Date of Promotion
                  </Label>
                  <Popover open={openCalendar} onOpenChange={setOpenCalendar}>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[280px] justify-start text-left font-normal",
                          !date && "text-muted-foreground"
                        )}
                        disabled={!isAddPromotion}
                      >
                        <CalendarIcon className="w-4 h-4 mr-2" />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={handleChangeDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="flex flex-col mb-2">
                  <Label htmlFor="startedDate" className="mb-1">
                    Expire Date of Promotion
                  </Label>
                  <Popover
                    open={openCalendarExpiredDate}
                    onOpenChange={setOpenCalendarExpiredDate}
                  >
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[280px] justify-start text-left font-normal",
                          !expiredDate && "text-muted-foreground"
                        )}
                        disabled={!isAddPromotion}
                      >
                        <CalendarIcon className="w-4 h-4 mr-2" />
                        {expiredDate ? (
                          format(expiredDate, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={expiredDate}
                        onSelect={handleChangeExpiredDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  {!isValidExpiredDate && (
                    <p className="mr-auto text-sm text-red-500">
                      The expire date must be greater than the start date
                    </p>
                  )}
                </div>
                {!isAddPromotion && (
                  <div className="mb-2">
                    <div>
                      <Label htmlFor="active">Status</Label>
                      <InputForm
                        id="active"
                        type="text"
                        name="active"
                        placeholder="Enter your status"
                        control={control}
                        disabled={!isAddPromotion}
                      ></InputForm>
                    </div>
                  </div>
                )}
                {isAddPromotion && (
                  <div className="flex flex-col p-1 mb-4">
                    <Label htmlFor="category" className="mb-2">
                      Category of Promotion
                    </Label>
                    <Select onValueChange={handleSelectCategory}>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select Category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {categoryList &&
                            categoryList.length > 0 &&
                            categoryList.map((category) => (
                              <SelectItem key={v4()} value={category.id}>
                                {category.name}
                              </SelectItem>
                            ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                )}
                {isAddPromotion && (
                  <Button
                    type="submit"
                    disabled={
                      !isValid || !isValidExpiredDate || !selectedCategoryId
                    }
                  >
                    Add New Promotion
                  </Button>
                )}
              </form>
              <DialogFooter></DialogFooter>
            </Fragment>
          )}
          {isLoading && (
            <Skeleton
              className={`rounded-2xl w-full h-[500px] flex justify-center items-center my-4 overflow-hidden`}
            >
              <Spinner></Spinner>
            </Skeleton>
          )}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default memo(PromotionForm);
