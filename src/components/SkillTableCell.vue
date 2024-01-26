<script setup lang="ts">
const props = defineProps({
    items: Array
}
);

</script>

<template>
    <v-card class="d-inline-flex" variant="tonal">
        <v-table density="compact">
            <tbody>
                <tr class="text-center" v-for="item in items">
                    {{ item }}
                </tr>
            </tbody>
        </v-table>
    </v-card>
</template>

<style></style>