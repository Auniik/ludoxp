<template>

    <div @click="roll" :style="styles" class="dice">
        <div class="dice-digit">
            {{getScore}}
        </div>
    </div>

</template>

<script>
    import Dice from '../../mixins/Dice';

    export default {
        name: 'Dice',
        mixins: [Dice],
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
                if (this.id != Dice.eligibleUnit) {
                    return;
                }
                Dice.roll()

                this.$emit('rolled', Dice)

            }
        },
        computed: {
            getScore() {
                const score = this.score;

                if (Array.from(score).length == 1) {
                    return "o ".repeat(score[0])
                }
                if (Array.from(score).length == 2) {
                    return "o ".repeat(score[1])
                }
                if (Array.from(score).length == 3) {
                    return "o ".repeat(score[3])
                }
                return "o o o o o o";
            }
        }
    }

</script>


<style scoped>
    .dice {
        width: 80px;
        height: 80px;
        margin-left: 10%;
        background: #d8d8d8;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }

    .dice-digit {
        font-size: 25px;
        padding: 5px;
    }
</style>
