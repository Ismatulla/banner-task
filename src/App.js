import FirstMainBanner from "./components/FirstMainBanner";
import SecondMainBanner from "./components/SecondMainBanner";
import RectangleMainBanner from "./components/RectangleMainBanner";
import { useState } from "react";
function App() {
  const [carousel, setCarousel] = useState(true)
  return (
    <div className="container">
      <h1 className="header">First banner Square</h1>
      <FirstMainBanner
        mode="square"
        carousel-on-mobile="false"
      />
      <h1 className="header">Second Square banner</h1>
      <SecondMainBanner
        mode="square"
        carousel-on-mobile={carousel}
      />
      <h1 className="header"> Rectangle Banner</h1>
      <RectangleMainBanner
        mode="rectangle"
        carousel-on-mobile="false"
      />
    </div>
  );
}

export default App;
