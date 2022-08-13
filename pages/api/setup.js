import { ObjectId } from 'mongodb'
import { connectToDatabase } from '../../util/mongodb'

const handler = async (req, res) => {
	if (req.method === 'POST') {
		const { reqAmount, minAmount, maxAmount, docId } = req.body

		if (minAmount > 0 && minAmount < 67108864) {
			if (maxAmount > minAmount + 99 && maxAmount < 67108864) {
				if (reqAmount >= minAmount && reqAmount <= maxAmount) {
					const { db } = await connectToDatabase()

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
					res.status(412).json({
						error: true,
						message:
							'The Requested Amount must be at least the same as the Min Amount and less than or equal to the Max Amount'
					})
				}
			} else {
				res.status(412).json({
					error: true,
					message:
						'The Max Amount must be at least 100 greater than the Min Amount and less than 67108864'
				})
			}
		} else {
			res.status(412).json({
				error: true,
				message:
					'The Min Amount must be greater than zero and less than 67108864'
			})
		}
	} else {
		res.status(405).json({
			message: 'Method Not Allowed!'
		})
	}
}

export default handler
