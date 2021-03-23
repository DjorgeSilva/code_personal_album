import React from 'react'
import { Container } from "./SliderElements"
import { Carousel } from "react-bootstrap"
import slider1 from "../../img/slider1.jpeg"
import slider2 from "../../img/slider2.jpeg"
import slider from "../../img/slider.jpeg"
import slider3 from "../../img/slider3.jpeg"


export const Slider = () => {
    return (
        <Container>

            <Carousel className="slider">

                <Carousel.Item interval={2000} style={{ maxWidth: "100vw", maxHeight: "100vh" }} className="itemSlider">
                    <div className="item">
                        <img
                            className="d-block w-100"
                            src={slider}
                            alt="First slide"
                            style={{ maxWidth: "100vw", minHeight: "100vh", objectFit: "cover" }}
                        />
                    </div>
                    <Carousel.Caption style={{ top: "50%", transform: "translateY(-50%)", bottom: "initial" }}>
                        <div className="info-txt-slider">
                            <h3>Sua coleção pessoal</h3>
                            <button>Upload imagem</button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>



                <Carousel.Item interval={2000} style={{ maxWidth: "100vw", maxHeight: "100vh" }} className="itemSlider">
                    <div className="item">
                        <img
                            className="d-block w-100"
                            src={slider1}
                            alt="First slide"
                            style={{ maxWidth: "100vw", minHeight: "100vh", objectFit: "cover" }}
                        />
                    </div>
                    <Carousel.Caption style={{ top: "50%", transform: "translateY(-50%)", bottom: "initial" }}>
                        <div className="info-txt-slider">
                            <h3>Armazene suas fotos na nuvem</h3>
                            <button>Upload imagem</button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>




                <Carousel.Item interval={2000} style={{ maxWidth: "100vw", maxHeight: "100vh" }} className="itemSlider">
                    <div className="item">
                        <img
                            className="d-block w-100"
                            src={slider3}
                            alt="First slide"
                            style={{ maxWidth: "100vw", minHeight: "100vh", objectFit: "cover" }}
                        />
                    </div>
                    <Carousel.Caption style={{ top: "50%", transform: "translateY(-50%)", bottom: "initial" }}>
                        <div className="info-txt-slider">
                            <h3>Sua Melhor Foto</h3>
                            <button>Upload imagem</button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        </Container>
    )
}
