import {Conteudo} from './Conteudo';
import React from 'react';
import './Conteudo.module.css';
// import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function Home() {
  return (
<div>

<div id="carouselExampleCaptions" class="carousel slide" >
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://64.media.tumblr.com/91a2b16f6d68cb4fa0ea89d82477fb20/11a93665ce417e1c-c8/s1280x1920/dd778603ab36e840576640f1641c93dc9d79ab25.gif" class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        
        
      </div>
    </div>
    <div class="carousel-item">
    <img src="https://64.media.tumblr.com/91a2b16f6d68cb4fa0ea89d82477fb20/11a93665ce417e1c-c8/s1280x1920/dd778603ab36e840576640f1641c93dc9d79ab25.gif" class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
       
        
      </div>
    </div>
    <div class="carousel-item">
    <img src="https://64.media.tumblr.com/91a2b16f6d68cb4fa0ea89d82477fb20/11a93665ce417e1c-c8/s1280x1920/dd778603ab36e840576640f1641c93dc9d79ab25.gif" class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
       
        
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

    <div>
      <Conteudo />

    </div>
  </div>



  );
}


export default Home;