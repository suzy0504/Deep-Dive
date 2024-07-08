import { Gugi } from "next/font/google";
import { IoMenu } from "react-icons/io5";

const gugi = Gugi({
  weight: "400",
  subsets: ["latin"],
});

const Header = () => {
  return (
    <div className="bg-main w-full h-20 flex justify-center items-center p-3 relative">
      <IoMenu className="absolute left-3 text-white text-6xl hover:text-point" />
      <p className={`${gugi.className} flex text-5xl text-white`}>Deep Dive</p>
    </div>
  );
};

export default Header;
