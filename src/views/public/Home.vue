<template lang="">
    <div class="container-fluid">
        <div class="entete">
            <div class="entete-content">
                
                <div class="home-details">
                        
                    <div class="home-text">
                        <h2 class="homeTitle">Bienvenue sur Nyama</h2>
                        <h4 class="homeSubtitle">Passez vos commandes de repas <br> Et faites vous livrer</h4>
                    </div>
                
                    <input type="text" placeholder="Rechercher un restaurant"/>
                    <button class="button">Rechercher</button>
                </div> 
            </div>
            
        </div>
        <br><br><br>
        
        <div class="row row-cols-1 row-cols-md-2 g-4">
            <div class="col">
                <div class="card">
                <img src="../nyama_image/image2.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h4 class="card-title">Restaurants</h4>
                </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                <img src="../nyama_image/image6.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h4 class="card-title">Super marché</h4>
                </div>
                </div>
            </div>
  
        </div>
        <br><br><br>

        <div class="slide-container swiper">
            <div class="slide-content">
                <div class="card-wrapper swiper-wrapper">
                    <div class="card swiper-slide">
                        <div class="image-content">
                            <span class="overlay"></span>

                            <div class="card-image">
                                <img src="../nyama_image/image1.jpg" alt="" class="card-img">
                            </div>
                        </div>

                        <div class="card-content">
                            <h2 class="name">Restaurant</h2>
                            <p class="description">The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>

                            <button class="button">View More</button>
                        </div>
                    </div>
                    <div class="card swiper-slide">
                        <div class="image-content">
                            <span class="overlay"></span>

                            <div class="card-image">
                                <img src="../nyama_image/image2.jpg" alt="" class="card-img">
                            </div>
                        </div>

                        <div class="card-content">
                            <h2 class="name">Restaurant</h2>
                            <p class="description">The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>

                            <button class="button">View More</button>
                        </div>
                    </div>
                    <div class="card swiper-slide">
                        <div class="image-content">
                            <span class="overlay"></span>

                            <div class="card-image">
                                <img src="../nyama_image/image3.jpg" alt="" class="card-img">
                            </div>
                        </div>

                        <div class="card-content">
                            <h2 class="name">Restaurant</h2>
                            <p class="description">The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>

                            <button class="button">View More</button>
                        </div>
                    </div>
                    <div class="card swiper-slide">
                        <div class="image-content">
                            <span class="overlay"></span>

                            <div class="card-image">
                                <img src="../nyama_image/image4.jpg" alt="" class="card-img">
                            </div>
                        </div>

                        <div class="card-content">
                            <h2 class="name">Restaurant</h2>
                            <p class="description">The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>

                            <button class="button">View More</button>
                        </div>
                    </div>
                    <div class="card swiper-slide">
                        <div class="image-content">
                            <span class="overlay"></span>

                            <div class="card-image">
                                <img src="../nyama_image/image5.jpg" alt="" class="card-img">
                            </div>
                        </div>

                        <div class="card-content">
                            <h2 class="name">Restaurant</h2>
                            <p class="description">The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>

                            <button class="button">View More</button>
                        </div>
                    </div>
                    <div class="card swiper-slide">
                        <div class="image-content">
                            <span class="overlay"></span>

                            <div class="card-image">
                                <img src="../nyama_image/image6.jpg" alt="" class="card-img">
                            </div>
                        </div>

                        <div class="card-content">
                            <h2 class="name">Restaurant</h2>
                            <p class="description">The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit.</p>

                            <button class="button">View More</button>
                        </div>
                    </div>
                   
                    
                </div>
            </div>

            <div class="swiper-button-next swiper-navBtn"></div>
            <div class="swiper-button-prev swiper-navBtn"></div>
            <div class="swiper-pagination"></div>
        </div>
        
        
    </div>
</template>


<script>
    export default {
    
    }

</script>


<style scoped>

    /*Entete */
    .home-details{
        position: absolute;
        top: 50%;
        left: 50%;
        z-index: 100;
        transform: translate(-50%, -50%);
        display: grid;
        justify-items: center;
        width: 100%;
        row-gap: 4rem; 
        
    }

    .homeSubtitle{
        text-align: center;
        font-size: 1.6rem;
        color: #FFF;
    }
    .homeTitle{
        text-align: center;
        font-size: 3.5rem;
        color: #FFF;
        font-weight: 600;
    }

    .entete-content {
        height: 600px;
        width: 100%;
        position: relative;
        background-image: url("../nyama_image/image1.jpg");
        background-size: cover;
    }

    input{
        font-family: 'Poppins', sans-serif;
        font-size: 1.3rem;
        font-weight: 200;
        width: 350px;
        height: 40px;
        color: #333;
        border-radius: 8px;
        border: none;
    }
    
        /*Slider */
        .slide-container{
    max-width: 1120px;
    width: 100%;
    padding: 40px 0;
    }
    .slide-content{
    margin: 0 40px;
    overflow: hidden;
    border-radius: 25px;
    }
    .card{
    border-radius: 25px;
    background-color: #FFF;
    }
    .image-content,
    .card-content{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 14px;
    }
    .image-content{
    position: relative;
    row-gap: 5px;
    padding: 25px 0;
    }
    .overlay{
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: #4070F4;
    border-radius: 25px 25px 0 25px;
    }
    .overlay::before,
    .overlay::after{
    content: '';
    position: absolute;
    right: 0;
    bottom: -40px;
    height: 40px;
    width: 40px;
    background-color: #4070F4;
    }
    .overlay::after{
    border-radius: 0 25px 0 0;
    background-color: #FFF;
    }
    .card-image{
    position: relative;
    height: 150px;
    width: 150px;
    border-radius: 50%;
    background: #FFF;
    padding: 3px;
    }
    .card-image .card-img{
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 50%;
    border: 4px solid #4070F4;
    }
    .name{
    font-size: 18px;
    font-weight: 500;
    color: #333;
    }
    .description{
    font-size: 14px;
    color: #707070;
    text-align: center;
    }
    .button{
    border: none;
    font-size: 16px;
    color: #FFF;
    padding: 8px 16px;
    background-color: #4070F4;
    border-radius: 6px;
    margin: 14px;
    cursor: pointer;
    transition: all 0.3s ease;
    }
    .button:hover{
    background: #265DF2;
    }

    .swiper-navBtn{
    color: #6E93f7;
    transition: color 0.3s ease;
    }
    .swiper-navBtn:hover{
    color: #4070F4;
    }
    .swiper-navBtn::before,
    .swiper-navBtn::after{
    font-size: 35px;
    }
    .swiper-button-next{
    right: 0;
    }
    .swiper-button-prev{
    left: 0;
    }
    .swiper-pagination-bullet{
    background-color: #6E93f7;
    opacity: 1;
    }
    .swiper-pagination-bullet-active{
    background-color: #4070F4;
    }

    @media screen and (max-width: 768px) {
    .slide-content{
        margin: 0 10px;
    }
    .swiper-navBtn{
        display: none;
    }
    }
</style>