import HeaderButton from "./headerButton";
import Input from "./input";

export default function Header() {
  return (
    <header className="h-[300px] max-w-5xl mx-auto flex items-center justify-end flex-col gap-2 sm:gap-6">
      <div className=" md:hidden  bg-[#D6D6D6]" >
      <Input />
      </div>
      <h2 className="text-[25px] text-black font-bold font-[Averia Libre] sm:text-[47px]">
        The best <span className="text-[#0B850B]">Flower</span> store in Africa
      </h2>
      <p
        className="w-3/4 md:w-1/2 text-center text-[#2D332D]
"
      >
        The purpose of lorem ipsum is to create a natural looking block of text
        (sentence, paragraph, page, etc.) that doesn't distract from the layout.
      </p>
      <HeaderButton />
    </header>
    
  );
}
