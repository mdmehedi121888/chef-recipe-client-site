import React from "react";
import { useLoaderData } from "react-router-dom";
import ChefsCards from "./ChefsCards";

const Chefs = () => {
  const chefs = useLoaderData();
  return (
    <div className="container mx-auto my-10">
      <h1 className="text-center font-bold text-3xl my-10">
        Bangladeshi Popular Chef
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5">
        {chefs.map((chef) => (
          <ChefsCards key={chef.id} chef={chef}></ChefsCards>
        ))}
      </div>
    </div>
  );
};

export default Chefs;
