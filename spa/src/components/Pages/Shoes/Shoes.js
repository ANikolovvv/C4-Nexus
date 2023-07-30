import Template from "../../Template/Template";
import { dataContext } from "../../../context/dataContext";
import { useContext } from "react";

const Shoes = () => {
  const data = useContext(dataContext);
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
