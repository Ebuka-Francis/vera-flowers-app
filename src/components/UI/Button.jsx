// import { useContext } from "react";
// import CartContext from "../../store/ContextApi";
export default function Button({ children, openMenu}) {

  // const openCtx = useContext(CartContext);
  // function handleOpenMenu() {
  //     openCtx.showMenu();
  // }
  return (
    <button
      className="h-[54px] w-[46%] bg-[#0B850B] text-white text-center rounded-[8px] p-4
        text-[13px]" onClick={openMenu}>
      {children}
    </button>
  );
}
