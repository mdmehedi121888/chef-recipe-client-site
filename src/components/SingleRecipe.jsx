import React from "react";

const SingleRecipe = ({ popular_recipe }) => {
  const { recipe_name, recipe_url } = popular_recipe;
  return (
    <div className="card card-compact bg-base-100 shadow-2xl my-10">
      <figure>
        <img src={recipe_url} alt="Shoes" />
      </figure>
      <h2 className="font-bold text-xl my-5 text-center">{recipe_name}</h2>
    </div>
  );
};

export default SingleRecipe;
