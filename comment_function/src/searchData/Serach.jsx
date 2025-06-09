import { useState } from "react";

function Search() {
  const data = [
    { id: 1, name: "Apple" },
    { id: 2, name: "Banana" },
    { id: 3, name: "Orange" },
    { id: 4, name: "Mango" },
    { id: 5, name: "Pineapple" },
  ];

  const [searchItem, setSearchItem] = useState("");

  const sortdata = data.filter((item) =>
    item.name.toLocaleLowerCase().includes(searchItem.toLocaleLowerCase())
  );

  return (
    <>
      <input
        type="text"
        value={searchItem}
        onChange={(e) => setSearchItem(e.target.value)}
      />
      {sortdata.map((item) => (
        <p key={item.name}>{item.name}</p>
      ))}

      {sortdata.length > 0 ? <p></p> : <p>not found</p>}
    </>
  );
}

export default Search;