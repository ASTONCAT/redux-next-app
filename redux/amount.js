export function increment() {
    return {
        type: "INCREMENT",
        payload: 100
    }
}

export function decrement() {
    return {
        type: "DECREMENT",
        payload: 100
    }
}

function amountReducer(amount = 6000, action) {
    switch (action.type) {
        case "INCREMENT":
            return amount + action.payload
        case "DECREMENT":
            return amount - action.payload
        default:
            return amount
    }
  }

  export default amountReducer