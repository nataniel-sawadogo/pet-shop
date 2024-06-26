<script setup lang="ts">
import { defineProps, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()
const goto = (route :string) => {
    router.push(route)
}
//eslint-disable-next-line
const { breed } = defineProps(['breed'])

const publicPath = process.env.BASE_URL
</script>

<template>
    <div class="card" @click="goto('/breeds')" ref="card">
        <div id="img" :style="`background: url(${publicPath}${breed.photo}); background-size: 100% 100%;`"></div>
        <div id="name">
            <p>{{ breed.name }}</p>
        </div>
    </div>
</template>

<style scoped>
    .card{
        height: 45%;
        width: 21vw;
        border: 2px solid rgba(255,255,255,0.2);
        border-radius: 1rem;
        overflow: hidden;
        position: relative;
        transition: 0.8s ease;
        cursor: pointer;
    }

    .card:hover{
        border: 2px solid white;
        box-shadow: 0 0 0.625rem white;
    }

    #img{
        height: 100%;
        width: 100%;
        transition: 0.8s ease;
        filter: grayscale(10%);
    }

    .card:hover #img{
        scale: 1.05;
        filter: grayscale(0%);
    }

    #name{
        background: var(--background);
        height: 22%;
        width: 100%;
        position: absolute;
        bottom: 0;
        text-align: left;
        padding: 0 2em;
        display: flex;
        align-items: center;
    }

    p{
        z-index: 1;
    }

    .card #name::before{
        content: '';
        position: absolute;
        left: -3%;
        top: 0;
        background-color: var(--secondary);
        height: 100%;
        width: 0%;
        transition: 0.8s;
        transition-timing-function: cubic-bezier(0.5, 0.2, 0.2, 1.0);
        transform: skew(20deg);
        /* transform: rotate(45deg); */
    }

    .card:hover #name::before{
        content: '';
        position: absolute;
        left: -3%;
        top: 0;
        height: 100%;
        width: 103%;
        background-color: var(--secondary);
    }

    .card #name::after{
        content: '';
        position: absolute;
        left: -12%;
        top: 0;
        background-color: var(--secondary);
        height: 100%;
        width: 10%;
        transform: translateX(0%);
        transition: 0.6s;
        transition-timing-function: cubic-bezier(0.5, 0.2, 0.2, 1.0);
        transform: skew(20deg);
        /* transform: rotate(45deg); */
    }

    .card:hover #name::after{
        content: '';
        position: absolute;
        transform: translateX(1100%) skew(20deg);
        top: 0;
        height: 100%;
        /* width: 10%; */
        background-color: var(--secondary);
    }

    @media (max-width: 431px){
        .card{
            height: 45%;
            width: 90vw;
        }
    }


</style>