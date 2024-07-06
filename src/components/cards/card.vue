<script setup>
const props =defineProps({
    info1:{
        type:Object,
        required:true
    }
})


</script>


<template>
    <div class="card">
        <div class="card__container">
            <img class="card__container-images" :src="info1?.photos" alt="">
           <div class="card__container-dates">
               <h3 class="card__container-dates-country">{{info1?.name}}<span>{{info1?.price}}</span></h3>
                <div class="card__container-dates-check"><img src="@/assets/icon/team.svg" alt=""> <span>{{info1?.check}} {{ $t('Check ins') }}</span></div>
                 <div class="card__container-dates-linear"></div>
                <h4>{{ $t('Deal includes:') }}</h4>
                <div class="card__container-dates-check"><img :src="info1?.icon1" alt=""> <span>{{ $t('5 Days Trip > Hotel included') }}</span></div>
                <div class="card__container-dates-check"><img :src="info1?.icon2" alt=""> <span>{{ $t('Airplane Bill Included') }}</span></div>
                <div class="card__container-dates-check"><img :src="info1?.icon3" alt=""> <span>{{ $t('Daily Places Visit') }}</span></div>
                <a href="#contact" class="card__container-dates-btn">{{$t('Make A Reservation')}}</a>
           </div>
        </div>
    </div>
  
</template>



<style>

</style>