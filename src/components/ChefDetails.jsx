import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleRecipe from "./SingleRecipe";

const ChefDetails = () => {
  const chefDetails = useLoaderData();
  //   console.log(chefDetails);
  const {
    id,
    name,
    image_url,
    years_of_experience,
    number_of_recipes,
    likes_count,
    popular_recipe,
    short_bio,
  } = chefDetails;
  const { recipe_name, recipe_url } = popular_recipe;
  return (
    <div className="card card-compact w-full bg-base-100 shadow-2xl text-center mt-10 container mx-auto">
      <figure>
        <img className="rounded-lg" src={image_url} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h1 className="text-2xl font-bold">{name}</h1>
        <h2 className="text-xl font-semibold">
          Yerars Of Experience: {years_of_experience}
        </h2>
        <div className="flex gap-10 justify-center text-lg">
          <h2 className="">no. of recipes: {number_of_recipes}</h2>
          <h2 className="">likes count: {likes_count}</h2>
        </div>
        <div className="text-lg">
          <p>{short_bio}</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <SingleRecipe popular_recipe={popular_recipe}></SingleRecipe>
        <SingleRecipe popular_recipe={popular_recipe}></SingleRecipe>
        <SingleRecipe popular_recipe={popular_recipe}></SingleRecipe>
      </div>
    </div>
  );
};

export default ChefDetails;
