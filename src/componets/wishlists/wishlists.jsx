import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "../../axios/axios";
import { getWishListThunk } from "../../store/wishlistSlice/wish-list-slice";
import "./wishlists.css";

const Wishlists = () => {
  const [wishlistUser, setWishListUser] = useState([]);
  useEffect(async () => {
    const token = localStorage.getItem("token");
    const wishlist = await axios.get("/user/wishlist", {
      headers: { Authorization: `Bearer ${token}` },
    });

    setWishListUser(wishlist.data[0]?.data);
  }, []);

  console.log(wishlistUser.map((item) => item.name));
  return (
    <>
      <div className="bg-success d-flex justify-content-center row flex-wrap border border-rounded">
        <div className="bg-light my-5 border rounded d-flex">
          {wishlistUser?.map((item) => {
           return <div className="bg-white border my-2 mx-4 rounded ">
              <div className="wishList  mx-1 my-2 bg-success shadow-lg rounded d-flex justify-content-center border border-white">
                <h4 className="my-2 mx-1 text-white">{item?.name}</h4>
              </div>
              <div className="d-flex justify-content-center row">
                <img
                  className="wishlist-img rounded flex-shrink-0 mt-2 "
                  src={item?.image}
                  alt="WishList Product Image"
                />
                <div className="d-flex justify-content-center">
                  <button className="btn btn-success w-auto my-2">
                    Delete
                  </button>
                </div>
              </div>
            </div>;
          })}
        </div>
      </div>
    </>
  );
};

export default Wishlists;
