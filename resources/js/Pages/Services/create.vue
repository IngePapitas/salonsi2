<template>
    <AppLayout
        title="Crear Servicio"
        icon="fa-solid fa-plus">
        
        <div class="mt-4 bg-white shadow-md p-4 rounded-lg">
            <form @submit.prevent="submit" class="flex flex-col gap-4">

                <FloatLabel variant="on">
                    <InputText id="name" v-model="service.name" autocomplete="off" />
                    <label for="name">Nombre de servicio</label>
                </FloatLabel>

                <div class="grid grid-cols-2 gap-4">
                    <FloatLabel variant="on">
                        <InputText id="price" v-model="service.price" autocomplete="off" class="w-full"/>
                        <label for="price">Precio</label>
                    </FloatLabel>
                    
                    <FloatLabel variant="on">
                        <InputText id="discount_price" v-model="service.discount_price" autocomplete="off" class="w-full"/>
                        <label for="discount_price">Precio de descuento</label>
                    </FloatLabel>
                </div>

                <div class="flex items-center gap-2">
                    <Checkbox v-model="service.has_discount" inputId="has_discount" name="has_discount" binary="true" />
                    <label for="has_discount" class="font-semibold text-sm opacity-65 text-slate-600"> Servicio en descuento </label>
                </div>

                <input type="file" name="image" id="image" accept="image/*" class="w-full" @change="handleImageChange"/> 

                <img :src="service.image_path" v-if="service.image_path" alt="">

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
    import { Button, FloatLabel, InputText, Checkbox, useToast } from 'primevue';
    import { onMounted, ref } from 'vue';
    import { router } from '@inertiajs/vue3';

    const props = defineProps({
        service: {
            type: Object,
            default: () => ({}),
        },
    });

    const toast = useToast();

    const service = ref(props.service);
    const selectedImage = ref(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            selectedImage.value = file;
            reader.onload = (e) => {
                service.value.image_path = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    };

    const submit = () => {
        const formData = new FormData();
        formData.append('name', service.value.name);
        formData.append('price', service.value.price);
        formData.append('discount_price', service.value.discount_price);
        formData.append('has_discount', service.value.has_discount ? 1 : 0);
        if(service.value.id) {
            formData.append('id', service.value.id);
        }

        if (selectedImage.value) {
            formData.append('image', selectedImage.value)
        }

        axios.post(route('services.store'), formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => {
            if (response.status == 200) {
                toast.add({ severity: 'success', summary: 'Éxito', detail: 'Servicio guardado correctamente', life: 3000 });
                service.value.id = response.data.id;
            } else {
                toast.add({ severity: 'error', summary: 'Error', detail: 'Error al guardar el servicio', life: 3000 });
            }
        }).catch((error) => {
            console.error(error)
        })
    };

    onMounted(() => {
        if(service.value && service.value.has_discount == 1) {
            service.value.has_discount = true;
        } else {
            service.value.has_discount = false;
        }
    })
</script>