import React, { useState } from "react";

function RecipeCreate({ createRecipe }) {
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };

  // TODO: Add the required submit and change handlers
  const [formData, setFormData] = useState({ ...initialFormState });
  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createRecipe(formData);
    setFormData({ ...initialFormState });
  };

  // TODO: Add the required input and textarea form elements.

  return (
    <form onSubmit={handleSubmit} name="create">
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="name"></label>
              <input
                id="name"
                name="name"
                type="text"
                required={true}
                onChange={handleChange}
                value={formData.name}
                placeholder="Name"
              />
            </td>
            <td>
              <label htmlFor="cuisine"></label>
              <input
                id="cuisine"
                name="cuisine"
                type="text"
                required={true}
                onChange={handleChange}
                value={formData.cuisine}
                placeholder="Cuisine"
              />
            </td>
            <td>
              <label htmlFor="photo"></label>
              <input
                id="photo"
                name="photo"
                type="url"
                required={true}
                onChange={handleChange}
                value={formData.photo}
                placeholder="URL"
              />
            </td>
            <td>
              <label htmlFor="ingredients"></label>
              <textarea
                id="ingredients"
                name="ingredients"
                required={true}
                rows={2}
                onChange={handleChange}
                value={formData.ingredients}
                placeholder="Ingredients"
              />
            </td>
            <td>
              <label htmlFor="preparation"></label>
              <textarea
                id="preparation"
                name="preparation"
                required={true}
                rows={2}
                onChange={handleChange}
                value={formData.preparation}
                placeholder="Preparation"
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
