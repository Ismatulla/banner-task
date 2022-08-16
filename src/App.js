import FirstMainBanner from "./components/FirstMainBanner";
import SecondMainBanner from "./components/SecondMainBanner";
import RectangleBanner from "./components/RectangleBanner";
function App() {
  return (
    <div className="container">
      <FirstMainBanner
        mode="square"
        carousel-on-mobile="false"
      />
      <SecondMainBanner
        mode="square"
        carousel-on-mobile="true"
      />
      <RectangleBanner
        mode="rectangle"
        carousel-on-mobile="false"
      />
    </div>
  );
}

export default App;
