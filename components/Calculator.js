import classes from './Calculator.module.css'
import { useSelector, useDispatch } from 'react-redux'
import {increment, decrement} from '../redux/requestedAmount'

function Calculator() {
    
    const requestedAmount = useSelector(state => state.amount.requested)
    const dispatch = useDispatch()
    
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

    return (
        <form className={classes.calculator}>
            <input
                type="number"
                pattern='[0-9]{4,6}'
                id='amount'
                placeholder={requestedAmount}
                onChange={handleChange}
            />

            <div className={classes.setAmount}>
                <button onMouseDown={() => dispatch(increment())}>+</button>
                <button onMouseDown={() => dispatch(decrement())}>-</button>
            </div>

        </form>
    )
}

export default Calculator