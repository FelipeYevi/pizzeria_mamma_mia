import React from "react";
import Header from "./Header";
import CardPizza from "./CardPizza";
import pizzas from "../components/utils/pizzas"

const Home = () => {
  return (
    <div className="container">
      <Header />
      <div className="cards row mt-4">
      {pizzas.map((pizza) => (
            <CardPizza
              key={pizza.id}
              name={pizza.name}
              price={pizza.price}
              ingredients={pizza.ingredients}
              img={pizza.img}
            />
          ))}
      </div>
    </div>
  );
};

export default Home;
