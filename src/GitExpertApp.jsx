import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GitExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (newCategory) => {
    // console.log(newCategory);
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
    // setCategories([...categories, 'Demon Slayer']);
    // setCategories(cat => [...cat, 'Valorant']);
  };

  return (
    <>
      <h1>GitExpertApp</h1>

      <AddCategory
        // setCategories={setCategories}
        // onNewCategory={onAddCategory}
        onNewCategory={(event) => onAddCategory(event)}
      />

      {/* <button onClick={onAddCategory}>Agregar</button> */}

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}

      {/*{categories.map((category) => {
          return (
            <div key={category}>
              <h3>{category}</h3>
              <li>{category}</li>
            </div>
          );
        })}*/}
    </>
  );
};
