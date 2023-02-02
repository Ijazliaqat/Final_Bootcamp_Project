import React from 'react'
import { products } from '../../mock-data/products-data';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import './all-products.css'

const AllProducts = () => {
  return (
    <div>
      <div class="container-xxl py-5">
        <div class="container">
          <div class="row g-0 gx-5 align-items-end">
            <div class="col-lg-6">
              <div class="section-header text-start mb-5  fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "500px" }}>
                <h1 class="display-5 mb-3">Our Products</h1>
                <p>Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
              </div>
            </div>
            <div class="col-lg-6 text-start text-lg-end  slideInRight" data-wow-delay="0.1s">
              <ul class="nav nav-pills d-inline-flex justify-content-end mb-5">
                <li class="nav-item me-2">
                  <a class="btn btn-outline-primary border-2 active" data-bs-toggle="pill" href="#tab-1">All</a>
                </li>
                <li class="nav-item me-2">
                  <a class="btn btn-outline-primary border-2" data-bs-toggle="pill" href="#tab-1">Vegetable</a>
                </li>
                <li class="nav-item me-2">
                  <a class="btn btn-outline-primary border-2" data-bs-toggle="pill" href="#tab-2">Fruits </a>
                </li>
                <li class="nav-item me-0">
                  <a class="btn btn-outline-primary border-2" data-bs-toggle="pill" href="#tab-3">Fresh</a>
                </li>
              </ul>
            </div>
          </div>

          <div class="tab-content">
            <div id="tab-1" class="tab-pane fade show p-0 active">
              <div class="row g-4" >
                <div class="  d-flex flex-wrap  fadeInUp" data-wow-delay="0.1s">
                  {products.map((item) => {
                    return (
                      <div class="product-item col-xl-3 col-lg-3 col-md-3 mt-3 px-1 justify-content-between">
                        <div class="position-relative bg-light overflow-hidden">
                          <img class="img-fluid w-100" src={item.img} alt="" />
                          <div class="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                        </div>
                        <div class="text-center p-4">
                          <a class="d-block h5 mb-2" href="">{item.name}</a>
                          <span class="text-primary me-1">${item.newPrice}</span>
                          <span class="text-body text-decoration-line-through">${item.oldPrice}</span>
                        </div>
                        <div class="d-flex border-top">
                          <small class="w-50 text-center border-end py-2">
                            <a class="text-body" href=""><i class=" me-2"><VisibilityIcon/></i>View detail</a>
                          </small>
                          <small class="w-50 text-center py-2">
                            <a class="text-body" href=""><i class="fa fa-shopping-bag text-primary me-2"><AddShoppingCartIcon/></i>Add to cart</a>
                          </small>
                        </div>
                      </div>
                    )
                  })}

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllProducts