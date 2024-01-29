<script setup lang="ts">
//TO-DO: MOVE THIS IMPORT IN RESUMEVIEW
import resume from "../assets/resume_eng.json";

import toDoubleDimensionArray from '../utils/data-to-arrays'

console.log(resume);
const experiencesArray = toDoubleDimensionArray(resume.experiences);
</script>

<template>
  <v-container class="timeline" fluid>
    <v-row>
      <v-col id="leftColumn" class="leftColumn">
        <template v-for="exp in experiencesArray[0]">
          <div class="mb-20">
            <h1 class="title title-left text-h4">{{ exp.title }}</h1>
            <p class="leftParagraph font-weight-light">{{ exp.description }}</p>
          </div>
        </template>
      </v-col>
      <v-col id="rightColumn" class="rightColumn">
        <template v-for="exp in experiencesArray[1]">
          <div class="mb-20">
            <h1 class="title title-right text-h4">{{ exp.title }}</h1>
            <p class="rightParagraph font-weight-light">{{ exp.description }}</p>
          </div>
        </template>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
@media (min-width: 1024px) {
  .title::before {
    content: "";
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: black;
  }

  .title-left::before {
    float: right;
    margin-top: 0.4em;
    margin-right: -0.77em;
    margin-left: 1em;
  }

  .title-right::before {
    float: left;
    margin-right: 10px;
    margin-top: 0.4em;
    margin-left: -0.77em;
  }

  .leftColumn {
    border-right: 1px solid;
    text-align: right;
  }

  .rightColumn {
    padding-top: 12.5em;
  }

  .leftParagraph {
    margin-right: 1.6em;
  }

  .rightParagraph {
    margin-left: 0.5em;
  }
}
</style>
