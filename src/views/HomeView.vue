<script setup lang="ts">

</script>

<template>
  <v-container class="d-flex mb-6 fill-height" fluid>
    <v-row justify="center">
      <v-col cols="12" class="d-flex mt-5 mb-sm-0">
        <v-col cols="4"></v-col>
        <h3 class="text-h10 font-weight-light">Hi. I'm Soledad.</h3>
      </v-col>
      <v-col cols="12" class="d-flex pt-0 pb-0">
        <v-col cols="4"></v-col>
        <h1 class="mb-8 text-h4">How would you like to know me ?</h1>
      </v-col>
      <v-col cols="4">
        <v-sheet class="d-flex justify-center">
          <v-img id="rounded-card" :width="500" aspect-ratio="16/9" cover src="homeview_profile.jpg"></v-img>
        </v-sheet>
      </v-col>
      <v-col cols="12" class="d-flex justify-center mt-5">
        <!-- TO DO : MAKE URL BASE DYNAMIC -->
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
    </v-row>

  </v-container>
</template>

<style>
#rounded-card {
  border-radius: 50%;
}
</style>