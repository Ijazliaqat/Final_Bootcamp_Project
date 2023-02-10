import { Rating } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import productImage from "../single-products/images/image.png";

const SingleProducts = () => {

  const {singleProductItem} = useSelector(state=> state.singleProduct)

  const [value, setValue] = useState(2);
  const param = useParams();
  const {productId} = param
  return (
    <>
    {productId}
    {/* Main Container for Product Short details  */}
     <div className="container1 bg-light justify-content-center my-3 mx-3 rounded text-center">
      <div className="headingContainer">
        <h3>{singleProductItem?.name}</h3>
      </div>

      {/* Container for Product Image and their Rating and pricing details  */}

      <div className="containerForProductShortDetails my-2 d-flex flex-wrap justify-content-center">

      <div className="productImageContainer d-flex ">
        <img className="rounded img-fluid flex-start me-2 " src={singleProductItem?.image} alt="Product Image" />
      </div>

        {/* Code below for stars Rating:  */}

      <div className="rating float-end w-80 ms-2 rounded my-4 me-3">
      <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
                }}  />
          <p>200 Ratings | 22 Answered Questions</p>
          <h6>Brand: <small>By Ideas Pakistan</small></h6>
          <h4>$ {singleProductItem?.newPrice}</h4>
          <div className="quantity justify-content-center d-flex ">
          {/* <h6 className="my-1">Quantity:</h6> */}
          <button type="button" className="btn btn-outline-success mx-2 ">+</button>
          <input
            type="text"
            className="form-control w-25 rounded border-success "
            id="floatingInput"
            placeholder="Quantity"
              />
              <button type="button" className="btn btn-outline-success mx-2">-</button>
          </div>
          <button type="button" className="btn mt-5 w-50 btn-success mx-2">Add To Cart</button>
          <button type="button" className="btn my-1 w-50 btn-success mx-2">Buy Now</button>
      </div>

      </div>
     </div>

     {/* Detail Discription of the Product  */}
     <div className="container2   text-center bg-light d-flex flex-wrap ">
        <div className="heading">
          <h2>Detail Discription</h2>
          <p className="mx-5 my-3 text-wrap">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            vel sapiente hic, molestias odit soluta reiciendis est in nihil
            numquam voluptatibus debitis saepe facilis maxime eum deleniti optio
            consequatur! Veniam impedit, accusantium ex ad tenetur harum sequi
            omnis et necessitatibus similique autem soluta maxime quasi ea quos
            mollitia quae iste! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ipsa, architecto. Odit nisi, officiis doloribus ut
            ipsam quasi dolores aperiam, eius officia eos ab. Veniam possimus
            amet tempora saepe aut ab, incidunt laborum ipsa vero debitis!
            Voluptate labore, facilis, doloribus quia adipisci qui asperiores,
          </p>
        </div>
      </div>

    </>
  );
};

export default SingleProducts;
