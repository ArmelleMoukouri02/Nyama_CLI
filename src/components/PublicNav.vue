<template lang="">
    <div class="public_nav">
        <nav class="public_nav_content">
            <div class="public_nav-logo">
                <h2>Nyama</h2>
            </div>
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
            <ul class="public_nav-search">
                <li>
                    <router-link to="/login">login</router-link>
                </li>
                <li>
                    <router-link to="/signup">Sign up</router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .public_nav{
        height: 80vh;
        padding: 12px 22px;
        z-index: 2;
        background-color: #fff;
        -webkit-font-smoothing: antialiased;
        transform-origin: 0% 0%;
        transform: translate(0%, 0);
        transition: transform 1s cubic-bezier(0.77,0.2,0.05,1.0);
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
    }
    .public_nav li{
        list-style: none;
        line-height: 2.5rem;
    }
    .public_nav ul{
        padding: 0;
    }
    @media screen and (min-width: 800px){
        .public_nav{
            height: 100%;
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