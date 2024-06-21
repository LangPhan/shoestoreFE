const Banner = () => {
  return (
    <section className="relative bg-white w-full h-[350px] object-fill object-center">
      <img
        className="absolute inset-0 object-contain w-full h-full"
        src="src/assets/product-banner.jpg"
        alt=""
      />
      <div className="flex items-center justify-center bg-black opacity-40 h-full">
        <h2 className="text-mt font-bold text-white uppercase select-none">
          Product
        </h2>
      </div>
    </section>
  );
};

export default Banner;
