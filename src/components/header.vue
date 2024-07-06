<script setup>
import Navbar from './Navbar/Navbar.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
const modules = [Navigation, Autoplay]
// :autoplay="{
//       delay: 2500
//     }"
</script>

<template>
  <header class="header">
  <div class="header__container">


 <Navbar/>
<swiper loop :navigation="true" :modules="modules" class="mySwiper"  
    >
 <swiper-slide class="swiper-slide">
     <div class="swiper-slide__container">
        <p class="swiper-slide__container-p">{{ $t('Take a Glimpse Into The Beautiful City Of:')}}</p>
    <h1 class="swiper-slide__container-h1">{{ $t('Istanbul') }}</h1>
    <a href="#contact" class="swiper-slide__container-btn">{{ $t('Go There') }}</a>
    <div class="items">
        <div class="items-dates">

    <div class="items-dates-card">
    <div class="items-dates-card-data">
        <div class="items-dates-card-data-icon">
            <img  class="items-dates-card-data-icon-wl" src="@/assets/icon/user.svg" alt="">
        </div>
            <p>{{ $t('Population:') }}<span>8.66 M</span></p>
    </div>
    </div>
    <div class="items-dates-card">
    <div class="items-dates-card-data">
        <div class="items-dates-card-data-icon">
            <img class="items-dates-card-data-icon-wl" src="@/assets/icon/global.svg" alt="">
        </div>
            <p>{{ $t('Territory:') }}<span>513.120 KM2</span></p>
    </div>
    </div>
    <div class="items-dates-card">
    <div class="items-dates-card-data">
        <div class="items-dates-card-data-icon">
            <img class="items-dates-card-data-icon-wl" src="@/assets/icon/home.svg" alt="">
        </div>
            <p>{{ $t('AVG Price:') }}<span>$165.450</span></p>
    </div>
    </div>
    <a href="#contact" class="items-dates-btn">{{ $t('Explore') }}</a>
    </div>
   
    </div>
     </div>

    <div class="fonblack"></div>
    <img class="fonswiper" src="@/assets/images/istanbul.jpg" alt="">

</swiper-slide>
<swiper-slide class="swiper-slide">
    <div class="swiper-slide__container">


    <p class="swiper-slide__container-p">{{ $t('Take a Glimpse Into The Beautiful City Of:')}}</p>
    <h1 class="swiper-slide__container-h1">{{ $t('Sharm El-Sheikh') }}</h1>
    <a href="#contact" class="swiper-slide__container-btn">{{ $t('Go There') }}</a>
    <div class="items">
        <div class="items-dates">

    <div class="items-dates-card">
    <div class="items-dates-card-data">
        <div class="items-dates-card-data-icon">
            <img  class="items-dates-card-data-icon-wl" src="@/assets/icon/user.svg" alt="">
        </div>
            <p>{{ $t('Population:') }}<span>8.66 M</span></p>
    </div>
    </div>
    <div class="items-dates-card">
    <div class="items-dates-card-data">
        <div class="items-dates-card-data-icon">
            <img class="items-dates-card-data-icon-wl" src="@/assets/icon/global.svg" alt="">
        </div>
            <p>{{ $t('Territory:') }}<span>513.120 KM2</span></p>
    </div>
    </div>
    <div class="items-dates-card">
    <div class="items-dates-card-data">
        <div class="items-dates-card-data-icon">
            <img class="items-dates-card-data-icon-wl" src="@/assets/icon/home.svg" alt="">
        </div>
            <p>{{ $t('AVG Price:') }}<span>$165.450</span></p>
    </div>
    </div>
    <a href="#contact" class="items-dates-btn">{{ $t('Explore') }}</a>
    </div>
   
    </div>
</div>
    <div class="fonblack"></div>
    <img class="fonswiper" src="@/assets/images/sharm.jpg" alt="">
</swiper-slide>
<swiper-slide class="swiper-slide">
    <div class="swiper-slide__container">
    <p class="swiper-slide__container-p">{{ $t('Take a Glimpse Into The Beautiful City Of:')}}</p>
    <h1 class="swiper-slide__container-h1">{{ $t('Dubai') }}</h1>
    <a href="#contact" class="swiper-slide__container-btn">{{ $t('Go There') }}</a>
    <div class="items">
        <div class="items-dates">

    <div class="items-dates-card">
    <div class="items-dates-card-data">
        <div class="items-dates-card-data-icon">
            <img  class="items-dates-card-data-icon-wl" src="@/assets/icon/user.svg" alt="">
        </div>
            <p>{{ $t('Population:') }}<span>8.66 M</span></p>
    </div>
    </div>
    <div class="items-dates-card">
    <div class="items-dates-card-data">
        <div class="items-dates-card-data-icon">
            <img class="items-dates-card-data-icon-wl" src="@/assets/icon/global.svg" alt="">
        </div>
            <p>{{ $t('Territory:') }}<span>513.120 KM2</span></p>
    </div>
    </div>
    <div class="items-dates-card">
    <div class="items-dates-card-data">
        <div class="items-dates-card-data-icon">
            <img class="items-dates-card-data-icon-wl" src="@/assets/icon/home.svg" alt="">
        </div>
            <p>{{ $t('AVG Price:') }}<span>$165.450</span></p>
    </div>
    </div>
   <a href="#contact" class="items-dates-btn">{{ $t('Explore') }}</a></div>


    
   
    </div>

</div>
    <div class="fonblack"></div>
    <img class="fonswiper" src="@/assets/images/Dubaiwebs.jpg" alt="">
</swiper-slide>
  </swiper>


</div>
  </header>
</template>


<style>

</style>