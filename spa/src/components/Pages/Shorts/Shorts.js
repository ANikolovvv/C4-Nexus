import Template from "../../Template/Template";
import { useContext } from "react";
import { dataContext } from "../../../context/dataContext";

const Shorts = () => {
  const data = useContext(dataContext);
  return (
    <Template
      data={data.shorts}
      title={"Shorts"}
      desc={"The Best Shorts for Men Let Your Legs Breathe in Style!"}
    />
  );
};
export default Shorts;
