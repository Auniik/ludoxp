<template>

    <div>
        <div :style="activeStyles" 
            class="dice">

            <div class="dice-digit" v-html="getScore()"> </div>
        

        </div>
        <template v-if="getAllHistory().length" >
            <div class="small-dice"
                :key="count"
                v-for="count of getAllHistory()"
            >
                <div class="dice-digit"> {{count}} </div>
            
            </div>
        </template>
        
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
            isDiceRollable: Boolean,
            scoreHistory: Object
        },

        data() {
            return {
                round: {},
            }
        },
        methods: {

            getAllHistory() {
                if(!this.scoreHistory) {
                    return [];
                }
                const {used, unused} = this.scoreHistory;

                return [...used, ...unused];
            },

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

    .small-dice {
        width: 15px;
        height: 15px;
        margin: 10px;
        background: #d8d8d8;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        border-radius: 3px;
    }

    .small-dice > .dice-digit {
        zoom: 0.5
    }
</style>
