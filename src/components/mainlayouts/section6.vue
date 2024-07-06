<script setup>

</script>

<template>
   <section class="section-6">
       <img class="section-6-banner" src="@/assets/images/heading-bg-02.jpg" alt="">
       <h3 class="section-6-text-1">{{ $t('Book Prefered Deal Here') }}</h3>
       <div class="section-6-linear"></div>
       <h4 class="section-6-text-2">{{ $t('Make Your Reservation') }}</h4>
       <a  class="section-6-btn" href="#" id="contact">{{ $t('Discover More') }}</a>
       <div class="section-6-contact">
        <div class="section-6-contact-card" data-aos="flip-up">
            <img src="@/assets/icon/phone.svg" alt="">
           <p class="section-6-contact-card-text">{{ $t('Make a Phone Call') }}</p>
           <a class="section-6-contact-card-btn" href="">+998 99 299 99 96</a>
         </div>
         <div class="section-6-contact-card" data-aos="flip-up">
            <img src="@/assets/icon/email.svg" alt="">
           <p class="section-6-contact-card-text">{{ $t('Contact Us via Email') }}</p>
           <a class="section-6-contact-card-btn" href="">zamonbiznestour@mail.ru</a>
         </div>
         <div class="section-6-contact-card" data-aos="flip-up">
            <img src="@/assets/icon/location.svg" alt="">
           <p class="section-6-contact-card-text">{{ $t('Visit Our Offices') }}</p>
           <a class="section-6-contact-card-btn" href="">15/25, Chilanzar - 9, Tashkent city</a>
         </div>
       </div>
     </section>
</template>



<style>

</style>