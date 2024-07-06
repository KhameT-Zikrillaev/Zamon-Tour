<script setup>
import { ref } from "vue"


const  burger= ref(false)
</script>




<template>
  <div class="nav">
    <div class="nav__container">
        <a href="" class="nav__container-logo"><img src="@/assets/icon/Logo.svg" alt=""></a>
        <div class="nav__container-link">
            <ul>
                <li><a href="#"><span></span>{{$t('Home')}}</a></li>
                <li><a href="#about"><span></span>{{$t('About')}}</a></li>
                <li><a href="#tours"><span></span>{{$t('Tours')}}</a></li>
                <li><a href="#contact"><span></span>{{$t('Contacts')}}</a></li>
            </ul>
        </div>
        <div class="nav__container-lenguage">
            <ul>
                <li><button class="btnleng"  @click="$i18n.locale = 'en'" ><span></span>{{$t('EN')}}</button></li>
                <li><button class="btnleng" @click="$i18n.locale = 'uz'"><span></span>{{$t('UZ')}}</button></li>
                <li><button class="btnleng" @click="$i18n.locale = 'ru'"><span></span>{{$t('RU')}}</button></li>
            </ul>
        </div>
        <div class="nav__container-browsers">
            <a href=""><img class="nav__container-browsers-img1" src="@/assets/icon/telegram.svg" alt=""></a>
            <a href=""><img class="nav__container-browsers-img2" src="@/assets/icon/instagram.svg" alt=""></a>
        </div>
        <div class="nav__burger" >
          <div @click="burger =!burger" class="nav__burger-btn" :class="{ 'activeburger': burger }">
            <span></span>
          </div>
          <div class="nav__burger-navigation" :class="{'activated' : burger}">
             <a href="" class="nav__burger-navigation-link">{{$t('Home')}}</a>
             <a href="#about" @click="burger=false" class="nav__burger-navigation-link">{{$t('About')}}</a>
             <a href="#tours" @click="burger=false" class="nav__burger-navigation-link">{{$t('Tours')}}</a>
             <a href="#contact" @click="burger=false"  class="nav__burger-navigation-link">{{$t('Contacts')}}</a>
             <button @click="$i18n.locale = 'en',burger=false" class="nav__burger-navigation-link-btnleng" >{{$t('EN')}}</button>
             <button @click="$i18n.locale = 'uz',burger=false" class="nav__burger-navigation-link-btnleng">{{$t('UZ')}}</button>
             <button @click="$i18n.locale = 'ru',burger=false" class="nav__burger-navigation-link-btnleng">{{$t('RU')}}</button>
             <a href="" class="nav__burger-navigation-link"><img  src="@/assets/icon/telegram2.svg" alt=""></a>
             <a href="" class="nav__burger-navigation-link"><img  src="@/assets/icon/instagram2.svg" alt=""></a>
          </div>
        </div>






    </div>
  </div>



</template>


<style>

</style>