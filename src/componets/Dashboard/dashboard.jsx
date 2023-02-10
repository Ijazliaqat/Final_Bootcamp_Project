import { Grid } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../header/header'
import HeroSection from '../hero-section/hero-section'
import OurFeatures from '../our-features/our-features'
import AllProducts from '../our-products/all-products'

const Dashboard = () => {
  return (
    <Grid  >
      <Header />
      <HeroSection />
      <AllProducts/>
      <OurFeatures/>
      <Outlet />
    </Grid>
  )
}

export default Dashboard