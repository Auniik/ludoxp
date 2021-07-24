<template>
    <div class="board">
        
        <div class="container">
            <div class="dice-container">
                <Dice
                    :id="0"
                    :score="score[0]"
                    :styles="visibleDice === 0 && diceActiveStyle"
                    @rolled="handleRolled"
                    key="0"
                />
                <Dice
                    :id="3"
                    :score="score[3]"
                    :styles="visibleDice === 3 && diceActiveStyle"
                    @rolled="handleRolled"
                    key="3"
                />
                
                
                
            </div>
            <div class="board-outside">
                <div class="room"> 
                    room 1
                </div>
                
                <div class="path-v">
                    <div class="pawn-race">24</div>
                    <div class="pawn-race">25</div>
                    <div class="pawn-race">26</div>
                    <div class="pawn-race">23</div>
                    <div class="pawn-race">-</div>
                    <div class="pawn-race">27</div>
                    <div class="pawn-race">22</div>
                    <div class="pawn-race">-</div>
                    <div class="pawn-race">28</div>
                    <div class="pawn-race">21</div>
                    <div class="pawn-race">-</div>
                    <div class="pawn-race">29</div>
                    <div class="pawn-race">20</div>
                    <div class="pawn-race">-</div>
                    <div class="pawn-race">30</div>
                    <div class="pawn-race">19</div>
                    <div class="pawn-race">-</div>
                    <div class="pawn-race">31</div>
                </div>
                
                <div class="room">
                     room 2
                </div>
                
                <div class="path-h">
                    <div class="pawn-race">13</div>
                    <div class="pawn-race">12</div>
                    <div class="pawn-race">11</div>
                    <div class="pawn-race">14</div>
                    <div class="pawn-race"> - </div>
                    <div class="pawn-race">10</div>
                    <div class="pawn-race">15</div>
                    <div class="pawn-race">-</div>
                    <div class="pawn-race">9</div>
                    <div class="pawn-race">16</div>
                    <div class="pawn-race">-</div>
                    <div class="pawn-race">8</div>
                    <div class="pawn-race">17</div>
                    <div class="pawn-race">-</div>
                    <div class="pawn-race">7</div>
                    <div class="pawn-race">18</div>
                    <div class="pawn-race">-</div>
                    <div class="pawn-race">6</div>
                </div>
                
                <div class="path-c">
                     path center
                </div>
                
                <div class="path-h">
                    <div class="pawn-race">32</div>
                    <div class="pawn-race">-</div>
                    <div class="pawn-race">44</div>
                    <div class="pawn-race">33</div>
                    <div class="pawn-race">-</div>
                    <div class="pawn-race">43</div>
                    <div class="pawn-race">34</div>
                    <div class="pawn-race">-</div>
                    <div class="pawn-race">42</div>
                    <div class="pawn-race">35</div>
                    <div class="pawn-race">-</div>
                    <div class="pawn-race">41</div>
                    <div class="pawn-race">36</div>
                    <div class="pawn-race">-</div>
                    <div class="pawn-race">40</div>
                    <div class="pawn-race">37</div>
                    <div class="pawn-race">38</div>
                    <div class="pawn-race">39</div>
                </div>
                
                <div class="room">
                     room 3
                </div>
                
                <div class="path-v">
                    <div class="pawn-race">5</div>
                    <div class="pawn-race">56</div>
                    <div class="pawn-race">45</div>
                    <div class="pawn-race">4</div>
                    <div class="pawn-race">55</div>
                    <div class="pawn-race">46</div>
                    <div class="pawn-race">3</div>
                    <div class="pawn-race">54</div>
                    <div class="pawn-race">47</div>
                    <div class="pawn-race">2</div>
                    <div class="pawn-race">53</div>
                    <div class="pawn-race">48</div>
                    <div class="pawn-race">1</div>
                    <div class="pawn-race">52</div>
                    <div class="pawn-race">49</div>
                    <div class="pawn-race">-</div>
                    <div class="pawn-race">51</div>
                    <div class="pawn-race">50</div>
                </div>
                
                <div class="room">
                     room 4
                </div>
            
            </div>
            <div class="dice-container">
                
                <Dice
                    :id="1"
                    :score="score[1]"
                    :styles="visibleDice === 1 && diceActiveStyle"
                    @rolled="handleRolled"
                    key="1"
                />
                <Dice
                    :id="2"
                    :score="score[2]"
                    :styles="visibleDice === 2 && diceActiveStyle"
                    @rolled="handleRolled"
                    key="2"
                />
            </div>
        </div>

        
        
        <div style="display:flex; justify-content: space-between;" v-if="false">
            
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
        width: 180px;
        text-align: center;
        height: 180px;
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

    .path-v > .pawn-race {
        display: flex;
        flex-direction: column;
        width: 31px;
        background: #ffc9ca;
        border: 0.5px solid #ffffff;
        height: 28px;
        font-size: 10px;
    }

    .path-h > .pawn-race {
        display: flex;
        flex-direction: column;
        width: 28px;
        height: 31px;
        align-items: center;
        justify-content: center;
        background: #ffc9ca;
        border: 0.5px solid #ffffff;
        font-size: 10px;
    }

    .board {
        display: inline-block
    }

    .dice-container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
</style>
