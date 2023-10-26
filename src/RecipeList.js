import React from "react";

function RecipeList({ recipes, deleteRecipe }) {
  // TODO: Display the list of recipes using the structure of table that is provided.
  const listRecipes = recipes.map(
    ({ name, cuisine, photo, ingredients, preparation }, index) => (
      <tr key={index}>
        <td class="column">{name}</td>
        <td class="column">{cuisine}</td>
        <td class="column">
          <img src={photo} alt={name}></img>
        </td>
        <td class="noted" className="content_td"><p>{ingredients}</p></td>
        <td class="noted" className="content_td"><p>{preparation}</p></td>
        <td class="column">
          <button name="delete" onClick={() => deleteRecipe(index)}>
            Delete
          </button>
        </td>
      </tr>
    )
  );
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th class="column">Name</th>
            <th class="column">Cuisine</th>
            <th class="column">Photo</th>
            <th class="noted">Ingredients</th>
            <th class="noted">Prepartion</th>
            <th class="column">Actions</th>
          </tr>
        </thead>
        <tbody>{listRecipes}</tbody>
      </table>
    </div>
  );
}

export default RecipeList;
