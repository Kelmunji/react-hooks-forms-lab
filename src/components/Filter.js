import React, { useState } from "react";
import Filter from "./Filter";

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const items = ["Lettuce", "Yogurt", "Swiss Cheese", "String Cheese"];

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  return (
    <div>
      <Filter
        search={search}
        onSearchChange={handleSearchChange}
        onCategoryChange={handleCategoryChange}
        items={items}
      />
    </div>
  );
}

export default App;