<script setup lang="ts">
import { PropType } from 'vue';
import MenuId from '../utils/MenuId.vue';


//variable => enum is ID
// btn with this ID is highlited
// const props = defineProps({
//   currentTab: {
//     type: String as PropType<MenuId>,
//     required: true
//   },
// }
// );
console.log("current Tab");
// console.log(props.currentTab);
</script>

<template>
  <v-container class="pt-0">
    <v-col cols="12" class="d-flex justify-center">
      <!-- TO DO : MAKE URL BASE DYNAMIC -->
      <!-- :class="{ 'btn-selected': currentTab == MenuId.resume }" -->
      <v-btn href="/" variant="text">
        <font-awesome-icon :icon="['fas', 'house']" />
      </v-btn>
      <v-btn class="mb-8" href="/resume" variant="text">Resume</v-btn>
      <v-btn href="https://www.linkedin.com/in/soledad-cot/" target="_blank" variant="text">Linkedin</v-btn>
      <v-btn href="https://github.com/SaladeDePoisChiche" target="_blank" variant="text">Github</v-btn>
      <v-btn variant="text">
        Know Me Personally
        <v-tooltip activator="parent" location="bottom">
          Sorry ! This page is under construction...<br>
          But feel free to contact me ;)
        </v-tooltip>
      </v-btn>
    </v-col>
  </v-container>
</template>

<style scoped>
.btn-selected {
  color: red
}
</style>