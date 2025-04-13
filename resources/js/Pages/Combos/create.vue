<template>
    <AppLayout
        title="Crear Combo"
        icon="fa-solid fa-plus">
        
        <div class="mt-4 bg-white shadow-md p-4 rounded-lg">
            <form @submit.prevent="submit" class="flex flex-col gap-4">

                <FloatLabel variant="on">
                    <InputText id="name" v-model="combo.name" autocomplete="off" />
                    <label for="name">Nombre de combo</label>
                </FloatLabel>

                <div class="grid grid-cols-2 gap-4">
                    <FloatLabel variant="on">
                        <InputText id="price" v-model="combo.price" autocomplete="off" class="w-full"/>
                        <label for="price">Precio</label>
                    </FloatLabel>
                    
                    <FloatLabel variant="on">
                        <InputText id="discount_price" v-model="combo.discount_price" autocomplete="off" class="w-full"/>
                        <label for="discount_price">Precio de descuento</label>
                    </FloatLabel>
                </div>

                <div class="flex items-center gap-2">
                    <Checkbox v-model="combo.has_discount" inputId="has_discount" name="has_discount" binary="true" />
                    <label for="has_discount" class="font-semibold text-sm opacity-65 text-slate-600"> Combo en descuento </label>
                </div>

                <input type="file" name="image" id="image" accept="image/*" class="w-full" @change="handleImageChange"/> 

                <img :src="combo.image_path" v-if="combo.image_path" alt="">
                <MultiSelect
                    :loading="services.length == 0"
                    v-model="selectedServices"
                    :options="services"
                    optionLabel="name"
                    option-value="id"
                    placeholder="Seleccionar servicios"
                    display="chip"
                    filter
                    class="w-full"/>

                <div class="flex justify-end">
                    <Button
                        type="submit">
                        <i class="fa-solid fa-floppy-disk"></i>
                        Guardar
                    </Button>
                </div>
            </form>
        </div>
    </AppLayout>
</template>
<script setup>
    import AppLayout from '@/Layouts/AppLayout.vue';
    import { Button, FloatLabel, InputText, Checkbox, useToast, MultiSelect } from 'primevue';
    import { onMounted, ref } from 'vue';
    import { router } from '@inertiajs/vue3';

    const props = defineProps({
        combo: {
            type: Object,
            default: () => ({}),
        },
        services: {
            type: Array,
            default: () => [],
        },
    });

    const toast = useToast();

    const combo = ref(props.combo);
    const selectedImage = ref(null);

    const services = ref([]);
    const selectedServices = ref(props.services);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            selectedImage.value = file;
            reader.onload = (e) => {
                combo.value.image_path = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    };

    const submit = () => {
        const formData = new FormData();
        formData.append('name', combo.value.name);
        formData.append('price', combo.value.price);
        formData.append('discount_price', combo.value.discount_price);
        formData.append('has_discount', combo.value.has_discount ? 1 : 0);
        formData.append('services', JSON.stringify(selectedServices.value));

        if(combo.value.id) {
            formData.append('id', combo.value.id);
        }

        if (selectedImage.value) {
            formData.append('image', selectedImage.value)
        }

        axios.post(route('combos.store'), formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => {
            if (response.status == 200) {
                toast.add({ severity: 'success', summary: 'Éxito', detail: 'Combo guardado correctamente', life: 3000 });
                combo.value.id = response.data.id;
            } else {
                toast.add({ severity: 'error', summary: 'Error', detail: 'Error al guardar el Combo', life: 3000 });
            }
        }).catch((error) => {
            toast.add({ severity: 'error', summary: 'Error', detail: 'Error al guardar el Combo', life: 3000 });
        })
    };

    const fetchServices = async () => {
        const response = await axios.get(route('services.get-list'));

        if(response.status == 200)
        {
            services.value = response.data.services;
        } else {
            toast.add({ severity: 'error', summary: 'Error', detail: 'Error al obtener los servicios', life: 3000 });
        }
    }

    onMounted(() => {
        if(combo.value && combo.value.has_discount == 1) {
            combo.value.has_discount = true;
        } else {
            combo.value.has_discount = false;
        }

        fetchServices();
    })
</script>