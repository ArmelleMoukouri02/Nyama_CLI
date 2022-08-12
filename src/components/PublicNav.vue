<template lang="">
    <div class="public_nav shadow-md-md w-md-100">
        <nav class="public_nav_content">
            <div class="public_nav-logo d-flex justify-content-between">
                <router-link to="/">
                    <h2>Nyama</h2>
                </router-link>
                <div class="svg d-md-none" @click="OpenNav = !OpenNav" >
                    <svg xmlns="http://www.w3.org/2000/svg" class="" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h7" />
                    </svg>
                </div>
            </div>
            <div class="public_nav-transitio d-none d-md-flex">
                <ul class="public_nav-link">
                    <li>
                        <router-link exact tag="li" active-class="active" to="/">Accueil</router-link>
                    </li>
                    <li>
                        <router-link exact tag="li" active-class="active" to="/restaurants">Restaurants</router-link>
                    </li>
                    <li>
                        <router-link exact active-class="active" to="/nourritures">Supermarchés</router-link>
                    </li>
                    <li>
                        <router-link active-class="active" exact to="/apropos">Apropos</router-link>
                    </li>
                </ul>
                <ul class="public_nav-search mx-3">
                    <li>
                        <a class="btn_connect" @click="show = !show">Compte</a>
                    </li>
                    <transition>
                        <div class="dropdown_connect" v-if="show">
                            <router-link to="/login" class="btn connect-btn">Connexion <i class="fa-solid fa-user-check mx-3"></i></router-link><br />
                            <router-link to="/register" class="btn connect-btn">Inscription <i class="fa-solid fa-user-check mx-3"></i></router-link>
                        </div>
                    </transition>
                </ul>
            </div>
            <div class="public_nav-transitio d-md-none" v-if="OpenNav">
                <ul class="public_nav-link">
                    <li class="my-2">
                        <router-link to="/">Accueil</router-link>
                    </li>
                    <li class="my-2">
                        <router-link to="/restaurants">Restaurants</router-link>
                    </li>
                    <li class="my-2">
                        <router-link to="/nourriture">Supermarchés</router-link>
                    </li>
                    <li class="my-2">
                        <router-link to="/apropos">Apropos</router-link>
                    </li>
                </ul>
                <ul class="public_nav-search mx-3">
                    <li>
                        <a class="btn_connect" @click="show = !show">Compte</a>
                    </li>
                    <transition>
                        <div class="dropdown_connect" v-if="show">
                            <router-link to="/login" class="btn connect-btn">Connexion <i class="fa-solid fa-user-check mx-3"></i></router-link><br />
                            <router-link to="/register" class="btn connect-btn">Inscription <i class="fa-solid fa-user-check mx-3"></i></router-link>
                        </div>
                    </transition>
                </ul>
            </div>
        </nav>

    </div>
</template>
<script>
export default {
    name: 'PublicNav',
    data() {
        return {
            OpenNav: false,
            show: false,
        }
    },
}
</script>
<style scoped>
    .dropdown_connect{
        position: absolute;
        top: 70%;
        right: 0;
        background: #FFFFFf;
        padding: 2rem;
        box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.02);
        border-radius: 12px;
    }
    .connect-btn{
        padding: 1rem 1.5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: 8px;
        cursor: pointer;
        transition: all ease .7s;
        transform: 1s;
    }
    .connect-btn:hover{
        background: #F2F3F4;
    }
    .connect-btn:focus{
        background: #D0E0F9;
    }

    .btn_connect{
        cursor: pointer;
    }
    .v-enter-active,
    .v-leave-active {
    transition: opacity 0.5s ease;
    }

    .v-enter-from,
    .v-leave-to {
    opacity: 0;
    }
    .public_nav{
        /* height: 80vh; */
        width: 100%;
        position: fixed;
        padding: 12px 22px;
        z-index: 20;
        background-color: #fff;
        -webkit-font-smoothing: antialiased;
        transform-origin: 0% 0%;
        transition: all .6s ease;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
    }
    .public_nav li a{
        font-size: 1rem;
    }
    .public_nav li{
        list-style: none;
        line-height: 2.5rem;
    }
    .public_nav ul{
        padding: 0;
        gap: 12px !important;
    }
    .svg{
        width: 2rem;
    }
    .public_nav-link li a.exact{
        color: #e6571ef1 !important;
        border-bottom: 2px solid #e6571ef1;
    }
    svg{
        width: 100%;
    }
    .public_nav-transition {
        transition: all .6s ease;
        background-color: #fff;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
        border-radius: .4rem;
        z-index: 10;
        padding: 1rem 2rem;
        
    }
    li a{
        font-size: .9rem;
        text-decoration: none;
    }
    @media screen and (min-width: 768px){
        .public_nav{
            width: 100%;
            padding: 10px 22px;
        }
        .public_nav ul{
            display: flex;
            align-items: center;
            margin: 0;
            gap: 1rem;
        }
        .public_nav_content{
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }
</style>