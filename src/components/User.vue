<template>
    <div class="user">
        <h2>User {{ $route.params.id }}</h2>
		<router-link to="/user/:1/profile">profile</router-link>
		<router-link to="/user/:2/posts">posts</router-link>
		<router-view></router-view>
    </div>
</template>
<script>

</script>
<style>
	
</style>