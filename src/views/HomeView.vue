<script setup lang="ts">

</script>

<template>

  <v-container class="d-flex mb-6 fill-height" fluid>
    <v-row  justify="center">
      <v-col cols="4">
        <h3 class="text-h10 font-weight-light">Hi. I'm Soledad.</h3>
        <h1 class="mb-8 text-h4">How would you like to know me ?</h1>
        <v-img id="rounded-card" :width="500" aspect-ratio="16/9" cover src="src/assets/homeview_profile.jpg"></v-img>
      </v-col>
      <v-col cols="9" class="d-flex justify-center mt-5">
        <v-btn href="/resume" variant="text">Resume</v-btn>
        <v-btn href="https://www.linkedin.com/in/soledad-cot-03aa69136/"  target="_blank" variant="text">Linkedin</v-btn>
        <v-btn variant="text">Github</v-btn>
        <v-btn variant="text">Know Me Personally</v-btn>
      </v-col>
    </v-row>

  </v-container>
</template>

<style>
#rounded-card {
  border-radius: 50%;
}
</style>