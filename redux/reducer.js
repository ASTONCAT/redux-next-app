function increment() {
    return {
        type: "INCREMENT",
        payload: 100
    }
}

function decrement() {
    return {
        type: "DECREMENT",
        payload: -100
    }
}

function calc() {
    return {
        type: "CALC"
    }
}

const initialState = {
    value: 6000,
    result: "1000"
  }
  
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "INCREMENT":
            return {
                value: state.value + action.payload,
                result: "processing …"
            }
        case "DECREMENT":
            return {
                value: state.value + action.payload,
                result: "processing …"
            }
        case "CALC":
            return {
                value: state.value + action.payload,
                result: "processing …"
            }
        default:
            return state
    }
  }