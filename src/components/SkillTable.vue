<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
    items: {
        type: Array,
        default: () => []
    },
    header: String
}
);

const skillTableColumns = computed(() => {

    const tableCell = []
    for (let i = 0; i < props.items.length; i += 2) {
        tableCell.push([props.items[i], props.items[i + 1]])
    }
    return tableCell

    // return props.items?.reduce((accumulator, currentValue, currentIndex, array) => {
    //     if (currentIndex % 2 === 0) {
    //         return [accumulator, [currentValue, array[currentIndex + 1]]]
    //     }
    //     return accumulator;
    // }, [])
})
console.log("skilltablecell length: " + skillTableColumns.value.length);
console.log("skilltablecell: " + skillTableColumns.value);
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