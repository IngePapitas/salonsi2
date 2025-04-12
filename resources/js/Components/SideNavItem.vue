<template>
    <button 
        @click="goTo(name)" 
        :class="[
            'hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600 hover:text-white w-full text-start',
            isActive ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md' : ''
        ]"
    >
        <i :class="icon"></i>
        <span class="ml-2"><slot /></span>
    </button>
</template>

<script setup>
import { computed } from 'vue';
import { usePage, router } from '@inertiajs/vue3';

const props = defineProps({
    name: String, 
    icon: String  
});

const goTo = (name) => {
    router.visit(route(name));
};

const page = usePage();

const isActive = computed(() => page.url.startsWith(route(props.name).substring(1)));
</script>
