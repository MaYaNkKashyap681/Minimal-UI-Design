import { Logo } from "../assets";
import { styles } from "../styles";
import { navlinks } from "../constants";

const Footer = () => {
  return (
    <footer className={` ${styles.padding} pt-[80px] py-[20px]`}>
      <div className="flexer items-center justify-between border-b-2 border-gray-200 pb-[20px]">
        <div>
          <div className="flex-col">
            <div className="flex items-center">
              <img src={Logo} alt="logo" className="h-[40px] w-[40px]" />
              <span className="font-Inter text-[22px] font-[600] text-primary ml-[10px]">
                Hourglass
              </span>
            </div>
            <div className="lg:block grid grid-cols-2 grid-rows-3 lg:mt-[0px] my-[20px]">
              {navlinks.map((link, index) => (
                <span key={index} className={`mr-[10px] text-[#667085]`}>
                  {link.name}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div>
          <div className="flex-col widder">
            <p className="font-semibold text-black">Stay up to date</p>
            <div className="flexer mt-[10px] ">
              <input
                type="text"
                className="p-[8px] border-[1px] border-[#667085] rounded-md lg:w-auto"
                placeholder="Enter your Email"
              />
              <div className="flex items-center justify-center p-[12px] lg:w-[100px] w-full rounded-md bg-[#7F56D9] lg:mt-0 mt-[10px]">
                <span className={`${styles.navitem}`}>Subscribe</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="items-center justify-between pt-[20px]">
        <p className="text-[#667085]">
          © 2077 Fake Company. All rights reserved.
        </p>
        <div>
          <ul className="flex gap-x-2">
            <li className="text-[#667085]">Terms</li>
            <li className="text-[#667085]">Privacy</li>
            <li className="text-[#667085]">Cookies</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
