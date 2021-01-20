
<template>
    <div class="user-dropdown">
        <div class="user-button"> <!-- q se refere ao botao, dentro dele teremos o nome e o icone-->
            <span class="d-none d-sm-block">{{ user.name }}</span>
            <div class="user-dropdown-img">
                <Gravatar :email="user.email" alt="User" />
            </div>
                <i class="fa fa-angle-down"></i>
        </div>
        <div class="user-dropdown-content">
            <router-link to="/admin">
            <a ><i class="fa fa-cogs"></i> Administração</a>
            </router-link>
            <a ><i class="fa fa-sign-out"> Sair</i></a>
        </div>
    </div>
</template>

<script> 
import { mapState } from 'vuex'
import Gravatar from 'vue-gravatar'

export default {
    name: 'UserDropdown',
    components: { Gravatar },
    computed: mapState(['user'])
}
// esse arquivo é referenciado pelo header
</script>

<style>
       .user-dropdown {
        position: relative;
        height: 100%;
    }

    .user-button {
        display: flex;
        align-items: center;
        color: #fff;
        font-weight: 100;
        height: 100%;
        padding: 0px 20px;
    }

    .user-dropdown:hover {
        background-color: rgba(0, 0, 0, 0.2);
    }

    .user-dropdown-img {
        margin: 0px 10px;
    }

    .user-dropdown-img > img {
        max-height: 37px;
        border-radius: 5px;
    }

    .user-dropdown-content{
        position:absolute;
        right: 0px;
        background-color: #f9f9f9;
        min-width: 170px;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        padding: 10px;
        z-index: 1;

        display: flex;
        flex-direction: column;
        flex-wrap: wrap;

        visibility: hidden;
        opacity: 0;
        transition: visibility 0s, opacity 0.5s linear;
    }

/* significa que quando aplicar o hover no user-dropdown será aplicado uma regra no user-dropdwon-content */
    .user-dropdown:hover .user-dropdown-content{
        visibility: visible;
        opacity: 1;
    }

    .user-dropdown-content a {
        text-decoration: none;
        color: rgb(40, 57, 113);
        padding: 10px;
    }

    .user-dropdown-content a:hover{
        background-color: cornsilk;
          text-decoration: none;
        color: rgb(40, 57, 113);

    }
</style>