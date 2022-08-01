<template lang="">
    <div class="public_nav shadow-md-md w-md-100">
        <nav class="public_nav_content">
            <div class="public_nav-logo d-flex justify-content-between">
                <h2>Nyama</h2>
                <div class="svg d-md-none" @click="OpenNav = !OpenNav" >
                    <svg xmlns="http://www.w3.org/2000/svg" class="" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h7" />
                    </svg>
                </div>
            </div>
            <div class="public_nav-transitio d-none d-md-flex">
                <ul class="public_nav-link">
                    <li>
                        <router-link to="/">Accueil</router-link>
                    </li>
                    <li>
                        <router-link to="/restaurant">Restaurants</router-link>
                    </li>
                    <li>
                        <router-link to="/nourritures">Nourritures</router-link>
                    </li>
                    <li>
                        <router-link to="/apropos">Apropos</router-link>
                    </li>
                </ul>
                <ul class="public_nav-search mx-3">
                    <li>
                        <router-link to="/login">login</router-link>
                    </li>
                </ul>
            </div>
            <div class="public_nav-transitio d-md-none" v-if="OpenNav">
                <ul class="public_nav-link">
                    <li class="my-2">
                        <router-link to="/">Accueil</router-link>
                    </li>
                    <li class="my-2">
                        <router-link to="/restaurant">Restaurants</router-link>
                    </li>
                    <li class="my-2">
                        <router-link to="/nourriture">Nourritures</router-link>
                    </li>
                    <li class="my-2">
                        <router-link to="/apropos">Apropos</router-link>
                    </li>
                </ul>
                <ul class="public_nav-search">
                    <li class="my-2">
                        <router-link to="/login">login</router-link>
                    </li>
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
        }
    },
}
</script>
<style scoped>
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
    .public_nav li{
        list-style: none;
        font-size: 1.2rem;
        line-height: 2.5rem;
    }
    .public_nav ul{
        padding: 0;
        gap: 12px !important;
    }
    .svg{
        width: 2rem;
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