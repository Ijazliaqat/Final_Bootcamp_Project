import React from 'react'
import * as Yup from 'yup';

const useAddCart = () => {

    const initialValuesOrder = {
        name: '',
        email: '',
        address: ''
      }
    
      const placeOrderSchema = Yup.object().shape({
        name: Yup.string().required('Enter Your Name'),
        email: Yup.string().required('Enter your Email'),
        address: Yup.string().required('Enter your Delivery Address'),
       
      })
    
      const placeOrderHandler = (values) => {
        console.log(values);
        // navigate('/log-in')
        
      }
  return {initialValuesOrder,placeOrderSchema,placeOrderHandler}
}

export default useAddCart