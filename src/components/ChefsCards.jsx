import React, { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Link } from "react-router-dom";

const ChefsCards = ({ chef }) => {
  const {
    id,
    name,
    image_url,
    years_of_experience,
    number_of_recipes,
    likes_count,
  } = chef;
  //   console.log(chef);
  const { isLogged } = useContext(AuthContext);
  return (
    <div className="card card-compact w-full bg-base-100 shadow-2xl text-center">
      <figure>
        <img className="h-80 w-full" src={image_url} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h1 className="text-2xl font-bold">{name}</h1>
        <h2 className="text-xl font-semibold">
          Yerars Of Experience: {years_of_experience}
        </h2>
        <div className="flex justify-around text-lg">
          <h2 className="">no. of recipes: {number_of_recipes}</h2>
          <h2 className="">likes count: {likes_count}</h2>
        </div>
        <Link to={`/chefDetails/${id}`}>
          <button className="btn btn-secondary">View Recipes</button>
        </Link>
      </div>
    </div>
  );
};

export default ChefsCards;
