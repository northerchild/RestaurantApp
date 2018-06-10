<template>
	<div>
		<h1>Detalle Del Restaurante {{id}}</h1>
		<div id="restaurant-detail" v-if="restaurante != null">
			<h2>{{restaurante.nombre}}</h2>
			<p>{{restaurante.descripcion}}</p>
		</div>
		<span v-else>Cargando Restaurante...</span>
	</div>
</template>
<script>
	import axios from 'axios'
	export default{
		name: 'restaurant-detail',
		mounted(){
			this.id = this.$route.params.id
			axios.get('http://localhost:8081/vueSPA/restaurantapp/slim/restaurantes-api.php/restaurante/' + this.id)
				 .then((respuesta)=>{
				 	this.restaurante = respuesta.data.data
				 })
		},
		data(){
			return{
				id: null,
				restaurante: null
			}
		}
	}
</script>