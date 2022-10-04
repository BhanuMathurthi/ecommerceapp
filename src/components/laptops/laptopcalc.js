export default function LaptopCalc({ data }) {
  const { originalPrice, discountPrice } = data;
  const res = Math.floor(
    ((originalPrice - discountPrice) / originalPrice) * 100
  );
  if (res < 0) {
    return "Something seems wrong";
  } else {
    return res + "% off";
  }
}
