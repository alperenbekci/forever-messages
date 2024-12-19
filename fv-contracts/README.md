# Hardhat Project Setup

This project demonstrates how to use **Hardhat** to deploy a smart contract to the **Sepolia** network, while securely storing sensitive data (such as API keys and private keys).

## Requirements

- Node.js
- npm
- Hardhat
- Infura or Alchemy account (for Sepolia URL)
- Etherscan API key (for verifying contracts)

## Installation

1. **Clone the repository or download the project**:

   ```bash
   git clone https://github.com/alperenbekci/forever-messages
   cd fv-contracts
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up the `.env` file**: In the root directory of the project, create a `.env` file with the following contents:

   ```plaintext
   INFURA_URL=https://sepolia.infura.io/v3/YOUR_INFURA_PROJECT_ID
   PRIVATE_KEY=YOUR_PRIVATE_KEY
   ETHERSCAN_API_KEY=YOUR_ETHERSCAN_API_KEY
   ```

   Replace the placeholders with your actual Infura URL, private key, and Etherscan API key.



## Configuration

The Hardhat configuration file (`hardhat.config.js`) is set up to securely load sensitive data from the `.env` file using the `dotenv` package. The configuration uses the following environment variables:

- `INFURA_URL`: Infura URL for connecting to the Sepolia network.
- `PRIVATE_KEY`: Your Ethereum wallet's private key used for deployment.
- `ETHERSCAN_API_KEY`: Etherscan API key for contract verification.

The configuration is as follows:

```javascript
require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config(); // Loads environment variables from the .env file

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.0",
  networks: {
    sepolia: {
      url: process.env.INFURA_URL, // Load Infura URL from .env
      accounts: [process.env.PRIVATE_KEY], // Load private key from .env
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY, // Load Etherscan API key from .env
  },
};
```

## `.gitignore` Setup

To avoid accidentally committing sensitive data, make sure your `.env` file is included in the `.gitignore` file:

```bash
.env
```

## Deployment

To deploy your contract to the Sepolia network, run the following command:

```bash
npx hardhat run scripts/deploy.js --network sepolia
```

Make sure to replace `scripts/deploy.js` with the actual deployment script in your project.

## Contract Verification (Optional)

Once your contract is deployed, you can verify it on Etherscan using the following command:

```bash
npx hardhat verify --network sepolia <contract-address> <constructor-arguments>
```

Make sure to replace `<contract-address>` with the deployed contract address and `<constructor-arguments>` with any arguments passed during deployment.

## License

This project is licensed under the MIT License - see the LICENSE file for details.