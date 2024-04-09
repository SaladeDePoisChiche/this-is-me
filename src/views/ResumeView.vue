<script setup lang="ts">
import SkillTable from '../components/SkillTable.vue';
import Experiences from '../components/Experiences.vue';
import ResumeHeader from '../components/ResumeHeader.vue';
import TopNavigationBar from '../components/TopNavigationBar.vue';
</script>

<template>
    <TopNavigationBar />
    <v-container class="img-size justify-center">
        <v-img class="rounded-card" aspect-ratio="1/1" cover  src="resumeview_profile.jpeg"></v-img>
    </v-container>
    <v-btn href="resume.pdf" target="_blank" class="set_pop">Hey ! Would you like to download my resume ?</v-btn>
    <ResumeHeader />
    <SkillTable />
    <Experiences />
</template>

<style>
.set_pop {
    margin-top: 2em;
    position: fixed;
    z-index: 10;
    top: 3em;
    margin-right:2em;
    z-index: 10;
    right: 0;
}
.img-size {
    width: 20%;
}
</style>
