import React from 'react'
import { useSelector } from 'react-redux';
import * as Yup from 'yup';
import axios from "../../axios/axios";

const useAddCart = () => {
  const token = localStorage?.getItem("token");
  const { cartItems } = useSelector((state) => state.addproduct);

  const initialValuesOrder = {
    name: '',
    email: '',
    address: '',
    delivery: ''
  }

  const placeOrderSchema = Yup.object().shape({
    name: Yup.string().required('Enter Your Name'),
    email: Yup.string().required('Enter your Email'),
    address: Yup.string().required('Enter your Delivery Address'),
    delivery: Yup.string().required('Click on delivery option')
  })

  const placeOrderHandler = async (values) => {
    console.log(values);

    const userOrderDetails = {
      name: values.name,
      email: values.email,
      address: values.address,
      delivery: values.delivery,
      shoppingList: cartItems
    }

    try {
      const response = axios.put('/user/history',{userOrderDetails},{headers: { Authorization: `Bearer ${token}` }})
      return response.data
    } catch (error) {
      console.log(error);
    }
    // navigate('/log-in')

  }
  return { initialValuesOrder, placeOrderSchema, placeOrderHandler }
}

export default useAddCart