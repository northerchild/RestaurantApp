<template>
	<div>
		<ul id="restaurante-list" v-if="restaurantes != null">
			<li v-for="restaurante in restaurantes">
				<strong>{{restaurante.nombre}}</strong>
        <p>
          <router-link :to="{name:'ver-restaurante', params:{id: restaurante.id}}">Ver</router-link>
          <router-link :to="{name:'editar-restaurante', params:{id: restaurante.id}}">Editar</router-link>
          <span v-if="showBorrar != restaurante.id">
            <a @click="borrarRestaurante(restaurante.id)">Eliminar</a>
          </span>
          <span v-else>
            <p>¿Estas seguro de borrarlo?</p>
            <button @click="cancelarBorrado()">Cancelar</button>
            <button @click="confirmarBorrado(restaurante.id)">Borrar</button>
          </span>
        </p>
			</li>
		</ul>
		<span v-else>Cargando restaurantes...</span>
	</div>
</template>
<script>
import axios from 'axios';	
export default {
  name: 'restaurante-list',
  mounted(){
  	this.getRestaurantes();
  },
  data () {
    return {
      texto: 'Pagina Restaurantes List',
      restaurantes: null,
      showBorrar: null
    }
  },
  methods:{
  	getRestaurantes(){
  		axios.get('http://localhost:8081/vueSPA/restaurantapp/slim/restaurantes-api.php/restaurantes')
			 .then((respuesta)=>{
			 	this.restaurantes= respuesta.data.data
			 })
  	},
    borrarRestaurante(id){
      this.showBorrar = id
    },
    cancelarBorrado(){
      this.showBorrar = null
    },
    confirmarBorrado(id){
      axios.get('http://localhost:8081/vueSPA/restaurantapp/slim/restaurantes-api.php/delete-restaurante/'+id)
           .then((respuesta)=>{
              this.borrarRestaurante = null
              this.getRestaurantes()
           })
    }
  }
}
</script>
<style lang="scss">
      #restaurante-list{
        padding: 5px;
        li{
            margin-top: 10px;
            width: 30%;
            height: 120px;
            border: 1px solid #ddd;
            background: #eee;
            padding: 20px;
            overflow: hidden;
            border-radius: 10px;
            transition: all ease .7s;
            &:hover{
              box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
              background: #fbfbfb;
            }
          } 
          p{
            font-size: 1em;
            a{
              margin-right: 15px;
              text-decoration: none;
              cursor:pointer;
              &:hover{
                text-decoration: underline;
              }
            }
          }
      }
</style>