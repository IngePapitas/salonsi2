<script setup>
import { ref, defineProps } from 'vue';
import { usePage } from '@inertiajs/vue3';
import SideNavItem from '@/Components/SideNavItem.vue';
import { Toast } from 'primevue';

const props = defineProps({
    title: String,
    icon: String,
});

const page = usePage();

const adminRoute = "admin";
const navItems = [
    {
        name: "Dashboard",
        icon: "fa-solid fa-house",
        route: "dashboard",
    },
    {
        name: "Gestionar usuarios",
        icon: "fa-solid fa-users",
        route: `${adminRoute}.users.index`,
    },
    {
        name : 'Servicios',
        icon : 'fa-solid fa-droplet',
        route : 'services.index'
    },
    {
        name : 'Combos',
        icon : 'fa-solid fa-box',
        route : 'combos.index'
    }
];

const logout = () => {
    router.post(route("logout"));
};
</script>

<template>
    <Toast />

    <div class="flex flex-col min-h-screen h-auto bg-gray-100">
        <div
            class="bg-white shadow w-full p-2 flex items-center justify-between md:hidden"
        >
            <div class="flex">
                <a href="{{ route('dashboard') }}" class="flex items-center">
                    <h2 class="font-bold text-xl ml-2 hidden md:inline">
                        Cine
                    </h2>
                </a>
            </div>

            <div class="flex">
                <a href="#" class="p-2">
                    <span class="text-white hidden md:inline">USERNAME</span>
                </a>
                <div class="md:hidden flex items-center mx-2">
                    <button
                        id="menuBtn"
                        class="rounded-full p-2 text-gray-900 bg-gray-200"
                    >
                        <i class="fas fa-bars text-lg"></i>
                        <!-- Ícono de menú -->
                    </button>
                </div>
            </div>
        </div>

                <div class=" *:text-center mb-4 rounded mt-2">
                    <span class="block font-semibold mb-1">
                        {{ page.props.auth.user.username }}
                    </span>
                    <div class="mt-2 rounded bg-gradient-to-tr from-slate-900 to-slate-700
                    shadow-md py-2 text-white font-semibold w-full uppercase">
                        ROL
                    </div>
                </div>
            </a>

            <div class="bg-gradient-to-r p-0 mb-8 from-slate-300 to-slate-500 h-px py-0"></div>
            <div class="*:py-2 *:pl-4 *:pr-6 *:my-2 *:rounded-l-lg *:transition *:duration-200 *:block">

                <SideNavItem v-for="item in navItems" :key="item.route"
                    :name='item.route' :icon='item.icon' >
                    {{ item.name }}
                </SideNavItem>
            </div>

            <form method="POST" 
                :action="route('logout')">
                <button class="block text-gray-500 py-2  px-4 my-2 rounded transition duration-200 hover:bg-gradient-to-r hover:from-slate-900 hover:to-slate-900 hover:text-white mt-auto" type="submit">
                    <i class="fa-solid fa-right-from-bracket "></i><span class=" ml-2">Cerrar sesión</span>
                </button>
            </form>


            <div class="bg-gradient-to-r from-slate-300 to-slate-500 h-px mt-2"></div>
        </nav>
    </div>

    <div class="flex-1 p-4 w-full md:w-1/2">
        <div class="mt-1  flex flex-wrap space-x-0 space-y-2 md:space-x-4 md:space-y-0">
            <div class="flex-1 pt-4 md:p-4 w-full flex flex-col h-full">
                <h1 class="text-2xl font-bold opacity-75"><i :class="props.icon + ' mr-1'"></i> {{ props.title }}</h1>
                <slot />
            </div>
        </div>
    </div>
</template>
