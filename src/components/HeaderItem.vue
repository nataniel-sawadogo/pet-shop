<script setup lang="ts">
    import { useRouter } from 'vue-router';

    const router = useRouter()

    const goto = (route :string) => {
        router.push(route)
    }
</script>

<template>
    <div class="container">
        <nav>
            <ul>
                <li class="active-link" @click="goto('/home')">Home</li>
                <li @click="goto('/about')">About</li>
                <li @click="goto('/services')">Services</li>
                <li @click="goto('/contact')">Contact Us</li>
            </ul>
        </nav>
    </div>
</template>

<style scoped>
    li{
        list-style: none;
        color: var(--text-secondary);
        font-size: 1.3em;
        font-weight: bolder;
        z-index: 1;
        transition: var(--transition-time);
        position: relative;
        display: flex;
        justify-content: center;
        cursor: pointer;
    }

    li::after{
        content: "";
        position: absolute;
        height: 1px;
        width: 10%;
        border-bottom: white 3px solid;
        z-index: 2;
        bottom: 0;
        transition: var(--transition-time);
        /* left: 0; */
    }

    .container{
        background-color: var(--background);
        width: 100%;
        height: 10%;
        display: flex;
        align-items: flex-end;
        justify-content: center;
        position: relative;
    }

    .container::after{
        content: "";
        width: 90%;
        position: absolute;
        bottom: 0;
        height: 1%;
        border-bottom: var(--text) 3px solid;
    }

    nav{
        width: 90%;
        height: 60%;
        /* border-bottom: var(--text) 3px solid; */
        padding: 0 3%;
    }

    ul{
        display: flex;
        width: 70%;
        height: 100%;
        justify-content: space-between;
    }

    .active-link{
        color: var(--text);
    }

    li:hover{
        color: var(--secondary);
        /* border-bottom: var(--secondary) 3px solid; */
    }

    li:hover::after{
        border-bottom: var(--secondary) 3px solid;
        width: 100%;
    }
</style>