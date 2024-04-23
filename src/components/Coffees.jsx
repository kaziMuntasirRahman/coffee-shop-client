import { useLoaderData } from "react-router-dom";
import CoffeeCart from "./CoffeeCart";

const Coffees = () => {
  const coffees = useLoaderData();
  return (
    <div className="">
      <h3 className="text-6xl font-semibold text-center mb-20">Number of Coffees: {coffees.length}</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-5">
      {coffees &&
        coffees.map(coffee => <CoffeeCart key={coffee._id} coffee={coffee} />)
      }
      </div>
    </div>
  );
};

export default Coffees;