import { ObjectId } from 'mongodb'
import { connectToDatabase } from '../../util/mongodb'

export default async (req, res) => {
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
}
