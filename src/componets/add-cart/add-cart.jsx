import {
  Avatar, Badge, Box, Button, Divider, Grid, List, ListItem, ListItemButton, ListItemText, SwipeableDrawer,
} from "@mui/material";
import React from "react";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import DeleteIcon from "@mui/icons-material/Delete";
import "./add-cart.css";
import { deepOrange } from "@mui/material/colors";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, removeItem} from "../../store/addCartSlice/addCartSlice";

const AddCart = () => {
  const [state, setState] = React.useState({ left: false });
  const { cartItems } = useSelector((state) => state.addproduct);
  console.log(cartItems);
  const dispatch = useDispatch();
  const total = cartItems.reduce((acc, item) => acc + item.totalPrice, 0);
  console.log(total);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const decrementHandler = (item) => {
    dispatch(decrement(item));
  };

  const incrementHandler = (item) => {
    dispatch(increment(item));
  };

  const deleteHandler = (item) => {
    dispatch(removeItem(item));
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 320 }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="cart-header">
        <h4>
          <ShoppingBagIcon
            sx={{ width: "50px", height: "30px", color: "green" }}
          />
          Shopping Cart
        </h4>
      </div>
      {cartItems?.map((item) => {
        return (
          <div key={item.id} className="cart-items p-2">
            <div className="d-flex align-self-center">
              <h6>{item?.name}</h6>
            </div>
            <div className="d-flex w-50 justify-content-between align-self-center">
              <Grid className="d-flex mr-2">
                <Avatar
                  onClick={() => decrementHandler(item)}
                  sx={{ width: 24, height: 24 }}
                >
                  -
                </Avatar>
                <span> {item?.quantity} </span>
                <Avatar
                  onClick={() => incrementHandler(item)}
                  sx={{ width: 24, height: 24 }}
                >
                  +
                </Avatar>
              </Grid>

              <div>
                <Avatar sx={{ bgcolor: deepOrange[500] }} variant="square">
                  <DeleteIcon sx={{width:'20px', height:'20px'}} onClick={() => deleteHandler(item)} />
                </Avatar>
              </div>
            </div>
          </div>
        );
      })}

      <button className=" border-0 cart-footer d-flex rounded-3 justify-content-around align-items-center">
        <h6>Proceed To Checkout   <span className="ml-2 bg-light text-success p-1 px-3 rounded-3">{`$ ${total}`}</span></h6>
      </button>
    </Box>
  );

  return (
    <div>
      <div>
        {cartItems?.length && <Button className="add-cart" onClick={toggleDrawer("left", true)}>
          <Badge badgeContent={cartItems?.length} color="success">
            <ShoppingBagIcon
              className="add-cart-icon"
              sx={{ color: "#157347" }}
            />
          </Badge>
          <span className="add-cart-price">{total}</span>
        </Button>}
        <SwipeableDrawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
          onOpen={toggleDrawer("left", true)}
        >
          {list("left")}
        </SwipeableDrawer>
      </div>
    </div>
  );
};

export default AddCart;
