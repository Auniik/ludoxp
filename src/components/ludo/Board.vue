<template>
    <div class="board">
        <div style="display:flex; justify-content: space-between;">
            <Dice
                :id="1"
                :score="score[1]"
                :styles="visibleDice === 1 && diceActiveStyle"
                @rolled="handleRolled"
                key="1"
            />
            <div></div>
            <Dice
                :id="2"
                :score="score[2]"
                :styles="visibleDice === 2 && diceActiveStyle"
                @rolled="handleRolled"
                key="2"
            />
        </div>


        <div class="board-outside">

        </div>
        <div style="display:flex; justify-content: space-between;">
            <Dice
                :id="0"
                :score="score[0]"
                :styles="visibleDice === 0 && diceActiveStyle"
                @rolled="handleRolled"
                key="0"
            />
            <div></div>
            <Dice
                :id="3"
                :score="score[3]"
                :styles="visibleDice === 3 && diceActiveStyle"
                @rolled="handleRolled"
                key="3"
            />
        </div>
    </div>
</template>

<script>
    import Dice from './Dice.vue'

    export default {
        name: 'Board',
        components: {
            Dice
        },
        data() {
            return {
                visibleDice: 0,
                score: {
                    0: [], 1: [], 2: [], 3: []
                }
            }
        },
        methods: {
            handleRolled({eligibleUnit, score}) {
                this.visibleDice = eligibleUnit
                this.score = {...this.score, ...score}
            }
        },
        computed: {
            diceActiveStyle() {
                return "color:green; box-shadow: -3px 4px 15px 0px #bfbfbf;";
            }
        }

    }

</script>


<style scoped>
    .board-outside {
        width: 40vh;
        height: 40vh;
        display: inline-block;
        background: #F5F8FA;
        margin-left: 10%;
        margin-top: 10%;
        border-style: ridge;
    }
</style>
