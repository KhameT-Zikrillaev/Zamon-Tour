<script setup>
import card from "@/components/cards/card.vue";
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import datafiles from '@/views/DataFiles1.js'
const breakpoints={
      '400': {
        slidesPerView: 1,
        spaceBetween: 0,  
      },  
      '768': {
        slidesPerView: 2,
        spaceBetween: 10,
      },

      '1240': {
        slidesPerView: 3,
        spaceBetween: 5,
      },
      '1440': {
        slidesPerView: 3,
        spaceBetween: 10,
      },
    }
const modules = [Navigation]

</script>


<template>
   <section class="section-1" id="tours">
      
      <h3 class="section-1-title" data-aos="fade-left" data-aos-offset="50">{{ $t('Best Weekly Offers In Each City') }}</h3>
         <p  class="section-1-info" data-aos="fade-right" data-aos-offset="50">{{ $t('Discover the best weekly offers in each city, curated just for you. Immerse yourself in a world of savings and indulge in unparalleled experiences') }}</p>

        



  <swiper class="corusel-1" 
:slides-per-view="1"
:space-between="80"
:breakpoints="breakpoints"
:navigation="true" 
:modules="modules"
data-aos="zoom-in"
data-aos-offset="50"
>
<swiper-slide v-for="item in datafiles" :key="item">
  <card :info1="item"/>
</swiper-slide>


</swiper>

</section>


</template>


<style>

</style>