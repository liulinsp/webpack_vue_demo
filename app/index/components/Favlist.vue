<template>
    <ul>
	<li v-for="n in 10">div</li>
    </ul>
</template>

<script>
    export default {
        data () {
            return {
                msg: 'Hello World!'
            }
        }
    }
</script>

<style>
    html{
        background: #ffaaaa;
    }
</style>