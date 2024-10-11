import { SellingPartner } from 'amazon-sp-api'

let spApiClient: SellingPartner | null = null

export async function getAmazonSpApiClient(): Promise<SellingPartner> {
  if (!spApiClient) {
    spApiClient = new SellingPartner({
      region: 'na',
      refresh_token: process.env.AMAZON_SP_API_REFRESH_TOKEN,
      credentials: {
        SELLING_PARTNER_APP_CLIENT_ID: process.env.AMAZON_SP_API_CLIENT_ID,
        SELLING_PARTNER_APP_CLIENT_SECRET: process.env.AMAZON_SP_API_CLIENT_SECRET,
        AMAZON_SP_API_AWS_ACCESS_KEY: process.env.AMAZON_SP_API_AWS_ACCESS_KEY,
        AMAZON_SP_API_AWS_SECRET_KEY: process.env.AMAZON_SP_API_AWS_SECRET_KEY,
        AWS_SELLING_PARTNER_ROLE: process.env.AMAZON_SP_API_ROLE_ARN,
      },
    })
  }
  return spApiClient
}