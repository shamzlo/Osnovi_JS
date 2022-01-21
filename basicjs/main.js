//TASK 1

const firstRow = prompt('Введите первое сообщение');
const secondRow = prompt('Введите второе сообщение');
const arr = prompt();

function getRow(firstRow) {
    const result =firstRow.split(arr).length -1;
    return result;
}
    const result1 = getRow(firstRow);
    alert(result1);

function getRow2(secondRow) {
    const result = secondRow.split(arr).length -1;
    return result;
}
    const result2 = getRow2(secondRow);
    alert(result2);

    const result3 = result1 - result2;
    console.log(result3);

    if (result3 > 0) {
        alert('1 more');
    } else if (result3 = 0){
        alert('no more');
    } else {
        alert('2 more');
    } 

//TASK 2


const formattedPhone = (phone) => {
    let oldPhone = phone

    if (oldPhone.length > 12 || oldPhone.length < 10)
        return 'Wrong input'
    else if (oldPhone.length === 11)
        oldPhone = '+'.concat(oldPhone)
    else if (oldPhone.length === 10)
        oldPhone = '+7'.concat(oldPhone)

    return `${oldPhone.slice(0, 2)} (${oldPhone.slice(2, 5)}) ${oldPhone.slice(5, 8)}-${oldPhone.slice(8, 10)}-${oldPhone.slice(10, 12)}`
}
// console.log(formattedPhone(&#39;+71234567890&#39;)); // +7 (123) 456-78-90

const inputPhone = prompt('Enter mobile number: ')

alert(formattedPhone(inputPhone));