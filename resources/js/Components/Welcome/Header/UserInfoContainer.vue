<template>
    <div class="flex gap-4 items-center text-lg justify-end">

        <Link
            :href="'login'"
                class="hover:text-gray-700 hover:scale-[1.1] transition
                    duration-150">
            <i class="fa-solid fa-user"></i>
        </Link>

    </div>
</template>
<script setup>
import { Link } from '@inertiajs/vue3';
</script>