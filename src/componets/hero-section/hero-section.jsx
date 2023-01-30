import React from 'react';
import carouselimg1 from '../../assets/images/carousel-1.jpg';
import carouselimg2 from '../../assets/images/carousel-2.jpg';
import './hero-section.css'

const HeroSection = () => {
    return (
        <div>
            <div class="container-fluid p-0 mb-5 wow fadeIn" data-wow-delay="0.1s">
                <div id="header-carousel" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="w-100" src={carouselimg1} alt="Image"/>
                                <div class="carousel-caption">
                                    <div class="container">
                                        <div class="row justify-content-start">
                                            <div class="col-lg-7">
                                                <h1 class="display-2 mb-5 text-black fw-bold animated slideInDown">Organic Food Is Good For Health</h1>
                                                <a href="" class="btn btn-success rounded-pill py-sm-3 px-sm-5">Products</a>
                                                <a href="" class="btn bg-light border-success text-black rounded-pill border-1 py-sm-3 px-sm-5 ms-3">Services</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        <div class="carousel-item">
                            <img class="w-100" src={carouselimg2} alt="Image"/>
                                <div class="carousel-caption">
                                    <div class="container">
                                        <div class="row justify-content-start">
                                            <div class="col-lg-7">
                                                <h1 class="display-2 mb-5 text-black fw-bold animated slideInDown">Natural Food Is Always Healthy</h1>
                                                <a href="" class="btn btn-success rounded-pill py-sm-3 px-sm-5">Products</a>
                                                <a href="" class="btn bg-light border-success text-black rounded-pill border-1 py-sm-3 px-sm-5 ms-3">Services</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                        data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#header-carousel"
                        data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection