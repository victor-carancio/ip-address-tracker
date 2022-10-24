import React from "react";
import AddressInfo from "../Components/AddressInfo";
import NavHeader from "../Components/header";
import MapView from "../Components/map";

const Home = () => {
  return (
    <main>
      <NavHeader />
      <AddressInfo />
      <MapView />
    </main>
  );
};

export default Home;
