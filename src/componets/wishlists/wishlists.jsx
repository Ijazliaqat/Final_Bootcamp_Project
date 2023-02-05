import React from "react";
import "./wishlists.css";
import productImage from "./images/image.png";
import starImage from "./images/image2.png";

const Wishlists = () => {
  return (
    <>
      {/* Main Container for Wishlist Add to Cart */}
      <div className="mainContainer bg-success d-flex justify-content-center row flex-wrap border border-rounded col-sm-10">
        {/* Container for dashboard and home  */}
        <div className="dashboardWhishlist bg-white d-flex flex-wrap border border-success border-top">
          <h2 className="text-success mx-3 my-1">Dashboard</h2>
          <span className="text-success mx-3 my-2">-</span>
          <h4 className="text-success mx-3 my-2">WhishList</h4>
        </div>
        {/* Container for WhishList Products  */}
        <div className="containerForProduct bg-light my-5 border rounded justify-content-center d-flex col-sm-8">
          <div className="productContainer bg-white border my-5 rounded ">
            <div className="wishList  mx-1 my-2 bg-success rounded d-flex justify-content-center border border-white">
              <h4 className="my-2 mx-1 text-white">My Wished Product</h4>
            </div>
            <div className="productImage d-flex justify-content-center my-1 row">
              <img
                className="img-fluid rounded flex-shrink-0 mt-5"
                src={productImage}
                alt="WishList Product Image"
              />
              <div className="d-flex justify-content-center">
                <button className="btn btn-success w-auto my-2">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlists;
