<script setup lang="ts"> 
    import types from "../data/types.json"
    import { ref } from "vue";

    import SearchBar from "@/components/SearchBar.vue";
    import CardContainer from "@/components/containers/CardContainer.vue"

    let type = ref(types[0])
    let selected = ref(0)
    let more = ref(false)

    const changeType = (change:number) => {
        type = types[change]
        selected.value = change
        console.log(change);
        
    }
</script>

<template>
    <div class="container-m">
        <div class="container">
            <nav>
                <h1 class="title">{{ type }}</h1>
                <div id="types">
                    <button
                        v-for="t,index in types"
                        :key="index"
                        class="button"
                        :class="{active : selected == index}"
                        @click="changeType(index)"
                    >{{ t }}</button>
                    <span id="plus" @click="more = !more" :class="{active : more}">+</span>
                </div>
            </nav>
        </div>
    <SearchBar />
    <CardContainer />
    </div>
</template>

<style scoped>

    .container-m{
        background: linear-gradient(to bottom, rgba(0,0,0,1)0%, rgba(0,0,0,0.7)60%, rgba(0,0,0,0.7)100%), url(../../public/img/german_sheperd.png);
        height: 100%;
        background-size: 100% 120%;
    }

    .container{
        display: flex;
        justify-content: center;
    }

    .title{
        text-transform: capitalize;
        font-size: 4.5rem;
        letter-spacing: 0.6rem;
    }

    nav{
        display: flex;
        height: 12vh;
        width: 90%;
        justify-content: space-between;
        /* border: red 1px solid; */
    }

    #types{
        height: 100%;
        width: 76%;
        display: flex;
        /* border: red 1px solid; */
        justify-content: space-between;
        align-items: center;
        transform: translateY(20%);
    }

    
    .button{
        border: none;
        height: 35%;
        width: 15%;
        border-radius: 3em;
        color: var(--text-secondary);
        text-transform: capitalize;
        background-color: var(--primary);
        font-weight: bold;
        font-size: 1em;
        cursor: pointer;
        transition: var(--transition-time);
    }

    .button:hover{
        background-color: var(--accent) !important;
    }

    .button.active{
        background-color: var(--secondary);
        color: var(--text);
    }

    #plus{
        font-size: 2rem;
        font-weight: bold;
        cursor: pointer;
        transition: var(--transition-time);
    }

    #plus.active{
        transform: rotateZ(45deg);
    }

    @media (max-width: 431px){
        #types button{
            display: none;
        }

        #types{
            justify-content: flex-end;
        }

        #plus{
            font-size: 3rem;
            margin-bottom: 1rem;
        }
    }

</style>