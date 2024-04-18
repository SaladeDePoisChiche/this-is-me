<script setup lang="ts">


import toDoubleDimensionArray from '../utils/data-to-arrays'
import ExperienceCard from "./ExperienceCard.vue";

const props = defineProps({
    experiences: {
      type: Array,
    },
  }
);
const experiencesArray = toDoubleDimensionArray(props.experiences);
</script>

<template>
  <v-container class="timeline" fluid>
    <v-row>
      <v-col id="leftColumn" class="leftColumn">
        <template v-for="exp in experiencesArray[0]">
         <ExperienceCard :experience="exp" :is-side-left="true"/>
        </template>
      </v-col>
      <v-col id="rightColumn" class="rightColumn">
        <template v-for="exp in experiencesArray[1]">
          <ExperienceCard :experience="exp" :is-side-left="false"/>
        </template>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
@media (min-width: 1024px) {

  .leftColumn {
    border-right: 1px solid;
    border-color: #323b4c;
    text-align: right;
  }

  .rightColumn {
    padding-top: 30em;
  }

}
</style>
