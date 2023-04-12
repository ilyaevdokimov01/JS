function speedConverter(speed, type = "toMS") {
    let convered = null;
    let measure_Unit = "м/c";

    if (type === "toMS") {
        convered = Math.round(speed / 3.6);
    } else if (type === "toKMH"){
        convered = Math.round(speed * 3.6);
        measure_Unit = "км/ч";
    } else {
        measure_Unit = null;
        return false;
    }

    if (convered && measure_Unit){
        return `${convered} ${measure_Unit}`;
    }
}

function absValue(value) {
    console.log(value);
    if (value < 0) {
        return value * (-1);
    } else {
        return value;
    }
}

function objectFields() {
    const student = {
        group: "211-324",
        name: "Илья",
        surname: "Евдокимов"
    };
    console.log(Object.keys(student));

    console.log(`Студент ${student.name} ${student.surname} учится в ${student.group} группе`);
}

function randomNumber(min = (-64), max = 64) {
    if (isNaN(Number(min)) || (isNaN(Number(max))))
        return false;

    const random = Math.random() * (max - min) + min;
    return Number(random.toFixed())

}

function sampleArray(incomeArray = [1,2,3,4], count = 2) {
    const finalArray = [];

    console.log("входной массив", incomeArray, "кол-во:", count)

    for (let i=0; i<count; i++) {
        const number = randomNumber(0, incomeArray.length-1);
        finalArray.push(incomeArray[number]);
    }

    return finalArray;
}






let numberEx = Number(prompt('Введите номер задания'));

switch (numberEx){
    case 1:
        console.log("Задача №1 Функция конвертации скоростей");
        console.log(speedConverter(36, "toMS"));
        console.log(speedConverter(36, "toKMH"));
        break;
    case 2:
        console.log("Задача №2 Абсолютное значение");
        console.log(absValue(-35));
    case 3:
        console.log("Задача №3 Работа с объектом");
        objectFields();
    case 4:
        console.log("Задача №4 Случайные числа");
        console.log(randomNumber());
    case 5:
        console.log("Задача №5 Значения из массива");
        console.log(sampleArray());
}

