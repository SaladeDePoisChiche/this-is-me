<script setup lang="ts">
import SkillTableCell from "./SkillTableCell.vue";
import toDoubleDimensionArray from '../utils/data-to-arrays'

//TO-DO: MOVE THIS IMPORT IN RESUMEVIEW
import resume from "../assets/resume_eng.json";

// const props = defineProps({
//     skills: 
//   }
// );

console.log(resume);
const experiencesArray = toDoubleDimensionArray(resume.experiences);
</script>

<template>
  <v-container class="timeline" fluid>
    <v-row justify="center" class="mb-10">
      <SkillTableCell class="mr-5" header="Here are the languages that I have worked with:" :items="resume.languages" />
      <SkillTableCell header="I have my way around with a few tools:" :items="resume.tools" />
    </v-row>
  </v-container>
</template>

<style scoped>
</style>
