<template>
    <div cols="auto" class="title " :class="{'title-left' : isSideLeft, 'title-right' : !isSideLeft}">
        <v-container class="card" :class="{'card-l': isSideLeft, 'card-r': !isSideLeft}">
            <v-row>
                <v-col>
                    <h1 class="text-h4">{{ experience.title }}</h1>
                    <p :class="{'leftParagraph' : isSideLeft, 'rightParagraph' : !isSideLeft}" class="font-weight-light"> {{ experience.environnement }}</p>
                    <li v-for="desc in experience.description">{{ desc }}</li>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script setup lang="ts">
//TO DO : MAKE LEFT RIGHT ENUM
const props = defineProps({
    experience: {
        type: Object,
        default: null
    },
    isSideLeft: {
        type: Boolean
    }
}
);
</script>

<style scoped>
.title {
    color:#414042;
}
.title::before {
    content: "";
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #323b4c;
}

.title-left::before {
    float: right;
    margin-top: 2em;
    margin-right: -1.095em;
    margin-left: 1em;
}

.title-right::before {
    float: left;
    margin-right: 10px;
    margin-top: 1.8em;
    margin-left: -1.1em;
  }

.card{
    height: 30em;

}

.card-l{
    padding-left:5em;
}

.card-r{
    padding-right: 5em;
}

.rightParagraph {
    margin-left: 0.5em;
  }
</style>