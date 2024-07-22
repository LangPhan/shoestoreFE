import * as yup from "yup";

const productSchema = yup.object({
  name: yup.string().required("Please enter your name"),
  description: yup.string().required("Please enter your description"),
  size: yup.string().required("Please enter your size").matches(/^\d/, {
    message: "Please enter your size",
  }),
  quantity: yup.string().required("Please enter your quantity").matches(/^\d/, {
    message: "Please enter your quantity",
  }),
  price: yup.string().required("Please enter your price").matches(/^\d/, {
    message: "Please enter your price",
  }),
});

export default productSchema;
