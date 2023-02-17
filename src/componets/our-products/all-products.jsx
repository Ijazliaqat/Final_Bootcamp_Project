import React, { useEffect, useState } from "react";
import { productsData } from "../../mock-data/products-data";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./all-products.css";
import axios from "../../axios/axios";
import { Alert, Box, Button, Rating, Snackbar, Tab } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  singleProductItem,
  singleProductItemHandler,
} from "../../store/singleProduct/singleProductSlice";
import { getAllProductsThunk } from "../../store/all-products-slice/all-products-slice";
import { TabContext } from "@mui/lab";
import { TabList } from "@mui/lab";
import { TabPanel } from "@mui/lab";
import AppAlert from "../app-alert/app-alert";
import { addToCartItem } from "../../store/addCartSlice/addCartSlice";

const AllProducts = (data) => {
  const [state, setState] = useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const [aletMesg, setAlertMesg] = useState("");
  const [products, setProducts] = useState();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [value, setValue] = useState(2);

  const { vertical, horizontal, open } = state;

  const handleClick = (newState, alertMesg) => () => {
    console.log(newState);
    setState({ open: true, ...newState });
    setAlertMesg(alertMesg.mesg);
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const { productsArr } = useSelector((state) => state.allproducts);
  console.log(productsArr);
  const dispatch = useDispatch();

  console.log(products);
  const handleCategorySelection = (category) => {
    setSelectedCategory(category);
  };

  const token = localStorage?.getItem("token");
  const addWishListHandler = async (item) => {
    console.log(item);

    setAlertMesg('Successfully added to Wishlist')

    const token = localStorage?.getItem("token");
    const response = await axios.put(
      `/user/wish-list/${item?._id}`,
      {},
      { headers: { Authorization: `Bearer ${token}` }}
    );
  };

  useEffect(() => {
    dispatch(getAllProductsThunk(selectedCategory));
  }, [dispatch, selectedCategory]);

  useEffect(() => {
    setProducts(productsArr);
  }, [productsArr]);

  const signleProductHandler = (item) => {
    dispatch(singleProductItemHandler(item));
  };

  const [tabValue, setTabValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

//   image
// : 
// "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAA
// name
// : 
// "Nashpati"
// newPrice
// : 
// "2"
// oldPrice
// : 
// "3"
// selectCategory
// : 
// "Fresh"
  const addtocarthandler = (item) =>{
    let cartObj = {
      id: item._id,
      name: item.name,
      quantity: 1,
      price: item.newPrice
    }
    dispatch(addToCartItem(cartObj))
  }

  // useEffect(() => {
  //   const response = axios.post("http://localhost:9000/add-product", wishList);
  //   return response.data;
  // }, []);
  // console.log(wishList);
  return (
    <div>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-0 gx-5 align-items-end">
            <div className="col-lg-6">
              <div
                className="section-header text-start mb-5  fadeInUp"
                data-wow-delay="0.1s"
                style={{ maxWidth: "500px" }}
              >
                <h1 className="display-5 mb-3">Popular Food Items</h1>
                <p>
                  See all our popular Food Items in this week. Get some special
                  offer with free shipping.
                </p>
              </div>
            </div>

            <div
              className="d-flex bg-success  rounded-2 flex-wrap py-3 justify-content-between text-start  slideInRight"
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
          <Box sx={{ width: "100%", typography: "body1" }}>
            <TabContext value={tabValue}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  <Tab
                    label="All Products"
                    onClick={() => handleCategorySelection("")}
                    value="1"
                  />
                  <Tab
                    label="Baked Goods"
                    onClick={() => handleCategorySelection("Baked")}
                    value="2"
                  />
                  <Tab
                    label="Pantry Staples"
                    onClick={() => handleCategorySelection("Pantry")}
                    value="3"
                  />
                  <Tab
                    label="Fresh Products"
                    onClick={() => handleCategorySelection("Fresh")}
                    value="4"
                  />
                </TabList>
              </Box>
            </TabContext>
          </Box>

          <div className="tab-content">
            <div id="tab-1" className="tab-pane fade show p-0 active">
              <div className="row g-4">
                <div
                  className="  d-flex flex-wrap fadeInUp"
                  data-wow-delay="0.1s"
                >
                  {productsArr?.map((item) => {
                    return (
                      <div
                        key={item?._id}
                        className="product-item  shadow col-xl-3 col-lg-3 col-md-3 mt-3 justify-content-between"
                      >
                        <div className="position-relative bg-light overflow-hidden">
                          <img
                            className="img-fluid w-100"
                            src={item?.image}
                            alt="image"
                          />
                          <div className="bg-success rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                            New
                          </div>
                        </div>
                        <div className="text-center p-4">
                          <a className="d-block h5 mb-2" href="">
                            {item?.name}
                          </a>
                          <span className="text-primary me-1">
                            ${item?.newPrice}
                          </span>
                          <span className="text-body text-decoration-line-through">
                            ${item?.oldPrice}
                          </span>
                        </div>
                        <div className="d-flex border-top">
                          <small className="w-50 text-center border-end py-2">
                            <i className=" me-2 text-body">
                              <Link to={`products/${item?._id}`}>
                                <VisibilityIcon
                                  onClick={() => signleProductHandler(item)}
                                />
                              </Link>
                            </i>
                          </small>
                          <small className="w-50 text-center border-end py-2">
                            <a className="text-body">
                              <i className="me-2">
                                <AddShoppingCartIcon
                                  onClick={()=>{addtocarthandler(item)}}
                                />
                              </i>
                            </a>
                          </small>
                          <small className="w-50 text-center py-2">
                            <a className="text-body">
                              <i className="me-2">
                                <FavoriteIcon
                                  onClick={() => {
                                    addWishListHandler(item);
                                  }}
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

      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        autoHideDuration={1500}
        onClose={handleClose}
        // message={aletMesg}
        severity="success"
        key={vertical + horizontal}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          {aletMesg}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default AllProducts;
