<script setup lang="ts">
    import { useRouter } from 'vue-router';
    import { ref } from 'vue';

    const router = useRouter()
    const show = ref(false)

    const goto = (route :string) => {
        router.push(route)
    }
</script>

<template>
    <div class="container">
        <nav :class="{display:show}">
            <ul>
                <li class="active-link" @click="goto('/')">Home</li>
                <li @click="goto('/about')">About</li>
                <li @click="goto('/services')">Services</li>
                <li @click="goto('/contact')">Contact Us</li>
            </ul>
            <div id="burger" @click="show = !show">
                <i class="uil uil-bars"></i>
            </div>
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

    #burger{
        display: none;
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

    @media (max-width: 431px){
        nav ul{
            display: none;
            position: relative;
        }

        nav {
            display: flex;
            flex-direction: column-reverse;
        }

        #burger{
            display: block;
            width: 100%;
            display: flex;
            justify-content: flex-end;
            z-index: 2;
        }

        #burger i{
            font-size: 2rem;
        }

        .display{
            height: 100vh;
            position: fixed;
            top: 0;
            right: 0;
            z-index: 10;
            width: 80%;
        }

        .display::before{
            position: absolute;
            content: '';
            height: 100vh;
            width: 100vw;
            backdrop-filter: blur(15px);
            top: 0;
            right: 0;
            z-index: -1;
        }

        .display::after{
            content: '';
            position: absolute;
            height: 100%;
            width: 100%;
            background-color: var(--background);
            top: 0;
            right: 0;
        }

        .display ul{
            display: block;
        }
    }
</style>