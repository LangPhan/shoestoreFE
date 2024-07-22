import * as yup from "yup";

const promotionSchema = yup.object({
  name: yup.string().required("Please enter your promotion name"),
  discountPercent: yup
    .string()
    .required("Please enter discount percent from 1 to 100")
    .matches(/^[1-9][0-9]?$|^100$/, {
      message: "Please enter discount percent from 1 to 100",
    }),
});

export default promotionSchema;
