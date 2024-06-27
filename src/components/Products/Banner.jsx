const Banner = () => {
  return (
    <section className="relative bg-white w-full h-[350px] object-fill object-center">
      <img
        className="absolute inset-0 object-contain w-full h-full"
        src="../product-banner.jpg"
        alt=""
      />
      <div className="flex items-center justify-center h-full bg-black opacity-40">
        <h2 className="font-bold text-white uppercase select-none text-mt">
          Product
        </h2>
      </div>
    </section>
  );
};

export default Banner;
