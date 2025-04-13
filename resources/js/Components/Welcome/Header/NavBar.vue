<template>
    <div class="sticky top-0 left-0 w-full z-50 bg-white shadow-md">
        <div class="grid grid-cols-2 w-full px-8 py-2">

            <div class="flex gap-8 items-center">
                <h1 class="font-bebas text-3xl">Salon de belleza</h1>
            </div>

           

            <UserInfoContainer />

        </div>
    </div>
</template>
<script setup>
import { defineProps } from 'vue';
import LogoCard from '@/Components/Welcome/Header/LogoCard.vue';
import UserInfoContainer from '@/Components/Welcome/Header/UserInfoContainer.vue';

const props = defineProps({
    categories: {
        type: Array,
        default: () => []
    },
});
</script>