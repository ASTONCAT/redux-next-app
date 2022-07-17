import classes from './Calculator.module.css'

function Calculator() {
    
    
    async function handleChange(event) {
        event.preventDefault()

        const data = {
            amount: event.target.value
        }

        // console.log(data)

        if (data.amount > 6000 && data.amount < 6000000 ) {

            const JSONdata = JSON.stringify(data)

            const endpoint = '/api/installment-calculation'

            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSONdata,
            }

            const response = await fetch(endpoint, options)

            const result = await response.json()
            alert(`Toto je tvůj výpočet: ${result.vypocet}`)

        }

    }

    function handleIncrement() {
        // store.dispatch(increment())
    }
    
    function handleDecrement(event) {
        // store.dispatch(decrement())
    }

    return (
        <form className={classes.calculator}>
            <input
                type="number"
                pattern='[0-9]{4,6}'
                id='amount'
                placeholder="6000"
                onChange={handleChange}
            />

            <div className={classes.setAmount}>
                <button onMouseDown={handleIncrement}>+</button>
                <button onMouseDown={handleDecrement}>-</button>
            </div>

        </form>
    )
}

export default Calculator