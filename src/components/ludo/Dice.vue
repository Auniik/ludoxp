<template>

    <div @click="roll" :style="styles" class="dice">
        <div class="dice-digit" v-html="getScore">
            
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
    import DiceMixin from '../../mixins/DiceMixin';

    export default {
        name: 'Dice',
        mixins: [DiceMixin],
        props: {
            id: Number,
            styles: String,
            score: Object
        },

        data() {
            return {
                round: {},
            }
        },
        methods: {
            roll() {
                if (this.id != DiceMixin.eligibleUnit) {
                    return;
                }
                DiceMixin.roll()

                this.$emit('rolled', DiceMixin)

            }
        },
        computed: {
            getScore() {
                const score = this.score;

                console.log(this.score[0]);

                if (Array.from(score).length) {
                    return "⊚ ".repeat(score[0])
                }
                
                return "⊚ ⊚ ⊚ ⊚ ⊚ ⊚ ";
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
