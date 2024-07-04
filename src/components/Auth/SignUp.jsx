import {
  useEffect,
  useState,
} from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import SelectField from "./Select";
import {
  useDistrictAddress,
  useWardAddress,
} from "@/hooks/useAddress";

const SignUp = () => {
  const [
    openDistrict,
    setOpenDistrict,
  ] = useState(false);
  const [openWard, setOpenWard] =
    useState(false);
  const [
    valueDistrict,
    setValueDistrict,
  ] = useState("");
  const [valueWard, setValueWard] =
    useState("");
  const [districts, setDistricts] =
    useState([]);
  const [wards, setWards] = useState(
    []
  );

  const { data } = useDistrictAddress();
  const {
    data: wardData,
    isFetched,
    isFetching,
  } = useWardAddress({
    district: valueDistrict,
  });

  useEffect(() => {
    setDistricts(
      data?.results.map((district) => {
        return {
          value: district.district_id,
          label: district.district_name,
        };
      })
    );
  }, [data]);

  useEffect(() => {
    if (isFetched) {
      return setWards(
        wardData?.results?.map(
          (ward) => {
            return {
              value: ward.ward_id,
              label: ward.ward_name,
            };
          }
        )
      );
    }
    return setWards([]);
  }, [
    valueDistrict,
    isFetched,
    isFetching,
  ]);

  return (
    <div className="mx-auto grid w-full gap-6 max-h-[410px] overflow-y-scroll">
      <div className="grid gap-2 text-center">
        <h1 className="text-3xl font-bold">
          Register
        </h1>
        <p className="text-balance text-muted-foreground">
          Fill full form below to
          register your new account
        </p>
      </div>
      <form className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="username">
            Username
          </Label>
          <Input
            id="username"
            type="text"
            placeholder="Enter your username"
            required
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">
              Password
            </Label>
          </div>
          <Input
            id="password"
            type="password"
            placeholder="Enter your password"
            required
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
            id="re-password"
            type="password"
            placeholder="Enter your password"
            required
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
            id="phone"
            type="phone"
            placeholder="Enter your phone number"
            required
          />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="street">
              Street Line
            </Label>
          </div>
          <Input
            id="street"
            type="text"
            placeholder="Enter your no.house and street name"
            required
          />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="city">
              City
            </Label>
          </div>
          <Input
            id="city"
            defaultValue="Ho Chi Minh"
            type="text"
            required
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
              setOpen={setOpenDistrict}
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
  );
};

export default SignUp;
