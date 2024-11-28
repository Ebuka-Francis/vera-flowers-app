import { useContext } from "react";
import CartContext from "../store/ContextApi";
import Modal from "./UI/Modal";


export default function MenuDropdown() {
    const openCtx = useContext(CartContext);

    <Modal open={openCtx.progress === 'menu'} >
        
    </Modal>
}