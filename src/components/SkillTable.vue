<script setup lang="ts">
const props = defineProps({
    items: Array,
    header: String
}
);

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
                <tr class="text-center" v-for="item in items">
                    {{ item }}
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