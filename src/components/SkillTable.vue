<script setup lang="ts">
import SkillTableCell from "./SkillTableCell.vue";

const props = defineProps({
    languages: {
      type: Array,
    },
    tools: {
      type: Array,
    },
  }
);

</script>

<template>
  <v-container class="timeline" fluid>
    <v-row justify="center" class="mb-10">
      <SkillTableCell class="mr-5" header="Here are the languages that I have worked with:" :items="props.languages" />
      <SkillTableCell header="I know my way around a few tools:" :items="props.tools" />
    </v-row>
  </v-container>
</template>

<style scoped>
</style>
