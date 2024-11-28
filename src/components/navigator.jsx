import voralImg from "../Assests/voral.Flowers.png";
import menuImg from '../Assests/Group 55.png';
import Input from "./input";
import SideNav from "./sideNav";
export default function Navigator() {
  return (
    <nav className="max-w-5xl mx-auto flex justify-between items-center mt-4 p-4  ">
      <div className="logo">
        <img src={voralImg} alt="" />
      </div>
      <div className="hidden md:contents">
    <Input />
   <SideNav />
      </div>
  <div className="block md:hidden">
    <img src={menuImg} alt="" />
  </div>
    </nav>
  );
}
