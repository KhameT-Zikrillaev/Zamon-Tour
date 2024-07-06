<script setup>
import { ref } from 'vue';
const token = import.meta.env.VITE_TG_TOKEN
const chatId = import.meta.env.VITE_TG_CHATID
import { useCounterStore } from '@/stores/counter';
const Counter = useCounterStore()


const username = ref("");
const telephone = ref("");
const datatext = ref("")

const guesttext = ref("ex. 3 or 4 or 5")

const destinationtext = ref("NO")
const visatext = ref("NO")
function textguest (item){
  guesttext.value = item
}

function textVisa(item){
 visatext.value = item
}
function textDestination (item){
  destinationtext.value = item
}


function submit(){
    const fullMessage= `Name: ${username.value}, telephone: ${telephone.value}, dates: ${datatext.value}, Guest: ${guesttext.value} , Destination : ${destinationtext.value}, VISA : ${visatext.value} `;

    fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${fullMessage}`)
   username.value = "";
   telephone.value = "";
   datatext.value = "";
   Counter.send =true
   setTimeout(function(){
    Counter.send= false
    },4000);
}
</script>


<template>
     <section class="section-7">
      <div class="section-7-content">
       <div class="section-7-content-karta">
        <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2999.0129561856547!2d69.19756227656154!3d41.265053803573664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8a1b0c46af65%3A0x82d1d0a1630a1413!2zUFJPV0VCIC0g0YPRh9C10LHQvdGL0Lkg0YbQtdC90YLRgCDQsiDQotCw0YjQutC10L3RgtC1LiDQmtGD0YDRgdGLINCf0YDQvtCz0YDQsNC80LzQuNGA0L7QstCw0L3QuNGPLCDQnNCw0YDQutC10YLQuNC90LMg0LggU01NLCDQlNC40LfQsNC50L0g0LggM0Qt0LPRgNCw0YTQuNC60LAu!5e0!3m2!1sru!2s!4v1716427810278!5m2!1sru!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
       </div>
        <h3 class="section-7-content-text">{{ $t('Make Your') }} <span>{{ $t('Reservation') }}</span> {{ $t('Through This') }} <span>{{ $t('Form') }}</span></h3>



        <form method="POST" @submit.prevent="submit" class="form">
          <div class="input__grid">
            <div class="input__grid-card">
              <label for="">{{ $t('Your Name') }}</label>
              <input required type="text" v-model="username" placeholder="Ex. John Smith">
            </div>
           

            <div class="input__grid-card">
              <label for="">{{ $t('Your Phone Number') }}</label>
              <input required type="text" v-model="telephone" placeholder="Ex. +99899 0000 441">
            </div>

            <div class="input__grid-card">
              <label for="">{{ $t('Number Of Guests') }}</label>
              <select  @input="textguest($event.target.value)">
                  <option  value="ex. 3 or 4 or 5" >{{ $t('ex. 3 or 4 or 5') }}</option>
                  <option  value="1">1</option>
                  <option  value="2">2</option>
                  <option  value="3">3</option>
                  <option  value="4+">4+</option>
             </select>
            </div>
         
            <div class="input__grid-card">
              <label for="">{{ $t('Your Dates') }}</label>
              <input required v-model="datatext" type="date">
            </div>
          </div>
          <div class="form-country">
            <label for="">{{ $t('Choose Your Destination') }}</label>
              <select @input="textDestination($event.target.value)">
                <option  value="No" >{{ $t('Country') }}</option>
                  <option  value="Antaliya" >Antalya</option>
                  <option  value="Istanbul">Istanbul</option>
                  <option  value="Dubai">Dubai</option>
                  <option  value="Sharm EL-Sheikh">Sharm EL-Sheikh</option>
                  <option  value="Kuala Lumpur">Kuala Lumpur</option>
                  <option  value="Canada">Canada</option>
                  <option  value="England">England</option>
             </select>
          </div>
          <div class="form-country">
            <label for="">{{ $t('Choose Your Visa Support') }}</label>

              <select @input="textVisa($event.target.value)">
                  <option  value="No" >{{ $t('Country') }}</option>
                  <option  value="USA">USA</option>
                  <option  value="Europe">Europe</option>
                  <option  value="England">England</option>
                  <option  value="Japan">Japan</option>
                  <option  value="Oman">Oman</option>
                  <option  value="Saudi Arabia">Saudi Arabia</option>
                  <option  value="Hong Kong">Hong Kong</option>
             </select>
          </div>
           <!-- <h1 class="form__error" >Заполните полностью!</h1> -->
           <button type="submit" class="form__btn">{{ $t('Make Your Reservation Now') }}</button>
        </form> 











      </div>
      
     </section>
</template>



<style>

</style>