<template>

    <div :style="activeStyles" 
        class="dice">

        <div class="dice-digit" 
            v-html="getScore()"> 
        </div>

    </div>

    <!-- <div @click="roll" :style="styles" class="dice">
        <div class="dice-digit" >
            <div>⊚ </div>
            <div>⊚ </div>
        </div>
    </div> -->

</template>

<script>

    export default {
        name: 'Dice',
        props: {
            score: Array,
            isDiceRollable: Boolean
        },

        data() {
            return {
                round: {},
            }
        },
        methods: {
            getScore() {
                const score = [...this.score];

                if(score == undefined) {
                    return '...'
                }

                if (score.length == 1) {
                    return "⊚ ".repeat(score[0])
                }

                if (score.length == 2) {
                    return "⊚ ".repeat(score[1])
                }

                if (score.length == 3) {
                    return "⊚ ".repeat(score[2])
                }
                
                return "...";
            },
        },
        computed: {
            
            activeStyles() {
                return this.isDiceRollable ? "color:green; box-shadow: -3px 4px 15px 0px #bfbfbf;" : ''
            }
        }
    }

</script>


<style scoped>
    .dice {
        width: 80px;
        height: 80px;
        margin: 10px;
        background: #d8d8d8;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        border-radius: 10px;
    }

    .dice-digit {
        font-size: 19px;
        display: flex;
        font-weight: bolder;
        margin: inherit;
    }
</style>
