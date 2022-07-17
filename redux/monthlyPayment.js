export function calc() {
    return {
        type: "CALC",
        payload: 1234
    }
}

function monthlyPaymentReducer(monthlyPayment = "1000", action) {
    switch (action.type) {
        case "CALC":
            return {
                value: state.value + action.payload,
                result: "processing …"
            }
        default:
            return state
    }
  }