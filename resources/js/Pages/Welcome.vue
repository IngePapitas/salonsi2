<script setup>
import { Head, Link } from '@inertiajs/vue3';
import SocialNetworksBar from '@/Components/Welcome/SocialNetworksBar.vue';
import NavBar from '@/Components/Welcome/Header/NavBar.vue';
defineProps({
    canLogin: {
        type: Boolean,
    },
    canRegister: {
        type: Boolean,
    },
    laravelVersion: {
        type: String,
        required: true,
    },
    phpVersion: {
        type: String,
        required: true,
    },
    categories: {
        type: Array,
        default: () => []
    },
    services: {
        type: Array,
        default: () => []
    },
    combos: {
        type: Array,
        default: () => []
    },
});

</script>

<template>
    <SocialNetworksBar />
    <NavBar />

    <div class="flex justify-center">
        <div class="container max-w-4xl">
            <img src="https://static.wixstatic.com/media/e989ec61797c4dd390cf89a60e2c8ace.jpg/v1/fill/w_1040,h_718,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/e989ec61797c4dd390cf89a60e2c8ace.jpg" alt="">
        </div>
    </div>

    <div class="flex justify-center">
        <div class="container max-w-5xl">
            <h2 class="font-semibold text-center font-bebas text-3xl my-16">Nuestros servicios:</h2>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div v-for="service in services" :key="service.id" class="bg-white shadow-md rounded-lg p-4">
                    <img :src="service.image_path" alt="" class="w-full h-48 object-cover rounded-t-lg">
                    <h3 class="font-semibold text-xl mt-2">{{ service.name }}</h3>
                    <p class="text-gray-800 font-bold mt-2" v-if="!service.has_discount">BOB. {{ service.price }}</p>
                    <div class="text-gray-800 font-bold mt-2" v-else>
                        <p>BOB. {{ service.discount_price }}</p>
                        <p class="text-sm opacity-65">Antes BOB. {{ service.price }}</p> 
                    </div>
                </div>
            </div>

            <h2 class="font-semibold text-center font-bebas text-3xl my-16">Nuestros Combos:</h2>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div v-for="combo in combos" :key="combo.id" class="bg-white shadow-md rounded-lg p-4">
                    <img :src="combo.image_path" alt="" class="w-full h-48 object-cover rounded-t-lg">
                    <h3 class="font-semibold text-xl mt-2">{{ combo.name }}</h3>
                    <p class="text-gray-800 font-bold mt-2" v-if="!combo.has_discount">BOB. {{ combo.price }}</p>
                    <div class="text-gray-800 font-bold mt-2" v-else>
                        <p>BOB. {{ combo.discount_price }}</p>
                        <p class="text-sm opacity-65">Antes BOB. {{ combo.price }}</p> 
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
