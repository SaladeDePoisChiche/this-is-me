<script setup lang="ts">

</script>

<template>
    <v-container class="scroll-container" >
        <v-row class="scroll-item" justify="center">
            <v-col cols="12" class="mt-5 text-center mb-n16 pt-16">
                <h3 class="text-h10 font-weight-light"> Hi. I'm Soledad.</h3>
            </v-col>
            <v-col cols="10">
                <v-sheet class="">
                    <v-img class="rounded-card" cover src="homeview_profile.jpg"></v-img>
                </v-sheet>
            </v-col>
            <v-col cols="12" class="mt-6 text-center mt-n16">
                <h3 class="mb-8 text-h10 font-weight-light">How would you like to know me ?</h3>
            </v-col>
            <v-col class="text-center mt-n16 pb-16">
                <font-awesome-icon :icon="['fas', 'chevron-up']" />
                <!-- <font-awesome-icon :icon="['fas', 'chevron-down']" /> -->
            </v-col>
        </v-row>
        <v-row class="scroll-item btn-list" justify="center">
            <div>
                <v-btn href="resume.pdf" target="_blank" variant="text">Resume</v-btn>
            </div>
            <div>
                <v-btn href="https://www.linkedin.com/in/soledad-cot/" target="_blank" variant="text">Linkedin</v-btn>
            </div>
            <div>
                <v-btn href="https://github.com/SaladeDePoisChiche" target="_blank" variant="text">Github</v-btn>
            </div>
            <div>
                <v-btn variant="text" class="text-decoration-line-through">
                    Know Me Personally
                </v-btn>
                <v-img cover src="sorry_not_ready-mediumdarkpink.png"></v-img>
            </div>
            <div>

            </div>

        </v-row>
    </v-container>
</template>

<style scoped>
.scroll-container {
    scroll-snap-type: y mandatory;
    overflow-y: auto;
    height: 100vh;
}

.scroll-item {
    scroll-snap-align: start;
    height: 100vh;
    align-items: center;
    justify-content: center;
}

.btn-list {
    flex-direction:column;
}
</style>