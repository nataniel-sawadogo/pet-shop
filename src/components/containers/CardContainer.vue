<script setup lang="ts">
    import CardItem from '../CardItem.vue';
    import breedsList from '../../data/breeds.json'

    const breeds = breedsList.dogs
</script>

<template>
    <div class="contain-card">
        <CardItem 
            v-for="breed in breeds"
            :key = "breed.id"
            :breed = "breed"
        />
    </div>
</template>

<style>
    .contain-card{
        height: 60vh;
        /* border: 10px red solid; */
        display: flex;
        /* padding: 0 5%; */
        flex-wrap: wrap;
        width: 90%;
        column-gap: 10vw;
        justify-content: center;
        overflow-y: scroll;
        row-gap: 5vh;
        /* padding-bottom: 2vh; */
        margin-left: 5vw;
    }

    .contain-card::-webkit-scrollbar-thumb{
        background: var(--text-secondary) !important;
        border-radius: 1em;
    }

    .contain-card::-webkit-scrollbar-track{
        background: transparent;
    }

    .contain-card::-webkit-scrollbar{
        width: 5px;
    }

</style>