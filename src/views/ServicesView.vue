<template>
    <div class="container-s">
        <div class="card">
            <div class="icon"></div>
            <h1>01</h1>
            <p>Shop</p>
        </div>
        <div class="card">
            <div class="icon"></div>
            <h1>02</h1>
            <p>Shop</p>
        </div>
        <div class="card">
            <div class="icon"></div>
            <h1>03</h1>
            <p>Shop</p>
        </div>
    </div>
</template>

<style scoped>
    .container-s{
        height: 90vh;
        width: 100%;
        background: radial-gradient(var(--background-secondary), var(--background));
        padding: 0 5%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .icon{
        background: url(../../public/img/store.svg);
        background-size: 100% 100%;
        height: 5rem;
        width: 5rem;
        z-index: 1;
    }

    .card{
        background-color: var(--primary);
        height: 70%;
        width: 25vw;
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction: column;
        border-radius: 2rem;
        transition: var(--transition-time);
        position: relative;
        overflow: hidden;
    }

    .card::after{
        position: absolute;
        content: '';
        height: 0%;
        width: 100%;
        background-color: var(--secondary);
        bottom: 0;
        left: 0;
        transition: var(--transition-time);
        z-index: 0;
    }

    h1{
        opacity: 0.5;
        font-size: 5.5rem;
        letter-spacing: 1rem;
        z-index: 1;
    }

    p{
        font-size: 3rem;
        letter-spacing: 1rem;
        font-weight: bold;
        z-index: 1;
    }

    .card:hover{
        scale: 1.05;
    }

    .card:hover::after{
        height: 100%;
    }
</style>