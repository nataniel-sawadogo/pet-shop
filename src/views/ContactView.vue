<script setup lang="ts">
import { ErrorMessage, Field, Form } from "vee-validate";
import { ref } from "vue";

const more = ref(false)
</script>

<template>
    <div class="contain-contact">
        <div class="form">
            <Form>
                <div class="inputs">
                    <label>First name:</label>
                    <Field 
                        name="fname"
                        placeholder="Enter your first name"
                        class="input"
                        type="text"
                    />
                </div>
                <div class="inputs">
                    <label>Last name:</label>
                    <Field 
                        name="lname"
                        placeholder="Enter your last name"
                        class="input"
                        type="text"
                    />
                </div>
                <div class="inputs">
                    <label>Email:</label>
                    <Field 
                        name="email"
                        placeholder="Enter your email"
                        class="input"
                        type="email"
                    />
                </div>
                <div class="inputs message">
                    <label>Message:</label>
                    <Field 
                        name="message"
                        type="text"
                    >
                        <textarea placeholder="Enter what you would like" name="textmessage" class="input"/>
                    </Field>
                </div>
                <div class="inputs button">
                    <button type="submit"><p>Send</p></button>
                </div>
            </Form>
        </div>
        <div id="info" @click="more=!more" :class="{active: more}">
            <div class="inner">
                <h3>Contact info <span>+</span></h3>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .contain-contact{
        height: 90vh;
        width: 100%;
        background: linear-gradient(to bottom, rgba(0,0,0,1)0%, rgba(0,0,0,0.7)60%, rgba(0,0,0,0.7)100%), url(../../public/img/kitten_phone.png);
        background-size: 100% 100%;
        padding: 0 5%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        overflow-x: hidden;
    }

    .form{
        height: 80%;
        width: 35vw;
        /* background: rgba(0,0,0,0.4); */
        background: linear-gradient(45deg, rgba(0,0,0,0.15)0%, rgba(0,0,0,0.45)30%, rgba(0,0,0,0.15)100%);
        border-top: rgba(255,255,255,0.4) 2px solid;
        border-left: rgba(255,255,255,0.4) 2px solid;
        border-bottom: rgba(255,255,255,0.2) 1px solid;
        border-right: rgba(255,255,255,0.2) 1px solid;
        backdrop-filter: blur(15px);
        border-radius: 1.25rem;
    }

    form{
        height: 100%;
        width: 100%;
        padding: 3vh 3vw;
    }

    .inputs{
        width: 100%;
        height: 15%;
        /* border: red 1px solid; */
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .input{
        height: 50%;
        width: 60%;
        border-radius: 0.4rem;
        border: 1px rgba(255,255,255,0.4) solid;
        background-color: rgba(255,255,255,0.1);
        padding: 0 0.7em;
        color: var(--text);
    }

    .message{
        height: 40%;
    }

    .message label, .message textarea{
        height: 80%;
    }

    .message textarea{
        resize: none;
        padding-top: 0.7em;
    }

    .message textarea::-webkit-scrollbar{
        width: 5px;
        height: 90%;
    }

    .message textarea::-webkit-scrollbar-thumb{
        background-color: var(--text-secondary);
        border-radius: 5px;
        width: 3px;
    }

    .message textarea::-webkit-scrollbar-track{
        background: transparent;
    }

    button{
        width: 10vw;
        height: 7vh;
        color: var(--text);
        font-size: 1.5rem;
        border-radius: 1rem;
        cursor: pointer;
        overflow: hidden;
        background: linear-gradient(to right, var(--secondary)0%, var(--primary)100%);
        position: relative;
    }

    button p{
        z-index: 2;
        position: relative !important;
        background: none;
        font-weight: 700;
    }

    button::after{
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

    button:hover::after{
        opacity: 1;
    }

    button:hover{
        border: var(--text) 1px solid;
    }

    .button{
        justify-content: center;
    }

    #info{
        position: absolute;
        height: 35vh;
        width: 25vw;
        background: url(../../public/img/blob.svg);
        right: 8vw;
        bottom: 17vh;
        background-size: 100% 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: var(--transition-time);
        cursor: pointer;
    }

    #info.inner{
        height: 20vh;
        width: 10vw;
    }

    #info.active{
        scale: 1.5;
    }

    #info.active *{
        transition: var(--transition-time);
    }

    #info.active .inner span{
        transform: rotate(45deg);
    }

    #info .inner h3{
        display: flex;
        gap: 5px;
    }

    @media(max-width: 431px){
        #info{
            display: none;
        }

        .form{
            width: 90vw;
            padding: 0 3vw;
            backdrop-filter: blur(5px);
        }

        button{
            width: 40vw;
        }

        .contain-contact{
            background-size: cover;
            background-position: 80%;
        }
    }

</style>