import Template from "../../Template/Template";
import { dataContext } from "../../../context/dataContext";
import { useContext } from "react";

const Shirts = () => {
  const data = useContext(dataContext);

  return (
    <Template
      data={data["t-shirts"]}
      title={"T-Shirts"}
      desc={"The Best T-Shirts for Men, Period!"}
    />
  );
};
export default Shirts;
