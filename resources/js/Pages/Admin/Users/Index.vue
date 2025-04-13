<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import { defineProps, ref } from "vue";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Button from "primevue/button";
import Dialog from "primevue/dialog";
import InputText from "primevue/inputtext";
// import Select from "primevue/select";
import { useForm } from "@inertiajs/vue3";
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
    role: null,
    password: "",
    password_confirmation: "",
});
const editUserForm = useForm({
    id: null,
    name: "",
    email: "",
});
const toast = useToast();

const openEditModal = (user) => {
    selectedUser.value = user;
    editUserForm.id = user.id;
    editUserForm.name = user.name;
    editUserForm.email = user.email;
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
                        <Button
                            label="Editar"
                            icon="pi pi-pencil"
                            @click="() => openEditModal(data)"
                            class="p-button-sm"
                        />
                    </template>
                </Column>
            </DataTable>
        </div>

        <Dialog v-model:visible="isOpenModal" class="py-5 px-2">
            <h4 class="text-xl font-semibold">Creando Usuario</h4>

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

                <!-- <div class="flex flex-col gap-2 mb-2">
                    <label for="email">Rol</label>
                    <Select
                        v-model="createUserForm.role"
                        :options="roles"
                        optionValue="id"
                        optionLabel="name"
                        placeholder="Selecciona el rol"
                        class="w-full md:w-56"
                    />
                </div> -->

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
                    />
                    <Button label="Crear" type="submit" />
                </div>
            </form>
        </Dialog>

        <Dialog v-model:visible="isEditModalOpen" class="py-5 px-2">
            <h4 class="text-xl font-semibold">Editando Usuario</h4>

            <form @submit.prevent="submitEditUser">
                <div class="flex flex-col gap-2 mb-2">
                    <label for="edit-name">Nombre</label>
                    <InputText id="edit-name" v-model="editUserForm.name" />
                </div>
                <div class="flex flex-col gap-2 mb-2">
                    <label for="edit-email">Correo</label>
                    <InputText id="edit-email" v-model="editUserForm.email" />
                </div>
                <div class="flex justify-between py-2">
                    <Button
                        label="Cancelar"
                        @click="() => (isEditModalOpen = false)"
                    />
                    <Button label="Actualizar" type="submit" />
                </div>
            </form>
        </Dialog>
    </AppLayout>
</template>
