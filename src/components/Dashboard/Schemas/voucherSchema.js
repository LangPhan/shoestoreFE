import * as yup from "yup";

const voucherSchema = yup.object({
  name: yup.string().required("Please enter your voucher name"),
  discountPercent: yup
    .string()
    .required("Please enter discount percent from 1 to 100")
    .matches(/^[1-9][0-9]?$|^100$/, {
      message: "Please enter discount percent from 1 to 100",
    }),
  quantity: yup.string().required("Please enter your quantity"),
});

export default voucherSchema;
