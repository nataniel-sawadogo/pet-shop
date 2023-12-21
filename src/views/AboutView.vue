<template>
    <div class="container-a">
        <div id="back">
            <h1>WE ARE PET SHOP. THE BEST FRIENDS FOR THE BEST HUMANS</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam ipsum, ex enim quam animi esse expedita voluptatibus nesciunt odit aliquam! Odit velit harum perferendis, voluptas temporibus obcaecati maiores voluptatibus non consequatur, eum id incidunt asperiores doloremque perspiciatis? Consequuntur, nisi id alias debitis fuga dolore? Earum consequuntur et tempora sed. Harum amet labore ratione corrupti, illum maiores nostrum voluptatem porro, voluptates, voluptatibus fugit illo accusantium aliquid nemo sequi dolores expedita tenetur saepe impedit. Excepturi maiores harum veniam adipisci incidunt quam tempora, vel libero, ut atque totam quo. Quas nostrum suscipit sint voluptates cumque est quia laborum rerum nemo esse vitae, expedita aperiam optio vero ad eaque harum, incidunt et voluptatum dolore nesciunt amet sequi, corrupti eius. Rerum obcaecati distinctio modi culpa quidem! Ab saepe enim cupiditate iusto minus, facilis ducimus quo esse non voluptatum ipsa facere consequatur ut omnis vel, temporibus, culpa blanditiis voluptas fugiat quia harum dolores beatae odit officia. Ipsa sint distinctio molestias quas ipsum, veritatis voluptates, nostrum, dolorum obcaecati reiciendis quibusdam et enim inventore perspiciatis possimus. Aperiam quia, provident aspernatur architecto ea voluptates iure ratione ullam quos sed, voluptate ex voluptatem pariatur? Possimus ipsam veritatis fuga animi. Perspiciatis soluta doloribus velit placeat suscipit veritatis illo eligendi, nemo consequuntur.</p>
        </div>
    </div>
</template>

<style scoped>
    .container-a{
        height: 90vh;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(to bottom, rgba(0,0,0,1)0%, rgba(0,0,0,0.3)20%, rgba(0,0,0,0.1)100%), url(../../public/img/blobs.svg);
        background-size: 100% 100%;
    }

    #back{
        width: 80%;
        height: 80%;
        background: linear-gradient(45deg, rgba(0,0,0,0.15)0%, rgba(0,0,0,0.45)30%, rgba(0,0,0,0.15)100%);
        border-top: rgba(255,255,255,0.4) 2px solid;
        border-left: rgba(255,255,255,0.4) 2px solid;
        border-bottom: rgba(255,255,255,0.2) 1px solid;
        border-right: rgba(255,255,255,0.2) 1px solid;
        backdrop-filter: blur(15px) saturate(200%);
        border-radius: 1.25rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 5vh;
    }

    h1{
        width: 90%;
        text-align: left;
    }

    p{
        width: 90%;
        text-align: justify;
    }
</style>