import React, { Component } from 'react';
import Modal from '../Modal/Modal';
class Portfolio extends Component {
      
    show1(){
        document.querySelector(".mo-1").classList.remove("d-none")
    }
    
    show2(){
        document.querySelector(".mo-2").classList.remove("d-none")
    }
    show3(){
        document.querySelector(".mo-3").classList.remove("d-none")
    }
    show4(){
        document.querySelector(".mo-4").classList.remove("d-none")
    }
    show5(){
        document.querySelector(".mo-5").classList.remove("d-none")
    }
    show6(){
        document.querySelector(".mo-6").classList.remove("d-none")
    }
    
   
   
    render() {
        return (
           
            <div>
                <section className='page-section'>
                <div className="container w-75 ">
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
                <div class="divider-custom d-flex justify-content-center align-items-center">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><svg className="svg-inline--fa fa-star fa-w-18" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg> <i className="fas fa-star"></i> </div>
                    <div class="divider-custom-line"></div>
                </div>
                <div className="row">
                <div className="col-md-6 col-lg-4 mb-5">
                <div className="portfolio-item mx-auto position-relative " onClick={this.show1} data-toggle="modal" data-target="#portfolioModal1">
                            <img className="img-fluid" src="https://routeegypt.com/start-react/assets/img/portfolio/cabin.png" alt=""/>
                            <div className="content-layer d-flex justify-content-center align-items-center">
                            <svg class="svg-inline--fa fa-plus fa-w-14 fa-3x" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>
                            </div>
                        </div>
                    </div>
                <div className="col-md-6 col-lg-4 mb-5">
                <div className="portfolio-item mx-auto position-relative" onClick={this.show2} data-toggle="modal" data-target="#portfolioModal1">
                            <img className="img-fluid" src="https://routeegypt.com/start-react/assets/img/portfolio/cake.png" alt=""/>
                            <div className="content-layer d-flex justify-content-center align-items-center">
                            <svg class="svg-inline--fa fa-plus fa-w-14 fa-3x" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>
                            </div>
                        </div>
                    </div>
                <div className="col-md-6 col-lg-4 mb-5">
                <div className="portfolio-item mx-auto position-relative" onClick={this.show3} data-toggle="modal" data-target="#portfolioModal1">
                            <img className="img-fluid" src="https://routeegypt.com/start-react/assets/img/portfolio/circus.png" alt=""/>
                            <div className="content-layer d-flex justify-content-center align-items-center">
                            <svg class="svg-inline--fa fa-plus fa-w-14 fa-3x" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>
                            </div>
                        </div>
                    </div>
                <div className="col-md-6 col-lg-4 mb-5">
                <div className="portfolio-item mx-auto position-relative" onClick={this.show4} data-toggle="modal" data-target="#portfolioModal1">
                            <img className="img-fluid" src="https://routeegypt.com/start-react/assets/img/portfolio/game.png" alt=""/>
                            <div className="content-layer d-flex justify-content-center align-items-center">
                            <svg class="svg-inline--fa fa-plus fa-w-14 fa-3x" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>
                            </div>
                        </div>
                    </div>
                <div className="col-md-6 col-lg-4 mb-5">
                <div className="portfolio-item mx-auto position-relative" onClick={this.show5} data-toggle="modal" data-target="#portfolioModal1">
                            <img className="img-fluid" src="https://routeegypt.com/start-react/assets/img/portfolio/safe.png" alt=""/>
                            <div className="content-layer d-flex justify-content-center align-items-center">
                            <svg class="svg-inline--fa fa-plus fa-w-14 fa-3x" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>
                            </div>
                        </div>
                    </div>
                <div className="col-md-6 col-lg-4 mb-5">
                <div className="portfolio-item mx-auto position-relative" onClick={this.show6} data-toggle="modal" data-target="#portfolioModal1">
                            <img className="img-fluid" src="https://routeegypt.com/start-react/assets/img/portfolio/submarine.png" alt=""/>
                            <div className="content-layer d-flex justify-content-center align-items-center">
                            <svg class="svg-inline--fa fa-plus fa-w-14 fa-3x" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                </section>
            </div>
        );
    }
}

export default Portfolio;