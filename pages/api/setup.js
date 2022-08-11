import { ObjectId } from 'mongodb'
import { connectToDatabase } from '../../util/mongodb'

const handler = async (req, res) => {
	if (req.method === 'POST') {
		const { db } = await connectToDatabase()

		// Update Setup Data
		const { reqAmount, minAmount, maxAmount, docId } = req.body

		// Update Setup document with the given id
		await db.collection('setup').updateOne(
			{ _id: ObjectId(docId) },
			{
				$set: {
					reqAmount,
					minAmount,
					maxAmount
				}
			}
		)

		// Send a response
		res.status(201).json({
			message: 'A new setup inserted!'
		})
	} else {
		res.status(405).json({
			message: 'Method Not Allowed!'
		})
	}
}

export default handler