import { connectToDatabase } from '../util/mongodb'
import SetupForm from '../components/SetupForm'
// our-domain.com/setup

export default function LoanCalcSetup({ calcSetup }) {
	async function submitDataHandler(enteredData) {
		// add the db document id
		enteredData.docId = calcSetup[0]._id
		const response = await fetch('/api/setup', {
			method: 'POST',
			body: JSON.stringify(enteredData),
			headers: {
				'Content-Type': 'application/json'
			}
		})

		const result = await response.json()

		console.log(result)

	}
	return (
		<SetupForm
			reqValue={calcSetup[0].reqAmount}
			minValue={calcSetup[0].minAmount}
			maxValue={calcSetup[0].maxAmount}
			onSubmitData={submitDataHandler}
		/>
	)
}

export async function getServerSideProps() {
	const { db } = await connectToDatabase()

	const calcSetup = await db.collection('setup').find({}).limit(1).toArray()

	return {
		props: {
			calcSetup: JSON.parse(JSON.stringify(calcSetup))
		}
	}
}
