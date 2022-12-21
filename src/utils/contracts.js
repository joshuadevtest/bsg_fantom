export const uleTokenAddress = "0xAF50f737CF3543cC2Fe6c6F9c309297Db5e6062c";
export const uleTokenAbi = [{
  "constant": true,
  "inputs": [],
  "name": "name",
  "outputs": [{
    "name": "",
    "type": "string"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "spender",
    "type": "address"
  }, {
    "name": "value",
    "type": "uint256"
  }],
  "name": "approve",
  "outputs": [{
    "name": "",
    "type": "bool"
  }],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "totalSupply",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "from",
    "type": "address"
  }, {
    "name": "to",
    "type": "address"
  }, {
    "name": "value",
    "type": "uint256"
  }],
  "name": "transferFrom",
  "outputs": [{
    "name": "",
    "type": "bool"
  }],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "decimals",
  "outputs": [{
    "name": "",
    "type": "uint8"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "spender",
    "type": "address"
  }, {
    "name": "addedValue",
    "type": "uint256"
  }],
  "name": "increaseAllowance",
  "outputs": [{
    "name": "",
    "type": "bool"
  }],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "account",
    "type": "address"
  }, {
    "name": "value",
    "type": "uint256"
  }],
  "name": "mint",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "owner",
    "type": "address"
  }],
  "name": "balanceOf",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [],
  "name": "renounceOwnership",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "owner",
  "outputs": [{
    "name": "",
    "type": "address"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "symbol",
  "outputs": [{
    "name": "",
    "type": "string"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "account",
    "type": "address"
  }, {
    "name": "value",
    "type": "uint256"
  }],
  "name": "burn",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "spender",
    "type": "address"
  }, {
    "name": "subtractedValue",
    "type": "uint256"
  }],
  "name": "decreaseAllowance",
  "outputs": [{
    "name": "",
    "type": "bool"
  }],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "to",
    "type": "address"
  }, {
    "name": "value",
    "type": "uint256"
  }],
  "name": "transfer",
  "outputs": [{
    "name": "",
    "type": "bool"
  }],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "owner",
    "type": "address"
  }, {
    "name": "spender",
    "type": "address"
  }],
  "name": "allowance",
  "outputs": [{
    "name": "",
    "type": "uint256"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "newOwner",
    "type": "address"
  }],
  "name": "transferOwnership",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "constructor"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": true,
    "name": "previousOwner",
    "type": "address"
  }, {
    "indexed": true,
    "name": "newOwner",
    "type": "address"
  }],
  "name": "OwnershipTransferred",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": true,
    "name": "from",
    "type": "address"
  }, {
    "indexed": true,
    "name": "to",
    "type": "address"
  }, {
    "indexed": false,
    "name": "value",
    "type": "uint256"
  }],
  "name": "Transfer",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": true,
    "name": "owner",
    "type": "address"
  }, {
    "indexed": true,
    "name": "spender",
    "type": "address"
  }, {
    "indexed": false,
    "name": "value",
    "type": "uint256"
  }],
  "name": "Approval",
  "type": "event"
}];

export const financeAppContractAddress =
  "0xA228688913B390a408364edE36f05e210dbF0229";
export const financeAppContract_Abi = [{
  "inputs": [],
  "stateMutability": "nonpayable",
  "type": "constructor"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": false,
    "internalType": "address",
    "name": "user",
    "type": "address"
  }, {
    "indexed": false,
    "internalType": "uint256",
    "name": "amount",
    "type": "uint256"
  }, {
    "indexed": false,
    "internalType": "uint256",
    "name": "FTMamount",
    "type": "uint256"
  }],
  "name": "Deposit",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": false,
    "internalType": "address",
    "name": "user",
    "type": "address"
  }, {
    "indexed": false,
    "internalType": "uint256",
    "name": "amount",
    "type": "uint256"
  }],
  "name": "DepositBySplit",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": true,
    "internalType": "address",
    "name": "previousOwner",
    "type": "address"
  }, {
    "indexed": true,
    "internalType": "address",
    "name": "newOwner",
    "type": "address"
  }],
  "name": "OwnershipTransferred",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": false,
    "internalType": "address",
    "name": "account",
    "type": "address"
  }],
  "name": "Paused",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": false,
    "internalType": "address",
    "name": "user",
    "type": "address"
  }, {
    "indexed": false,
    "internalType": "address",
    "name": "referral",
    "type": "address"
  }],
  "name": "Register",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": false,
    "internalType": "address",
    "name": "user",
    "type": "address"
  }, {
    "indexed": false,
    "internalType": "address",
    "name": "receiver",
    "type": "address"
  }, {
    "indexed": false,
    "internalType": "uint256",
    "name": "amount",
    "type": "uint256"
  }],
  "name": "TransferBySplit",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": false,
    "internalType": "address",
    "name": "account",
    "type": "address"
  }],
  "name": "Unpaused",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": false,
    "internalType": "address",
    "name": "user",
    "type": "address"
  }, {
    "indexed": false,
    "internalType": "uint256",
    "name": "withdrawable",
    "type": "uint256"
  }],
  "name": "Withdraw",
  "type": "event"
}, {
  "inputs": [{
    "internalType": "address",
    "name": "_address",
    "type": "address"
  }],
  "name": "CTOIncomeIsReady",
  "outputs": [{
    "internalType": "bool",
    "name": "status",
    "type": "bool"
  }, {
    "internalType": "uint256",
    "name": "value",
    "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [],
  "name": "CTOPool",
  "outputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "name": "CTOPooluser",
  "outputs": [{
    "internalType": "address",
    "name": "",
    "type": "address"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "uint256",
    "name": "_num",
    "type": "uint256"
  }],
  "name": "ChangeBoosterCondition",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [],
  "name": "Gold",
  "outputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [],
  "name": "Platinum",
  "outputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [],
  "name": "PriceCalculationC",
  "outputs": [{
    "internalType": "contract Price",
    "name": "",
    "type": "address"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [],
  "name": "Silver",
  "outputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [],
  "name": "ULE",
  "outputs": [{
    "internalType": "contract IERC20",
    "name": "",
    "type": "address"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "name": "balStatus",
  "outputs": [{
    "internalType": "bool",
    "name": "",
    "type": "bool"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [],
  "name": "boosterDay",
  "outputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "address",
    "name": "_address",
    "type": "address"
  }],
  "name": "boosterIncomeIsReady",
  "outputs": [{
    "internalType": "bool",
    "name": "status",
    "type": "bool"
  }, {
    "internalType": "uint256",
    "name": "value",
    "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "name": "boosterIncomeUSers",
  "outputs": [{
    "internalType": "address",
    "name": "",
    "type": "address"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }, {
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "name": "dayTopUsers",
  "outputs": [{
    "internalType": "address",
    "name": "",
    "type": "address"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [],
  "name": "defaultRefer",
  "outputs": [{
    "internalType": "address",
    "name": "",
    "type": "address"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "uint256",
    "name": "_packageAmount",
    "type": "uint256"
  }],
  "name": "deposit",
  "outputs": [],
  "stateMutability": "payable",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "uint256",
    "name": "_amount",
    "type": "uint256"
  }],
  "name": "depositBySplit",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "name": "depositors",
  "outputs": [{
    "internalType": "address",
    "name": "",
    "type": "address"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [],
  "name": "distributePoolRewards",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "name": "feeReceivers",
  "outputs": [{
    "internalType": "address",
    "name": "",
    "type": "address"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [],
  "name": "getCurDay",
  "outputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "address",
    "name": "_user",
    "type": "address"
  }],
  "name": "getCurSplit",
  "outputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [],
  "name": "getDepositorsLength",
  "outputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "address",
    "name": "_user",
    "type": "address"
  }],
  "name": "getMaxFreezing",
  "outputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "address",
    "name": "_user",
    "type": "address"
  }],
  "name": "getOrderLength",
  "outputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "address",
    "name": "_user",
    "type": "address"
  }],
  "name": "getRewards",
  "outputs": [{
    "internalType": "uint256",
    "name": "splitAmt",
    "type": "uint256"
  }, {
    "internalType": "uint256",
    "name": "uleAmt",
    "type": "uint256"
  }, {
    "internalType": "uint256",
    "name": "FTMamt",
    "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "address",
    "name": "_user",
    "type": "address"
  }],
  "name": "getTeamDeposit",
  "outputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }, {
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }, {
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "address",
    "name": "_user",
    "type": "address"
  }, {
    "internalType": "uint256",
    "name": "_layer",
    "type": "uint256"
  }],
  "name": "getTeamUsersLength",
  "outputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [],
  "name": "isFreezeReward",
  "outputs": [{
    "internalType": "bool",
    "name": "",
    "type": "bool"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [],
  "name": "lastDistribute",
  "outputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "name": "level3Users",
  "outputs": [{
    "internalType": "address",
    "name": "",
    "type": "address"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "name": "level4Users",
  "outputs": [{
    "internalType": "address",
    "name": "",
    "type": "address"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "name": "level5Users",
  "outputs": [{
    "internalType": "address",
    "name": "",
    "type": "address"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "uint256",
    "name": "_count",
    "type": "uint256"
  }],
  "name": "mint",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "uint256",
    "name": "_count",
    "type": "uint256"
  }],
  "name": "mint2",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "address",
    "name": "",
    "type": "address"
  }, {
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "name": "orderInfos",
  "outputs": [{
    "internalType": "uint256",
    "name": "amount",
    "type": "uint256"
  }, {
    "internalType": "uint256",
    "name": "start",
    "type": "uint256"
  }, {
    "internalType": "uint256",
    "name": "unfreeze",
    "type": "uint256"
  }, {
    "internalType": "bool",
    "name": "isUnfreezed",
    "type": "bool"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [],
  "name": "owner",
  "outputs": [{
    "internalType": "address",
    "name": "",
    "type": "address"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [],
  "name": "pauseContract",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [],
  "name": "paused",
  "outputs": [{
    "internalType": "bool",
    "name": "",
    "type": "bool"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "address",
    "name": "_referral",
    "type": "address"
  }],
  "name": "register",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [],
  "name": "renounceOwnership",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "address",
    "name": "",
    "type": "address"
  }],
  "name": "rewardInfo",
  "outputs": [{
    "internalType": "uint256",
    "name": "capitals",
    "type": "uint256"
  }, {
    "internalType": "uint256",
    "name": "statics",
    "type": "uint256"
  }, {
    "internalType": "uint256",
    "name": "directs",
    "type": "uint256"
  }, {
    "internalType": "uint256",
    "name": "split",
    "type": "uint256"
  }, {
    "internalType": "uint256",
    "name": "ROIReleased",
    "type": "uint256"
  }, {
    "internalType": "uint256",
    "name": "splitDebt",
    "type": "uint256"
  }, {
    "internalType": "uint256",
    "name": "Platinum",
    "type": "uint256"
  }, {
    "internalType": "uint256",
    "name": "Silver",
    "type": "uint256"
  }, {
    "internalType": "uint256",
    "name": "Gold",
    "type": "uint256"
  }, {
    "internalType": "uint256",
    "name": "top",
    "type": "uint256"
  }, {
    "internalType": "uint256",
    "name": "CTO",
    "type": "uint256"
  }, {
    "internalType": "uint256",
    "name": "totalWithdrawlsULE",
    "type": "uint256"
  }, {
    "internalType": "uint256",
    "name": "totalWithdrawlsFTM",
    "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [],
  "name": "startTime",
  "outputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "address",
    "name": "",
    "type": "address"
  }, {
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }, {
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "name": "teamUsers",
  "outputs": [{
    "internalType": "address",
    "name": "",
    "type": "address"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [],
  "name": "topPool",
  "outputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [],
  "name": "totalUser",
  "outputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "address",
    "name": "_receiver",
    "type": "address"
  }, {
    "internalType": "uint256",
    "name": "_amount",
    "type": "uint256"
  }],
  "name": "transferBySplit",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "address",
    "name": "newOwner",
    "type": "address"
  }],
  "name": "transferOwnership",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [],
  "name": "unPauseContract",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "address",
    "name": "newPrice",
    "type": "address"
  }],
  "name": "updatePriceC",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "address",
    "name": "",
    "type": "address"
  }],
  "name": "userInfo",
  "outputs": [{
    "internalType": "address",
    "name": "referrer",
    "type": "address"
  }, {
    "internalType": "uint256",
    "name": "start",
    "type": "uint256"
  }, {
    "internalType": "uint256",
    "name": "level",
    "type": "uint256"
  }, {
    "internalType": "uint256",
    "name": "maxDeposit",
    "type": "uint256"
  }, {
    "internalType": "uint256",
    "name": "totalDeposit",
    "type": "uint256"
  }, {
    "internalType": "uint256",
    "name": "teamNum",
    "type": "uint256"
  }, {
    "internalType": "uint256",
    "name": "directsNum",
    "type": "uint256"
  }, {
    "internalType": "uint256",
    "name": "maxDirectDeposit",
    "type": "uint256"
  }, {
    "internalType": "uint256",
    "name": "teamTotalDeposit",
    "type": "uint256"
  }, {
    "internalType": "uint256",
    "name": "totalFreezed",
    "type": "uint256"
  }, {
    "internalType": "uint256",
    "name": "totalRevenue",
    "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }, {
    "internalType": "address",
    "name": "",
    "type": "address"
  }],
  "name": "userLayer1DayDeposit",
  "outputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [],
  "name": "withdraw",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}];

export const calculationContractAddress = "0x51C4237186AAed214aC883A88611fC00B68C5d99";

export const calculationContractAbi = [{
  "inputs": [],
  "stateMutability": "nonpayable",
  "type": "constructor"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": true,
    "internalType": "address",
    "name": "previousOwner",
    "type": "address"
  }, {
    "indexed": true,
    "internalType": "address",
    "name": "newOwner",
    "type": "address"
  }],
  "name": "OwnershipTransferred",
  "type": "event"
}, {
  "inputs": [],
  "name": "FTMULE",
  "outputs": [{
    "internalType": "contract IPancakePair",
    "name": "",
    "type": "address"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [],
  "name": "USDCFTM",
  "outputs": [{
    "internalType": "contract IPancakePair",
    "name": "",
    "type": "address"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "uint256",
    "name": "amount",
    "type": "uint256"
  }],
  "name": "calculateFTM",
  "outputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "uint256",
    "name": "amount",
    "type": "uint256"
  }],
  "name": "calculateULE",
  "outputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [],
  "name": "ftmToUle",
  "outputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [],
  "name": "ftmToUleDecimals",
  "outputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [],
  "name": "ftmToUlePercentage",
  "outputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [],
  "name": "ftmToUleReturnDecimals",
  "outputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [],
  "name": "owner",
  "outputs": [{
    "internalType": "address",
    "name": "",
    "type": "address"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [],
  "name": "renounceOwnership",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "address",
    "name": "newOwner",
    "type": "address"
  }],
  "name": "transferOwnership",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "uint256",
    "name": "percentage",
    "type": "uint256"
  }, {
    "internalType": "uint256",
    "name": "decimals",
    "type": "uint256"
  }, {
    "internalType": "uint256",
    "name": "returnDecimals",
    "type": "uint256"
  }],
  "name": "updateFtmToUle",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "uint256",
    "name": "percentage",
    "type": "uint256"
  }, {
    "internalType": "uint256",
    "name": "decimals",
    "type": "uint256"
  }, {
    "internalType": "uint256",
    "name": "returnDecimals",
    "type": "uint256"
  }],
  "name": "updateUsdtoFtm",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "inputs": [],
  "name": "usdToFtm",
  "outputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [],
  "name": "usdToUle",
  "outputs": [{
    "internalType": "uint256",
    "name": "total",
    "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [],
  "name": "usdToftmDecimals",
  "outputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [],
  "name": "usdToftmPercentage",
  "outputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [],
  "name": "usdToftmReturnDecimals",
  "outputs": [{
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
  }],
  "stateMutability": "view",
  "type": "function"
}];