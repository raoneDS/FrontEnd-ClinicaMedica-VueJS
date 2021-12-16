<template>
    <b-container>
      <h2>Pacientes</h2>
      <b-row>
        <b-col md=3>
          <b-button variant="info" to="/cadastro">Cadastrar Paciente</b-button>
        </b-col>
        <b-col md="3" offset-md="6">
          <b-form-input v-model="filter" type="search" placeholder="Search"></b-form-input>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-table 
            striped hover 
            :items="pacientes.pacientes" 
            :filter="filter" 
            :fields="fields"
          >
            <template v-slot:cell(Gerenciar)="data">
              <b-button size="sm" variant="danger" @click="deleteItem(data.item.id)">Excluir</b-button>
              <p></p>
              <b-button size="sm" variant="info" @click="deleteItem(pacientes.id)">Editar</b-button>
            </template>
          </b-table>
        </b-col>
      </b-row>
    </b-container>
</template>

<script>
import {mapState,mapActions} from 'vuex'
export default {
    data: () => ({
      filter:"",
      fields: ["nome","cpf","dataNascimento","peso","altura","estado","Gerenciar"],
      perPage: 2,
      currentPage: 1
    }),
    methods:{
      ...mapActions(['getPacientes']),
      deleteItem(id){
        alert("delete tudo "+id)
      },
    },
    computed:{
      ...mapState(['pacientes'])
    },
    created(){
      this.getPacientes()
    }
}
</script>