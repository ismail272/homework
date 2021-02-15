export function add(numeral) {
    return {
        type: 'add',
        number: numeral
    }
}

export function plusOne() {
    return {
        type: 'plus'
    }
}

export function minusOne() {
    return {
        type: 'minus'
    }
}

export function reset() {
    return {
        type: 'reset'
    }
}