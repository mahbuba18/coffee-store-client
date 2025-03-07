import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Coffee from "../components/Coffee";

const Home = () => {
  const coffees = useLoaderData();

  const [loadedCoffees, setLoadedCoffees] = useState(coffees);

  return (
    <div>
     <div className="hero bg-base-200 min-h-screen mb-4">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src="https://i.ibb.co.com/dscpHD8L/ihedsi8ohtotp4s7dib0.jpg"
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-4xl font-bold">Wake Up & Smell the Savings – 20% Off All Coffees!</h1>
      <p className="py-6">
      Freshly brewed happiness, one cup at a time — where rich aromas meet perfect blends. Experience the warmth of every sip, crafted with passion to brighten your day.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {loadedCoffees.map((coffee) => (
          <Coffee
            coffee={coffee}
            loadedCoffees={loadedCoffees}
            setLoadedCoffees={setLoadedCoffees}
            key={coffee._id}
          ></Coffee>
        ))}
      </div>
    </div>
  );
};

export default Home;
