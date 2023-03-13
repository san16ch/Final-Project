import React from 'react'

function Slider() {
  return (
    <div className='d-flex justify-content-center' >
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
            <img src="https://cdn.pixabay.com/photo/2019/07/24/11/46/barley-4359986_1280.jpg" class="d-block " alt="..." style={{height :"100vh" ,width:"98vw"}}/>
            </div>
            <div class="carousel-item">
            <img src="https://cdn.pixabay.com/photo/2018/06/10/17/39/market-3466906_1280.jpg" class="d-block " alt="..." style={{height :"100vh" ,width:"98vw"}}/>
            </div>
            <div class="carousel-item">
            <img src="https://wallpaperaccess.com/full/6443448.jpg" class="d-block " alt="..." style={{height :"100vh" ,width:"98vw"}}/>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
        </div>
    </div>
  )
}

export default Slider