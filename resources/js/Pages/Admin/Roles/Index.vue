<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import { ref } from "vue";
import Button from "primevue/button";
import { useToast } from "primevue/usetoast";
import { router, useForm } from "@inertiajs/vue3";
import RoleTable from "./Partials/RoleTable.vue";
import RoleCreateModal from "./Partials/RoleCreateModal.vue";
import RoleEditModal from "./Partials/RoleEditModal.vue";
import RolePermissionsModal from "./Partials/RolePermissionsModal.vue";
import PermissionsManagementModal from "./Partials/PermissionsManagementModal.vue";

defineProps({
    roles: Object,
    permissions: Object,
});

const isCreateModalOpen = ref(false);
const isEditModalOpen = ref(false);
const isPermissionsModalOpen = ref(false);
const isPermissionsManagementModalOpen = ref(false);
const selectedRole = ref(null);
const selectedRoleForPermissions = ref(null);
const selectedPermissions = ref([]);

const toast = useToast();
const createForm = useForm({ name: "" });
const editForm = useForm({ id: null, name: "" });
const openEditModal = (role) => {
    selectedRole.value = role;
    editForm.id = role.id;
    editForm.name = role.name;
    isEditModalOpen.value = true;
};
const openPermissionsModal = (role) => {
    selectedRoleForPermissions.value = role;
    selectedPermissions.value = role.permissions.map((p) => p.id); // preseleccionados
    isPermissionsModalOpen.value = true;
};
const submitCreate = () => {
    createForm.post(route("admin.roles.store"), {
        onSuccess: () => {
            toast.add({
                severity: "success",
                summary: "Rol creado",
                life: 4000,
            });
            createForm.reset();
            isCreateModalOpen.value = false;
        },
    });
};
const submitEdit = () => {
    editForm.put(route("admin.roles.update", editForm.id), {
        onSuccess: () => {
            toast.add({
                severity: "success",
                summary: "Rol actualizado",
                life: 4000,
            });
            isEditModalOpen.value = false;
        },
    });
};
const deleteRole = (role) => {
    if (confirm("¿Seguro que deseas eliminar este rol?")) {
        router.delete(route("admin.roles.destroy", role.id), {
            preserveScroll: true,
            onSuccess: () =>
                toast.add({
                    severity: "success",
                    summary: "Rol eliminado",
                    life: 4000,
                }),
        });
    }
};
</script>

<template>
    <AppLayout title="Roles y Permisos">
        <div class="mt-4 bg-white shadow-md p-4 rounded-lg">
            <div class="flex justify-between my-5">
                <h2 class="font-semibold text-xl text-gray-800">
                    Gestionar Roles
                </h2>
                <div class="flex gap-2">
                    <Button
                        label="Gestionar permisos"
                        @click="isPermissionsManagementModalOpen = true"
                    />
                    <Button
                        label="Crear Rol"
                        @click="isCreateModalOpen = true"
                    />
                </div>
            </div>

            <RoleTable
                :roles="roles"
                @edit="openEditModal"
                @delete="deleteRole"
                @assignPermissions="openPermissionsModal"
            />

            <RoleCreateModal
                v-model:visible="isCreateModalOpen"
                :form="createForm"
                @submit="submitCreate"
            />

            <RoleEditModal
                v-model:visible="isEditModalOpen"
                :form="editForm"
                :role="selectedRole"
                @submit="submitEdit"
            />

            <RolePermissionsModal
                v-model:visible="isPermissionsModalOpen"
                :permissions="permissions"
                :role="selectedRoleForPermissions"
                v-model:selected="selectedPermissions"
                @submit="submitPermissions"
            />

            <PermissionsManagementModal
                v-model:visible="isPermissionsManagementModalOpen"
                :permissions="permissions"
            />
        </div>
    </AppLayout>
</template>

<!-- <template>
    <AppLayout title="Roles">
        <div class="mt-4 bg-white shadow-md p-4 rounded-lg">
            <div class="flex justify-between my-5">
                <h2 class="font-semibold text-xl text-gray-800">
                    Gestionar Roles
                </h2>
                <div class="flex gap-2">
                    <Button
                        label="Gestionar permisos"
                        @click="isPermissionsManagementModalOpen = true"
                    />
                    <Button
                        label="Crear Rol"
                        @click="isCreateModalOpen = true"
                    />
                </div>
            </div>

            <DataTable :value="roles">
                <Column field="id" header="ID" />
                <Column field="name" header="Nombre" />
                <Column header="Acciones">
                    <template #body="{ data }">
                        <Button
                            icon="pi pi-pencil"
                            class="mr-2"
                            @click="openEditModal(data)"
                        />
                        <Button
                            icon="pi pi-trash"
                            severity="danger"
                            @click="deleteRole(data)"
                        />

                        <Button
                            icon="pi pi-key"
                            severity="help"
                            @click="openPermissionsModal(data)"
                            class="ml-2"
                        />
                    </template>
                </Column>
            </DataTable>

            <Dialog
                v-model:visible="isCreateModalOpen"
                header="Creando Rol"
                :style="{ width: '22rem' }"
            >
                <form @submit.prevent="submitCreate">
                    <InputText
                        v-model="createForm.name"
                        placeholder="Nombre del rol"
                        class="w-full"
                    />
                    <div class="flex justify-between py-2">
                        <Button
                            label="Cancelar"
                            @click="() => (isOpenModal = false)"
                            :loading="createForm.processing"
                        />
                        <Button
                            label="Crear"
                            type="submit"
                            :loading="createForm.processing"
                        />
                    </div>
                </form>
            </Dialog>

            <Dialog
                v-model:visible="isEditModalOpen"
                :header="`Editando Rol ${selectedRole?.name}`"
                :style="{ width: '22rem' }"
            >
                <form @submit.prevent="submitEdit">
                    <InputText
                        v-model="editForm.name"
                        placeholder="Nombre del rol"
                        class="w-full"
                    />
                    <div class="flex justify-between py-2">
                        <Button
                            label="Cancelar"
                            @click="() => (isEditModalOpen = false)"
                            :loading="editForm.processing"
                        />
                        <Button
                            label="Actualizar"
                            type="submit"
                            :loading="editForm.processing"
                        />
                    </div>
                </form>
            </Dialog>

            <Dialog
                v-model:visible="isPermissionsModalOpen"
                :header="`Asignar y Gestionar permisos de ${selectedRoleForPermissions?.name}`"
                :style="{ width: '40rem' }"
            >
                <div
                    class="p-4 grid grid-cols-2 gap-4 max-h-[60vh] overflow-y-auto"
                >
                    <div>
                        <div class="flex justify-between">
                            <h4 class="font-semibold mb-2">
                                Permisos disponibles
                            </h4>
                            <div></div>
                        </div>
                        <div
                            v-for="permission in permissions"
                            :key="permission.id"
                            class="flex items-center gap-2 mb-1"
                        >
                            <input
                                type="checkbox"
                                :value="permission.id"
                                v-model="selectedPermissions"
                                class="form-checkbox"
                            />
                            <label class="text-sm">{{ permission.name }}</label>
                        </div>
                    </div>
                </div>

                <div class="flex justify-end mt-4 gap-2">
                    <Button
                        label="Cerrar"
                        @click="isPermissionsModalOpen = false"
                    />
                    <Button
                        label="Guardar cambios"
                        @click="submitPermissions"
                    />
                </div>
            </Dialog>
        </div>
    </AppLayout>
</template> -->
