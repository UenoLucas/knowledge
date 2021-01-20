<!-- arquivo para trazer as estatísticas do backend, dos artigos. componentes, usuarios -->
<template>
    <div class="stat">
        <div class="stat-icon">
            <i :class="icon" :style="style"></i>
        </div>
        <div class="stat-info">
            <span class="stat-title">{{ title }}</span>
            <span class="stat-value">{{ value }}</span>
        </div>
    </div>
</template>

<script>
export default {
name: 'Stat',
props: ['title', 'value', 'icon', 'color'],
computed: {
    style() { //style é a parte computada para selecionar a cor do icone do dashboard
        return "color: " + (this.color || '#000')  //selecionamos uma cor para o icone, caso n for selecionado será preto
    }
}
}
</script>

<style>
    .stat{
        flex:1;
        display: flex;
        border-radius: 8px;
        margin-right: 20px;
        margin-bottom: 20px;
        background-color: #FFF;
        padding: 20px;
        border: 1px unset rgba(0,0,0,0.2);
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15)
    }

    .stat-icon{
        display: flex;
        align-items: center;
    }

    .stat-icon i{
        font-size:3rem;
    }

    .stat-info{
        flex:1;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }

    .stat-title{
        font-size: 0.85rem;
    }

    .stat-value{
       font-size: 2rem;
    }
</style>