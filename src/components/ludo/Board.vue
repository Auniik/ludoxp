<template>
    <div class="board">
        <div class="container">
            <div class="dice-container">
                <Dice
                    @click="roll(1)"
                    :score="score[1]"
                    :isDiceRollable="visibleDice === 1"
                    key="1"
                    :scoreHistory="scoreHistory[1]"
                />
                <Dice
                    @click="roll(0)"
                    :score="score[0]"
                    :isDiceRollable="visibleDice === 0"
                    key="0"
                    :scoreHistory="scoreHistory[0]"
                />
                
                
                
            </div>

            <div class="board-outside">
                <div :class="`room ${rollers[0][0].color}`"> 
                    <!-- room 1 -->
                     <div class="room-box">
                        <div :class="`pawn ${pawn.color}`" 
                        :key="`${pawn.id}-${pawn.color}`" 
                        v-for="pawn of rollers[0]">
                            {{pawn.id}}
                        </div>
                    </div>
                </div>
                
                <!-- base of 3 -->
                <div class="path-v">

                    <div 
                        :class="`pawn-race  ${isSafe(identity) ? `${rollers[1][0].color}` : ''}`"
                        :key="identity"
                        v-for="identity of aile3"
                    >
                        {{identity}}
                    </div>
                </div>
                
                <div :class="`room ${rollers[1][0].color}`">
                    <!-- room 2 -->
                     <div class="room-box">
                        <div :class="`pawn ${pawn.color}`" 
                        :key="`${pawn.id}-${pawn.color}`" 
                        v-for="pawn of rollers[1]">
                            {{pawn.id}}
                        </div>
                    </div>
                </div>
                
                <div class="path-h">
                    <!-- Base of 2 -->
                    <div 
                        :class="`pawn-race  ${isSafe(identity) ? `${rollers[0][0].color}` : ''}`"
                        :key="identity"
                        v-for="identity of aile2"
                    >
                        {{identity}}
                    </div>
                </div>
                
                <div class="path-c">
                     path center
                </div>
                
                <div class="path-h">
                    <!-- Base of 4 -->
                    <div 
                        :class="`pawn-race  ${isSafe(identity) ? `${rollers[3][0].color}` : ''}`"
                        :key="identity"
                        v-for="identity of aile4"
                    >
                        {{identity}}
                        
                    </div>
                </div>
                
                <div :class="`room ${rollers[2][0].color}`">
                    <!-- room 3 -->
                     <div class="room-box">
                        <div :class="`pawn ${pawn.color}`" 
                        :key="`${pawn.id}-${pawn.color}`" 
                        v-for="pawn of rollers[2]">
                            {{pawn.id}}
                        </div>
                    </div>
                </div>
                <!-- Base of 1 -->
                <div class="path-v">
                    <div 
                        :class="`pawn-race  ${isSafe(identity) ? `${rollers[2][0].color}` : ''}`"
                        :key="identity"
                        v-for="identity of aile1"
                    >
                        {{isAvailablePawn(identity) ? `<div class="pawn"></div>` : ''}}
                    </div>
                </div>
                
                <div :class="`room ${rollers[3][0].color}`">
                     <!-- room 4 -->
                     <div class="room-box">
                        <div :class="`pawn ${pawn.color}`" 
                        :key="`${pawn.id}-${pawn.color}`" 
                        v-for="pawn of rollers[3]">
                            {{pawn.id}}
                        </div>
                    </div>
                </div>
            
            </div>
            <div class="dice-container">
                <Dice
                    @click="roll(2)"
                    :score="score[2]"
                    :isDiceRollable="visibleDice === 2"
                    key="2"
                    :scoreHistory="scoreHistory[2]"
                />
                <Dice
                    @click="roll(3)"
                    :score="score[3]"
                    :isDiceRollable="visibleDice === 3"
                    key="3"
                    :scoreHistory="scoreHistory[3]"
                />
                
            </div>
        </div>
        <button 
            style="padding: 20px; border: 0.5px; margin: 15px; font-size: medium; box-shadow: 1px 1px 6px #969696; background: white;" 
            @click="resetGame">Reset
        </button>
    </div>
</template>

<script>
    import Dice from './Dice.vue'
    import { resetBoard, updateBoard } from '../../API/Bootstrap'
    const board = require('../../API/Bootstrap').default


    export default {
        name: 'Board',
        components: {
            Dice
        },
        data() {
            return {
                visibleDice: board.eligibleRoller(),
                rollers: board.rollers,

                score: {
                    0: [], 1: [], 2: [], 3: []
                },

                scoreHistory: {},


                aile1: [ 
                    "5-44-31-18", "56-x-x-x", "45-32-19-6", "4-43-30-17", "55-x-x-x", 
                    "46-33-20-7", "3-42-29-16", "54-x-x-x", "47-34-21-8", "2-41-28-15", 
                    "53-x-x-x", "48-35-22-9", "1-40-27-14", "52-x-x-x", "49-36-23-10", 
                    "x-39-26-13", "51-38-25-12", "50-37-24-11",
                ],
                aile2: [ 
                    "13-x-39-26", "12-51-38-25", "11-50-37-24", "14-1-40-27", "x-52-x-x", 
                    "10-49-36-23", "15-2-41-28", "x-53-x-x", "9-48-35-22", "16-3-42-29", 
                    "x-54-x-x", "8-47-34-21", "17-4-43-30", "x-55-x-x", "7-46-33-20", 
                    "18-5-44-31", "x-56-x-x", "6-45-32-19",
                ],
                aile3: [ 
                    "24-11-50-37", "25-12-51-38", "26-13-x-39", "23-10-49-36", "x-x-52-x", 
                    "27-14-1-40", "22-9-48-35", "x-x-53-x", "28-15-2-41", "21-8-47-34", 
                    "x-x-54-x", "29-16-3-42", "20-7-46-33", "x-x-55-x", "30-17-4-43", 
                    "19-6-45-32", "x-x-56-x", "31-18-5-44",
                ],
                aile4: [
                    "32-19-6-45", "x-x-x-56", "44-31-18-5", "33-20-7-46", "x-x-x-55", 
                    "43-30-17-4", "34-21-8-47", "x-x-x-54", "42-29-16-3", "35-22-9-48", 
                    "x-x-x-53", "41-28-15-2", "36-23-10-49", "x-x-x-52", "40-27-14-1", 
                    "37-24-11-50", "38-25-12-51", "39-26-13-x",
                ],
            }
        },
        methods: {
            roll(rollerId) {
                if (board.isPawnMoveRequired()) {
                    return;
                }
            
                try {
                    const {unused} = board.rollTheDice()
                    this.score[rollerId] =  !unused.length ? [board.currentRollScore] : unused

                    this.scoreHistory = board.dice.score

                    if(!board.isPawnMoveRequired()) {
                        this.visibleDice = board.eligibleRoller()
                    }
                    
                    
                } catch(e) {
                    console.log(e);
                }
                updateBoard(board)
                console.log(board);

            },


            isSafe(identity) {
                const isInSafeBox = [
                    '27-14-1-40', '22-9-48-35', '14-1-40-27', '9-48-35-22', 
                    '35-22-9-48', '40-27-14-1', '48-35-22-9', '1-40-27-14'
                ].includes(identity)

                return isInSafeBox 
                || identity.includes('52')
                || identity.includes('53')
                || identity.includes('54')
                || identity.includes('54')       
                || identity.includes('55')
                || identity.includes('56')       
            },

            isAvailablePawn(identity) {
                // console.log(identity);
                return false;
            },

            resetGame() {
                resetBoard(board)
                window.location.reload()
            }
        },
        computed: {
        
        },

        mounted() {

        }

    }

</script>


<style scoped>
    .container {
        background: #222329;
        display: flex;
        user-select: none;
    }

    .board-outside {
        width: 480px;
        height: 480px;
        background: #F5F8FA;
        margin: 5vh;
        padding: 10px;
        display: flex;
        flex-wrap: wrap;
        align-content: space-between;
        justify-content: space-between;
    }

    .board-outside > .room {
        background-color: #b9b7b7;
        width: 140px;
        text-align: center;
        height: 140px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        padding: 20px;
    }

    .room > .room-box {
        display: flex;
        background: rgb(241 240 240);
        flex-wrap: wrap;
        justify-content: space-evenly;
    }

    .board-outside > .path-v {
        width: 100px;
        text-align: center;
        height: 180px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-content: space-between;
        justify-content: space-between;
    }

    .room-box > .pawn {
        border-radius: 100%;
        width: 16px;
        height: 16px;
        margin: 16px;
        padding: 5px;
        box-shadow: -1px 3px 5px 0px #939393;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .pawn {
        border-radius: 100%;
        width: 13px;
        height: 13px;
        padding: 5px;
        box-shadow: -1px 2px 5px 0px #939393;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .pawn-race > .pawn {
        display: flex;
    }

    .board-outside > .path-h {
        width: 180px;
        text-align: center;
        height: 100px;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: space-around;
    }

    .board-outside > .path-c {
        background-color: #beff69;
        text-align: center;
        width: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .pawn-race {
        display: flex;
        border-radius: 5px;
        background: #ffc9ca;
        align-items: center;
        border: 0.5px solid #ffffff;
        font-size: 8px;
    }

    .path-v > .pawn-race {
        flex-direction: row;
        width: 31px;
        height: 28px;
        justify-content: space-around;
    }

    .path-h > .pawn-race {
        flex-direction: column;
        width: 28px;
        height: 31px;
        justify-content: center;
        
    }

    .board {
        display: inline-block
    }

    * {
        border-radius: 15px;
    }

    .dice-container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .yellow {
        background: rgb(226 190 92) !important;
    }

    .red {
        background: rgb(234 113 91) !important;
    }

    .green {
        background: rgb(118 218 135) !important;
    }

    .blue {
        background: rgb(81 148 230) !important;
    }
</style>
