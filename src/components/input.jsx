import vectorImg from '../Assests/vector (1).png'
export default function Input({...prop}) {
  return (
    <div className=" bg-[#D6D6D6] flex items-center p-4  h-[40px] w-[30%] gap-4 rounded-[3px]" {...prop}>
      <img src={vectorImg} alt="" className="w-[15px] height-[10px] " />
      <input type="text" placeholder="Search" className="   bg-transparent  " />
    </div>
  );
}
