import "./App.css";
import Navigator from "../src/components/navigator.jsx";
import Header from "./components/header.jsx";
import { SLIDER_IMAGES } from "./data.js";
import SliderContainer from "./components/sliderContent.jsx";
import CatlogueItems from "./components/UI/catlogueItems.jsx";
import RadiusComp from "./components/radiusComp.jsx";
import { MenuContextProvider } from "./store/ContextApi.jsx";
import MenuDropdown from "./components/menuDropdown.jsx";

function App() {
  return (
    <>
      <MenuContextProvider>
        <Navigator />
        <MenuDropdown />
        <Header />
        <RadiusComp className="relative z-10 mb-[-40px]" />
        <SliderContainer>
          {SLIDER_IMAGES.map((item) => (
            <li key={item.id}>
              <CatlogueItems {...item} />
            </li>
          ))}
        </SliderContainer>
        <RadiusComp className="relative z-10 mt-[-45px] " />
      </MenuContextProvider>
    </>
  );
}

export default App;
