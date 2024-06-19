import Products from "@/components/Products";
import Banner from "@/components/Products/Banner";

const ProductPage = () => {
  return (
    <div className="scrollable">
      <Banner />
      <Products />
    </div>
  );
};

export default ProductPage;
