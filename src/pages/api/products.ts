import { NextApiRequest, NextApiResponse } from 'next'
import { getAmazonSpApiClient } from '@/lib/amazon-sp-api'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req

  switch (method) {
    case 'GET':
      try {
        const client = await getAmazonSpApiClient()
        const response = await client.callAPI({
          operation: 'getListingsItem',
          endpoint: 'listings',
          query: {
            marketplaceIds: [process.env.AMAZON_SP_API_MARKETPLACE_ID],
          },
        })
        res.status(200).json(response)
      } catch (error) {
        res.status(500).json({ error: 'Error fetching products' })
      }
      break
    default:
      res.setHeader('Allow', ['GET'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
