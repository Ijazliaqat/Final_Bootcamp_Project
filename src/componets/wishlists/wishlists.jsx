import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "../../axios/axios";
import { getWishListThunk } from "../../store/wishlistSlice/wish-list-slice";
import "./wishlists.css";

const Wishlists = () => {
  const [wishlistUser, setWishListUser] = useState([]);
  const dispatch = useDispatch();
  useEffect(async () => {
    const token = localStorage.getItem("token");
    const wishlist = await axios.get("/user/wishlist", {
      headers: { Authorization: `Bearer ${token}` },
    });

    setWishListUser(wishlist.data[0]?.wishlists);
  }, []);

  return <div>Wishlists</div>;
};

export default Wishlists;
