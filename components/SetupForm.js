import { useRef } from 'react'
import Card from './ui/Card'
import classes from './SetupForm.module.css'

function SetupForm(props) {
	const requestedAmountInputRef = useRef()
	const minAmountInputRef = useRef()
	const maxAmountInputRef = useRef()

	function submitHandler(event) {
		event.preventDefault()

        const enteredData = {
            reqAmount: Number(requestedAmountInputRef.current.value),
            minAmount: Number(minAmountInputRef.current.value),
            maxAmount: Number(maxAmountInputRef.current.value)
        }

        props.onSubmitData(enteredData)
	}

	return (
		<Card>
			<form className={classes.form} onSubmit={submitHandler}>
				<div className={classes.control}>
					<label htmlFor="requestedAmount">Requested Amount</label>
					<input
						type="number"
						defaultValue={props.reqValue}
						required
						id="requestedAmount"
						ref={requestedAmountInputRef}
					/>
				</div>
				<div className={classes.control}>
					<label htmlFor="minAmount">Min Amount</label>
					<input
						type="number"
						defaultValue={props.minValue}
						required
						id="minAmount"
						ref={minAmountInputRef}
					/>
				</div>
				<div className={classes.control}>
					<label htmlFor="maxAmount">Max Amount</label>
					<input
						type="number"
						defaultValue={props.maxValue}
						required
						id="maxAmount"
						ref={maxAmountInputRef}
					/>
				</div>
                <div className={classes.submit}>
                    <button>Submit</button>
                </div>
			</form>
		</Card>
	)
}

export default SetupForm