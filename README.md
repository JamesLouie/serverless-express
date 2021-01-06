# serverless-express-starter
Nodejs starter template for Express with deployment to AWS Lambda

## Requirements

Development requires the following software:

* Node (12+)

## Installation

Follow the installation steps:

1. Clone the repository
3. Run `npm install`
4. Create `.env` in root folder
5. Run `npm start`

Optionally if you have `nodemon` installed, you may also run `npm run dev` for hot reload

## Deploy to AWS Serverless

Requirements:
* [AWS CLI](https://aws.amazon.com/cli/)

### Setup

1. Setup AWS CLI credentials
2. Update `serverless.yml` file with the `service` and `provider.region`
3. Deploy the app

### Commands

* `npm run deploy` - Deploy the application to AWS
* `npm run teardown` - Remove application resources from AWS
