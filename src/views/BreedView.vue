<template>
    <div class="contain-breed">
        <div class="description-container">
            <div class="left">
                <div id="img"></div>
                <div id="text">
                    <p>Name: Dog breed</p>
                    <p>Avg. weight: 25kg</p>
                    <p>Avg. height: 50cm</p>
                    <p>Fur colors: Brown, Peach</p>
                    <p>Demeanor: Gentle</p>
                </div>
            </div>
            <div class="right">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur molestias quae ea, sint voluptatibus quos quisquam doloribus! Nemo atque temporibus architecto sit officiis consectetur! Facere beatae illo in officiis natus unde fugiat ipsa voluptatum provident similique tempore eaque repudiandae excepturi sunt, alias molestiae officia quisquam, exercitationem atque magni impedit nostrum reprehenderit perspiciatis minima. Delectus pariatur, ducimus tempora, perspiciatis itaque corrupti, possimus officiis magnam ratione quaerat amet sed cumque ipsa molestias? Quod, incidunt aperiam delectus magnam amet quas ut cupiditate magni aut explicabo est ipsa eum esse modi quia ipsam in maxime et fugit nobis. Temporibus ratione natus voluptate possimus quasi.<br><br>
                Exercitationem totam tempore dignissimos sunt magnam veniam autem ab at! Similique at dolore doloremque excepturi distinctio? Nihil, corrupti illo. Dolore nisi officiis iure repudiandae! Provident aspernatur, quod facilis culpa magnam iure perferendis animi sequi dolores eum repellendus eius sapiente rerum temporibus fugit ex, accusantium pariatur ipsum ratione odio? In placeat sapiente officia reiciendis pariatur a est omnis laborum nesciunt voluptate? Blanditiis dolor incidunt sunt! Nemo praesentium iste dolores non asperiores vitae esse perferendis voluptate nulla eius, accusamus autem fuga temporibus repudiandae recusandae natus laborum officiis maxime impedit ab neque aspernatur, magni rerum sint? Dolorem beatae impedit id, assumenda quia soluta.</p>
            </div>
        </div>
        <div class="buttons">
            <button>Back</button>
            <button><p>Adopt</p></button>
        </div>
    </div>
</template>

<style scoped>
    .contain-breed{
        height: 90vh;
        width: 100%;
        background: radial-gradient(var(--background-secondary), var(--background));
        display: flex;
        flex-direction: column;
        padding: 0 5%;
    }

    .description-container{
        display: flex;
        padding-top: 5vh;
        height: 75%;
        /* border: red 1px solid; */
    }

    .left{
        width: 35vw;
        height: 100%;
    }

    .right{
        width: 55vw;
        text-align: justify;
        height: 100%;
    }

    #img{
        background-image: url(../../public/img/dog1.jpg);
        height: 35vh;
        width: 30vw;
        border-radius: 1.5rem;
        overflow: hidden;
        background-size: 100% 100%;
    }

    #text{
        text-align: left;
        width: 100%;
        padding-top: 2.5vh;
        padding-bottom: 2.5vh;
    }

    #text p{
        font-family: 'Ubuntu Mono', monospace;
        line-height: 2rem;
        font-size: 1.2rem;
    }

    .buttons button{
        width: 25vw;
        height: 12vh;
        color: var(--text);
        font-size: 2rem;
        border-radius: 1.5rem;
        cursor: pointer;
    }

    .buttons{
        width: 100%;
        padding: 0 5%;
        display: flex;
        justify-content: space-around;
    }

    .buttons :nth-child(1){
        background-color: gray;
        font-weight: 600;
        transition: var(--transition-time);
    }

    .buttons :nth-child(2){
        background: linear-gradient(to right, var(--secondary)0%, var(--primary)100%);
        letter-spacing: 0.2rem;
        overflow: hidden;
        position: relative;
        /* transition: calc(var(--transition-time)*2); */
        border: var(--text) 3px transparent;
        /* z-index: 0; */
    }

    .buttons :nth-child(2) p{
        z-index: 2;
        position: relative !important;
        background: none;
        font-weight: 700;
    }

    .buttons :nth-child(2) p:hover{
        background: none;
    }

    .buttons :nth-child(2)::after{
        content: '';
        background: linear-gradient(to left, var(--secondary)0%, var(--primary)100%);
        z-index: 1;
        position: absolute;
        height: 12vh;
        width: 25vw;
        top: 0;
        left: 0;
        transition: calc(var(--transition-time)*2);
        opacity: 0;
    }

    .buttons :nth-child(2):hover::after{
        opacity: 1;
    }

    .buttons :nth-child(2):hover{
        border: var(--text) 3px solid;
    }

    .buttons :nth-child(1):hover{
        background-color: rgb(91, 91, 91);
    }


</style>