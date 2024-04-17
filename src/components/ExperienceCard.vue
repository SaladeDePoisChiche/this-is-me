<template>
    <div cols="auto" class="title" :class="{'title-left' : isSideLeft, 'title-right' : !isSideLeft}">
        <v-container class="card" :class="{'card-l': isSideLeft, 'card-r': !isSideLeft}">
            <v-row>
                <v-col>
                    <h2 class="text-h5"> {{ experience.startDate }} - {{ experience.endDate }} | {{ experience.company }}</h2>
                    <h1 class="text-h1 title-text">{{ experience.title }}</h1>
                    <p :class="{'leftParagraph' : isSideLeft}" class="text-h6"> {{ experience.environnement }}</p>
                    <div class="font-weight-light text-body-1" v-for="desc in experience.description">{{ desc }}</div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    experience: {
        type: Object,
        default: null
    },
    isSideLeft: {
        type: Boolean
    }
}
); //#e8a187;
</script>

<style scoped>
.title{
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

.title-text {
font-size: 3.5em !important;
color:#faa484;
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
    height: 60em;

}

.card-l{
    padding-left:5em;
}

.card-r{
    padding-right: 5em;
}


</style>