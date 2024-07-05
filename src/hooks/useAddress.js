import { addressApi } from "@/api"
import { useQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react"

export const useDistrictAddress = () => {
  return useQuery({
    queryKey: ['district'],
    queryFn: addressApi.getDistrictsByHCM,
    staleTime: Infinity
  })
}

export const useWardAddress = ({ district }) => {
  return useQuery({
    queryKey: ['ward', district],
    queryFn: addressApi.getWardsByDistrict
  })
}


export const useDistrict = () => {
  const [
    openDistrict,
    setOpenDistrict,
  ] = useState(false);
  const [
    valueDistrict,
    setValueDistrict,
  ] = useState("");
  const [districts, setDistricts] =
    useState([]);

  const { data } = useDistrictAddress()

  useEffect(() => {
    setDistricts(
      data?.results.map((district) => {
        return {
          value: district.district_id,
          label: district.district_name,
        };
      })
    );
  }, [data])

  return { openDistrict, setOpenDistrict, valueDistrict, setValueDistrict, districts, setDistricts }
}

export const useWard = (valueDistrict) => {
  const [openWard, setOpenWard] =
    useState(false);
  const [valueWard, setValueWard] =
    useState("");
  const [wards, setWards] = useState(
    []
  );

  const { data, isFetched } =
    useWardAddress({
      district: valueDistrict,
    });

  useEffect(() => {
    if (isFetched) {
      return setWards(
        data?.results?.map(
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
  }, [valueDistrict, isFetched]);

  return { openWard, setOpenWard, valueWard, setValueWard, wards, setWards }
}