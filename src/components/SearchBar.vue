<template>
    <div class="contain">
        <input type="text" placeholder="Search breeds">
        <i class="search"></i>
    </div>
</template>

<style scoped>

     /*Modify this class to move the search bar around, or reduce the space it takes up. It is the container for the search bar itself */
    .contain{
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 0% 5%;
        height: 12vh;
        position: relative;
        /* border: red 1px solid; */
    }

    input{
        border-radius: 3em;
        height: 45%;
        width: 25%;
        padding: 0 2%;
        border: none;
        background-color: var(--text);
    }

    .search{
        height: 1.2rem;
        width: 1.2rem;
        /* background-image: url(/img/site_icons/search.svg); */
        background-image: url(../../public/img/site_icons/search.svg);
        background-size: 100% 100%;
        position: absolute;
        left: 25%;
    }

    @media (max-width: 431px){
        input {
            width: 100%;
            padding: 0 5%;
            font-size: 1.1rem;
        }

        .search{
            left: 85%;
        }
    }

</style>