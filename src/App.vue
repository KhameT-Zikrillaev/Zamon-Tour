<script setup>
import headerlayout from "./components/header.vue";
import mainlayout from "./components/main.vue";
import footerlayout from "./components/footer.vue";
import { useCounterStore } from '@/stores/counter';
const Counter = useCounterStore()
</script>

<template>

<div class="wrapper">
    <div class="send " :class="{'activesend'  : Counter.send}">
        <h1 class="send__text">{{ $t('It was successful') }}</h1>
    </div>
<headerlayout/>
<mainlayout/>
<footerlayout/>





</div>



</template>

<style >

</style>
