<template>
    <div class="admin-pages">
        <PageTitle icon="fa fa-cogs" main = "Administracao do sistema"
            sub="Cadastro & Cia"/>
        <div class="admin-pages-tabs">
            <b-card no-body> <!--tags com b é do bootstrap vue, b-card cria um card branco-->
                     <b-tabs card>
                         <b-tab title="Artigos" active>
                             <ArticleAdmin/>
                         </b-tab>
                         <b-tab title="Categorias">
                             <CategoryAdmin/>
                         </b-tab>
                         <b-tab title="Usuários">
                             <UserAdmin/>
                         </b-tab>
                     </b-tabs>
            </b-card>
        </div>
    </div>
</template>

<script>
import PageTitle from '../template/PageTitle'
import ArticleAdmin from './ArticleAdmin'
import CategoryAdmin from './CategoryAdmin'
import UserAdmin from './UserAdmin'

export default {
    name: 'AdminPages',
    components: { PageTitle, ArticleAdmin, CategoryAdmin, UserAdmin }
}
</script>

<style>

</style>