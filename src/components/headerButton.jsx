import { useRef } from "react";
import Button from "./UI/Button";
import vector2Img from "../Assests/Vector (2).png";
import Modal from "./Modal2";
import Form from "./Form";

export default function HeaderButton() {
  const modal = useRef();
  
  function handleOpenMenu() {
    modal.current.open();
  }

  return (
    <>
    <Modal ref={modal} buttonCaption="Close" >
      <Form />

    </Modal>

    <div className=" flex gap-2">
      <Button openMenu={handleOpenMenu} >Contact us </Button>
      <div className="flex gap-2 items-center">
        <p className="border-2 border-[#0B850B] h-[20px] w-[20px] rounded-full flex justify-center items-center">
          <img src={vector2Img} alt="" className="w-[8px] h-[9px]" />
        </p>
        <p className="text-[13px] flex gap-1">Watch <span>demo</span> </p>
      </div>
    </div>
    </>
  );
}
