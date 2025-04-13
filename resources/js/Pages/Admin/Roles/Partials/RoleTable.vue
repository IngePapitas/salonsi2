<script setup>
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Button from "primevue/button";

const emit = defineEmits(["edit", "delete", "assignPermissions"]);
const props = defineProps({ roles: Array });
</script>

<template>
    <DataTable :value="roles">
        <Column field="id" header="ID" />
        <Column field="name" header="Nombre" />
        <Column header="Acciones">
            <template #body="{ data }">
                <Button
                    icon="pi pi-pencil"
                    class="mr-2"
                    @click="emit('edit', data)"
                />
                <!-- <Button
                    icon="pi pi-trash"
                    severity="danger"
                    @click="emit('delete', data)"
                /> -->
                <Button
                    icon="pi pi-key"
                    severity="help"
                    class="ml-2"
                    @click="emit('assignPermissions', data)"
                />
            </template>
        </Column>
    </DataTable>
</template>
