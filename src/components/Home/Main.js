import LaptopShowCase from "./laptopshowcase";
import MobileShowCase from "./mobileshowcase";
import HomeSlider from "./slider";
import TvShowCase from "./TvShowCase";

export default function Main() {
  return (
    <>
      <HomeSlider />
      <MobileShowCase />
      <LaptopShowCase />
      <TvShowCase />
    </>
  );
}
