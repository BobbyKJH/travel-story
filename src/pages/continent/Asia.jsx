import React from "react";
import Nav from "../../components/Nav";
import Continent from "../../components/Continent";

export default function Asia() {
  return (
    <>
      <Nav />
      <Continent link={"https://bobbykjh.github.io/json/asia.json"} />
    </>
  );
}
