class Pawn {
    
    isActive = false;
    isInSafeZone = false;
    position = 0;

    constructor(roller, id) {
        this.color = ['red', 'green', 'blue', 'yellow'][roller - 1];
        this.id = id;
    }

    move(count) {
        if (!this.isActive) {
            this.position = count == 6 ? 1 : 0;
            this.isActive = !!(this.position && true);
            this.isInSafeZone = !!(this.position && true);
            return this.query();
        }

        this.position += count;
        this.isActive = true;
        this.isInSafeZone = [1, 8, 13, 21, 26, 34, 39, 48, 52].includes(this.position);
        return this.query();
    }
    
    query() {
        return {
            isActive: this.isActive,
            isSafe: this.isInSafeZone,
            position: this.position,
        }
    }
}

const board = {
    safe: [ 1, 8, 13, 21, 26, 34, 39, 48, 52 ],
    rollers: {
        ...[0, 1, 2, 3].map(index => [0, 1, 2, 3].map(i => new Pawn(index, i)))
    }
}