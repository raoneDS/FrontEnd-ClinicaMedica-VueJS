<template>
  <div class="conteudo">
      <ul>
        <router-link to="/">
            <li><img alt="Youx Group" width="150" src="../assets/youx.png"></li>
        </router-link>
        <router-link to="/Home">
            <li>Home</li>
        </router-link>
        <router-link to="/Pacientes">
            <li>Pacientes</li>
        </router-link>
        <router-link to="/">
            <li>Logout</li>
        </router-link>
      </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.conteudo{
    ul{
        display: flex;
        list-style: none;
        justify-content: space-around;
        align-items: center;
        li{
            margin-left: 100px;
        }
    }
}
</style>