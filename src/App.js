import "./App.css";
import DesktopLayout from "./DesktopLayout";
import MobileLayout from "./MobileLayout";

function isMobile() {
  return true;
}

function App() {
  return isMobile() ? <MobileLayout /> : <DesktopLayout />
}

export default App;
