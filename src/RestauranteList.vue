<template>
	<div>
		<ul id="restaurante-list" v-if="restaurantes != null">
			<li v-for="restaurante in restaurantes">
				<strong>{{restaurante.nombre}}</strong>
			</li>
		</ul>
		<span v-else>Cargando restaurantes...</span>
	</div>
</template>
<script>
import axios from 'axios';	
export default {
  name: 'restauranteList',
  mounted(){
  	this.getRestaurantes();
  },
  data () {
    return {
      texto: 'Pagina Restaurantes List',
      restaurantes: null
    }
  },
  methods:{
  	getRestaurantes(){
  		axios.get('http://localhost:8081/vueSPA/restaurantapp/slim/restaurantes-api.php/restaurantes')
			 .then((respuesta)=>{
			 	this.restaurantes= respuesta.data.data
			 })
  	}
  }
}
</script>
<style></style>