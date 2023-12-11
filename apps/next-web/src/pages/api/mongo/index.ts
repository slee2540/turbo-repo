// api/auth/signup.ts
import { NextApiRequest, NextApiResponse } from 'next'
import { MongoClient, ServerApiVersion } from 'mongodb'

const client = new MongoClient(String(process.env.MONGODB_URI), {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    // const client = new MongoClient(process.env.MONGODB_URI || uri)

    try {
      await client.connect()
      const db = client.db('ecommerce')

      console.log('db ------>', db)
      const test = await db.collection('products').find({}).toArray()
      res.status(200).json(test)
    } catch (error) {
      res.status(500).json({ error: 'Unable to connect to database' })
    } finally {
      await client.close()
    }
  } else {
    res.status(405).json({ error: 'Unsupported HTTP method' })
  }
}
