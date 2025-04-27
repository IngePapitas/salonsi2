<template>
    <AppLayout title="Crear Servicio" icon="fa-solid fa-plus">
        <!-- <pre>{{ service }}</pre> -->
        <div class="mt-4 bg-white shadow-md p-4 rounded-lg">
            <form @submit.prevent="submit" class="flex flex-col gap-4">
                <FloatLabel variant="on">
                    <InputText
                        id="name"
                        v-model="service.name"
                        autocomplete="off"
                    />
                    <label for="name">Nombre de servicio</label>
                </FloatLabel>

                <!-- <pre>{{ props.employees }}</pre> -->

                <div class="grid grid-cols-2 gap-4">
                    <FloatLabel variant="on">
                        <InputText
                            id="price"
                            v-model="service.price"
                            autocomplete="off"
                            class="w-full"
                        />
                        <label for="price">Precio</label>
                    </FloatLabel>

                    <FloatLabel variant="on">
                        <InputText
                            id="discount_price"
                            v-model="service.discount_price"
                            autocomplete="off"
                            class="w-full"
                        />
                        <label for="discount_price">Precio de descuento</label>
                    </FloatLabel>

                    <FloatLabel variant="on">
                        <Select
                            id="specialist_id"
                            name="specialist_id"
                            v-model="service.specialist_id"
                            :options="props.employees"
                            optionValue="id"
                            optionLabel="name"
                            autocomplete="off"
                            class="w-full"
                        />
                        <label for="specialist">Especialista</label>
                    </FloatLabel>
                </div>

                <div class="flex items-center gap-2">
                    <Checkbox
                        v-model="service.has_discount"
                        inputId="has_discount"
                        name="has_discount"
                        binary="true"
                    />
                    <label
                        for="has_discount"
                        class="font-semibold text-sm opacity-65 text-slate-600"
                    >
                        Servicio en descuento
                    </label>

                    <Checkbox
                        v-model="service.has_available"
                        inputId="has_available"
                        name="has_available"
                        binary="true"
                    />
                    <label
                        for="has_available"
                        class="font-semibold text-sm opacity-65 text-slate-600"
                        >Servicio disponible
                    </label>
                </div>

                <input
                    type="file"
                    name="image"
                    id="image"
                    accept="image/*"
                    class="w-full"
                    @change="handleImageChange"
                />

                <img
                    :src="service.image_path"
                    v-if="service.image_path"
                    class="mx-auto w-800 h-80"
                    alt=""
                />

                <div class="flex justify-end">
                    <Button type="submit" :loading="isSummit">
                        <i class="fa-solid fa-floppy-disk"></i>
                        Guardar
                    </Button>
                </div>
            </form>
        </div>
    </AppLayout>
</template>
<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import {
    Button,
    FloatLabel,
    InputText,
    Checkbox,
    useToast,
    Select,
} from "primevue";
import { onMounted, ref } from "vue";
import { appendIfExists } from "@/Utils/formDataHerlper";

const props = defineProps({
    service: {
        type: Object,
        default: () => ({}),
    },
    employees: {
        type: Array,
    },
});

const toast = useToast();

const service = ref(props?.service);
const isSummit = ref(false);
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
    appendIfExists(formData, "name", service.value?.name);
    appendIfExists(formData, "price", service.value?.price);
    appendIfExists(formData, "discount_price", service.value?.discount_price);
    appendIfExists(formData, "specialist_id", service.value?.specialist_id);
    formData.append("has_discount", service.value?.has_discount ? 1 : 0);
    formData.append("has_available", service.value?.has_available ? 1 : 0);

    if (service.value.id) {
        formData.append("id", service.value.id);
    }

    if (selectedImage.value) {
        formData.append("image", selectedImage.value);
    }

    isSummit.value = true;

    axios
        .post(route("services.store"), formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
        .then((response) => {
            if (response.status == 200) {
                toast.add({
                    severity: "success",
                    summary: "Éxito",
                    detail: "Servicio guardado correctamente",
                    life: 3000,
                });
                service.value.id = response.data.id;
            } else {
                toast.add({
                    severity: "error",
                    summary: "Error",
                    detail: "Error al guardar el servicio",
                    life: 3000,
                });
            }
        })
        .catch((errorData) => {
            const errors = errorData.response?.data?.errors;
            console.log(errorData);
            console.log(errors);
            if (errors) {
                Object.entries(errors).forEach(([key, messages]) => {
                    if (Array.isArray(messages)) {
                        messages.forEach((message) => {
                            toast.add({
                                severity: "error",
                                summary: "Error",
                                life: 5000,
                                detail: message,
                            });
                        });
                    } else {
                        toast.add({
                            severity: "error",
                            summary: "Error",
                            life: 5000,
                            detail: messages,
                        });
                    }
                });
            } else {
                toast.add({
                    severity: "error",
                    summary: "Error",
                    life: 5000,
                    detail: "Ha ocurrido un error desconocido.",
                });
            }
        })
        .finally(() => {
            isSummit.value = false;
        });
};

onMounted(() => {
    if (service.value && service.value.has_discount == 1) {
        service.value.has_discount = true;
    } else {
        service.value.has_discount = false;
    }

    if (service.value && service.value.has_available == 1) {
        service.value.has_available = true;
    } else {
        service.value.has_available = false;
    }
});
</script>
