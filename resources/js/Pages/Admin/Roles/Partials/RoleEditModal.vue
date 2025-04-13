<script setup>
import Dialog from "primevue/dialog";
import Button from "primevue/button";
import InputText from "primevue/inputtext";

const props = defineProps({
    visible: Boolean,
    form: Object,
    role: Object,
});
const emit = defineEmits(["update:visible", "submit"]);
</script>

<template>
    <Dialog
        :visible="visible"
        @update:visible="emit('update:visible', $event)"
        :header="`Editando Rol ${role?.name}`"
        :style="{ width: '22rem' }"
    >
        <form @submit.prevent="emit('submit')">
            <InputText
                v-model="form.name"
                placeholder="Nombre del rol"
                class="w-full"
            />
            <div class="flex justify-between py-2">
                <Button
                    label="Cancelar"
                    @click="emit('update:visible', false)"
                    :loading="form.processing"
                />
                <Button
                    label="Actualizar"
                    type="submit"
                    :loading="form.processing"
                />
            </div>
        </form>
    </Dialog>
</template>
