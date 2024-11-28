import { useRef,  } from "react";
import Button from "./UI/Button";
import Modal from "./Modal2";
import Form from "./Form";

export default function SideNav() {
  const modal = useRef();
  
  function handleShowModal() {
    modal.current.open();
  }

 

  return (
    <>
     <Modal ref={modal} buttonCaption="Close">
      <Form />

      </Modal>
   
      <div className="flex gap-6 text-[13px] items-center">
        <p>Product</p>
        <p>Services</p>
        <p>About </p>
        <Button openMenu={handleShowModal}>Contact Us</Button>
      </div>
    </>
  );
}
