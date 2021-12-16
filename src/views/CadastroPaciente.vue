<template>
  <div class="justify-content-md-left">
    <h3>Dados Paciente</h3>
    <b-container >
      <b-form @reset="onReset" v-if="show">

        <b-form-group align-h="start" id="input-group-nome" label="Nome:" label-for="input-nome">
          <b-form-input
            id="input-nome"
            v-model="form.nome"
            placeholder="Digite Nome do Paciente"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-cpf" label="CPF:" label-for="input-cpf">
          <b-form-input
            id="input-cpf"
            v-model="form.cpf"
            type="number"
            placeholder="CPF"
            required
          ></b-form-input>
        </b-form-group>

        <label for="input-date">Data de Nascimento:</label>
        <b-input-group class="mb-3">
          <b-form-input
            id="input-date"
            v-model="form.dataNascimento"
            type="text"
            placeholder="YYYY-MM-DD"
            autocomplete="off"
          ></b-form-input>
          <b-input-group-append>
            <b-form-datepicker v-model="form.dataNascimento" button-only right locale="en-US" aria-controls="input-date" @context="onContext"></b-form-datepicker>
          </b-input-group-append>
        </b-input-group>

        <b-form-group id="input-group-peso" label="Peso:" label-for="input-peso">
          <b-form-input
            id="input-peso"
            v-model="form.peso"
            type="number"
            placeholder="Peso em Kilos"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-altura" label="Altura:" label-for="input-altura">
          <b-form-input
            id="input-altura"
            v-model="form.altura"
            type="number"
            placeholder="Altura em Metros"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-estado" label="Estado:" label-for="input-estado">
          <b-form-select
            id="input-estado"
            v-model="form.estado"
            :options="estados"
          ></b-form-select>
        </b-form-group>

        <b-button type="submit" variant="primary" v-on:click="addPacienteForm">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>

      <b-card class="mt-3" header="Form Data Result">
        <pre class="m-0">{{ form }}</pre>
      </b-card>

    </b-container>
  </div>
</template>

<script>
import axios from 'axios'
import {mapActions} from 'vuex'
  export default {
    data() {
      return {
        form: {
          cpf: '',
          nome: '',
          altura: '',
          peso: '',
          estado: '',
          dataNascimento: ''
        },
        estados: [],
        value: '',
        formatted: '',
        selected: '',
        foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
        show: true
      }
    },
    methods: {
      ...mapActions(['addPaciente']),
      addPacienteForm(paciente){
        paciente = {
          cpf: this.form.cpf,
          nome: this.form.nome,
          peso: this.form.peso,
          altura: this.form.altura,
          estado: this.form.estado,
          dataNascimento: this.form.dataNascimento
        }
        this.addPaciente(paciente)
          
        this.form.cpf = ''
        this.form.nome = ''
        this.form.altura = ''
        this.form.estado = ''
        this.form.dataNascimento = ''
        this.form.peso = ''
      },
      getEstados(){
        axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados').then(resp => {
          for (var i = 0; i < resp.data.length; i++){
            this.estados.push({ text: resp.data[i]['nome'], value: resp.data[i]['sigla'] })
          }
        })
      },
      onContext(ctx) {
        // The date formatted in the locale, or the `label-no-date-selected` string
        this.formatted = ctx.selectedFormatted
        // The following will be an empty string until a valid date is entered
        this.selected = ctx.selectedYMD
      },
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
          this.form.cpf = ''
          this.form.nome = ''
          this.form.altura = ''
          this.form.estado = ''
          this.form.dataNascimento = ''
          this.form.peso = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    },
    created(){
      this.getEstados();
    },
    
  }
</script>

<style>

</style>