<script setup>

</script>



<template>
      <section class="section-3" id="about">
    <h3 class="section-3-title">{{ $t('Explore Destinations With Ease') }}</h3>
    <p  class="section-3-info">{{ $t('Find the best deals on railway and airplane tickets in each city, carefully selected for you.') }}</p>
    <div class="section-3-card" data-aos="fade-left"  data-aos-offset="150">
        <img src="@/assets/images/afr.jpg" alt="">
        <div class="section-3-card-info">
           <h3 class="section-3-card-info-title">{{ $t('Cheap Railway Tickets With Us') }} <span>{{ $t('Whole world') }}</span></h3>
           <p class="section-3-card-info-desciption">{{ $t(`Embark on a railway adventure and explore destinations worldwide. Whether it's the picturesque landscapes, bustling cities, or cultural gems, our rail services offer a unique and comfortable way to traverse the globe. Immerse yourself in the beauty of different cultures, all accessible through our extensive railway network.`) }}</p>
           <a href="#" class="section-3-card-info-btn">{{ $t('Explore More') }}</a>
        </div>
    </div>
    <div class="section-3-linear">

    </div>
    <div class="section-3-card" data-aos="fade-right"  data-aos-offset="150">
        <img src="@/assets/images/airplane.jpg" alt="">
        <div class="section-3-card-info">
           <h3 class="section-3-card-info-title">{{ $t('Discover Exciting Air Travel Deals') }} <span>{{$t('Global Destinations')}}</span></h3>
           <p class="section-3-card-info-desciption">{{ $t(`Embark on a railway adventure and explore destinations worldwide. Whether it's the picturesque landscapes, bustling cities, or cultural gems, our rail services offer a unique and comfortable way to traverse the globe. Immerse yourself in the beauty of different cultures, all accessible through our extensive railway network.`) }}</p>
           <a href="#" class="section-3-card-info-btn">{{ $t('Explore More') }}</a>
        </div>
    </div>
     </section>
</template>



<style>

</style>