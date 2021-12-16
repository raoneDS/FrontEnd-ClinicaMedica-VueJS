<template>
  <div>
    <div class="principal">
      <h1>Pacientes</h1>
      <div class="list" v-for="paciente in pacientes" :key="paciente.cpf">
        <div class="dados">{{ paciente.id }}</div>
        <div class="dados">{{ paciente.nome }}</div> 
        <div class="dados">{{ paciente.cpf }}</div> 
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
      return{
        pacientes:{}
      }
    },
    methods:{
      getPacientes(){
        axios.get('http://localhost:8081/pacientes').then(resp => {
          this.pacientes = resp.data
        })
      }
    },
    created(){
      this.getPacientes()
      console.log("oi");
    }
}
</script>
<style lang="scss" scoped>

.categories{  
  align-items: center;
  text-align: center;
  .list{
    width: 50%;
    margin-left: 22.5%;
    align-items: center;
    padding: 1%;
    display: flex;
    justify-content: center;
    border: 1px solid grey;
    .dados{
      padding: 0.7%;
    }
  }
}

</style>

