import React, { useState } from "react";
import axios from "../../axios/axios";

const CreateProduct = () => {
  const [name, setName] = useState("");
  const [oldPrice, setOldPrice] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [image, setImage] = useState("");
  const [selectCategory, setSelectCatgory] = useState("");

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImage(reader.result);
    };
  };

  const formDataHandler = async (e) => {
    e.preventDefault();
    const dataObj = {
      name,
      oldPrice,
      newPrice,
      image,
      selectCategory
    };
    console.log(dataObj);
    try {
      const response = await axios.post("/add-product", dataObj);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }

    // setData(dataObj)
  };

  const handleImageUpload = async () => {
    // const response = await axios.post("/addproducts", { data });
    // console.log(response.data);
    // return response.data
  };

  return (
    <div>
      <form onSubmit={formDataHandler}>
        name:
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br />
        <br />
        oldPrice:
        <input
          type="number"
          value={oldPrice}
          onChange={(e) => {
            setOldPrice(e.target.value);
          }}
        />
        <br />
        <br />
        newPrice:
        <input
          type="text"
          value={newPrice}
          onChange={(e) => {
            setNewPrice(e.target.value);
          }}
        />
        <br />
        <br />
        image:
        <input type="file" onChange={handleImageChange} /> <br />
        <br />
        <select onChange={(e) => setSelectCatgory(e.target.value)}>
          <option>Select Category</option>
          <option value="Baked">Baked</option>
          <option value="Fresh">Fresh</option>
          <option value="Pantry">Pantry</option>
        </select>
        <button onClick={handleImageUpload}>Upload Image</button>
      </form>
    </div>
  );
};

export default CreateProduct;
