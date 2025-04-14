<script setup>
import Dialog from "primevue/dialog";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import { ref } from "vue";
import { router, useForm } from "@inertiajs/vue3";
import { useToast } from "primevue/usetoast";

const props = defineProps({ visible: Boolean, permissions: Array });
const emit = defineEmits(["update:visible"]);

const toast = useToast();
const form = useForm({ name: "" });
const isEditing = ref(false);
const editingId = ref(null);

const startEdit = (permission) => {
    isEditing.value = true;
    editingId.value = permission.id;
    form.name = permission.name;
};

const resetForm = () => {
    form.reset();
    isEditing.value = false;
    editingId.value = null;
};

const submit = () => {
    if (isEditing.value) {
        form.put(route("admin.permissions.update", editingId.value), {
            onSuccess: () => {
                toast.add({
                    severity: "success",
                    summary: "Permiso actualizado",
                    life: 3000,
                });
                form.reset();
                isEditing.value = false;
            },
        });
    } else {
        form.post(route("admin.permissions.store"), {
            onSuccess: () => {
                toast.add({
                    severity: "success",
                    summary: "Permiso creado",
                    life: 3000,
                });
                form.reset();
            },
        });
    }
};

const deletePermission = (permission) => {
    if (confirm("¿Seguro que deseas eliminar este permiso?")) {
        router.delete(route("admin.permissions.destroy", permission.id), {
            preserveScroll: true,
            onSuccess: () =>
                toast.add({
                    severity: "success",
                    summary: "Permiso eliminado",
                    life: 4000,
                }),
        });
    }
};
</script>

<template>
    <Dialog
        :visible="visible"
        @update:visible="emit('update:visible', $event)"
        header="Gestión de permisos"
        :style="{ width: '30rem' }"
    >
        <form @submit.prevent="submit" class="flex gap-2 mb-4">
            <InputText
                v-model="form.name"
                placeholder="Nombre del permiso"
                class="w-full"
            />
            <Button
                :label="isEditing ? 'Actualizar' : 'Crear'"
                :loading="form.processing"
                type="submit"
            />
        </form>

        <div
            class="grid grid-cols-2 gap-4 max-h-[300px] overflow-y-auto text-sm"
        >
            <div
                v-for="permission in permissions"
                :key="permission.id"
                class="flex items-center justify-between rounded px-3 py-2 shadow-sm bg-slate-100"
            >
                <span>{{ permission.name }}</span>
                <div>
                    <Button
                        icon="pi pi-pencil"
                        size="small"
                        text
                        @click="startEdit(permission)"
                    />
                    <Button
                        icon="pi pi-trash"
                        severity="danger"
                        @click="deletePermission(permission)"
                    />
                </div>
            </div>
        </div>

        <div class="flex justify-end mt-4">
            <Button label="Cerrar" @click="emit('update:visible', false)" />
        </div>
    </Dialog>
</template>
