import { createContext,  useState } from "react";

const CartContext = createContext({
  menuProgress: '',
  showMenu: () => {},
  hideMenu: () => {},
});

export function MenuContextProvider({ children }) {
  const [openMenu, setOpenMenu] = useState('');

  function showMenu() {
    setOpenMenu('menu');
    
  }
  function hideMenu() {
    setOpenMenu('');
  }
  const menuProgressCtx = {
    progress: openMenu,
    showMenu: showMenu,
    hideMenu: hideMenu
  };
  return <CartContext.Provider value={menuProgressCtx} >{children}</CartContext.Provider>;
}

export default CartContext;
