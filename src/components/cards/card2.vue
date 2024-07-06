<script setup>
const props =defineProps({
    info2:{
        type:Object,
        required:true
    }
})


</script>


<template>
    <div class="card">
        <div class="card__container">
            <img class="card__container-images" :src="info2?.photos" alt="">
           <div class="card__container-dates">
               <h3 class="card__container-dates-country">{{info2?.name}}<span>{{info2?.price}}</span></h3>
                <div class="card__container-dates-check"><img src="@/assets/icon/team.svg" alt=""> <span>{{info2?.check}} {{ $t('Check ins') }}</span></div>
                 <div class="card__container-dates-linear"></div>
                <h4>{{ $t('Benefits of our Visa Support Service:') }}</h4>
                <div class="card__container-dates-check"><img :src="info2?.icon1" alt=""> <span>{{ $t('Best Prices') }}</span></div>
                <div class="card__container-dates-check"><img :src="info2?.icon2" alt=""> <span>{{ $t('Short Processing Time') }}</span></div>
                <div class="card__container-dates-check"><img :src="info2?.icon3" alt=""> <span>{{ $t('Trustworthy Assistance') }}</span></div>
                <a href="#contact" class="card__container-dates-btn">{{$t('Make A Reservation')}}</a>
           </div>
        </div>
    </div>
  
</template>



<style>

</style>