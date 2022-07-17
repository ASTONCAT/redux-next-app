import classes from './Calculator.module.css'

function Calculator() {
    
    
    async function handleChange(event) {
        event.preventDefault()

        // Get data from the form
        const data = {
            amount: event.target.value
        }

        console.log(data)

        // Send the data to the server in JSON format.
        const JSONdata = JSON.stringify(data)

        // API endpoint where we send form data.
        const endpoint = '/api/installment-calculation'

        // Form the request for sending data to the server.
        const options = {
            // The method is POST because we are sending data.
            method: 'POST',
            // Tell the server we're sending JSON.
            headers: {
            'Content-Type': 'application/json',
            },
            // Body of the request is the JSON data we created above.
            body: JSONdata,
        }

        // Send the form data to API endpoint on server.
        const response = await fetch(endpoint, options)

        // Get the response data from server as JSON.
        const result = await response.json()
        alert(`Toto je tvůj výpočet: ${result.vypocet}`)

    }

    function handleIncrement(event) {
        console.log(event)
    }
    
    function handleDecrement(event) {
        console.log(event)
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