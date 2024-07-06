<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import {EffectCards} from 'swiper/modules';
import 'swiper/css/effect-cards';
const modules = [EffectCards]
</script>

<template>
     <section class="section-5">
      <h3 class="section-5-title" data-aos="fade-right" data-aos-offset="10">{{ $t('Best Locations') }}</h3>
      <p  class="section-5-info" data-aos="fade-left"  data-aos-offset="10">{{ $t('Discover the best offers in each city, curated just for you. Immerse yourself in a world of savings and indulge in unparalleled experiences.') }}</p>
      <div class="section-5__container">
        
        <swiper
    :effect="'cards'"
    :grabCursor="true"
    :modules="modules"
   class="swiper mySwiper2"
  >
    <swiper-slide class="mySwiper2-card"><img src="@/assets/images/offers-01.jpg" alt=""></swiper-slide>
    <swiper-slide class="mySwiper2-card"><img src="@/assets/images/offers-02.jpg" alt=""></swiper-slide>
    <swiper-slide class="mySwiper2-card"><img src="@/assets/images/deals-02.jpg" alt=""></swiper-slide>
    <swiper-slide class="mySwiper2-card"><img src="@/assets/images/deals-04.jpg" alt=""></swiper-slide>
    <swiper-slide class="mySwiper2-card"><img src="@/assets/images/cand.jpg" alt=""></swiper-slide>
  </swiper>
      </div>
  
     </section>
</template>



<style>

</style>