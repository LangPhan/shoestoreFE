const RightSide = () => {
  return (
    <div className="relative w-1/2 group">
      <img
        className="absolute -top-[60px] group-hover:rotate-[35deg] transition-transform duration-1000 group-hover:origin-center ease-in-out"
        src="src\assets\main.png"
        alt="Shoe Banner"
      />
      <div className="absolute left-5 top-16 w-6 h-6 bg-main rounded-full animate-ping-custom">
        <div className="absolute w-3 h-3 bg-slate-200 rounded-full translate-x-1/2 translate-y-1/2 animate-pulse-custom"></div>
      </div>
      <div className="absolute right-5 top-16 w-6 h-6 bg-main rounded-full animate-ping-custom">
        <div className="absolute w-3 h-3 bg-slate-200 rounded-full translate-x-1/2 translate-y-1/2 animate-pulse-custom"></div>
      </div>
      <div className="absolute right-1/2 w-6 h-6 bg-main rounded-full animate-ping-custom">
        <div className="absolute w-3 h-3 bg-slate-200 rounded-full translate-x-1/2 translate-y-1/2 animate-pulse-custom"></div>
      </div>
      <div className="absolute bottom-0 w-6 h-6 bg-main rounded-full animate-ping-custom">
        <div className="absolute w-3 h-3 bg-slate-200 rounded-full translate-x-1/2 translate-y-1/2 animate-pulse-custom"></div>
      </div>
      <div className="absolute bottom-0 right-0 w-6 h-6 bg-main rounded-full animate-ping-custom">
        <div className="absolute w-3 h-3 bg-slate-200 rounded-full translate-x-1/2 translate-y-1/2 animate-pulse-custom"></div>
      </div>
    </div>
  );
};

export default RightSide;
