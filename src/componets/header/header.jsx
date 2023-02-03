import React, { useEffect, useState } from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import "./header.css";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Grid sx={{ marginTop: '80px' }}>
      <div class={`container-fluid fixed-top ${scrolled ? 'scrolled' : ''} px-0 wow fadeIn`} data-wow-delay="0.1s">
        <nav class="navbar navbar-expand-lg navbar-light py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
          <Link to='/'  class="navbar-brand ms-4 ms-lg-0">
            <h1 class="fw-bold text-success m-0">Bite <span class="text-secondary">Bazaar</span></h1>
          </Link>
          <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav ms-auto p-4 p-lg-0">
              <Link to='/' class="nav-item nav-link active">Home</Link>
              <Link to='history' class="nav-item nav-link">History</Link>
              <Link class="nav-item nav-link" to='products' >Products</Link>
              <div class="nav-item dropdown">
                <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                <div class="dropdown-menu m-0">
                  <a href="testimonial.html" class="dropdown-item">Testimonial</a>
                  <a href="404.html" class="dropdown-item">404 Page</a>
                </div>
              </div>
              <Link to='wishlists' class="nav-item nav-link">Wish List</Link>
              <a href="contact.html" class="nav-item nav-link"><AccountCircleIcon /></a>
            </div>
            <div class="d-none d-lg-flex ms-2">
              <a class="btn-sm-square bg-white rounded-circle ms-3" href="">
                <small class="fa fa-search text-body"></small>
              </a>
              <a class="btn-sm-square bg-white rounded-circle ms-3" href="">
                <small class="fa fa-user text-body"></small>
              </a>
              <a class="btn-sm-square bg-white rounded-circle ms-3" href="">
                <small class="fa fa-shopping-bag text-body"></small>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </Grid>
  );
};

export default Header;
