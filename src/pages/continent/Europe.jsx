import React from "react";
import Continent from "../../components/Continent";
import Nav from "../../components/Nav";

export default function Europe() {
  return (
    <>
      <Nav />
      <Continent link={"https://bobbykjh.github.io/json/eu.json"} />
    </>
  );
}
