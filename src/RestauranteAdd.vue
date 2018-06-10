<template>
	<div id="restaurante-add">
	<h2>Crear restaurante</h2>
		<form action="">
			<p>
				<label for="">Nombre</label>
				<input type="text">
			</p>
			<p>
				<label for="">Dirección</label>
				<input type="text">
			</p>
			<p>
				<label for="">Descripción</label>
				<textarea name=""></textarea>
			</p>
			<p>
				<label for="">Nombre</label>
				<select name="">
					<option value="">Seleciona una opción</option>
					<option value="Bajo">Bajo</option>
					<option value="Medio">Medio</option>
					<option value="Alto">Alto</option>
				</select>
			</p>
			<input type="submit" value="Guardar restaurante">
		</form>
	</div>
</template>
<style>
	textarea{
		min-height: 50px;
		max-height: 150px;
		min-width: 100px;
		max-width: 150px;
	}
</style>