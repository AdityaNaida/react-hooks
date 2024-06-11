import { useState, useEffect } from "react";

export default function List({ getItems }) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    console.log("Updating");
    setItems(getItems(1));
  }, [getItems]);
  return (
    <ul>
      {items.map((elem) => (
        <li key={elem}>{elem}</li>
      ))}
    </ul>
  );
}
