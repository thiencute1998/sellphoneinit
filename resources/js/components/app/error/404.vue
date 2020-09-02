<template>
    <div class="not-found">
        <h1>Sorry page not found !!!</h1>
        <router-link class="btn btn-primary" tag="button" :to="{ name: 'admin_root', params: {} }">Back to home</router-link>
    </div>

</template>
<script>

</script>
<style scoped>
.not-found{
    text-align: center;
    color: red;
}
</style>
