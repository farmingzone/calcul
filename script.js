function appendNumber(number) {
    const display = document.getElementById('display');
    // 소수점 중복 방지
    if (number === '.' && display.value.includes('.')) {
        return; // 이미 소수점이 있으면 무시
    }
    // 연속된 '0' 입력 방지
    if (display.value === '0') {
        if (number === '0') {
            return; // 이미 '0'이 있고 또 '0'을 입력하면 무시
        } else if (number !== '.') {
            display.value = number; // 다른 숫자 입력시 '0' 대체
        } else {
            display.value += number; // '.' 입력시 '0.'로 처리
        }
    } else {
        display.value += number;
    }
}


function chooseOperation(operation) {
    const display = document.getElementById('display');
    // 연산자 추가 전에 숫자가 있을 때만 연산자 추가
    if (display.value !== '0') {
        display.value += operation;
    }
}

function compute() {
    const display = document.getElementById('display');
    try {
        // 연산 결과가 유효하지 않으면 '0' 출력
        const result = eval(display.value);
        display.value = result || 0;
    } catch (e) {
        display.value = '0';
    }
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '0'; // 클리어 시 '0'으로 초기화
}

function addTrigonometry() {
    const display = document.getElementById('display');
    try {
        display.value = eval("Math." + display.value);
    } catch (e) {
        display.value = "Error";
    }
}

function appendOperation(operation, isNew) {
    const display = document.getElementById('display');
    if (isNew) {
        display.value = operation + '(' + display.value + ')';
    } else {
        display.value += operation;
    }
}
