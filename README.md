# Solidity dApp for Patent Registration

**Description:**
This Solidity dApp allows users to register patents and pay the associated fees. It's implemented on the Ethereum blockchain.

## Smart Contract

**Main Contract:** `PatentdApp.sol`
**Features:**
- Register new patents.
- Pay a fee to register a patent.
- Retrieve information about registered patents.
- Check the approval status of a patent.

## Installation

**Steps:**
1. Clone the repository to your local machine:
```git clone <https://github.com/sidrahh12/Sidrah-Ahmed-Final-Project.git>```


2. Navigate to the project directory:
```cd <project-directory>```


3. Install the required dependencies:
```npm install```


4. Compile the smart contract:
```npx hardhat compile```


5. Deploy the smart contract to your chosen Ethereum network. You'll need to set up a `secrets.json` file with your Ethereum wallet private key and network URL.
```npx hardhat run scripts/deploy.js --network <network-name>```
Replace `<network-name>` with your desired Ethereum network (e.g., `rinkeby`, `mainnet`, or `localhost` for local development).


6. Start the dApp locally:
npm start


The dApp should be accessible at `http://localhost:3000`.

## Usage

**Steps:**
1. Connect your Ethereum wallet (e.g., MetaMask) to the dApp.
2. Register a new patent by providing a name, title, and description, and pay the associated fee.
3. View all registered patents.
4. Check the approval status of each patent.
5. Retrieve details of a specific patent using its ID.

## License

This project is licensed under the MIT License.

