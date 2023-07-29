import Template from "../../Template/Template";
import data from "../../../data.json";

const Shoes = () => {
  return (
    <Template
      data={data.shoes}
      title={"Shoes"}
      desc={
        "The Best Shoes For Standing All Day Make Achy Feet A Thing Of The Past!"
      }
    />
  );
};
export default Shoes;
