import React, { useEffect, useState } from "react";
import { productsData } from "../../mock-data/products-data";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./all-products.css";
import axios from "../../axios/axios";
import { Rating } from "@mui/material";



const AllProducts = () => {
  const [products, setProducts] = useState();
  const [wishList, setWishList] = useState([]);
  const [newWishList, setNewWishList] = useState();
  const [value, setValue] = useState(2);

  console.log(products);

  useEffect(() => {
    axios.get("/all-products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  const addWishListHandler = async (item) => {
    const wishListObj = {
      name: item.name,
      price: item.newPrice,
      image: item.image
    }
    setWishList((prevData) => [...prevData, wishListObj]);

    const response = axios.post("/wish-list", wishList);
    return response.data;
  };

  // useEffect(() => {
  //   const response = axios.post("http://localhost:9000/add-product", wishList);
  //   return response.data;
  // }, []);
  console.log(wishList);
  return (
    <div>
      <div class="container-xxl py-5">
        <div class="container">
          <div class="row g-0 gx-5 align-items-end">
            <div class="col-lg-6">
              <div
                class="section-header text-start mb-5  fadeInUp"
                data-wow-delay="0.1s"
                style={{ maxWidth: "500px" }}
              >
                <h1 class="display-5 mb-3">Popular Food Items</h1>
                <p>
                  See all our popular Food Items in this week. Get some special
                  offer with free shipping.
                </p>
              </div>
            </div>

            <div
              class="d-flex bg-success  rounded-2 flex-wrap py-3 justify-content-between text-start  slideInRight"
              data-wow-delay="0.1s"
            >
              <div className="filter-items">
                <h5 className="text-white ">Price</h5>
                <input type="text" />
              </div>
              <div className="filter-item">
                <h5 className="text-white ">Availability</h5>
                <input type="text" />
              </div>
              <div>
                <h5 className="text-white ">Rating</h5>
                <Rating
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
              </div>
            </div>
          </div>

          <div class="tab-content">
            <div id="tab-1" class="tab-pane fade show p-0 active">
              <div class="row g-4">
                <div class="  d-flex flex-wrap fadeInUp" data-wow-delay="0.1s">
                  {products?.map((item) => {
                    return (
                      <div
                        key={item._id}
                        class="product-item  shadow col-xl-3 col-lg-3 col-md-3 mt-3 justify-content-between"
                      >
                        <div class="position-relative bg-light overflow-hidden">
                          <img
                            class="img-fluid w-100"
                            src={item.image}
                            alt="image"
                          />
                          <div class="bg-success rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                            New
                          </div>
                        </div>
                        <div class="text-center p-4">
                          <a class="d-block h5 mb-2" href="">
                            {item.name}
                          </a>
                          <span class="text-primary me-1">
                            ${item.newPrice}
                          </span>
                          <span class="text-body text-decoration-line-through">
                            ${item.oldPrice}
                          </span>
                        </div>
                        <div class="d-flex border-top">
                          <small class="w-50 text-center border-end py-2">
                            <a class="text-body" href="">
                              <i class=" me-2">
                                <VisibilityIcon />
                              </i>
                            </a>
                          </small>
                          <small class="w-50 text-center border-end py-2">
                            <a class="text-body" href="">
                              <i class="me-2">
                                <AddShoppingCartIcon />
                              </i>
                            </a>
                          </small>
                          <small class="w-50 text-center py-2">
                            <a class="text-body">
                              <i class="me-2">
                                <FavoriteIcon
                                  onClick={() => addWishListHandler(item)}
                                />
                              </i>
                            </a>
                          </small>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
