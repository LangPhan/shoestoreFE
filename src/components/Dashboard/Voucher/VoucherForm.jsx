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
import { useEffect, useState, Fragment } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { voucherAdminApi } from "@/api/voucherAdminApi";
import { format } from "date-fns";
import { Calendar as CalendarIcon, PlusCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Skeleton } from "@/components/ui/skeleton";
import Spinner from "@/components/ui/spinner";
import InputForm from "../Form/InputForm";
import voucherSchema from "../Schemas/voucherSchema";

const VoucherForm = ({ voucherId, isAddVoucher = false, ...props }) => {
  const accessToken = JSON.parse(localStorage.getItem("token")).accessToken;
  const [voucherDetail, setVoucherDetail] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [openCalendar, setOpenCalendar] = useState(false);
  const [date, setDate] = useState("");
  const [openCalendarExpiredDate, setOpenCalendarExpiredDate] = useState(false);
  const [expiredDate, setExpiredDate] = useState(new Date());
  const queryClient = useQueryClient();

  const handleChangeDate = (value) => {
    setDate(value);
    setOpenCalendar(false);
  };

  const handleChangeExpiredDate = (value) => {
    setExpiredDate(value);
    setOpenCalendarExpiredDate(false);
  };

  const voucherDetailMutation = useMutation({
    mutationKey: "voucher-detail-admin",
    mutationFn: () =>
      voucherAdminApi.getVoucherDetail({ accessToken, voucherId }),
    onSuccess: (result) => {
      let createdDate = new Date();
      createdDate.setDate(result.create_date[2]);
      createdDate.setUTCMonth(result.create_date[1] - 1);
      createdDate.setUTCFullYear(result.create_date[0]);

      let expiredDate = new Date();
      expiredDate.setDate(result.expired_date[2]);
      expiredDate.setUTCMonth(result.expired_date[1] - 1);
      expiredDate.setUTCFullYear(result.expired_date[0]);

      setDate(createdDate);
      setExpiredDate(expiredDate);
      setVoucherDetail(result);
      reset({
        id: result.id,
        name: result.name,
        discountPercent: result.discountPercent,
        expiredDate: result.expired_date,
        createDate: result.create_date,
        quantity: result.quantity,
        deleted: result.deleted,
        active: result.active,
      });
      setIsLoading(false);
    },
    onError: (err) => {
      toast.error(err?.message);
    },
    onMutate: () => {
      setIsLoading(true);
    },
  });

  const getVoucherDetailData = () => {
    if (voucherId) voucherDetailMutation.mutate();
  };

  const updateVoucherDetail = async (voucher) => {
    voucher.expired_date = expiredDate.toLocaleDateString("fr-CA");

    voucher.quantity = Number(voucher.quantity);
    voucher.discountPercent = Number(voucher.discountPercent);

    const result = await voucherAdminApi.createVoucher({
      accessToken,
      voucher,
    });
    reset({
      id: 0,
      name: "",
      discountPercent: 0,
      expiredDate: "",
      createDate: "",
      quantity: 0,
      deleted: false,
      active: true,
    });
    setExpiredDate("");
    setOpen(false);
    queryClient.invalidateQueries({ queryKey: ["voucher-list-admin"] });
  };

  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    reset,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(voucherSchema),
  });

  const openVoucherForm = () => {
    reset({
      id: 0,
      name: "",
      discountPercent: 0,
      expiredDate: "",
      createDate: "",
      quantity: 0,
      deleted: false,
      active: true,
    });
    setExpiredDate(new Date());
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {isAddVoucher ? (
          <Button
            size="sm"
            className="h-8 gap-1"
            onClick={() => openVoucherForm()}
          >
            <PlusCircle className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
              Add Voucher
            </span>
          </Button>
        ) : (
          <Button variant="outline" onClick={() => getVoucherDetailData()}>
            View
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        {!isLoading && (
          <Fragment>
            <DialogHeader>
              <DialogTitle>Voucher Detail</DialogTitle>
              <DialogDescription></DialogDescription>
            </DialogHeader>
            <form
              className="text-base form"
              onSubmit={handleSubmit(updateVoucherDetail)}
              autoComplete="off"
            >
              <div className="mb-1">
                <div>
                  <Label htmlFor="name">Voucher Name</Label>
                  <InputForm
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Enter your voucher name"
                    control={control}
                    disabled={!isAddVoucher}
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
                    disabled={!isAddVoucher}
                  ></InputForm>
                  {errors?.discountPercent && (
                    <p className="mr-auto text-sm text-red-500">
                      {errors.discountPercent.message}
                    </p>
                  )}
                </div>
              </div>

              {!isAddVoucher && (
                <div className="flex flex-col mb-1">
                  <Label htmlFor="createDate" className="mb-1">
                    Create Date of Voucher
                  </Label>
                  <Popover open={openCalendar} onOpenChange={setOpenCalendar}>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[280px] justify-start text-left font-normal",
                          !date && "text-muted-foreground"
                        )}
                        disabled={!isAddVoucher}
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
              )}

              <div className="flex flex-col mb-1">
                <Label htmlFor="startedDate" className="mb-1">
                  Expire Date of Voucher
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
                      disabled={!isAddVoucher}
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
              </div>
              <div className="mb-1">
                <div>
                  <Label htmlFor="quantity">Quantity</Label>
                  <InputForm
                    id="quantity"
                    type="number"
                    name="quantity"
                    placeholder="Enter your quantity"
                    control={control}
                    disabled={!isAddVoucher}
                  ></InputForm>
                  {errors?.quantity && (
                    <p className="mr-auto text-sm text-red-500">
                      {errors.quantity.message}
                    </p>
                  )}
                </div>
              </div>
              {!isAddVoucher && (
                <div className="mb-2">
                  <div>
                    <Label htmlFor="active">Status</Label>
                    <InputForm
                      id="active"
                      type="text"
                      name="active"
                      placeholder="Enter your status"
                      control={control}
                      disabled={!isAddVoucher}
                    ></InputForm>
                  </div>
                </div>
              )}
              {isAddVoucher && (
                <Button type="submit" disabled={!isValid}>
                  Create new voucher
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
      </DialogContent>
    </Dialog>
  );
};

export default VoucherForm;
