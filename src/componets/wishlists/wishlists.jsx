import React from 'react';
import axios from '../../axios/axios';
import './wishlists.css'

const Wishlists = () => {
  // useEffect(async()=>{
  //   const token = localStorage.getItem("token");
  //   const wishlist = await axios.get(`/user/wish-list`,{},{headers:{Authorization:`Bearer ${token}`}})
  //   console.log(wishlist);
  // },[])
  return (
    <div>Wishlists</div>
  )
}

export default Wishlists