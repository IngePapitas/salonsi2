<template>
    <AppLayout title="Servicios" icon="fa-solid fa-droplet">
        <div class="mt-4 bg-white shadow-md p-4 rounded-lg">
            <div class="flex justify-end">
                <Button
                    size="small"
                    @click="$inertia.get(route('services.create'))"
                >
                    <i class="fa-solid fa-plus"></i>
                    Crear Servicio
                </Button>
            </div>

            <DataTable
                :value="page.props.services"
                :paginator="true"
                :rows="10"
                class="mt-4"
            >
                <Column field="id" header="ID" sortable></Column>
                <Column field="name" header="Nombre" sortable></Column>
                <Column field="price" header="Precio" sortable>
                    <template #body="{ data }">
                        <div class="flex justify-center">
                            {{ amountFormat(data.price) }}
                        </div>
                    </template>
                </Column>
                <Column
                    field="discount_price"
                    header="Precio de descuento"
                    sortable
                >
                    <template #body="{ data }">
                        <div class="flex justify-center">
                            {{ amountFormat(data.discount_price) }}
                        </div>
                    </template>
                </Column>
                <Column field="has_discount" header="En descuento" sortable>
                    <template #body="{ data }">
                        <div class="flex justify-center">
                            {{ data.has_discount ? "Sí" : "No" }}
                        </div>
                    </template>
                </Column>
                <Column field="has_available" header="Disponible" sortable>
                    <template #body="{ data }">
                        <div class="flex justify-center">
                            {{ data.has_available ? "Sí" : "No" }}
                        </div>
                    </template>
                </Column>
                <Column field="image_path" header="Imagen">
                    <template #body="{ data }">
                        <img
                            :src="data.image_path"
                            alt=""
                            class="w-16 h-16 object-cover rounded-lg"
                            v-if="data.image_path"
                        />
                    </template>
                </Column>
                <Column header="Acciones">
                    <template #body="{ data }">
                        <Button
                            size="small"
                            icon="fa fa-pencil"
                            @click="
                                $inertia.get(route('services.edit', data.id))
                            "
                        ></Button>
                        <Button
                            size="small"
                            icon="fa fa-trash"
                            class="ml-2"
                            @click="
                                $inertia.delete(
                                    route('services.destroy', data.id)
                                )
                            "
                        ></Button>
                    </template>
                </Column>
            </DataTable>
        </div>
    </AppLayout>
</template>
<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import { usePage } from "@inertiajs/vue3";
import { Button, DataTable, Column } from "primevue";
import { ref } from "vue";

const page = usePage();

const amountFormat = (value) => {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "BOB",
    }).format(value);
};
</script>
