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

const skillTableCell = computed(() => {

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
console.log("skilltablecell length: " + skillTableCell.value.length);
console.log("skilltablecell: " + skillTableCell.value);
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
                <tr v-if="skillTableCell.length" class="text-center" v-for="(item, currentIndex) in skillTableCell[0]">
                    {{item}} {{skillTableCell[1][currentIndex]}}
                </tr>
            </tbody>
        </v-table>
    </v-card>
</template>

<style></style>

                <!-- <th class="text-center">I have my way around with a few tools :
                    Here are the languages that I have worked with :
                </th> -->


    <!-- <v-row>
      <v-col>Java C++</v-col>
      <v-col>Angular Vue</v-col>
      <v-col>Git Docker Jenkins</v-col>
    </v-row> -->