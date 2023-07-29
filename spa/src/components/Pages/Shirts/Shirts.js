import Template from "../../Template/Template";
import data from "../../../data.json";

const Shirts = () => {
  return (
    <Template
      data={data["t-shirts"]}
      title={"T-Shirts"}
      desc={"The Best T-Shirts for Men, Period!"}
    />
  );
};
export default Shirts;
