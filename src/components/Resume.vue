<script setup lang="ts">
import { storeToRefs } from "pinia";
import { skillTableInfo, useResume } from "@/stores/resume";
import { useCounterStore } from "@/stores/counter";
import SkillTable from "./SkillTable.vue";

const resumeStore = useResume();
const skillStore = skillTableInfo();
</script>

<template>
  <v-container class="timeline" fluid>
    <v-row class="pr-11" justify="center">
      <div class="mb-3 mt-5 font-weight-light">
        I suppose you are curious to know me better professionally! In a nutshell :
      </div>
    </v-row>
    <v-row justify="center">
      <div class="mb-10 text-h4">
        I'm a fullstack developer that strives to learn new things!
      </div>
    </v-row>

    <v-row justify="center">
      <SkillTable class="mr-5" header="Here are the languages that I have worked with:" :items="skillStore.languages" />
      <SkillTable header="I have my way around with a few tools:" :items="skillStore.tools" />
    </v-row>
    <!-- <v-row>
      <v-col>Java C++</v-col>
      <v-col>Angular Vue</v-col>
      <v-col>Git Docker Jenkins</v-col> >>>>>>>20.5em !important
    </v-row> -->
    <v-row class="mt-10">
      I also speak french and english.
    </v-row>

    <v-row>
      <v-col id="leftColumn" class="leftColumn">
        <template v-for="exp in resumeStore.leftExperiencesColumn">
          <div class="mb-20">
            <h1 class="title title-left text-h4">{{ exp.title }}</h1>
            <p class="leftParagraph font-weight-light">{{ exp.paragraph }}</p>
          </div>
        </template>
      </v-col>
      <v-col id="rightColumn" class="rightColumn">
        <template v-for="exp in resumeStore.rightExperiencesColumn">
          <div class="mb-20">
            <h1 class="title title-right text-h4">{{ exp.title }}</h1>
            <p class="rightParagraph font-weight-light">{{ exp.paragraph }}</p>
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
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #faa204;
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
    border-right: 5px dotted;
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
