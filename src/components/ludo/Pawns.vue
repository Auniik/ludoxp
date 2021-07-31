<template>

    <div class="room-box">
        <div :class="`pawn ${pawn.color}`" 
            :key="`${pawn.id}-${pawn.color}`" 
            v-for="pawn of pawns"
            @click="$emit('clicked', pawn)"
        >
            {{ !pawn.isActive ?  pawn.id : ''}}
        </div>
    </div>


</template>

<script>

    export default {
        name: 'Pawns',
        props: {
            pawns: Array
        },

        data() {
            return {
                
            }
        },
        methods: {

            
            
        },
        computed: {
            
        }
    }

</script>


<style scoped>
    
</style>
