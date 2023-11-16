import React from "react";

const Banner = () => {
  return (
    <div className="bg-orange-300 ">
      <div className="grid grid-cols-2 items-center container mx-auto py-10">
        <div>
          <h1 className="text-3xl">
            Food is any substance consumed to provide nutritional support and
            energy to an organism. It can be raw, processed, or formulated and
            is consumed orally by animals for growth, health, or pleasure. Food
            is mainly composed of water, lipids, proteins, and carbohydrates.
          </h1>
        </div>
        <div>
          <img
            className="rounded-full"
            src="https://imageio.forbes.com/specials-images/imageserve/65072bc1a50c29d7592250c0/Healthy-food--Healthy-eating-background--Fruit--vegetable--berry---Vegetarian-eating-/960x0.jpg?format=jpg&width=960"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Banner;
