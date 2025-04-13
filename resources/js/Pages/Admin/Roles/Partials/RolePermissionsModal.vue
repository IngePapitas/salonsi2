<script setup>
import Dialog from "primevue/dialog";
import Button from "primevue/button";
import { useForm } from "@inertiajs/vue3";
import { watch } from "vue";

const props = defineProps({
    visible: Boolean,
    role: Object,
    permissions: Array,
    selected: Array,
});
const emit = defineEmits(["update:visible"]);

const form = useForm({
    permissions: [],
});

watch(
    () => props.selected,
    (value) => {
        form.permissions = [...value];
    },
    { immediate: true }
);

const togglePermission = (checked, id) => {
    form.permissions = checked
        ? [...form.permissions, id]
        : form.permissions.filter((p) => p !== id);
};

const submit = () => {
    if (!props.role?.id) return;

    form.post(route("admin.roles.permissions", { role: props.role?.id }), {
        preserveScroll: true,
        onSuccess: () => emit("update:visible", false),
    });
};
</script>

<template>
    <Dialog
        :visible="visible"
        @update:visible="emit('update:visible', $event)"
        :header="`Asignar permisos a ${role?.name}`"
        :style="{ width: '40rem' }"
    >
        <form @submit.prevent="submit">
            <div
                class="p-4 max-h-[60vh] overflow-y-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2"
            >
                <div
                    v-for="permission in permissions"
                    :key="permission.id"
                    class="flex items-center gap-2 mb-1"
                >
                    <input
                        type="checkbox"
                        :value="permission.id"
                        :checked="form.permissions.includes(permission.id)"
                        @change="
                            (e) =>
                                togglePermission(
                                    e.target.checked,
                                    permission.id
                                )
                        "
                        class="form-checkbox"
                    />
                    <label class="text-sm">{{ permission.name }}</label>
                </div>
            </div>

            <div class="flex justify-end mt-4 gap-2">
                <Button label="Cerrar" @click="emit('update:visible', false)" />
                <Button
                    label="Guardar cambios"
                    type="submit"
                    :loading="form.processing"
                />
            </div>
        </form>
    </Dialog>
</template>
