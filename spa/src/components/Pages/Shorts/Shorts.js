import Template from "../../Template/Template";
import data from "../../../data.json";

const Shorts = () => {
  return (
    <Template
      data={data.shorts}
      title={"Shorts"}
      desc={"The Best Shorts for Men Let Your Legs Breathe in Style!"}
    />
  );
};
export default Shorts;
