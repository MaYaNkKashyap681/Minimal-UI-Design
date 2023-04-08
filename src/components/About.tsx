import { AboutImg, Message } from "../assets";
import { styles } from "../styles";
import { itemsList } from "../constants";

const About = () => {
  return (
    <div className={`${styles.padding} lg:py-[80px] py-[40px]`}>
      <div className="flexer gap-x-[100px] items-center">
        <div>
          <span className="text-[#6941C6] font-semibold">Who we are</span>
          <h1 className="font-semibold text-black text-title2">
            Commercial interior designers
          </h1>
          <p className="text-[#667085] mt-[10px]">
            Untitled are a commercial interior design studio. We specialise in
            customised office design, restaurant design, shop design, and studio
            design.
          </p>
        </div>
        <div className="flex-col justify-between">
          {itemsList.map((item, index) => (
            <div
              className="flex items-start gap-x-[20px] my-[20px]"
              key={index}
            >
              <div className="flex justify-center items-center bg-purple-200 rounded-full w-[80px] h-[40px]">
                <img src={item.img} alt={`${item.alt}`} />
              </div>
              <div>
                <h1 className="font-800 text-black text-[24px]">
                  {item.title}
                </h1>
                <p className="text-[#667085] mt-[10px]">{item.para}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full lg:h-[400px] h-[200px] mt-[40px]">
        <img
          src={AboutImg}
          alt="hero image"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default About;
