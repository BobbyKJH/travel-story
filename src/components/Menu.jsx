import { useState, useEffect } from "react";
export default function Menu() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("https://bobbykjh.github.io/1bank.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMenu(data);
      });
  }, []);
  console.log(menu);
  return (
    <div>
      {menu.map((coin) => (
        <p>{coin.history}</p>
      ))}
    </div>
  );
}
