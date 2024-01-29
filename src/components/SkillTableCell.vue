<script setup lang="ts">
import toDoubleDimensionArray from '../utils/data-to-arrays'

const props = defineProps({
    items: {
        type: Array,
        default: () => []
    },
    header: String
}
);

const skillTableColumns = toDoubleDimensionArray(props.items);

console.log("skilltablecell length: " + skillTableColumns.length);
console.log("skilltablecell: " + skillTableColumns.values);
</script>

<template>
    <v-card class="d-inline-flex" variant="tonal">
        <v-table density="compact">
            <thead>
                <tr>
                    <th class="text-center">{{ header }}</th>
                </tr>
            </thead>
            <tbody>
                <div class="container" v-if="skillTableColumns.length">
                    <div class="col" v-for="column in skillTableColumns">
                        <div v-for="item in column"> {{ item }}</div>
                    </div>
                </div>
            </tbody>
        </v-table>
    </v-card>
</template>

<style>
.container {
    display: flex;
}

.col {
    margin: 10px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    text-align: center;
}
</style>