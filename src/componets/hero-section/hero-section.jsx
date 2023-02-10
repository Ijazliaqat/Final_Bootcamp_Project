import React, { useEffect, useState } from 'react';
import carouselimg1 from '../../assets/images/carousel-1.jpg';
import carouselimg2 from '../../assets/images/carousel-2.jpg';
import './hero-section.css'
import axios from 'axios';

axios.defaults.withCredentials = true;
let firstRender = true;
const HeroSection = () => {

    const [user, setUser] = useState()

    const refreshToken = async () => {
        const res = await axios.get('http://localhost:9000/authentication/refresh', {
            withCredentials: true
        }).catch((err) => console.log(err));

        const data = await res.data;
        return data;
    }
    const sendGetRequest = async () => {
        const res = await axios.get("http://localhost:9000/authentication/user", {
            withCredentials: true
        }).then(err => console.log(err));

        const data = await res.data;
        return data
    }

    useEffect(() => {
        if (firstRender) {
            firstRender = false;
            sendGetRequest().then(data => setUser(data.user))
        }
        let interval = setInterval(() => { refreshToken().then(data => setUser(data.user)) }, 1000 * 29)

        return () => clearInterval(interval)
    }, [])
    return (
        <div>
            <div className="container-fluid p-0 mb-5 wow fadeIn" data-wow-delay="0.1s">
                <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="w-100" src={carouselimg1} alt="Image" />
                            <div className="carousel-caption">
                                <div className="container">
                                    <div className="row justify-content-start">
                                        <div className="col-lg-7">
                                            <h1 className="display-2 mb-5 text-black fw-bold animated slideInDown">Organic Food Is Good For Health</h1>
                                            {user && <h1>{user.name}</h1>}
                                            <a href="" className="btn btn-success rounded-pill py-sm-3 px-sm-5">Products</a>
                                            <a href="" className="btn bg-light border-success text-black rounded-pill border-1 py-sm-3 px-sm-5 ms-3">Services</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="w-100" src={carouselimg2} alt="Image" />
                            <div className="carousel-caption">
                                <div className="container">
                                    <div className="row justify-content-start">
                                        <div className="col-lg-7">
                                            <h1 className="display-2 mb-5 text-black fw-bold animated slideInDown">Natural Food Is Always Healthy</h1>
                                            <a href="" className="btn btn-success rounded-pill py-sm-3 px-sm-5">Products</a>
                                            <a href="" className="btn bg-light border-success text-black rounded-pill border-1 py-sm-3 px-sm-5 ms-3">Services</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection