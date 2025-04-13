<template>
    <div class="flex gap-2 bg-black p-1">
        <a v-for="(socialNetwork, index) in socialNetworks" :key="index" 
            class="flex items-center rounded-full p-1.5 border border-white
            hover:bg-opacity-10 transition duration-300 text-white
            cursor-pointer"
            :style="{ '--hover-color': socialNetwork.color }"
            :class="{ 'hover:bg-[var(--hover-color)] hover:border-[var(--hover-color)]': true }">
            <i :class="socialNetwork.icon"></i> 
        </a>
    </div>
</template>
<script setup>
import { ref } from 'vue';

    const socialNetworks = ref([
        {
            'name' : 'Facebook',
            'icon' : 'fa-brands fa-facebook',
            'url' : 'https://www.facebook.com/',
            'color' : '#3b5998',
        },
        {
            'name' : 'Twitter',
            'icon' : 'fa-brands fa-twitter',
            'url' : 'https://twitter.com/',
            'color' : '#1DA1F2',
        },
        {
            'name' : 'Instagram',
            'icon' : 'fa-brands fa-instagram',
            'url' : 'https://www.instagram.com/',
            'color' : '#C13584',
        },
        {
            'name' : 'LinkedIn',
            'icon' : 'fa-brands fa-linkedin-in',
            'url' : 'https://www.linkedin.com/',
            'color' : '#0077B5',
        }
    ])
    
</script>