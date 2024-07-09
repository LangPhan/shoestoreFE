import { memo, useEffect } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import SelectField from "./Select";
import {
  useDistrict,
  useWard,
} from "@/hooks/useAddress";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import registerSchema from "./schemas/registerSchema";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
import { authApi } from "@/api";
import { ScrollArea } from "../ui/scroll-area";
import authStore from "@/stores/authStore";

const SignUp = ({ setShowVerify }) => {
  const {
    districts,
    openDistrict,
    setOpenDistrict,
    setValueDistrict,
    valueDistrict,
  } = useDistrict();
  const {
    openWard,
    setOpenWard,
    setValueWard,
    valueWard,
    wards,
  } = useWard(valueDistrict);

  //Handle form
  const {
    register,
    handleSubmit,
    setValue,
    setError,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(
      registerSchema
    ),
  });

  //Set district value to form field
  useEffect(() => {
    setValue(
      "district",
      districts?.find(
        (district) =>
          district.value ==
          valueDistrict
      )?.label
    );
  }, [valueDistrict]);

  // Set ward value to form field
  useEffect(() => {
    setValue(
      "ward",
      wards?.find(
        (ward) =>
          ward.value === valueWard
      )?.label
    );
  }, [valueWard]);

  //Show toast when has error
  useEffect(() => {
    if (
      Object.values(errors).length > 0
    ) {
      toast.error(
        Object.values(errors)[0].message
      );
    }
  }, [errors]);

  const { login } = authStore();
  const mutation = useMutation({
    mutationKey: "postUserRegister",
    mutationFn: (userInfo) => {
      return authApi.register(userInfo);
    },
    onSuccess: (data) => {
      console.log(data);
      login(data?.token);
      setShowVerify(true);
    },
    onError: (error) => {
      setError("", error);
      console.log(error);
    },
  });

  const onSubmit = (data) => {
    const userInfo = {
      username: data.username,
      password: data.password,
      phoneNumber: data.phone,
      addressLine: `${data.streetLine},${data.ward},${data.district},${data.city}`,
      email: data.email,
    };
    mutation.mutate(userInfo);
  };

  return (
    <ScrollArea className="w-full h-full">
      <div className="mx-auto grid w-[95%] gap-6 max-h-[394px]">
        <div className="grid gap-2 text-center">
          <h1 className="text-3xl font-bold">
            Register
          </h1>
          <p className="text-balance text-muted-foreground">
            Fill full form below to
            register your new account
          </p>
        </div>
        <form
          onSubmit={handleSubmit(
            onSubmit
          )}
          className="grid gap-4"
        >
          <div className="grid gap-2">
            <Label htmlFor="username">
              Username
            </Label>
            <Input
              {...register("username")}
              id="username"
              type="text"
              placeholder="Enter your username"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">
              Email
            </Label>
            <Input
              {...register("email")}
              id="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">
                Password
              </Label>
            </div>
            <Input
              {...register("password")}
              id="password"
              type="password"
              placeholder="Enter your password"
              autoComplete="on"
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="re-password">
                Confirm Password
              </Label>
            </div>
            <Input
              {...register(
                "confirmPassword"
              )}
              id="re-password"
              type="password"
              placeholder="Enter your password"
              autoComplete="on"
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="phone">
                Phone
              </Label>
            </div>
            <Input
              {...register("phone")}
              id="phone"
              type="phone"
              placeholder="Enter your phone number"
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="street">
                Street Line
              </Label>
            </div>
            <Input
              {...register(
                "streetLine"
              )}
              id="street"
              type="text"
              placeholder="Enter your no.house and street name"
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="city">
                City
              </Label>
            </div>
            <Input
              {...register("city")}
              id="city"
              defaultValue="Hồ Chí Minh"
              type="text"
              disabled
            />
          </div>
          <div className="grid grid-cols-2 gap-1">
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="district">
                  District
                </Label>
              </div>
              <SelectField
                open={openDistrict}
                setOpen={
                  setOpenDistrict
                }
                value={valueDistrict}
                setValue={
                  setValueDistrict
                }
                frameworks={districts}
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="ward">
                  Ward
                </Label>
              </div>
              <SelectField
                open={openWard}
                setOpen={setOpenWard}
                value={valueWard}
                setValue={setValueWard}
                frameworks={wards}
              />
            </div>
          </div>
          <Button
            type="submit"
            className="w-full"
          >
            Register
          </Button>
        </form>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link
            href="#"
            className="underline"
          >
            Sign up
          </Link>
        </div>
      </div>
    </ScrollArea>
  );
};

export default memo(SignUp);
