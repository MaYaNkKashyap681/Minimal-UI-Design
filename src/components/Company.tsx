import { Logo } from "../assets";
import { coimages } from "../constants";

const Company = () => {
  return (
    <div className="w-full items-center justify-center flex-col">
      <p className={`text-white mt-[20px] text-center`}>
        We’ve worked with some great startups
      </p>
      <div className={`grid lg:grid-cols-5 grid-cols-2 lg:grid-rows-1 grid-rows-2 gap-8 mt-[20px] `}>
        {coimages.map((img, index) => (
          <img src={img.image} alt="company-image"  />
        ))}
        <div className="lg:hidden flex items-center">
          <img src={Logo} alt="logo" className="h-[40px] w-[40px]" />
          <span className="font-Inter text-[22px] font-[600] text-white ml-[10px]">
            Hourglass
          </span>
        </div>
      </div>
    </div>
  );
};

export default Company;
