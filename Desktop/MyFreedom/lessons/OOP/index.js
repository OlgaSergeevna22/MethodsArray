// ЗАДАНИЕ 1
// Создать конструктор, который возвращает любой объект из жизни с одним свойством и одним методом.

class Life {
    constructor(tea) {
        this.tea = tea;
    }
    go() {
        console.log(`Утром я пила чай ${this.tea}`);
    }

}

const moning = new Life('Grinfield');
console.log(moning);