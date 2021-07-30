<template>
    <div>
        <Board />
    </div>
</template>

<script>
    import Board from './components/ludo/Board.vue'

    

    export default {
        name: 'App',
        components: {
            Board
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #314d69;
        margin-top: 60px;
    }
</style>
