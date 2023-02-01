import { Grid } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../header/header'
import HeroSection from '../hero-section/hero-section'
import OurFeatures from '../our-features/our-features'

const Dashboard = () => {
  return (
    <Grid  >
      <HeroSection />
      <OurFeatures/>
      <Outlet />
    </Grid>
  )
}

export default Dashboard