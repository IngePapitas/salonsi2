<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import { defineProps, ref } from "vue";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Button from "primevue/button";
import Dialog from "primevue/dialog";
import InputText from "primevue/inputtext";
import Select from "primevue/select";
import { router, useForm } from "@inertiajs/vue3";
import { useToast } from "primevue/usetoast";

defineProps({
    users: Object,
    roles: Object,
});

const isOpenModal = ref(false);
const isEditModalOpen = ref(false);
const selectedUser = ref(null);
const createUserForm = useForm({
    name: "",
    email: "",
    role_id: null,
    password: "",
    password_confirmation: "",
});
const editUserForm = useForm({
    id: null,
    name: "",
    email: "",
    role_id: null,
});
const toast = useToast();

const openEditModal = (user) => {
    selectedUser.value = user;
    editUserForm.id = user.id;
    editUserForm.name = user.name;
    editUserForm.email = user.email;
    editUserForm.role_id = user.roles[0]?.id;
    isEditModalOpen.value = true;
};

const submitCreateUser = () => {
    createUserForm.post(route("admin.users.store"), {
        preserveScroll: true,
        preserveState: true,
        onSuccess: (response) => {
            console.log(`Respuesta ${JSON.stringify(response)}`);
            toast.add({
                severity: "success",
                summary: "Éxito",
                life: 5000,
                detail: "Usuario creado correctamente",
            });
            isOpenModal.value = false;
            createUserForm.reset();
        },
        onError: (error) => {
            createUserForm.errors = error;

            if (error) {
                Object.entries(error).forEach(([key, messages]) => {
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
        },
    });
};

const deleteUser = (user) => {
    if (confirm("¿Seguro que deseas eliminar este users?")) {
        router.delete(route("admin.users.destroy", user.id), {
            preserveScroll: true,
            onSuccess: () =>
                toast.add({
                    severity: "success",
                    summary: "Usuario eliminado exitosamente.",
                    life: 4000,
                }),
        });
    }
};

const submitEditUser = () => {
    editUserForm.put(route("admin.users.update", editUserForm.id), {
        preserveScroll: true,
        preserveState: true,
        onSuccess: () => {
            toast.add({
                severity: "success",
                summary: "Éxito",
                detail: "Usuario actualizado correctamente",
                life: 5000,
            });
            isEditModalOpen.value = false;
            editUserForm.reset();
        },
        onError: (error) => {
            Object.values(error)
                .flat()
                .forEach((message) => {
                    toast.add({
                        severity: "error",
                        summary: "Error",
                        detail: message,
                        life: 5000,
                    });
                });
        },
    });
};
</script>

<template>
    <AppLayout title="Usuarios">
        <div class="mt-4 bg-white shadow-md p-4 rounded-lg">
            <div class="flex justify-between my-5">
                <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                    Gestionar usuarios
                </h2>
                <Button
                    label="Crear Usuarios"
                    @click="() => (isOpenModal = true)"
                />
            </div>

            <div class="card">
                <DataTable :value="users" tableStyle="min-width: 50rem">
                    <Column field="id" header="Codigo"></Column>
                    <Column field="name" header="Nombre"></Column>
                    <Column field="email" header="Correo"></Column>
                    <Column header="Rol">
                        <template #body="{ data }">{{
                            data.roles[0]?.name
                        }}</template></Column
                    >
                    <Column header="Acciones">
                        <template #body="{ data }">
                            <div class="flex gap-2">
                                <Button
                                    label="Editar"
                                    icon="pi pi-pencil"
                                    @click="() => openEditModal(data)"
                                    class="p-button-sm"
                                />
                                <Button
                                    icon="pi pi-trash"
                                    severity="danger"
                                    @click="deleteUser(data)"
                                />
                            </div>
                        </template>
                    </Column>
                </DataTable>
            </div>

            <Dialog
                v-model:visible="isOpenModal"
                class="py-5 px-2"
                header="Creando Usuario"
                :style="{ width: '25rem' }"
            >
                <form @submit.prevent="submitCreateUser">
                    <div class="flex flex-col gap-2 mb-2">
                        <label for="name">Nombre</label>
                        <InputText
                            id="name"
                            type="text"
                            placeholder="Nombre del usuario"
                            v-model="createUserForm.name"
                        />
                    </div>
                    <div class="flex flex-col gap-2 mb-2">
                        <label for="email">Correo</label>
                        <InputText
                            id="email"
                            type="email"
                            placeholder="user@correo.com"
                            v-model="createUserForm.email"
                        />
                    </div>

                    <div class="flex flex-col gap-2 mb-2">
                        <label for="email">Rol</label>
                        <Select
                            v-model="createUserForm.role_id"
                            :options="roles"
                            optionValue="id"
                            optionLabel="name"
                            placeholder="Selecciona el rol"
                            class="w-full"
                        />
                    </div>

                    <div class="flex flex-col gap-2 mb-2">
                        <label for="password">Contraseña</label>
                        <InputText
                            id="password"
                            type="password"
                            placeholder="Contraseña"
                            v-model="createUserForm.password"
                        />
                    </div>
                    <div class="flex flex-col gap-2 mb-2">
                        <label for="password">Confirmar Contraseña</label>
                        <InputText
                            id="password"
                            type="password"
                            placeholder="Confirma contraseña"
                            v-model="createUserForm.password_confirmation"
                        />
                    </div>
                    <div class="flex justify-between py-2">
                        <Button
                            label="Cancelar"
                            @click="() => (isOpenModal = false)"
                            :loading="createUserForm.processing"
                        />
                        <Button
                            label="Crear"
                            type="submit"
                            :loading="createUserForm.processing"
                        />
                    </div>
                </form>
            </Dialog>

            <Dialog
                v-model:visible="isEditModalOpen"
                :header="`Editando Usuario (${selectedUser?.name})`"
                :style="{ width: '25rem' }"
                class="py-5 px-2"
            >
                <form @submit.prevent="submitEditUser">
                    <div class="flex flex-col gap-2 mb-2">
                        <label for="edit-name">Nombre</label>
                        <InputText id="edit-name" v-model="editUserForm.name" />
                    </div>
                    <div class="flex flex-col gap-2 mb-2">
                        <label for="edit-email">Correo</label>
                        <InputText
                            id="edit-email"
                            v-model="editUserForm.email"
                        />
                    </div>
                    <div class="flex flex-col gap-2 mb-2">
                        <label for="email">Rol</label>
                        <Select
                            v-model="editUserForm.role_id"
                            :options="roles"
                            optionValue="id"
                            optionLabel="name"
                            placeholder="Selecciona el rol"
                            class="w-full"
                        />
                    </div>
                    <div class="flex justify-between py-2">
                        <Button
                            label="Cancelar"
                            @click="() => (isEditModalOpen = false)"
                            :loading="editUserForm.processing"
                        />
                        <Button
                            label="Actualizar"
                            type="submit"
                            :loading="editUserForm.processing"
                        />
                    </div>
                </form>
            </Dialog>
        </div>
    </AppLayout>
</template>
