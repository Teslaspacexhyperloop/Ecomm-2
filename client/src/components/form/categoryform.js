import React from "react";

export const CategoryForm = ({ handleSubmit, value,photo, setValue,setPhoto }) => {
  return (
   
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter new category"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
    <div className="mb-3">
    <label className="btn btn-outline-secondary col-md-12">
                  {photo ? photo.name : "Upload Photo"}
                  <input
                    type="file"
                    name="photo"
                    accept="image/*"
                    onChange={(e) => setPhoto(e.target.files[0])}
                    hidden
                  />
                </label>
    </div>

        <button type="submit" className="btn btn-primary" >
          Submit
        </button>
      </form>
   
  );
};

export default CategoryForm;