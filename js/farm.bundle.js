let ABI_VLT = [
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "routerAddr",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "player",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            }
        ],
        "name": "allowance",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokens",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            }
        ],
        "name": "approveAndCall",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "player",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "bootstrap",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "burn",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "decimals",
        "outputs": [
            {
                "internalType": "uint8",
                "name": "",
                "type": "uint8"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "subtractedValue",
                "type": "uint256"
            }
        ],
        "name": "decreaseAllowance",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "addedValue",
                "type": "uint256"
            }
        ],
        "name": "increaseAllowance",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "isBootStrapped",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address[]",
                "name": "receivers",
                "type": "address[]"
            },
            {
                "internalType": "uint256[]",
                "name": "amounts",
                "type": "uint256[]"
            }
        ],
        "name": "multiTransfer",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "router",
        "outputs": [
            {
                "internalType": "contract IUniswapV2Router02",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "symbol",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "transfer",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    }
]


let ABI_UNIROUTER = [
	{
		"inputs": [],
		"name": "WETH",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "tokenA",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "tokenB",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amountADesired",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amountBDesired",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amountAMin",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amountBMin",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "deadline",
				"type": "uint256"
			}
		],
		"name": "addLiquidity",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "amountA",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amountB",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "liquidity",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "token",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amountTokenDesired",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amountTokenMin",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amountETHMin",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "deadline",
				"type": "uint256"
			}
		],
		"name": "addLiquidityETH",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "amountToken",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amountETH",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "liquidity",
				"type": "uint256"
			}
		],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "factory",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amountOut",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "reserveIn",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "reserveOut",
				"type": "uint256"
			}
		],
		"name": "getAmountIn",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "amountIn",
				"type": "uint256"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amountIn",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "reserveIn",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "reserveOut",
				"type": "uint256"
			}
		],
		"name": "getAmountOut",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "amountOut",
				"type": "uint256"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amountOut",
				"type": "uint256"
			},
			{
				"internalType": "address[]",
				"name": "path",
				"type": "address[]"
			}
		],
		"name": "getAmountsIn",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "amounts",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amountIn",
				"type": "uint256"
			},
			{
				"internalType": "address[]",
				"name": "path",
				"type": "address[]"
			}
		],
		"name": "getAmountsOut",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "amounts",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amountA",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "reserveA",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "reserveB",
				"type": "uint256"
			}
		],
		"name": "quote",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "amountB",
				"type": "uint256"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "tokenA",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "tokenB",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "liquidity",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amountAMin",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amountBMin",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "deadline",
				"type": "uint256"
			}
		],
		"name": "removeLiquidity",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "amountA",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amountB",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "token",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "liquidity",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amountTokenMin",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amountETHMin",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "deadline",
				"type": "uint256"
			}
		],
		"name": "removeLiquidityETH",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "amountToken",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amountETH",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "token",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "liquidity",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amountTokenMin",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amountETHMin",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "deadline",
				"type": "uint256"
			}
		],
		"name": "removeLiquidityETHSupportingFeeOnTransferTokens",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "amountETH",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "token",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "liquidity",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amountTokenMin",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amountETHMin",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "deadline",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "approveMax",
				"type": "bool"
			},
			{
				"internalType": "uint8",
				"name": "v",
				"type": "uint8"
			},
			{
				"internalType": "bytes32",
				"name": "r",
				"type": "bytes32"
			},
			{
				"internalType": "bytes32",
				"name": "s",
				"type": "bytes32"
			}
		],
		"name": "removeLiquidityETHWithPermit",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "amountToken",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amountETH",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "token",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "liquidity",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amountTokenMin",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amountETHMin",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "deadline",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "approveMax",
				"type": "bool"
			},
			{
				"internalType": "uint8",
				"name": "v",
				"type": "uint8"
			},
			{
				"internalType": "bytes32",
				"name": "r",
				"type": "bytes32"
			},
			{
				"internalType": "bytes32",
				"name": "s",
				"type": "bytes32"
			}
		],
		"name": "removeLiquidityETHWithPermitSupportingFeeOnTransferTokens",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "amountETH",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "tokenA",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "tokenB",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "liquidity",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amountAMin",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amountBMin",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "deadline",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "approveMax",
				"type": "bool"
			},
			{
				"internalType": "uint8",
				"name": "v",
				"type": "uint8"
			},
			{
				"internalType": "bytes32",
				"name": "r",
				"type": "bytes32"
			},
			{
				"internalType": "bytes32",
				"name": "s",
				"type": "bytes32"
			}
		],
		"name": "removeLiquidityWithPermit",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "amountA",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amountB",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amountOut",
				"type": "uint256"
			},
			{
				"internalType": "address[]",
				"name": "path",
				"type": "address[]"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "deadline",
				"type": "uint256"
			}
		],
		"name": "swapETHForExactTokens",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "amounts",
				"type": "uint256[]"
			}
		],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amountOutMin",
				"type": "uint256"
			},
			{
				"internalType": "address[]",
				"name": "path",
				"type": "address[]"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "deadline",
				"type": "uint256"
			}
		],
		"name": "swapExactETHForTokens",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "amounts",
				"type": "uint256[]"
			}
		],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amountOutMin",
				"type": "uint256"
			},
			{
				"internalType": "address[]",
				"name": "path",
				"type": "address[]"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "deadline",
				"type": "uint256"
			}
		],
		"name": "swapExactETHForTokensSupportingFeeOnTransferTokens",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amountIn",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amountOutMin",
				"type": "uint256"
			},
			{
				"internalType": "address[]",
				"name": "path",
				"type": "address[]"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "deadline",
				"type": "uint256"
			}
		],
		"name": "swapExactTokensForETH",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "amounts",
				"type": "uint256[]"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amountIn",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amountOutMin",
				"type": "uint256"
			},
			{
				"internalType": "address[]",
				"name": "path",
				"type": "address[]"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "deadline",
				"type": "uint256"
			}
		],
		"name": "swapExactTokensForETHSupportingFeeOnTransferTokens",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amountIn",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amountOutMin",
				"type": "uint256"
			},
			{
				"internalType": "address[]",
				"name": "path",
				"type": "address[]"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "deadline",
				"type": "uint256"
			}
		],
		"name": "swapExactTokensForTokens",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "amounts",
				"type": "uint256[]"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amountIn",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amountOutMin",
				"type": "uint256"
			},
			{
				"internalType": "address[]",
				"name": "path",
				"type": "address[]"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "deadline",
				"type": "uint256"
			}
		],
		"name": "swapExactTokensForTokensSupportingFeeOnTransferTokens",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amountOut",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amountInMax",
				"type": "uint256"
			},
			{
				"internalType": "address[]",
				"name": "path",
				"type": "address[]"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "deadline",
				"type": "uint256"
			}
		],
		"name": "swapTokensForExactETH",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "amounts",
				"type": "uint256[]"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amountOut",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amountInMax",
				"type": "uint256"
			},
			{
				"internalType": "address[]",
				"name": "path",
				"type": "address[]"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "deadline",
				"type": "uint256"
			}
		],
		"name": "swapTokensForExactTokens",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "amounts",
				"type": "uint256[]"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]

let ABI_STACK = [
	{
		"constant": true,
		"inputs": [
			{
				"name": "_customerAddress",
				"type": "address"
			}
		],
		"name": "dividendsOf",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_customerAddress",
				"type": "address"
			},
			{
				"name": "buy_amount",
				"type": "uint256"
			}
		],
		"name": "buyFor",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_ethToSpend",
				"type": "uint256"
			}
		],
		"name": "calculateTokensReceived",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_customerAddress",
				"type": "address"
			}
		],
		"name": "statsOf",
		"outputs": [
			{
				"name": "",
				"type": "uint256[14]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "myDividends",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "withdraw",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalTokenBalance",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalClaims",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "sellPrice",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalTxs",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_customerAddress",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "distributionInterval",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalDeposits",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "buyPrice",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_tokensToSell",
				"type": "uint256"
			}
		],
		"name": "calculateethReceived",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "myTokens",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "tokenAddress",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_toAddress",
				"type": "address"
			},
			{
				"name": "_amountOfTokens",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "lastPayout",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "dividendBalance_",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "buy_amount",
				"type": "uint256"
			}
		],
		"name": "buy",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "players",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_amountOfTokens",
				"type": "uint256"
			}
		],
		"name": "sell",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_customerAddress",
				"type": "address"
			}
		],
		"name": "tokenBalance",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "donatePool",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_customerAddress",
				"type": "address"
			}
		],
		"name": "dailyEstimate",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "balanceInterval",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "reinvest",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"name": "_tokenAddress",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"payable": true,
		"stateMutability": "payable",
		"type": "fallback"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "customerAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "invested",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "tokens",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "soldTokens",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "onLeaderBoard",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "customerAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "incomingeth",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "tokensMinted",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "onTokenPurchase",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "customerAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "tokensBurned",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "ethEarned",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "onTokenSell",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "customerAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "ethReinvested",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "tokensMinted",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "onReinvestment",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "customerAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "ethWithdrawn",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "onWithdraw",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "tokens",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "onTransfer",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "balance",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "onBalance",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "from",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "amount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "onDonation",
		"type": "event"
	}
]

let ABI_LIFE = [
    {
        "constant": true,
        "inputs": [
            {
                "name": "_customerAddress",
                "type": "address"
            }
        ],
        "name": "dividendsOf",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_customerAddress",
                "type": "address"
            }
        ],
        "name": "claimsOf",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "swapCollector_",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_ethToSpend",
                "type": "uint256"
            }
        ],
        "name": "calculateTokensReceived",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "pure",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_customerAddress",
                "type": "address"
            }
        ],
        "name": "statsOf",
        "outputs": [
            {
                "name": "",
                "type": "uint256[16]"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "myDividends",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "withdraw",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "totalClaims",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "sellPrice",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "pure",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "claim",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "totalTxs",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "totalEthBalance",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_customerAddress",
                "type": "address"
            }
        ],
        "name": "buyFor",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_customerAddress",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "distributionInterval",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "myClaims",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "totalDeposits",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "swapAddress",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "buyPrice",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "pure",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_tokensToSell",
                "type": "uint256"
            }
        ],
        "name": "calculateethReceived",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "myTokens",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "tokenAddress",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "buy",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_toAddress",
                "type": "address"
            },
            {
                "name": "_amountOfTokens",
                "type": "uint256"
            }
        ],
        "name": "transfer",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "swapBalance_",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_customerAddress",
                "type": "address"
            }
        ],
        "name": "dailyClaimEstimate",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "depotFlushSize",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "lastPayout",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "dividendBalance_",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "players",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_amountOfTokens",
                "type": "uint256"
            }
        ],
        "name": "sell",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "donatePool",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_customerAddress",
                "type": "address"
            }
        ],
        "name": "tokenBalance",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_customerAddress",
                "type": "address"
            }
        ],
        "name": "dailyEstimate",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "balanceInterval",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "reinvest",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "name": "_tokenAddress",
                "type": "address"
            },
            {
                "name": "_swapAddress",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "payable": true,
        "stateMutability": "payable",
        "type": "fallback"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "customerAddress",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "invested",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "tokens",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "soldTokens",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "claims",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "timestamp",
                "type": "uint256"
            }
        ],
        "name": "onLeaderBoard",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "customerAddress",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "incomingeth",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "tokensMinted",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "timestamp",
                "type": "uint256"
            }
        ],
        "name": "onTokenPurchase",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "customerAddress",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "tokensBurned",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "ethEarned",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "timestamp",
                "type": "uint256"
            }
        ],
        "name": "onTokenSell",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "customerAddress",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "ethReinvested",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "tokensMinted",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "timestamp",
                "type": "uint256"
            }
        ],
        "name": "onReinvestment",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "customerAddress",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "ethWithdrawn",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "timestamp",
                "type": "uint256"
            }
        ],
        "name": "onWithdraw",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "customerAddress",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "tokens",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "timestamp",
                "type": "uint256"
            }
        ],
        "name": "onClaim",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "tokens",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "timestamp",
                "type": "uint256"
            }
        ],
        "name": "onTransfer",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "ethAmount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "tokenAmount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "timestamp",
                "type": "uint256"
            }
        ],
        "name": "onBuyBack",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "balance",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "timestamp",
                "type": "uint256"
            }
        ],
        "name": "onBalance",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "from",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "amount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "name": "timestamp",
                "type": "uint256"
            }
        ],
        "name": "onDonation",
        "type": "event"
    }
]

let ABI_WETH = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"guy","type":"address"},{"name":"wad","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"wad","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"deposit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"guy","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Withdrawal","type":"event"}]

let ABI_STACKPLUS = [
	{
		"constant": true,
		"inputs": [
			{
				"name": "_customerAddress",
				"type": "address"
			}
		],
		"name": "dividendsOf",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_customerAddress",
				"type": "address"
			}
		],
		"name": "claimsOf",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_customerAddress",
				"type": "address"
			},
			{
				"name": "_buy_amount",
				"type": "uint256"
			}
		],
		"name": "buyFor",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "swapCollector_",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_ethToSpend",
				"type": "uint256"
			}
		],
		"name": "calculateTokensReceived",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_customerAddress",
				"type": "address"
			}
		],
		"name": "statsOf",
		"outputs": [
			{
				"name": "",
				"type": "uint256[16]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "myDividends",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "withdraw",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalTokenBalance",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "lastBuyback",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalClaims",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "collateralAddress",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "sellPrice",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "claim",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalTxs",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_flushSize",
				"type": "uint256"
			}
		],
		"name": "updateFlushSize",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_customerAddress",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "distributionInterval",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "myClaims",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalDeposits",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "swapAddress",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "buyPrice",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_tokensToSell",
				"type": "uint256"
			}
		],
		"name": "calculateethReceived",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "vltAddress",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "myTokens",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_toAddress",
				"type": "address"
			},
			{
				"name": "_amountOfTokens",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "swapBalance_",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_customerAddress",
				"type": "address"
			}
		],
		"name": "dailyClaimEstimate",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "depotFlushSize",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_swapAddress",
				"type": "address"
			}
		],
		"name": "updateSwapRouter",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "lastPayout",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "dividendBalance_",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_buy_amount",
				"type": "uint256"
			}
		],
		"name": "buy",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "players",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_amountOfTokens",
				"type": "uint256"
			}
		],
		"name": "sell",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_customerAddress",
				"type": "address"
			}
		],
		"name": "tokenBalance",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "donatePool",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_customerAddress",
				"type": "address"
			}
		],
		"name": "dailyEstimate",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "balanceInterval",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "reinvest",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"name": "_collateralAddress",
				"type": "address"
			},
			{
				"name": "_vltAddress",
				"type": "address"
			},
			{
				"name": "_swapAddress",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"payable": true,
		"stateMutability": "payable",
		"type": "fallback"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "customerAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "invested",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "tokens",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "soldTokens",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "claims",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "onLeaderBoard",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "customerAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "incomingeth",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "tokensMinted",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "onTokenPurchase",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "customerAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "tokensBurned",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "ethEarned",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "onTokenSell",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "customerAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "ethReinvested",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "tokensMinted",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "onReinvestment",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "customerAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "ethWithdrawn",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "onWithdraw",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "customerAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "tokens",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "onClaim",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "tokens",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "onTransfer",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "ethAmount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "tokenAmount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "onBuyBack",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "balance",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "onBalance",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "from",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "amount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "onDonation",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "oldAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "newAddress",
				"type": "address"
			}
		],
		"name": "onRouterUpdate",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "oldFlushSize",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "newFlushSize",
				"type": "uint256"
			}
		],
		"name": "onFlushUpdate",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	}
]

let ABI_MOON = [
	{
		"constant": true,
		"inputs": [
			{
				"name": "_customerAddress",
				"type": "address"
			}
		],
		"name": "dividendsOf",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "payoutInterval",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_ethToSpend",
				"type": "uint256"
			}
		],
		"name": "calculateTokensReceived",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_customerAddress",
				"type": "address"
			}
		],
		"name": "statsOf",
		"outputs": [
			{
				"name": "",
				"type": "uint256[14]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "myDividends",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "collateralBuffer_",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "withdraw",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalTokenBalance",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalClaims",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "collateralAddress",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "sellPrice",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalTxs",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalRewardTokenBalance",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_customerAddress",
				"type": "address"
			}
		],
		"name": "buyFor",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_flushSize",
				"type": "uint256"
			}
		],
		"name": "updateFlushSize",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_customerAddress",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalDeposits",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "swapAddress",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "buyPrice",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_payout",
				"type": "uint256"
			},
			{
				"name": "_fund",
				"type": "uint256"
			}
		],
		"name": "updateIntervals",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "rewardAddress",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_tokensToSell",
				"type": "uint256"
			}
		],
		"name": "calculateethReceived",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "myTokens",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "fundingInterval",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "buy",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_toAddress",
				"type": "address"
			},
			{
				"name": "_amountOfTokens",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_swapAddress",
				"type": "address"
			}
		],
		"name": "updateSwapRouter",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "lastPayout",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "players",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_amountOfTokens",
				"type": "uint256"
			}
		],
		"name": "sell",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_customerAddress",
				"type": "address"
			}
		],
		"name": "tokenBalance",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_customerAddress",
				"type": "address"
			}
		],
		"name": "dailyEstimate",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "balanceInterval",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "flushSize",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "lastFunding",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "reinvest",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"name": "_collateralAddress",
				"type": "address"
			},
			{
				"name": "_rewardAddress",
				"type": "address"
			},
			{
				"name": "_swapAddress",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"payable": true,
		"stateMutability": "payable",
		"type": "fallback"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "customerAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "invested",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "tokens",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "soldTokens",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "onLeaderBoard",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "customerAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "incomingeth",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "tokensMinted",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "onTokenPurchase",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "customerAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "tokensBurned",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "ethEarned",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "onTokenSell",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "customerAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "ethReinvested",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "tokensMinted",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "onReinvestment",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "customerAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "ethWithdrawn",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "onWithdraw",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "customerAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "tokens",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "onClaim",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "tokens",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "onTransfer",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "payout",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "fund",
				"type": "uint256"
			}
		],
		"name": "onUpdateIntervals",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "collateralAmount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "rewardAmount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "onCollateraltoReward",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "ethAmount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "tokenAmount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "onEthtoCollateral",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "ethAmount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "tokenAmount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "onRewardtoCollateral",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "balance",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "rewardBalance",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "onBalance",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "from",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "amount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "onDonation",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "oldAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "newAddress",
				"type": "address"
			}
		],
		"name": "onRouterUpdate",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "oldFlushSize",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "newFlushSize",
				"type": "uint256"
			}
		],
		"name": "onFlushUpdate",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	}
]

let ABI_LDRIVE = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "donation",
				"type": "uint256"
			}
		],
		"name": "LiquidityDonation",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "tokens",
				"type": "uint256"
			}
		],
		"name": "TokenClaim",
		"type": "event"
	},
	{
		"stateMutability": "payable",
		"type": "fallback"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			}
		],
		"name": "availableOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "claimTokens",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			}
		],
		"name": "claimedOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "donate",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			}
		],
		"name": "donationsOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "end",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "endedOn",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getUnlockTime",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "time",
				"type": "uint256"
			}
		],
		"name": "lock",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "participants",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "token",
		"outputs": [
			{
				"internalType": "contract IERC20",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalClaimableTokens",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalClaimedTokens",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalEthDonated",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalTxs",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "unlock",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]
  
let ABI_ELEPHANT = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "symbol",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "exchangeRouter",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "campaignPeriod",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "minTokensBeforeSwap",
				"type": "uint256"
			}
		],
		"name": "MinTokensBeforeSwapUpdated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "tokensSwapped",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "ethReceived",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "tokensIntoLiqudity",
				"type": "uint256"
			}
		],
		"name": "SwapAndLiquify",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "_campaignPeriod",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "_liquidityFee",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "_taxFee",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "subtractedValue",
				"type": "uint256"
			}
		],
		"name": "decreaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "excludeFromFee",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "excludeFromReward",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getUnlockTime",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "graveyard",
		"outputs": [
			{
				"internalType": "contract ElephantGraveyard",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "includeInFee",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "includeInReward",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "addedValue",
				"type": "uint256"
			}
		],
		"name": "increaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "isExcludedFromFee",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "isExcludedFromReward",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "launch",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "launched",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "liquidityDrive",
		"outputs": [
			{
				"internalType": "contract ElephantLiquidityDrive",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "time",
				"type": "uint256"
			}
		],
		"name": "lock",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "ready",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tAmount",
				"type": "uint256"
			}
		],
		"name": "reflect",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tAmount",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "deductTransferFee",
				"type": "bool"
			}
		],
		"name": "reflectionFromToken",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "router",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "startedOn",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "swapAndLiquifyEnabled",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "rAmount",
				"type": "uint256"
			}
		],
		"name": "tokenFromReflection",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalFees",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "uniswapV2Pair",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "uniswapV2Router",
		"outputs": [
			{
				"internalType": "contract IUniswapV2Router02",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "unlock",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	}
]

let ABI_ELEPHANT_STACK = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_tokenAddress",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_tokenRouter",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "balance",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "onBalance",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "onBuyBack",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "onDonation",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "customerAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "invested",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "tokens",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "soldTokens",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "onLeaderBoard",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "customerAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "ethReinvested",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "tokensMinted",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "onReinvestment",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "customerAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "incomingeth",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "tokensMinted",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "onTokenPurchase",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "customerAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "tokensBurned",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "ethEarned",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "onTokenSell",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "tokens",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "onTransfer",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "customerAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "ethWithdrawn",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "onWithdraw",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "balanceInterval",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_customerAddress",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "buy_amount",
				"type": "uint256"
			}
		],
		"name": "buy",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_customerAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "buy_amount",
				"type": "uint256"
			}
		],
		"name": "buyFor",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "buyPrice",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "buybackEnabled",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_ethToSpend",
				"type": "uint256"
			}
		],
		"name": "calculateTokensReceived",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_tokensToSell",
				"type": "uint256"
			}
		],
		"name": "calculateethReceived",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_customerAddress",
				"type": "address"
			}
		],
		"name": "dailyEstimate",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "distributionInterval",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "dividendBalance_",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_customerAddress",
				"type": "address"
			}
		],
		"name": "dividendsOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "donatePool",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "elephantAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "elephantReserve_",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bool",
				"name": "enable",
				"type": "bool"
			}
		],
		"name": "enableBuyback",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "firstBlock",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "firstTimestamp",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "graveyardAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "lastPayout",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "myDividends",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "myTokens",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "players",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "reinvest",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "router",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_amountOfTokens",
				"type": "uint256"
			}
		],
		"name": "sell",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "sellPrice",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_customerAddress",
				"type": "address"
			}
		],
		"name": "statsOf",
		"outputs": [
			{
				"internalType": "uint256[14]",
				"name": "",
				"type": "uint256[14]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "sweep",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "tokenAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_customerAddress",
				"type": "address"
			}
		],
		"name": "tokenBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "tokenUniswapV2Router",
		"outputs": [
			{
				"internalType": "contract IUniswapV2Router02",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalBuyBack",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalClaims",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalDeposits",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalTokenBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalTxs",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_toAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_amountOfTokens",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "uniswapV2Router",
		"outputs": [
			{
				"internalType": "contract IUniswapV2Router02",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_tokenRouter",
				"type": "address"
			}
		],
		"name": "updateTokenRouter",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	}
]

let ABI_GRAVEYARD = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"Rebalance","type":"event"},{"inputs":[],"name":"getUnlockTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastRebalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"time","type":"uint256"}],"name":"lock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ready","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rebalance","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unlock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"upperboundPercentage","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]
let BANKROLL = {
    "rinkeby": {
        VLT: "0xcdeb88ba2bf9b98824f1f2293b1c7d603330dc7a",
        Stack: "",
        Life: "",
        USDC: "0xbaf95828cb73073b0339000254ed0029212feb4d",
        Router: "0xf164fC0Ec4E93095b804a4795bBe1e041497b92a",
        WETH: "0xc778417E063141139Fce010982780140Aa0cD5Ab",
        WBTC: "0xb81a042838de0e48fb672eec7b32f4e59574713e",
        Moon: {
            AMPL: {contract:"0x8DE95B8e307BE9Df7b5ec00EB8ceC392649Bf283", token:"0xb81a042838de0e48fb672eec7b32f4e59574713e"}
        },
        LiquidityDrive: "0xD3D1EB62808D4C3583F59fE207E61677b75A7981",
        Elephant:"0x9a444FBD6b9405160F0F1257CAAF3dbe500d476d"
    },
    "mainnet": {
        VLT: "0x6b785a0322126826d8226d77e173d75dafb84d11",
        AMPL: "0xd46ba6d942050d489dbd938a2c909a5d5039a161",
        WETHToken: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
        Stack: "0x84A4eCCB81A1Fd0867C7682E2c85FFeF4538A2F4",
        Life: "0x3d76cd9723e0cc8875907CF944c147eE4baFB29E",
        Router: "0xf164fC0Ec4E93095b804a4795bBe1e041497b92a",
        VLTWETH_BAL: "",
        WETH: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
        USDC: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
        Univ2Pool: "0x966053ca4fca049173eb1f27e4cb168ccb794534",
        StackPlus: {
            LINK: {token:"0x514910771af9ca656af840dff83e8264ecf986ca", stack:"0x7B3611b0AfFc27D212A68293831d3B55354B802F", name:"Chainlink", desc:""},
            DAI: {token:"0x6b175474e89094c44da98b954eedeac495271d0f", stack:"0x7a40ab4b8d016e4e76faea844543b033a00ab54d", name:"Dai", desc:""},
            BAT: {token:"0x0D8775F648430679A709E98d2b0Cb6250d2887EF", stack:"0x85cdDcE5C1889D84e10d97074b7Af007f2CaDCC5", name:"Basic Attention Token", desc:""},
            KNC: {token:"", stack:"", name:"", desc:""},
            LEND: {token:"", stack:"", name:"", desc:""}
        },
        Moon: {
            AMPL: {contract:"0x45B7A724DaDb55fAe51319184Ad6e2323287959e", token:"0xd46ba6d942050d489dbd938a2c909a5d5039a161", decimals:9}
        }

    },

    "BSC": { 
        StackPlus: {
            "bdollar" : { token: "0x190b589cf9Fb8DDEabBFeae36a813FFb2A702454", stack: "0xd397f06eEcd4Eb9aF0492874BE0D24d67560fF69",proxy: "0x70D9c78D44bb783D5B6422450ddB7E6459Eeb6f2", block: 5315882, timestamp: 1614747600 , symbol: "BDO", padding: 4},
            "busd" : { token: "0xe9e7cea3dedca5984780bafc599bd69add087d56", stack: "0x599640dDacb546B1446FA149f4a9CEEcd3fcc87a", proxy: "0x4fb2349682DedA7427C8CBfC9D6928d11305f565", block: 5849079, timestamp: 1616253841 , symbol: "BUSD", padding: 4},
            "wbnb" : { token: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c", stack: "0x564D4126AF2B195fFAa7fB470ED658b1D9D07A54", proxy: "0xD47fF53625A2B26C5EF88A9Abe9A8CA5F575837f", block: 5546763, timestamp: 1615362189, symbol: "WBNB", padding: 5},
            "binance-bitcoin" : { token: "0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c", stack: "0x83ad16274c8bdD547582de02dB25a81A7A33759F", proxy: "0xe8c45E64e77Cd954107dA3bd1E27e749C228E57D", block: 5575494, timestamp: 1615431544, symbol: "BTCB" , padding: 9},
            //Just used for the landing page
            "busdv2" : { token: "0xe9e7cea3dedca5984780bafc599bd69add087d56", stack: "0x16d0a151297a0393915239373897bCc955882110", symbol: "BUSD", timestamp: 1625344185, block: 8842828, padding: 4},
            "wbnbv2" : { token: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c", stack: "0xAdEfb902CaB716B8043c5231ae9A50b8b4eE7c4e", symbol: "WBNB", padding: 5, timestamp: 1625698289, block: 8960188},
            "ethereum" : { token: "0x2170ed0880ac9a755fd29b2688956bd959f933f8", stack: "0xeF6676536a1d98942d149f52708770e11Db47BcE", symbol: "ETH", padding: 5, timestamp: 1625727581, block: 8969946},
            "pancakeswap-token" : { token: "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82", stack: "0x0a15B914388d48d77fE70c8a832cD992dD05e76E", symbol: "CAKE", padding: 5, timestamp: 1627348141, block: 9508551},
            "binance-bitcoinv2" : { token: "0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c", stack: "0x313E71df70b106BD8e456cfbAfd3583595EdE490", symbol: "BTCB", padding: 5, timestamp: 1625727647, block: 8969968},
            "trunk" : { token: "0xdd325C38b12903B727D16961e61333f4871A70E0", stack: "0xec10059BA900883ed6154883E9f3A1C24fcE1eb7", symbol: "TRUNK", padding: 4, timestamp: 1632438372, block: 11177510}
        },
        ElephantStack: {
            "busd" : { token: "0xe9e7cea3dedca5984780bafc599bd69add087d56", stack: "0x16d0a151297a0393915239373897bCc955882110", symbol: "BUSD", timestamp: 1625344185, block: 8842828, padding: 4},
            "wbnb" : { token: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c", stack: "0xAdEfb902CaB716B8043c5231ae9A50b8b4eE7c4e", symbol: "WBNB", padding: 5, timestamp: 1625698289, block: 8960188},
            "pancakeswap-token" : { token: "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82", stack: "0x0a15B914388d48d77fE70c8a832cD992dD05e76E", symbol: "CAKE", padding: 5, timestamp: 1627348141, block: 9508551},
            "ethereum" : { token: "0x2170ed0880ac9a755fd29b2688956bd959f933f8", stack: "0xeF6676536a1d98942d149f52708770e11Db47BcE", symbol: "ETH", padding: 5, timestamp: 1625727581, block: 8969946},
            "trunk" : { token: "0xdd325C38b12903B727D16961e61333f4871A70E0", stack: "0xec10059BA900883ed6154883E9f3A1C24fcE1eb7", symbol: "TRUNK", padding: 4, timestamp: 1632438372, block: 11177510},
            "binance-bitcoin" : { token: "0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c", stack: "0x313E71df70b106BD8e456cfbAfd3583595EdE490", symbol: "BTCB", padding: 5, timestamp: 1625727647, block: 8969968},
            //"binance-bitcoin" : { token: "0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c", stack: "0x83ad16274c8bdD547582de02dB25a81A7A33759F", symbol: "BTCB" , padding: 9}
        },
        LiquidityDrive: "0xF9d64317d4cdA0a6B4Ef41a32E301eA64f8B5Cb3",
        Elephant:"0xE283D0e3B8c102BAdF5E8166B73E02D96d92F688",
        Trunk: "0xdd325C38b12903B727D16961e61333f4871A70E0",
        WBNB:"0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
        BUSD: "0xe9e7cea3dedca5984780bafc599bd69add087d56",
        Router: "0x10ed43c718714eb63d5aa57b78b54704e256024e",
        UniPair: "0x1cea83ec5e48d9157fcae27a19807bef79195ce1",
        Graveyard: "0xf7cc784bd260eafc1193d337ffcea4d6dda0dd71",
        Zero:"0x0000000000000000000000000000000000000000",
        TRUNKSecondaryPool:"0x612cE90180ec0185aD1aA09C74704a048a4ccCBA",
        TRUNKBackedPool: "0x7B68a2b312b1f69B8f255af585E17A7C00278018",//"0xaf860F521867bC0f060FbA492BB8841fdbEEAB3F",//"0x8Dad7DbF5950c3FEC9E1a5e8AD28214074D57d82",
        TRUNKPerformanceBackedPool: "0xd35C54a918717eB51d21cE95d80f3c17B0943e43",//"0xdE3ea63C00229B9713bB625DDdD9dA1255c4FFA9",//"0x5310DfF3557C9F13b72806D523Fcb5c384DafcF9",
        TRUNKPerformanceDestination: "0x99c9196F2bCB898F94a346B27cde7cE305EA8f05",
        TRUNKReserve: "0xE9BCD0228Af9719dB4518De40060FAd585d5f3f9",//"0x22013EF52a27b079Cec4Ae8B98cF490F3eA04b23",//"0xc342f872CB0c43Ece902a3C1CEF27006346aAbeF",//"0xB629Acf187d6F8F1A3a76047981e6936E141F8F7",//"0xA70A8dc7BDf000c8f9374C5B4A542B3656EBad79",//"0xD520a3B47E42a1063617A9b6273B206a07bDf834",//"0xd23112A7659Aa55a5d5e4cdfB6A76Cce23f9C099",//"0x27896749b31B1e1464611B13ea9b97DdE50Ff468",//"0x501bcE6700d80b2d40d45474F13e17213363d04D",
        ElephantTreasury: "0xAF0980A0f52954777C491166E7F40DB2B6fBb4Fc",
        TRUNKTreasury: "0xaCEf13009D7E5701798a0D2c7cc7E07f6937bfDd",
        TRUNKLP: "0xf15a72b15fc4caed6fadb1ba7347f6ccd1e0aede",
        BUSDTreasury: "0xCb5a02BB3a38e92E591d323d6824586608cE8cE4",
        BUSDRedemptionPool: "0xD3B4fB63e249a727b9976864B28184b85aBc6fDf",
        BUSDBufferPool: "0xd9dE89efB084FfF7900Eac23F2A991894500Ec3E",
        Partnerlist: "0x3064CdA024b921F83E72c996bc06982A5885ED97",
        FlowData:"0x4C64719E524383662232FDb50dfdaDEFB15c09D9",
        MintData:"0x7d908Cd5DcB03c2d57184da91445c9235f385043",
        PegSupportTreasuryStrategy: "0x6b5EEB214A87d1D296652DeC8c48BbdD1590E567",//"0x20e64A35688B1e98219733CB55d8eFe40Ac179E1",//"0x09FC7c5719C6177d51EF8E69b1493AA7a897F817",//"0xaf47e90481C5DBC3e84C9589Ffd819C4aCB23d8e",//"0x04a774ae354e0521f3DEA6d8081Cb57620cF2532",//"0x8CDe0d63810a9bBb6bB458ca988C68b006aF3085",//"0x2D5E8EC85fD1F89e7865C2ef909C64f17eDF943D",//"0x7811849a0524C12a5B1E54bEB5050b8a6DF913c6",//"0x9182FD7a4AD0a2F7D7a33090dA2D0F5670D38d8C",//"0xd1d23167B521dc8b249f14Db8EeaA70438455876",
        CollateralToCoreBuybackStrategy: "0x8Cf0A553aB3896e4832ebCC519a7A60828AB5740",//"0xd4fb0df9936d1b0aAe52aF53B5813fe1CA6dd053",//"0x44224764a1728A47Ed5f93282B9417788b6f225d",//"0x03533f4686403292f0acAC189020Be53187b5a74",//"0x92Dade9AB801c29008b4109D93dCeB51Ca4E162B",//"0x34Cb11167A13ee61113E04D7dd7893E0bD9fcf03",//"0x31d23e6b78D3b87FA3a3888ED8bC284b0eC87F73",//"0xA0cb2da6D5aBe4c192ab0D5353077c90261a260b",
        SponsorData:"0x708115E21b72eab22De31458b7B3A791c45813D2",
        ReferralData:"0x6248d9a3DFF17DcdA92141AA1e8F1E9d6fE1eA4A",
        FlowEngine: "0x202B8d57709a03d1F9A78C9A034786F5fb8576AB",//"0x3685407AabF9A0Ab54Ed39168733B1e2D2A80e5E",//"0xfC3a92072bf845a02DD103937b8d3d1A6f8bDE30",//"0xDcB5034Fb25A5e88B124658bE468Ff55eD52E264",//"0xc7E2DFf6E3Ea2BFB587D4900E38d49Dacff97D8d",//"0xD3477CEdc1671CB1b18899B0DC0a8C1bD52Fe4d2",//"0x30Ead2C7910499fEd5e794DF9756b879529c5B53",//"0x77197AF2830321EE5A874Ab7A0b074F6cb469DEf",//"0x47A49626E4cD1b361c72A73472d91Eb8556180a0",//"0xc8B18B81631DEa1f7e4F810946854456D7C4e79a"//"0x6839e295a8f13864A2830fA0dCC0F52e71a82DbF"//"0xf7f376EA0584aE97706B78cC1b320CB7C811C10E"//"0x962B70e532370De831a64eD8B40F92dCf05A32ba"//"0x2EFfF893B6Fc0bFF779d5448Fa0c361975f0961c"//"0x6F052e85197E4B2c6F306FEE01f25a5355722Ef8"//"0x30d4d880cccA00c508d1269DdB8668Dd7FfC8732"//"0x4C4F8050e5DE8560016A3BbE501FFaD4B3853f2c",//"0xd925154517d08Ab42b28e5149C43bF63950E5268",//"0x64f674a2c5e6C833e9A5862839956e4f40E2FF84",//"0x00C093e166FbcF30e7B7FCD0632daFe9d096B9F4",//"0x86c4dA96d8A9D6307dec26d937B2cC9044690883"//"0xC04C9C6a677117Aa85B0FfF9E8bb747686a9e48B"//0xb2f8f2aff700E3A44c947EF03b577E5d59D12cF3"
        RedeemData: "0x7C7990F9049a079d19e31B65Df2A3FCF385A5569",//"0x6576e3c1a52F9C22119316c104d7Ef7803FC783b",
        RedemptionSupportStrategy: "0x16c1bC94205f962bb9fa1B4a1110FAF7c451C8BC",//"0x029aa738a2524F806bE7b6332732cF75908851ef",//"0x366Ad3118F5f29c3dB290A9D30E9Ffbecc9FdDCb",//"0x5c18Ff96ce149971AD9587711d8e707C51332171",
        Raffle: "0xd5A7C9b326DB400b77DC378d9ff2eF5E8FfEB529",//"0xF74D1E4eBD7cB565edd695FB6529Ff66E91a61Eb",//"0x125593E7D9816CBeCCb56812F96725DAc38E95bB"
        ElephantRouterProxy:"0x3000D21dE4b0A6C503F3BF4F6a1B2829F4fa35e8",//,"0x7A62F3686BC633Dd950d7C2C3ca3f2568F169b57"//,"0xDb964B780AE0911FEA14721339caA1B619363bC6",//"0xE18735e53F0a1FDC2c19a5F46Cc3d1631a0e7C59"//"0x6c9cd0D89eC79F662a694B97A7D9aE81484693fA"//"0x11dFa8301169754A5C020Ac6c57519F4C8198d61"//"0xdFc11Af49bc972a7d13e3dcEb47d57Cbb882EC33"//"0xba8562a7E90244C8dB4134101261e5433ECE7B8A"//,"0x0990D4Dd26E856a378bB8e5d6bCE182c758990ED"//"0xE60E4326B1D9125E096ce60f86f73A53dEd9b32e",// "0x3AeC8fC4fBa90eF8155d872FD9bD23053dA3eCBD",// "0x8e5248dBa8e766075295308bEd7e8cdC7d1A05E6"//"0x9806AbCbe3216b11fba951E5bD34fF7c5B304DC6"
        DodoVendingMachineV2:"0x8f8dd7db1bda5ed3da8c9daf3bfa471c12d58486",
        BiswapRouter:"0x3a6d8ca21d1cf76f653a67577fa0d27453350dd8",
        FarmEngine: "0xa3473FCea7c6cbDFad6326351e07D93F1bab3281",//"0x553A68B3865764A59bfC58adC9BbcfB1B092eB18",//"0x7bCB412F80234Aaf9186e66b3E65eaa61A7a0411",
        Vault: "0x71B00a9C9cC1902EfdDd6ba28850F6f34f5938Ed",//"0x3af527FC332d819B1DbaCE4bdcAe2C617B303e85",//"0x5457877200e4ed4C07aCee8B274B0a65C042D0Fb",
        PcsPeriodicTwapOracle: "0xb9394B2dD11115721D93A6f05215f81c54893861",//"0xE1caC597FfB58Dd588ba68F2bbF3d2a91175388d"//"0x28FafC6Ff614e6C2D7CA95959A3c0881fD5679e3"
        Depot: "0x1A6A71f07D85f3Aa76BaA5616A7bda3ccF7E68a5",//"0x6da24602756d5C6177Dd3090953f8e2e9e39F42b",
        Futures: "0x5B24f7645eec47EDd997bF8faDF3E340518af11B",//"0x8a3955E475426Fd81e4E2F5E9C90b8e3fc19EC06", //"0x48d5A4D3F2cb06ED807F9ca550200ddb1bF3cD50", //"0x3b2a8656c8A1dF0Dfdd8D2ffC73E30d3AF67563f",
        YieldEngine: "0x2689e35a22B750C046FaEB892Eb3868A408C5EfD", // "0x7F73DeC2e4B9C5FEDFC2f8f3882B6791A1D157F4", //"0xC274F0e93fac9932364281E5C5F2C99201f15eeE",  //"0x07a7c3719A47983D5749318ac2d303c353E250c3",
        FuturesVault: "0xAEb9B31B9728A2c3d4dF59748442D27F2277fCD2", //"0x107F56bac4E3AA8B010A296Eb3645Dc63cAD096F" //"0xC9D455C1B1074A69F9F1c6287eE71127E1B49099" // "0xF907e1B83FEfA577bb1050361310777130D9E806"
        BotGasStation: "0xC4d9b08D0d7632f8e1a0f07f91e10F0c4a6778B9",
        StampedeEngine: "0x7c4DAD1b249efdc998f3569C8537866639b914B7",//"0xE30dAca050bc2A030617Ba82B7FEbdd81Ac1D3a4",//"0x05588D865F4B924DB54E23d9c8de5AC3FAc284CA",//"0x213cc0bd53CF8a02870E91B378F9EE79C987321B", //"0x221e4c29Cb9ba2424B25f3B98306663886AFD1E9",
        StampedeVault: "0x6b50811Cd8A084AB1C99C6003ba6df0EDA74C181", //"0x2037B74c8C509A30B9f5509bAb8B58e9dc7657f4"
        Trumpet: "0x574a691D05EeE825299024b2dE584B208647e073"
        /* Botch
        LiquidityDrive: "0x9BB73dc5f901A7720C384d37aceBBa13B119CF12",
        Elephant:"0xD96EC811359BFD94D2dfe2A3Bd8DA68BF262Be1A"
        */

    }
}


var default_currency = 'USDT'
var currency = (typeof default_currency === 'undefined') ? 'USD' : default_currency


var bdo, stack, life, router, weth, collateral, stackplus, moon, stackProxy, ldrive, graveyard, flowEngine, flowData,referralData, sponsorData, sponsorReader, mintData, pegSupportTreasuryStrategy, collateralToCoreBuybackStrategy, 
elephantReserve, elephantTreasury, busdTreasury, trunkTreasury, wbnb, busd, elephant, trunk, trunkWhitelist, performancePool, rewardPool, secondaryPool, busdPool, redeemData, redemptionSupportStrategy, raffle, routerProxy,
vault, farmEngine, oracle, depot,futures, yieldEngine, futuresVault, busdBuffer, gasStation, stampede, stampedeVault, trumpet


// Unpkg imports

var Web3Modal, WalletConnectProvider ,Fortmatic ,evmChains 

// Web3modal instance
let web3Modal

// Chosen wallet provider given by the dialog window
let provider;

function getContracts(){
    let contracts = []

    let keys = _.keys(BANKROLL['BSC'])
    keys = _.difference(keys, ['StackPlus', 'ElephantStack', 'Zero'])

    contracts = _.map(keys, (value) => {
        return {name: value, address: BANKROLL['BSC'][value]}
    })

    return contracts
} 

async function networkReady() {

    let netId = await window.web3.eth.getChainId()
    var network = 'Unsupported network detected'
    switch (netId) {
        case 1:
            console.log('This is mainnet')
            network = 'Mainnet'
            if (BANKROLL) {
                BANKROLL.network = 'mainnet'
            }
            break
        case 2:
            console.log('This is the deprecated Morden test network.')
            break
        case 3:
            console.log('This is the ropsten test network.')
            break
        case 4:
            console.log('This is the Rinkeby test network.')
            network = 'Rinkeby'
            if (BANKROLL) {
                BANKROLL.network = 'rinkeby'
            }
            break
        case 56:
            console.log('This is the BSC mainnet.')
            network = 'BSC Mainnet'
            if (BANKROLL) {
                BANKROLL.network = 'BSC'
            }
            break
        case 42:
            console.log('This is the Kovan test network.')
            break
        default:
            console.log('This is an unknown network.')
    }


    $('#eth-network').text(network)
}

function padNum(num = 0){
    return (num).toLocaleString('fullwide', {useGrouping:false})
}

function getWeb3() {
    let web3js;

    if (window.web3 !== null) {
        web3js = window.web3
    } else {
        return null;
    }

    return web3js;
}

//this is always called after init
async function initContracts() {
    let web3js = getWeb3();

    let options = {from: window.ethDefaultAddress}

    console.log('average gas price', await web3js.eth.getGasPrice())
    if (COLLATERAL_SYMBOL != null) {
        if (_.isUndefined(window.isElephantStack)){
            collateral = new web3js.eth.Contract(ABI_VLT, BANKROLL[BANKROLL.network].StackPlus[COLLATERAL_SYMBOL].token, options)
            stack = new web3js.eth.Contract(ABI_STACK, BANKROLL[BANKROLL.network].StackPlus[COLLATERAL_SYMBOL].stack, options)
            stackProxy = new web3js.eth.Contract(ABI_STACK, BANKROLL[BANKROLL.network].StackPlus[COLLATERAL_SYMBOL].proxy, options)
        } else {
            collateral = new web3js.eth.Contract(ABI_VLT, BANKROLL[BANKROLL.network].ElephantStack[COLLATERAL_SYMBOL].token, options)
            stack = new web3js.eth.Contract(ABI_ELEPHANT_STACK, BANKROLL[BANKROLL.network].ElephantStack[COLLATERAL_SYMBOL].stack, options)
        }
    }
    ldrive = new web3js.eth.Contract(ABI_LDRIVE, BANKROLL[BANKROLL.network].LiquidityDrive, options)
    elephant = new web3js.eth.Contract(ABI_ELEPHANT, BANKROLL[BANKROLL.network].Elephant, options)
    wbnb = new web3js.eth.Contract(ABI_VLT, BANKROLL[BANKROLL.network].WBNB, options)
    busd = new web3js.eth.Contract(ABI_VLT, BANKROLL[BANKROLL.network].BUSD, options)
    trunk = new web3js.eth.Contract(ABI_VLT, BANKROLL[BANKROLL.network].Trunk, options)
    router = new web3js.eth.Contract(ABI_UNIROUTER, BANKROLL[BANKROLL.network].Router, options)
    graveyard = new web3js.eth.Contract(ABI_GRAVEYARD, BANKROLL[BANKROLL.network].Graveyard, options)
    elephantReserve = new web3js.eth.Contract(ABI_TRUNK_RESERVE, BANKROLL[BANKROLL.network].TRUNKReserve, options)
    referralData = new web3js.eth.Contract(ABI_FLOW_REFERRAL, BANKROLL[BANKROLL.network].ReferralData, options)
    vault = new web3js.eth.Contract(ABI_VAULT, BANKROLL[BANKROLL.network].Vault, options)
    stampedeVault = new web3js.eth.Contract(ABI_STAMPEDE_VAULT, BANKROLL[BANKROLL.network].StampedeVault, options)
    farmEngine = new web3js.eth.Contract(ABI_FARMENGINE, BANKROLL[BANKROLL.network].FarmEngine, options)
    depot = new web3js.eth.Contract(ABI_DEPOT, BANKROLL[BANKROLL.network].Depot, options)
    futures = new web3js.eth.Contract(ABI_FUTURES, BANKROLL[BANKROLL.network].Futures, options)
    stampede = new web3js.eth.Contract(ABI_STAMPEDE_ENGINE, BANKROLL[BANKROLL.network].StampedeEngine, options)
    yieldEngine = new web3js.eth.Contract(ABI_ELEPHANT_YIELD_ENGINE, BANKROLL[BANKROLL.network].YieldEngine, options)
    gasStation = new web3js.eth.Contract(ABI_BOT_GASSTATION, BANKROLL[BANKROLL.network].BotGasStation, options)
    trumpet = new web3js.eth.Contract(ABI_TRUMPET, BANKROLL[BANKROLL.network].Trumpet, options)
    


    //elephantTreasury, busdTreasury, busd, elephant, trunk, performancePool, rewardPool, secondaryPool
    busdBuffer = new web3js.eth.Contract(ABI_WHITELIST, BANKROLL[BANKROLL.network].BUSDBufferPool, options)
    oracle = new web3js.eth.Contract(ABI_WHITELIST, BANKROLL[BANKROLL.network].PcsPeriodicTwapOracle, options)
    elephantTreasury = new web3js.eth.Contract(ABI_WHITELIST, BANKROLL[BANKROLL.network].ElephantTreasury, options)
    busdTreasury = new web3js.eth.Contract(ABI_WHITELIST, BANKROLL[BANKROLL.network].BUSDTreasury, options)
    trunkTreasury = new web3js.eth.Contract(ABI_WHITELIST, BANKROLL[BANKROLL.network].TRUNKTreasury, options)
    busdPool = new web3js.eth.Contract(ABI_WHITELIST, BANKROLL[BANKROLL.network].BUSDRedemptionPool, options)
    trunkWhitelist = new web3js.eth.Contract(ABI_WHITELIST, BANKROLL[BANKROLL.network].Trunk, options)
    flowData = new web3js.eth.Contract(ABI_FLOW_DATA, BANKROLL[BANKROLL.network].FlowData, options)
    mintData = new web3js.eth.Contract(ABI_WHITELIST, BANKROLL[BANKROLL.network].MintData, options)
    futuresVault = new web3js.eth.Contract(ABI_WHITELIST, BANKROLL[BANKROLL.network].FuturesVault, options)

    routerProxy = new web3js.eth.Contract(ABI_ROUTERPROXY, BANKROLL[BANKROLL.network].ElephantRouterProxy, options)
    raffle = new web3js.eth.Contract(ABI_Raffle, BANKROLL[BANKROLL.network].Raffle, options)
    redeemData = new web3js.eth.Contract(ABI_RedeemData, BANKROLL[BANKROLL.network].RedeemData, options)
    redemptionSupportStrategy = new web3js.eth.Contract(ABI_RedemptionSupportStrategy, BANKROLL[BANKROLL.network].RedemptionSupportStrategy, options)
    
    sponsorData = new web3js.eth.Contract(ABI_WHITELIST, BANKROLL[BANKROLL.network].SponsorData, options)
    sponsorReader = new web3js.eth.Contract(ABI_SPONSOR_READER, BANKROLL[BANKROLL.network].SponsorData, options)
    flowEngine = new web3js.eth.Contract(ABI_FLOW_ENGINE, BANKROLL[BANKROLL.network].FlowEngine, options) 
    performancePool = new web3js.eth.Contract(ABI_RewardPoolStrategy, BANKROLL[BANKROLL.network].TRUNKPerformanceBackedPool, options)
    rewardPool = new web3js.eth.Contract(ABI_RewardPoolStrategy, BANKROLL[BANKROLL.network].TRUNKBackedPool, options)
    secondaryPool = new web3js.eth.Contract(ABI_RewardPoolStrategy, BANKROLL[BANKROLL.network].TRUNKSecondaryPool, options)  

    //Governance
    pegSupportTreasuryStrategy = new web3js.eth.Contract(ABI_PegSupportTreasuryStrategy, BANKROLL[BANKROLL.network].PegSupportTreasuryStrategy, options)
    collateralToCoreBuybackStrategy = new web3js.eth.Contract(ABI_CollateralToCoreBuybackStrategy,  BANKROLL[BANKROLL.network].CollateralToCoreBuybackStrategy, options)
    
    

}


async function scrubWhitelist(tx){
    

    let web3js = getWeb3()

    let receipt = await web3js.eth.getTransactionReceipt(tx)

    let currentBlock = await web3js.eth.getBlockNumber()

    //return {receipt: receipt, currentBlock: currentBlock}

    let options = {from: window.ethDefaultAddress}
    whitelist =  new web3js.eth.Contract(ABI_WHITELIST, receipt.contractAddress, options)  

    let eventFetcher = new EventFetcher()
    
    let fetchOptions = {
        contract: whitelist,
        eventName: 'WhitelistedAddressAdded',
        fromBlock: receipt.blockNumber,
        toBlock: currentBlock,
        chunkSize: 4500,
        progressCallback: console.log
    }

    let events = await eventFetcher.fetch(fetchOptions)

    return events
}

async function wireFarm() {
    let txs = [];

    try {
        //wire
        txs.push(farmEngine.methods.updateReserve(elephantReserve.options.address).send())
        txs.push(farmEngine.methods.updateReferralData(referralData.options.address).send())
        txs.push(farmEngine.methods.updateSponsorData(sponsorData.options.address).send())
        txs.push(farmEngine.methods.updateOracle(oracle.options.address).send())

        txs.push(vault.methods.updateFarmEngine(farmEngine.options.address).send())

        //whitelist
        txs.push(oracle.methods.addAddressToWhitelist(farmEngine.options.address).send())
        txs.push(elephantReserve.methods.addAddressToWhitelist(farmEngine.options.address).send())
        txs.push(sponsorData.methods.addAddressToWhitelist(farmEngine.options.address).send())
        txs.push(farmEngine.methods.addAddressToWhitelist(vault.options.address).send())
        txs.push(trunkTreasury.methods.addAddressToWhitelist(farmEngine.options.address).send()) 
    } catch (error) {
        console.error(error, "Failed during wire tx")
    }
}


async function wireDepot() {
    let txs = [];

    try {
        //wire
        txs.push(depot.methods.updateOracle(oracle.options.address).send())
        txs.push(depot.methods.updateFarmEngine(farmEngine.options.address).send())

        //whitelist
        txs.push(farmEngine.methods.addAddressToWhitelist(depot.options.address).send())
    } catch (error) {
        console.error(error, "Failed during wire tx")
    }
}

async function wireFutures() {
    let txs = [];

    try {
        //oracle is used in the updateOracle bootstrapping process so whitelist is updated
        txs.push(await oracle.methods.addAddressToWhitelist(yieldEngine.options.address).send())

        //wire
        txs.push(yieldEngine.methods.updateReferralData(referralData.options.address).send())
        txs.push(yieldEngine.methods.updateSponsorData(sponsorData.options.address).send())
        /* yieldEngine.methods.updateOracle(oracle.options.address).estimateGas()
        .then((gasAmount) => console.log("mint gas amount", gasAmount))*/

        
        txs.push(yieldEngine.methods.updateOracle(oracle.options.address).send())
        txs.push(futures.methods.updateYieldEngine(yieldEngine.options.address).send())
        txs.push(futures.methods.updateFuturesVault(futuresVault.options.address).send())


        //whitelists

        //treasuries
        txs.push(elephantTreasury.methods.addAddressToWhitelist(yieldEngine.options.address).send())
        txs.push(busdBuffer.methods.addAddressToWhitelist(yieldEngine.options.address).send())

        //futuresengine dependencies
        txs.push(futuresVault.methods.addAddressToWhitelist(futures.options.address).send())
        txs.push(yieldEngine.methods.addAddressToWhitelist(futures.options.address).send())

        //yieldengine dependencies
        
        txs.push(sponsorData.methods.addAddressToWhitelist(yieldEngine.options.address).send())
        txs.push(elephant.methods.excludeFromFee(yieldEngine.options.address).send())
        txs.push(elephant.methods.excludeFromReward(yieldEngine.options.address).send())
    } catch (error) {
        console.error(error, "Failed during wire tx")
    }
}

async function wireStampede() {
    let txs = [];

    try {
        //oracle is used in the updateOracle bootstrapping process so whitelist is updated
        txs.push(await oracle.methods.addAddressToWhitelist(stampede.options.address).send())

        //wire
        txs.push(stampede.methods.updateReferralData(referralData.options.address).send())
        txs.push(stampede.methods.updateSponsorData(sponsorData.options.address).send())
        txs.push(stampede.methods.updateOracle(oracle.options.address).send())
        txs.push(stampede.methods.updateStampedeVault(stampedeVault.options.address).send())
        txs.push(stampede.methods.updateFlowData(flowData.options.address).send())
        txs.push(stampede.methods.updateReserve(elephantReserve.options.address).send())
        txs.push(stampede.methods.updateRaffle(raffle.options.address).send())


        //whitelists

        //treasuries
        txs.push(raffle.methods.addAddressToWhitelist(stampede.options.address).send())
        //txs.push(flowData.methods.addAddressToWhitelist(stampede.options.address).send())
        txs.push(trunkTreasury.methods.addAddressToWhitelist(stampede.options.address).send())
        txs.push(stampedeVault.methods.addAddressToWhitelist(stampede.options.address).send())
        txs.push(elephantReserve.methods.addAddressToWhitelist(stampede.options.address).send())    
        txs.push(sponsorData.methods.addAddressToWhitelist(stampede.options.address).send())
    } catch (error) {
        console.error(error, "Failed during wire tx")
    }
}

async function wireGasStation() {
    let txs = [];

    try {
        //oracle is used in the updateOracle bootstrapping process so whitelist is updated
        txs.push(await oracle.methods.addAddressToWhitelist(gasStation.options.address).send())
        
        txs.push(gasStation.methods.updateOracle(oracle.options.address).send())

        //treasuries
        txs.push(elephantTreasury.methods.addAddressToWhitelist(gasStation.options.address).send())

        //gasstation dependencies
        txs.push(elephant.methods.excludeFromFee(gasStation.options.address).send())
        txs.push(elephant.methods.excludeFromReward(gasStation.options.address).send())
    } catch (error) {
        console.error(error, "Failed during wire tx")
    }
}


async function wireNetwork() {
    // elephantTreasury, busdTreasury, busd, elephant, trunk, performancePool, rewardPool, secondaryPool
    let txs = [];
    let router = BANKROLL[BANKROLL.network].Router;
    try {

        //add trunk reward pool destinations
        txs.push(rewardPool.methods.updateDestination(BANKROLL[BANKROLL.network].ElephantStack['trunk'].stack).send())
        txs.push(performancePool.methods.updateDestination(BANKROLL[BANKROLL.network].TRUNKPerformanceDestination).send())
 
        //update reserve to pools / governance
        txs.push(rewardPool.methods.updateReserve(elephantReserve.options.address).send())
        txs.push(performancePool.methods.updateReserve(elephantReserve.options.address).send())
        txs.push(pegSupportTreasuryStrategy.methods.updateReserve(elephantReserve.options.address).send())
        txs.push(redemptionSupportStrategy.methods.updateRedeemData(redeemData.options.address).send())

        //add engine dependencies
        txs.push(flowEngine.methods.updateReserve(elephantReserve.options.address).send())
        txs.push(flowEngine.methods.updateFlowData(flowData.options.address).send())
        txs.push(flowEngine.methods.updateSponsorData(sponsorData.options.address).send())
        txs.push(flowEngine.methods.updateReferralData(referralData.options.address).send())
        txs.push(flowEngine.methods.updateRaffle(raffle.options.address).send())

        //router proxy (BwB)
        txs.push(routerProxy.methods.updateRaffle(raffle.options.address).send())
        txs.push(routerProxy.methods.updateReferralData(referralData.options.address).send())
        
        
        //add reserve dependencies
        txs.push(elephantReserve.methods.updateMintData(mintData.options.address).send())
        txs.push(elephantReserve.methods.updateRedeemData(redeemData.options.address).send())
        txs.push(elephantReserve.methods.updateRaffle(raffle.options.address).send())
        txs.push(raffle.methods.updateSponsorData(sponsorData.options.address).send())



        //-----------add elephant fee/reward exclusions
        txs.push(elephant.methods.excludeFromFee(elephantTreasury.options.address).send())
        txs.push(elephant.methods.excludeFromFee(pegSupportTreasuryStrategy.options.address).send())
        txs.push(elephant.methods.excludeFromFee(collateralToCoreBuybackStrategy.options.address).send())
        txs.push(elephant.methods.excludeFromFee(redemptionSupportStrategy.options.address).send())
        txs.push(elephant.methods.excludeFromFee(routerProxy.options.address).send())
        txs.push(elephant.methods.excludeFromReward(pegSupportTreasuryStrategy.options.address).send())
        txs.push(elephant.methods.excludeFromReward(collateralToCoreBuybackStrategy.options.address).send())
        txs.push(elephant.methods.excludeFromReward(redemptionSupportStrategy.options.address).send())
        txs.push(elephant.methods.excludeFromReward(routerProxy.options.address).send())

    } catch(e){
        console.error(e, "Failed during wire tx")
    }

    return txs
    
} 

async function wireFlowEngine() {
    
    let txs = [];
    let router = BANKROLL[BANKROLL.network].Router;
    try {

        //add engine dependencies
        txs.push(flowEngine.methods.updateReserve(elephantReserve.options.address).send())
        txs.push(flowEngine.methods.updateFlowData(flowData.options.address).send())
        txs.push(flowEngine.methods.updateSponsorData(sponsorData.options.address).send())
        txs.push(flowEngine.methods.updateReferralData(referralData.options.address).send())
        txs.push(flowEngine.methods.updateRaffle(raffle.options.address).send())
        txs.push(flowEngine.methods.updateOracle(oracle.options.address).send())

        //add to whitelists
        txs.push(elephantReserve.methods.addAddressToWhitelist(flowEngine.options.address).send())
        txs.push(trunkTreasury.methods.addAddressToWhitelist(flowEngine.options.address).send())
        txs.push(flowData.methods.addAddressToWhitelist(flowEngine.options.address).send())   
        txs.push(sponsorData.methods.addAddressToWhitelist(flowEngine.options.address).send())
        txs.push(raffle.methods.addAddressToWhitelist(flowEngine.options.address).send())

        

    } catch(e){
        console.error(e, "Failed during wire tx")
    }

    return txs
    
} 


async function wireRedemption(){
    let txs = [];

    try {

        txs.push(elephant.methods.excludeFromFee(redemptionSupportStrategy.options.address).send())
        txs.push(elephant.methods.excludeFromReward(redemptionSupportStrategy.options.address).send())
        txs.push(elephantTreasury.methods.addAddressToWhitelist(redemptionSupportStrategy.options.address).send())
        txs.push(busdPool.methods.addAddressToWhitelist(redemptionSupportStrategy.options.address).send())
        txs.push(redeemData.methods.addAddressToWhitelist(redemptionSupportStrategy.options.address).send())
        txs.push(redemptionSupportStrategy.methods.updateRedeemData(redeemData.options.address).send())
        txs.push(elephantReserve.methods.updateRedeemData(redeemData.options.address).send())
        txs.push(redeemData.methods.addAddressToWhitelist(elephantReserve.options.address).send())
        txs.push(redeemData.methods.addAddressToWhitelist(redemptionSupportStrategy.options.address).send())

    } catch(e){
        console.error(e, "Failed during wire tx")
    }

    return txs

} 


async function addWhitelists() {

    let txs = [];

    try {

        //add reserve to trunk; to mint
        txs.push(trunkWhitelist.methods.addAddressToWhitelist(elephantReserve.options.address).send())

        //mint tracking
        txs.push(mintData.methods.addAddressToWhitelist(elephantReserve.options.address).send())

        //add pools to reserve; to redeem
        txs.push(elephantReserve.methods.addAddressToWhitelist(rewardPool.options.address).send())
        txs.push(elephantReserve.methods.addAddressToWhitelist(performancePool.options.address).send())
        txs.push(elephantReserve.methods.addAddressToWhitelist(flowEngine.options.address).send())
        txs.push(elephantReserve.methods.addAddressToWhitelist(pegSupportTreasuryStrategy.options.address).send())
        

        //treasury access
        //pegSupportTreasuryStrategy, collateralToCoreBuybackStrategy, backedToCollateralPegStrategy
        txs.push(busdTreasury.methods.addAddressToWhitelist(collateralToCoreBuybackStrategy.options.address).send())
        txs.push(elephantTreasury.methods.addAddressToWhitelist(pegSupportTreasuryStrategy.options.address).send())
        txs.push(elephantTreasury.methods.addAddressToWhitelist(redemptionSupportStrategy.options.address).send())
        txs.push(trunkTreasury.methods.addAddressToWhitelist(elephantReserve.options.address).send())
        txs.push(trunkTreasury.methods.addAddressToWhitelist(flowEngine.options.address).send())
        txs.push(busdPool.methods.addAddressToWhitelist(redemptionSupportStrategy.options.address).send())  

        //whitelist flow engine
        txs.push(flowData.methods.addAddressToWhitelist(flowEngine.options.address).send())   
        txs.push(sponsorData.methods.addAddressToWhitelist(flowEngine.options.address).send())
        txs.push(sponsorData.methods.addAddressToWhitelist(raffle.options.address).send()) 
        txs.push(redeemData.methods.addAddressToWhitelist(elephantReserve.options.address).send())
        txs.push(redeemData.methods.addAddressToWhitelist(redemptionSupportStrategy.options.address).send())
        txs.push(raffle.methods.addAddressToWhitelist(elephantReserve.options.address).send())
        txs.push(raffle.methods.addAddressToWhitelist(flowEngine.options.address).send())
        txs.push(raffle.methods.addAddressToWhitelist(routerProxy.options.address).send())           
        
         
        
    } catch(e){
        console.error(e, "Failed during wire tx")
    }

    return txs
}

async function removeGovernanceWhitelists() {
    let txs = [];

    try {

        //add pools to reserve; to redeem
        txs.push(elephantReserve.methods.removeAddressFromWhitelist(rewardPool.options.address).send())
        txs.push(elephantReserve.methods.removeAddressFromWhitelist(performancePool.options.address).send())

        //treasury access
        //pegSupportTreasuryStrategy, collateralToCoreBuybackStrategy, backedToCollateralPegStrategy
        txs.push(busdTreasury.methods.removeAddressFromWhitelist(collateralToCoreBuybackStrategy.options.address).send())
        txs.push(elephantTreasury.methods.removeAddressFromWhitelist(pegSupportTreasuryStrategy.options.address).send()) 
        
    } catch(e){
        console.error(e, "Failed during wire tx")
    }

    return txs

}

async function getRevertReason(txHash){

    const tx = await web3.eth.getTransaction(txHash)
  
    var result = await web3.eth.call(tx, tx.blockNumber)
  
    result = result.startsWith('0x') ? result : `0x${result}`
  
    if (result && result.substr(138)) {
  
      const reason = web3.utils.toAscii(result.substr(138))
      console.log('Revert reason:', reason)
      return reason
  
    } else {
  
      console.log('Cannot get reason - No return value')
  
    }
  
  }


function convertEthToWei(e, unit = 1e18) {
    return toWei(e,unit)
    /*
    let web3js = getWeb3()
    if (unit == 1e18){
        return web3js.utils.toWei(e)
    } else {
        //return Math.floor(e * unit).toString()
        return toWei(e,unit)
    }*/
}

function toWei(etherInput, unit) {
    let web3js = getWeb3()
    const zero = web3js.utils.toBN('0');
    const negative1 = web3js.utils.toBN('-1');
    var ether = etherInput.toString(); // eslint-disable-line
    const base = padNum(unit);
    const baseLength = base.length - 1 || 1;
  
    // Is it negative?
    var negative = (ether.substring(0, 1) === '-'); // eslint-disable-line
    if (negative) {
      ether = ether.substring(1);
    }
  
    if (ether === '.') { throw new Error(`[ethjs-unit] while converting number ${etherInput} to wei, invalid value`); }
  
    // Split it into a whole and fractional part
    var comps = ether.split('.'); // eslint-disable-line
    if (comps.length > 2) { throw new Error(`[ethjs-unit] while converting number ${etherInput} to wei,  too many decimal points`); }
  
    var whole = comps[0], fraction = comps[1]; // eslint-disable-line
  
    if (!whole) { whole = '0'; }
    if (!fraction) { fraction = '0'; }
    if (fraction.length > baseLength) { throw new Error(`[ethjs-unit] while converting number ${etherInput} to wei, too many decimal places`); }
  
    while (fraction.length < baseLength) {
      fraction += '0';
    }
  
    whole = web3js.utils.toBN(whole);
    fraction = web3js.utils.toBN(fraction);
    let baseMul = web3js.utils.toBN(base);
    var wei = whole.mul(baseMul).add(fraction); // eslint-disable-line
  
    if (negative) {
      wei = wei.mul(negative1);
    }
  
    return wei.toString();
  }

function convertWeiToEth(e, unit = 1e18) {
    return e / unit 
}


function resolveInputAndBalance(input = 0, balance = 0, unit = 1e18){
    let web3js = getWeb3()
    balance = web3js.utils.toBN(balance)
    input = convertEthToWei(input, unit)
    input = web3js.utils.toBN(input)
    let amount = web3js.utils.BN.min(input, balance)
    return amount
    //return amount.eq(web3js.utils.toBN(0)) ? amount :  amount.sub( web3js.utils.toBN(1)) //lets leave dust
}

async function resolveMaximum(tokenAddress, address, unit = 1e18){
    let web3js = getWeb3()
    let options = {from: address}
    let token = new web3js.eth.Contract(ABI_VLT, tokenAddress, options)
    let balance = web3js.utils.toBN(await token.methods.balanceOf(address).call())
    balance = (balance.gt(web3js.utils.toBN(0))) ? balance.sub(web3js.utils.toBN(1)) : balance;

    return convertWeiToEth(balance, unit);


}

async function maxInput(selector, tokenAddress, address, unit = 1e18) {
    let amount = await resolveMaximum(tokenAddress, address, unit)
    $(selector).val(amount)
    return false;
}

function resolveInput(input, unit = 1e18){
    let web3js = getWeb3()
    input = web3js.utils.toBN(convertEthToWei(input, unit))
    return input.sub( web3js.utils.toBN(1)) //lets leave dust
}

function formatSun(sun) {
    let web3js = getWeb3()
    let value = numeral(web3js.utils.fromWei(padNum(sun))).format('0,0.000 a').toUpperCase()
    
    return (value.trim() == 'NAN') ?  formatSun(0) :  value
}

function formatSunX(sun, padding, unit = 1e18) {
    //let padded = padNum(sun)
    //console.log('pad', sun, padded)
    let value = numeral(convertWeiToEth(sun, unit)).format(`0,${parseFloat(0).toFixed(padding)} a`).toUpperCase()
    return (value.trim() == 'NAN') ? formatSunX(0, padding) : value
}

function formatElephant(sun){
    let padding = 4
    let value = numeral(sun/1e9).format(`0,${parseFloat(0).toFixed(padding)} a`).toUpperCase()
    return (value.trim() == 'NAN') ? formatElephant(0) : value
}

async function getElephantPrice(amount) {
    let web3js = getWeb3()
    let result =  await router.methods.getAmountsOut(web3js.utils.toBN(amount), [BANKROLL[BANKROLL.network].Elephant, BANKROLL[BANKROLL.network].WBNB, BANKROLL[BANKROLL.network].BUSD]).call()
    return result[2]
}

async function toElephantPrice(amount) {
    let web3js = getWeb3()
    let result =  await router.methods.getAmountsOut(web3js.utils.toBN(amount), [BANKROLL[BANKROLL.network].BUSD, BANKROLL[BANKROLL.network].WBNB, BANKROLL[BANKROLL.network].Elephant]).call()
    return result[2]
}

async function getWBNBPrice(amount) {
    let web3js = getWeb3()
    let result =  await router.methods.getAmountsOut(web3js.utils.toBN(amount), [BANKROLL[BANKROLL.network].WBNB, BANKROLL[BANKROLL.network].BUSD]).call()
    return result[1]
}

function shortId(str, size) {
    return str.substr(0, size) + '...' + str.substr(str.length - size, str.length);
}


const ELEPHANTWBNBLP = '0x1CEa83EC5E48D9157fCAe27a19807BeF79195Ce1'
const ELEPHANTBUSDLP = '0x647bc907d520C3f63bE38d01DBd979f5606beC48'
const ELEPHANTTOKEN = '0xE283D0e3B8c102BAdF5E8166B73E02D96d92F688'
const TRUNKTOKEN = '0xdd325C38b12903B727D16961e61333f4871A70E0'
const ELEPHANT_WBNB_LP = "0x1CEa83EC5E48D9157fCAe27a19807BeF79195Ce1"
const ELEPHANT_BUSD_LP = "0x647bc907d520C3f63bE38d01DBd979f5606beC48"
const TRUNK_BUSD_LP = "0xf15A72B15fC4CAeD6FaDB1ba7347f6CCD1E0Aede"
const BUSD_TREASURY = "0xCb5a02BB3a38e92E591d323d6824586608cE8cE4"

const lpContracts = [
  ELEPHANTTOKEN,
  TRUNKTOKEN
];
const lpAddresses = [
  ELEPHANTWBNBLP,
  ELEPHANTBUSDLP,
  TRUNK_BUSD_LP
];

let coins = {
  //token addresses
  ELEPHANT: "0xE283D0e3B8c102BAdF5E8166B73E02D96d92F688",
  TRUNK: "0xdd325C38b12903B727D16961e61333f4871A70E0",
  WBNB: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
  BUSD: "0xe9e7cea3dedca5984780bafc599bd69add087d56"
}

let busd_addresses = [
  ELEPHANT_BUSD_LP,
  TRUNK_BUSD_LP,
  BUSD_TREASURY,
]

/**
* TVLCALC
* = toUSD('WBNB', WBNB.balanceOf(ELEPHANT_WBNB_LP)) 
* + toUSD('BUSD', BUSD.balanceOf(ELEPHANT_BUSD_LP) + BUSD.balanceOf(TRUNK_BUSD_LP) + BUSD.balanceOf(BUSD_TREASURY))
* + toUSD('ELEPHANT', WBNB.totalSupply()) + toUSD('TRUNK', WBNB.totalSupply())
*/

async function tvl() {

  let sumTVL 

  let wbnb_price = await getWBNBPrice(1e18) //coingeckoPrice('wbnb')
  //let busd_price = await coingeckoPrice('busd')
  let elephant_price = await getElephantPrice(1e9)

  //ELEPHANT
  let elephant_supply = parseInt(await elephant.methods.totalSupply().call())
  let elephant_bal =   elephant_price * elephant_supply / 1e9    
    
  //BNB
  let wbnb_total = parseInt(await wbnb.methods.balanceOf(ELEPHANT_WBNB_LP).call())
  let wbnb_bal = wbnb_total * wbnb_price / 1e18

  //TRUNK
  let trunk_bal = parseInt(await trunk.methods.totalSupply().call())
  let farmStats =  await vault.methods.getInfo().call()
  trunk_bal += parseInt(farmStats['_current_balance']);

  //BUSD
  let busd_bal = 0
  for (let address of busd_addresses) {
    busd_bal += parseInt(await busd.methods.balanceOf(address).call()) // * busd_price
  }

  //SUM
  sumTVL = busd_bal + elephant_bal + wbnb_bal + trunk_bal

  return sumTVL;
}




function formatTxUrl(hash) {
    let domain = 'bscscan.com'

    if (BANKROLL.network == 'rinkeby') {
        domain = 'rinkeby.etherscan.io'
    }

    return `https://${domain}/tx/${hash}`
}


async function ethBalance() {
    if (window.web3) {
        return await web3.eth.getBalance(window.def)
    }

    return 0
}

async function getDefaultAddress() {
    if (window.ethDefaultAddress) {
        return window.ethDefaultAddress
    }

    return null
}

async function connectWalletOld() {
    // Modern dapp browsers...

    window.web3 = null;

    if (window.ethereum) {
        window.web3 = new Web3(ethereum);
        try {
            // Request account access if needed
            await ethereum.enable();
        } catch (error) {
            // User denied account access...
            console.error('user denied access', error)
            //we should exit
            return
        }
    }
    // Legacy dapp browsers...
    else if (window.web3) {
        window.web3 = new Web3(web3.currentProvider);
    }
    // Non-dapp browsers...
    else {
        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
        return
    }


    //If we get to this point lets spin everything up    
    await networkReady()
    window.ethDefaultAddress = (await window.web3.eth.getAccounts())[0]

    let event

    if (BANKROLL.network == 'BSC'){
        //Init the default contracts
        await initContracts()

        event = new Event("wallet-connected", {bubbles: true});
        window.dispatchEvent(event);
        $('#wallet-connect').text('CONNECTED')
    } else {
        event = new Event("wallet-wrong-network", {bubbles: true});
        window.dispatchEvent(event);
    }
}

async function coingeckoPrice(id){
    let result = null
    let retries = 0 

    if (id == 'busd'){
        return 1
    } else {
        while (retries < 3) {
            try {
                result = (await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${id}&vs_currencies=usd`, {timeout: 5000})).data
                break
            } catch(e){
                console.error(e)
                await timeout(1000)
                retries++
                continue
            }
        }

        return (result != null) ? result[id]['usd'] : null
    }
}

/**
 * Setup the orchestra
 */
function init() {

    try {

        Web3Modal = window.Web3Modal.default;
 WalletConnectProvider = window.WalletConnectProvider.default;
 evmChains = window.evmChains;


        console.log("Initializing example");
        console.log("WalletConnectProvider is", WalletConnectProvider);
        console.log("window.web3 is", window.web3, "window.ethereum is", window.ethereum, "window.BinanceChain is", window.BinanceChain);
    
        // Tell Web3modal what providers we have available.
        // Built-in web browser provider (only one can exist as a time)
        // like MetaMask, Brave or Opera is added automatically by Web3modal
        const providerOptions = {
        binancechainwallet: {
            package: true
        },  
        walletconnect: {
            package: WalletConnectProvider,
            options: {
                bridge: "https://bridge.walletconnect.org",
                rpc: {
                    56: "https://bsc-dataseed.binance.org"
                },
                network: "binance",
                chainId: 56
            },
            
        },
        walletlink: {
            package: CoinbaseWalletSDK, // Required
            options: {
                rpc: {
                    56: "https://bsc-dataseed.binance.org"
                },
                network: "binance",
                chainId: 56
            }
        },
        injected: {
            package: null   
        }
        
        };
    
        web3Modal = new Web3Modal({
        theme: "dark",  
        cacheProvider: true, // optional
        providerOptions, // required
        disableInjectedProvider: false, // optional. For MetaMask / Brave / Opera.
        });
    
        console.log("Web3Modal instance is", web3Modal);

        event = new Event("wallet-initialized", {bubbles: true});
        window.dispatchEvent(event);
    } catch (error){
        console.log(error)
    }

  }

async function connectReadOnly() {

    window.web3 = new Web3(new Web3.providers.HttpProvider('https://bsc-dataseed.binance.org'))
    await networkReady()
    await initContracts()
}


async function showWalletPicker() {
    `
    <button class="" width="100%" id="wallet-connect-metamask" scale="md" style="justify-content: space-between;"><div color="primary" class="">Metamask</div><svg viewBox="0 0 96 96" width="32px" color="text" xmlns="http://www.w3.org/2000/svg" class="sc-bdfBwQ lkvAzg"><circle cx="48" cy="48" r="48" fill="white"></circle><path d="M77.7602 16.9155L51.9419 36.0497L56.7382 24.7733L77.7602 16.9155Z" fill="#E17726"></path><path d="M18.2656 16.9155L43.8288 36.2283L39.2622 24.7733L18.2656 16.9155Z" fill="#E27625"></path><path d="M68.4736 61.2808L61.6108 71.7918L76.3059 75.8482L80.4899 61.5104L68.4736 61.2808Z" fill="#E27625"></path><path d="M15.5356 61.5104L19.6941 75.8482L34.3892 71.7918L27.5519 61.2808L15.5356 61.5104Z" fill="#E27625"></path><path d="M33.5984 43.5251L29.491 49.699L44.0584 50.3624L43.5482 34.6724L33.5984 43.5251Z" fill="#E27625"></path><path d="M62.4274 43.525L52.2991 34.4937L51.9419 50.3622L66.5094 49.6989L62.4274 43.525Z" fill="#E27625"></path><path d="M34.3892 71.7922L43.1654 67.5316L35.6137 61.6128L34.3892 71.7922Z" fill="#E27625"></path><path d="M52.8345 67.5316L61.6107 71.7922L60.3861 61.6128L52.8345 67.5316Z" fill="#E27625"></path><path d="M61.6107 71.7923L52.8345 67.5317L53.5233 73.2465L53.4468 75.6446L61.6107 71.7923Z" fill="#D5BFB2"></path><path d="M34.3892 71.7923L42.5531 75.6446L42.502 73.2465L43.1654 67.5317L34.3892 71.7923Z" fill="#D5BFB2"></path><path d="M42.7062 57.8369L35.4097 55.6939L40.5631 53.3213L42.7062 57.8369Z" fill="#233447"></path><path d="M53.2937 57.8369L55.4367 53.3213L60.6412 55.6939L53.2937 57.8369Z" fill="#233447"></path><path d="M34.3893 71.7918L35.6649 61.2808L27.552 61.5104L34.3893 71.7918Z" fill="#CC6228"></path><path d="M60.3352 61.2808L61.6108 71.7918L68.4736 61.5104L60.3352 61.2808Z" fill="#CC6228"></path><path d="M66.5094 49.6987L51.9419 50.362L53.294 57.8371L55.4371 53.3215L60.6416 55.6941L66.5094 49.6987Z" fill="#CC6228"></path><path d="M35.4098 55.6941L40.5633 53.3215L42.7063 57.8371L44.0584 50.362L29.491 49.6987L35.4098 55.6941Z" fill="#CC6228"></path><path d="M29.491 49.6987L35.6139 61.6129L35.4098 55.6941L29.491 49.6987Z" fill="#E27525"></path><path d="M60.6414 55.6941L60.3862 61.6129L66.5092 49.6987L60.6414 55.6941Z" fill="#E27525"></path><path d="M44.0584 50.3618L42.7063 57.8369L44.4156 66.6641L44.7728 55.0305L44.0584 50.3618Z" fill="#E27525"></path><path d="M51.9415 50.3618L51.2527 55.005L51.5843 66.6641L53.2937 57.8369L51.9415 50.3618Z" fill="#E27525"></path><path d="M53.2938 57.8374L51.5845 66.6646L52.8346 67.532L60.3862 61.6132L60.6413 55.6943L53.2938 57.8374Z" fill="#F5841F"></path><path d="M35.4097 55.6943L35.6138 61.6132L43.1654 67.532L44.4155 66.6646L42.7062 57.8374L35.4097 55.6943Z" fill="#F5841F"></path><path d="M53.4468 75.6443L53.5233 73.2462L52.8855 72.6849H43.1143L42.502 73.2462L42.5531 75.6443L34.3892 71.792L37.2465 74.1391L43.0378 78.1445H52.962L58.7533 74.1391L61.6107 71.792L53.4468 75.6443Z" fill="#C0AC9D"></path><path d="M52.8346 67.5315L51.5845 66.6641H44.4156L43.1655 67.5315L42.5022 73.2462L43.1145 72.6849H52.8857L53.5235 73.2462L52.8346 67.5315Z" fill="#161616"></path><path d="M78.8314 37.2998L80.9999 26.7377L77.7599 16.9155L52.8345 35.4119L62.4271 43.5247L75.9485 47.4791L78.9335 43.984L77.6323 43.04L79.7243 41.1521L78.1426 39.902L80.2091 38.3458L78.8314 37.2998Z" fill="#763E1A"></path><path d="M15 26.7377L17.194 37.2998L15.7909 38.3458L17.8574 39.902L16.2756 41.1521L18.3676 43.04L17.0665 43.984L20.0514 47.4791L33.5984 43.5247L43.1655 35.4119L18.2656 16.9155L15 26.7377Z" fill="#763E1A"></path><path d="M75.9487 47.4793L62.4272 43.5249L66.5092 49.6989L60.3862 61.613L68.4736 61.511H80.4898L75.9487 47.4793Z" fill="#F5841F"></path><path d="M33.5983 43.5249L20.0513 47.4793L15.5356 61.511H27.5519L35.6137 61.613L29.4908 49.6989L33.5983 43.5249Z" fill="#F5841F"></path><path d="M51.9415 50.3617L52.8344 35.4115L56.7378 24.7729H39.262L43.1653 35.4115L44.0583 50.3617L44.3899 55.0559L44.4154 66.664H51.5843L51.6099 55.0559L51.9415 50.3617Z" fill="#F5841F"></path></svg></button>
    <button class="" width="100%" id="wallet-connect-binance chain wallet" scale="md" style="justify-content: space-between;"><div color="primary" class="">Binance Chain Wallet</div><svg viewBox="0 0 32 32" width="32px" color="text" xmlns="http://www.w3.org/2000/svg" class="sc-bdfBwQ lkvAzg"><path d="M24 0H8C3.58172 0 0 3.58172 0 8V24C0 28.4183 3.58172 32 8 32H24C28.4183 32 32 28.4183 32 24V8C32 3.58172 28.4183 0 24 0Z" fill="#1E2026"></path><path d="M16.2857 4L9.97035 7.6761L12.2922 9.03415L16.2857 6.7161L20.2792 9.03415L22.6011 7.6761L16.2857 4Z" fill="#F0B90B"></path><path d="M20.2792 10.9541L22.6011 12.3122V15.0283L18.6075 17.3463V21.9824L16.2857 23.3405L13.9639 21.9824V17.3463L9.97035 15.0283V12.3122L12.2922 10.9541L16.2857 13.2722L20.2792 10.9541Z" fill="#F0B90B"></path><path d="M22.6011 16.9483V19.6644L20.2792 21.0224V18.3063L22.6011 16.9483Z" fill="#F0B90B"></path><path d="M20.2561 22.9424L24.2496 20.6244V15.9883L26.5714 14.6302V21.9824L20.2561 25.6585V22.9424Z" fill="#F0B90B"></path><path d="M24.2496 11.3522L21.9278 9.99414L24.2496 8.63609L26.5714 9.99414V12.7102L24.2496 14.0683V11.3522Z" fill="#F0B90B"></path><path d="M13.9639 26.642V23.9259L16.2857 25.2839L18.6075 23.9259V26.642L16.2857 28L13.9639 26.642Z" fill="#F0B90B"></path><path d="M12.2922 21.0224L9.97035 19.6644V16.9483L12.2922 18.3063V21.0224Z" fill="#F0B90B"></path><path d="M16.2857 11.3522L13.9639 9.99414L16.2857 8.63609L18.6075 9.99414L16.2857 11.3522Z" fill="#F0B90B"></path><path d="M10.6437 9.99414L8.32183 11.3522V14.0683L6 12.7102V9.99414L8.32183 8.63609L10.6437 9.99414Z" fill="#F0B90B"></path><path d="M6 14.6302L8.32183 15.9883V20.6244L12.3154 22.9424V25.6585L6 21.9824V14.6302Z" fill="#F0B90B"></path></svg></button>
    
    `
}

async function connectWallet(connectid){
    
    //If the provider is set we are disconnecting; forget the connection
    if (provider != null) {

        if(!_.isUndefined(provider.close)) {
            await provider.close();
        
           
        }

        // If the cached provider is not cleared,
        // WalletConnect will default to the existing session
        // and does not allow to re-scan the QR code with a new wallet.
        // Depending on your use case you may want or want not his behavir.
        await web3Modal.clearCachedProvider();
        provider = null;

        location.reload()

    }   
    
    else {
    

        console.log("Opening a dialog", web3Modal);
        try {
            provider = await web3Modal.connect();
        } catch(e) {
            console.log("Could not get a wallet connection", e);
            provider = null
        }

        //try fallback to an embed just for better usability across compliant web3 browsers
        if (provider == null){
            provider = window.ethereum || window.BinanceChain 
        }

        if (provider) {
            try {
                if(provider['chainId'] != 56  && provider['chainId'] != '0x38'){
                    await switchNetwork(provider)
                }
            } catch (error) {
                event = new Event("wallet-wrong-network", {bubbles: true});
                window.dispatchEvent(event);
                return 
            }
            window.web3 = new Web3(provider);
            try {
                // Request account access if needed
                await provider.enable();
            } catch (error) {
                // User denied account access...
                console.error('user denied access', error)
                showAlert('ACCESS DENIED', 'The user denied access from the wallet or there is an issue detecting the provider.')
                return
            }
        }  else {
            showAlert('WALLET NOT FOUND', 'Could not find a suitable wallet. Please use Metamask, Binance Wallet, or a WalletConnect compatible solution')
            return
        }
        


        //If we get to this point lets spin everything up    
        await networkReady()
        window.ethDefaultAddress = (await window.web3.eth.getAccounts())[0]

        let event

        if (BANKROLL.network == 'BSC'){
            //Init the default contracts
            await initContracts()

            event = new Event("wallet-connected", {bubbles: true});
            window.dispatchEvent(event);
            $('#wallet-connect').text('DISCONNECT')
        } else {
            event = new Event("wallet-wrong-network", {bubbles: true});
            window.dispatchEvent(event);
        }
    }

}

async function switchNetwork(provider) {
    try {
      await provider.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId:'0x38' }],
      })
    } catch (switchError) {
      // This error code indicates that the chain has not been added to MetaMask.
      if (switchError.code === 4902) {
        try {
          await library.provider.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: toHex(137),
                chainName: "BSC",
                rpcUrls: ["https://bsc-dataseed.binance.org/"],
                blockExplorerUrls: ["https://bscscan.com/"],
              },
            ],
          });
        } catch (addError) {
          throw addError;
        }
      }
    }
  }

function EventFetcher() {
    this.shouldCancel = false
}

EventFetcher.prototype.getChunks = async function(contract, eventName, chunkFrom, chunkTo, filter) {
    const options = {
        filter: filter,
        fromBlock: chunkFrom,
        toBlock: chunkTo,
    }
    return await contract.getPastEvents(eventName, options)
}

EventFetcher.prototype.cancel = function() {
    this.shouldCancel = true
}

EventFetcher.prototype.fetch = async function(options) {
    const contract = options.contract
    const eventName = options.eventName
    const filter = options.filter
    const fromBlock = options.fromBlock
    const toBlock = options.toBlock
    const progressCallback = options.progressCallback
    const chunkSize = options.chunkSize || 100

    const blocksToCheck = toBlock - fromBlock
    const numChunks = Math.ceil(blocksToCheck / chunkSize)
    let events = []
    for (let chunk = 0; chunk < numChunks; chunk++) {
        if (this.shouldCancel) {
            // client not interested in results anymore. Just cease to exist.
            // console.log(`Fetcher for contract ${contract.address} cancelled at chunk ${chunk} of ${numChunks}`)
            this.shouldCancel = false;
            return []
        }
        const chunkFrom = fromBlock + (chunk * chunkSize)
        const chunkTo = Math.min((chunkFrom + chunkSize), toBlock)
        // console.log(`Getting chunk ${chunk} from ${chunkFrom} to ${chunkTo}`)
        let eventsChunk = await this.getChunks(contract, eventName, chunkFrom, chunkTo, filter)
        if (progressCallback) {
            const percentage = Math.floor(100 * (chunk + 1) / numChunks)
            const callbackInfo = {
                stepsComplete: chunk+1,
                totalSteps: numChunks,
                percentageComplete: percentage,
                stepResults: eventsChunk,
                stepFromBlock: chunkFrom,
                stepToBlock: chunkTo,
            }
            progressCallback(callbackInfo)
        }
        events = events.concat(eventsChunk)
    }
    return events
}


$(document).ready(async () => {
    window.addEventListener('load', async () => {
        init()
    })
})


const refreshInterval = 250

const APPROVE_MAX = '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff' //1.157920892373162e+77

var currentAddress
var network
var tronLinkUrlPrefix
var bnkr
var bnkrMint
var buddy
var swapx
var reader
var bnkr_logo = '/img/farm/TNo59Khpq46FGf4sD7XSWYFNfYfbc8CqNK.png'
var bnkrx_logo = '/img/farm/TKSLNVrDjb7xCiAySZvjXB9SxxVFieZA7C.png'
var waiting = 0
var prices
var trunkMax

var farmDebug = false

var players = {}

let closed_assets = []

let assets = [
    { asset: '0xe9e7cea3dedca5984780bafc599bd69add087d56', icon: 'busd', url: 'https://pancakeswap.finance/swap?inputCurrency=BNB&chainId=56&outputCurrency=0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56', padding: 3}, //BUSD 0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56
    { asset: '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c', icon: 'btc-logo', url: 'https://pancakeswap.finance/swap?inputCurrency=BNB&chainId=56&outputCurrency=0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c', padding: 8}, //BTCB 0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c
    { asset: '0x2170Ed0880ac9A755fd29B2688956BD959F933F8', icon: 'eth', url: 'https://pancakeswap.finance/swap?inputCurrency=BNB&chainId=56&outputCurrency=0x2170Ed0880ac9A755fd29B2688956BD959F933F8', padding: 7}, //ETH 0x2170Ed0880ac9A755fd29B2688956BD959F933F8
    { asset: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', icon: 'bnb', url: 'https://pancakeswap.finance/swap?inputCurrency=BNB&chainId=56&outputCurrency=0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', padding: 4}, //WBNB 0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c
    { asset: '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82', icon: 'pancakeswap-token-logo', url: 'https://pancakeswap.finance/swap?inputCurrency=BNB&chainId=56&outputCurrency=0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82', padding: 3}, //CAKE 0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82
    { asset: '0x55d398326f99059fF775485246999027B3197955', icon: 'usdt', url: 'https://pancakeswap.finance/swap?inputCurrency=BNB&chainId=56&outputCurrency=0x55d398326f99059fF775485246999027B3197955', padding: 3}, //USDT 0x55d398326f99059fF775485246999027B3197955
    { asset: '0x1D2F0da169ceB9fC7B3144628dB156f3F6c60dBE', icon: 'xrp', url: 'https://pancakeswap.finance/swap?inputCurrency=BNB&chainId=56&outputCurrency=0x1D2F0da169ceB9fC7B3144628dB156f3F6c60dBE', padding: 3}, //XRP 0x1D2F0da169ceB9fC7B3144628dB156f3F6c60dBE
    { asset: '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d', icon: 'usdc', url: 'https://pancakeswap.finance/swap?inputCurrency=BNB&chainId=56&outputCurrency=0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d', padding: 3}, //USDC 0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d
    { asset: '0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3', icon: 'dai', url: 'https://pancakeswap.finance/swap?inputCurrency=BNB&chainId=56&outputCurrency=0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3', padding: 3}, //DAI 0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3
    { asset: '0xbA2aE424d960c26247Dd6c32edC70B295c744C43', icon: 'doge', url: 'https://pancakeswap.finance/swap?inputCurrency=BNB&chainId=56&outputCurrency=0xbA2aE424d960c26247Dd6c32edC70B295c744C43', padding: 8, unit: 1e8}, //DOGE 0xbA2aE424d960c26247Dd6c32edC70B295c744C43
    { asset: '0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47', icon: 'ada', url: 'https://pancakeswap.finance/swap?inputCurrency=BNB&chainId=56&outputCurrency=0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47', padding: 4}, //ADA 0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47
    { asset: '0xCC42724C6683B7E57334c4E856f4c9965ED682bD', icon: 'matic', url: 'https://pancakeswap.finance/swap?inputCurrency=BNB&chainId=56&outputCurrency=0xCC42724C6683B7E57334c4E856f4c9965ED682bD', padding: 3} //MATIC 0xCC42724C6683B7E57334c4E856f4c9965ED682bD
]

let farms = {}

$(document).ready(async () => {
    window.addEventListener('wallet-connected', async () => {
        main();
    })

    window.addEventListener('wallet-initialized', async () => {
        //Auto Connect
        
        if (web3Modal.cachedProvider){
            connectWallet();
        }
    
    })

    window.addEventListener('wallet-wrong-network', async () => {
        showAlert('WRONG NETWORK', 'ELEPHANT.MONEY is built for the Binance Smart Chain (BSC); Network ID 56')
    })
})

async function main() {

    if (!(window.ethDefaultAddress)) {
        waiting += 1;
        console.log('waiting', waiting)
        if (waiting == 50) {
            return
        }
        console.error('Could not connect to Metamask.')
        setTimeout(main, 500);
        return;
    } else {

        currentAddress = window.ethDefaultAddress

        userTag(currentAddress)
        console.log('current address', currentAddress)

        //First UI render
        try {
            await mainLoop()
        } catch (e) {
            console.error(e)
            showAlert('ERROR LOADING!!!', 'We are having difficulty loading the onchain data.')
        } finally {
            closeLoading()
        }
       
        // Schedule loops
        setInterval(watchSelectedWallet, 2 * 1000)
        setInterval(showUserStats, 60 * 5 * 1000)
        setInterval(mainLoop, 60 * 5 * 1000) 

    }

}

async function initAssets() {

    for (i = 0; i < assets.length; i++) {

        //skip over retired contracts
        if (closed_assets.includes(assets[i].asset)) {
            continue;
        }

        try {
            await loadFarm(assets[i])
        } catch (error) {
            setTimeout(initAssets, 5000)
            return
        }
        

    }
    $('#load-symbol').html('&nbsp;')
}

async function loadFarm(asset) {
    let web3js = getWeb3()
    let user =  {}

    let options = {from: currentAddress}

    asset.unit = (asset.unit) ? asset.unit : 1e18
    asset.token = new web3js.eth.Contract(ABI_VLT, asset.asset, options)
    asset.symbol = (await asset.token.methods.symbol().call()).toUpperCase()
    $('#load-symbol').text(`Loading ${asset.symbol} data...`)
    asset.farm = await vault.methods.getFarm(asset.asset).call()
    asset.user = await vault.methods.getUser(asset.asset, currentAddress).call()
    asset.decimals = await asset.token.methods.decimals().call()
    asset.bonus = asset.farm.bonusLevel
    asset.assetBalance = asset.farm.assetBalance
    asset.balance = asset.farm.balance
    asset.userAvailable = parseInt(await vault.methods.available(asset.asset, currentAddress).call())
    asset.userBalance = asset.user.balance * 2
    asset.apy = await farmEngine.methods.estimateAPR(asset.bonus).call()
    asset.closed = (closed_assets.includes(asset.asset)) ? 1 : 0

    user.tokenApproved = await isTokenApproved(asset.token, vault.options.address)
    user.trunkApproved = await isTokenApproved(trunk, vault.options.address)

    user.approved = user.tokenApproved && user.trunkApproved
    asset.userApproved = user.approved

    console.log('init load', asset.symbol)

    asset.title = `${asset.symbol} / TRUNK ${(asset['version'] != null) ? ` ${asset.version}` : ''}`
    asset.logo = `/img/logo/${asset.icon}.png`
    asset.baseLogo = `/img/logo/trunk-logo.png`
    asset.baseToken = 'TRUNK'
    asset.baseSymbol = 'TRUNK'
    farms[asset.asset] = asset

    return true
}


async function renderAssets() {

    let cards = []
    let retired = []
    for (i = 0; i < assets.length; i++) {
        let asset = assets[i]

        //skip over retired contracts
        if (closed_assets.includes(asset.asset)) {
            continue;
        }

        let card = `
        <div class="container col-12 col-xl-4 col-lg-4 col-md-4 mb-4">
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <p class="col-12 text-right pb-0 mb-0">${asset.bonus}X</p>
                    <div class="text-center col-12">
                        <h3 class="text-white">${asset.title}</h3>
                        <p class="text-white-50 col-12 mb-1">${(asset.userBalance) ? `<span class="text-success">${formatSun(asset.userAvailable)}</span> - <span class="text-white">${formatSun(asset.userBalance)}</span> TRUNK ` : `<span id="loading-${asset.asset}">${(asset.userApproved) ? `Ready`: '&nbsp;'}</span>`}</p>
                        <img src="${asset.logo}" width="100px" class="m-2"/>
                        <p class="col-12 mb-1"><span class="text-white">${formatSunX(asset.assetBalance, 3, asset.unit)}</span> ${asset.symbol} / <span class="text-white">${formatSun(asset.balance)}</span> TRUNK</p> 
                        <!--<h4><a href="${asset.url}" target="_blank">Get ${asset.symbol}</a></h4>-->
                        ${(asset.closed == 0) ? `<h2 class="text-success mb-2">${numeral(asset.apy / 1e18).format('0.000')} % APR</h2>` : `<h2 class="text-danger mb-2">Retired</h2>`}
                        
                        <p class="col-12 white">
                            <a class="btn btn-outline-semi-light btn-block default mb-0 mr-4"
                               onclick="showFarm('${asset.asset}');">SELECT</a>
                        </p>
                        <p class="text-white-50 col-12 mb-1"><a target="_blank" href="https://bscscan.com/token/${asset.asset}">${shortId(asset.asset, 5)}</a> - <a href="${asset.url}" target="_blank">buy</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div> 
        `
        if (asset.closed == 0) {
            cards.push(card)
        } else {
            retired.push(card)
        }

    }
    $('#farm-retired').html(retired.join('\n'))
    $('#farm-cards').html(cards.join('\n'))

}

async function isTokenApproved(token, address) {
    let web3js = getWeb3()
    let allowance = web3js.utils.toBN(await token.methods.allowance(currentAddress, address).call());
    return allowance.gt(web3js.utils.toBN(0))

}
async function approveToken(token, address, approveTRUNK = false) {
    let web3js = getWeb3()

    let amount = web3js.utils.toBN(APPROVE_MAX)
    token.methods.approve(address, amount).send()
        .on('transactionHash', (tx) => showNote('Approving...', tx))
        .on('receipt', async (receipt) => {
            if (approveTRUNK){
                await approveToken(trunk, vault.options.address)
            } else {
                hideAlert()
            }
            showNote('Approval complete', receipt.transactionHash, true)
        })
        .on('error', (e) => txError(e))
        
}

async function revokeToken(token, address, revokeTRUNK = false) {

    token.methods.approve(address, 0).send()
        .on('transactionHash', (tx) => showNote('Revoking...', tx))
        .on('receipt', async (receipt) => {
            if (revokeTRUNK){
                await revokeToken(trunk, vault.options.address)
            } else {
                hideAlert()
            }
            showNote('Revoke complete', receipt.transactionHash)
            })
        .on('error', (e) => txError(e))
}

async function approveDepot() {
    let isBUSD = await isTokenApproved(busd, depot.options.address)
    
    if (!isBUSD) {
        await approveToken(busd, depot.options.address)
    }

    hideDepot()

    showAlert('Approval Processing', 'Please approve tokens to activate the depot. Window will close when complete...')
}

async function revokeDepot() {
    let isBUSD = await isTokenApproved(busd, depot.options.address)
    
    if (isBUSD) {
        await revokeToken(busd, depot.options.address)
    }

    hideDepot()

    showAlert('Revoke Processing', 'Please revoke tokens to deactivate the Depot. Window will close when complete...')
}

async function revokeFarm(farmAddress) {
    let asset = farms[farmAddress]

    let isAsset = await isTokenApproved(asset.token, vault.options.address)
    let  isTRUNK = await isTokenApproved(trunk, vault.options.address)

    if (isAsset) {
        await revokeToken(asset.token, vault.options.address, true)
    } else if (isTRUNK) {
        await revokeToken(trunk, vault.options.address)
    }

    hideFarm()

    showAlert('Revoke Processing', 'Please revoke tokens to deactivate the farm. Window will close when complete...')
}

async function approveFarm(farmAddress) {
    let asset = farms[farmAddress]

    let isAsset = await isTokenApproved(asset.token, vault.options.address)
    let  isTRUNK = await isTokenApproved(trunk, vault.options.address)

    if (!isAsset) {
        await approveToken(asset.token, vault.options.address, !isTRUNK)
    } else if (!isTRUNK) {
        await approveToken(trunk, vault.options.address)
    }

    hideFarm()

    showAlert('Approval Processing', 'Please approve tokens to activate the farm. Window will close when complete...')

}

async function showDepot() {

    /*dev Tracks summary information for users across all farms
    struct DepotUser {
        bool exists; //has the user joined a farm
        uint deposits; //total deposits
        uint deposit_base; //balance used to calculate yield 
        uint current_balance; //current TRUNK balance
        uint payouts;  //total yield payouts across all farms
        uint rewards; //partner rewards
        uint last_time; //last interaction
    }*/

    let user = {}
    let depotUser = await depot.methods.getUser(currentAddress).call()

    user.exists = depotUser['exists']
    user.deposits = depotUser['deposits']
    user.deposit_base = depotUser['deposit_base']
    user.current_balance = depotUser['current_balance']
    user.claimed = depotUser['payouts']
    user.rewards = depotUser['rewards']

    //user.last_time = (depotUser['last_time'] == 0) ? 'Never' : moment.unix(depotUser['last_time']).fromNow()
    user.last_time = (depotUser['last_time'] == 0) ? 'Never' : moment().diff(moment.unix(depotUser['last_time']), "days")
    user.last_time = (user.last_time == '0') ? 'Recent' : user.last_time 
   
    user.approved = await isTokenApproved(busd, depot.options.address)

    user.divs = await depot.methods.available(currentAddress).call()
           
   
    let tplBody = `
    <div id="topStatsContainer" class="row">
        <!-- <h4 class="col-12 text-center pb-2 mb-2"><a href="/trunk.html" target="_blank" class="mb-2">Get TRUNK</a></h4> -->
        <div class="container col-6 col-xl-4 col-lg-4 col-md-4  text-center">
            <div class="price-top-part">
                <i class="iconsmind-Coins large-icon"></i>
                <h5 class="mb-0 font-weight-semibold color-theme-1 mb-2">Available</h5>
                <p class="text-large mb-2 text-white">${formatSun(user.divs)}</p>
                <p class="text-muted text-small">TRUNK</p>
            </div>
        </div>

        <div class="container col-6 col-xl-4 col-lg-4 col-md-4  text-center">
            <div class="price-top-part">
                <i class="iconsmind-Astronaut  large-icon"></i>
                <h5 class="mb-0 font-weight-semibold color-theme-1 mb-2">Balance</h5>
                <p class="text-large mb-2 text-white">${formatSun(user.current_balance)}</p>
                <p class="text-muted text-small">TRUNK</p>
            </div>
        </div>

        <div class="container col-6 col-xl-4 col-lg-4 col-md-4  text-center">
            <div class="price-top-part">
                <i class="iconsmind-Coin  large-icon"></i>
                <h5 class="mb-0 font-weight-semibold color-theme-1 mb-2">Deposits</h5>
                <p class="text-large mb-2 text-white">${formatSun(user.deposits)}</p>
                <p class="text-muted text-small">BUSD</p>
            </div>
        </div>
        <div class="container col-6 col-xl-4 col-lg-4 col-md-4  text-center">
            <div class="price-top-part">
                <i class="iconsmind-Mine large-icon"></i>
                <h5 class="mb-0 font-weight-semibold color-theme-1 mb-2">Claimed</h5>
                <p class="text-large mb-2 text-white">${formatSun(user.claimed)}</p>
                <p class="text-muted text-small">TRUNK</p>
            </div>
        </div>
      
        <div class="container col-6 col-xl-4 col-lg-4 col-md-4  text-center">
            <div class="price-top-part">
                <i class="iconsmind-Calendar-4 large-icon"></i>
                <h5 class="mb-0 font-weight-semibold color-theme-1 mb-2">Last Tx</h5>
                <p class="text-large mb-2 text-white">${user.last_time}</p>
                <p class="text-muted text-small">DAYS AGO</p>
            </div>
        </div>

        <div class="container col-6 col-xl-4 col-lg-4 col-md-4  text-center">
            <div class="price-top-part">
                <i class="iconsmind-Handshake large-icon"></i>
                <h5 class="mb-0 font-weight-semibold color-theme-1 mb-2">Rewards</h5>
                <p class="text-large mb-2 text-white">${formatSun(user.rewards)}</p>
                <p class="text-muted text-small">TRUNK</p>
            </div>
        </div>

       
        <p class="col-12 white mb-3">
            ${(user.approved) ?
            `<a class="btn btn-outline-semi-light btn-block default mb-0 mr-4 "
            onclick="depositDepot();">DEPOSIT</a>
            <a class="btn btn-outline-semi-light btn-block default mb-4 mr-4"
                onclick="claimDepot();">CLAIM</a>
                <a class="btn btn-outline-semi-light btn-block default mb-0 mr-4"
                onclick="revokeDepot();">REVOKE</a>` :
            `<a id="approve-depot" class="btn btn-outline-semi-light btn-block default mb-0 mr-4"
                onclick="approveDepot();">APPROVE BUSD</a>`} 
        </p>
    </div>
    `

    let tplDialog = `
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Farmers' Depot</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                ${tplBody}
            </div>
            <div class="modal-footer text-center">
                <button type="button" class="btn btn-outline-semi-light default"
                        data-dismiss="modal">Close
                </button>
            </div>
        </div>
    </div>
    `

    $('#showDepot').html(tplDialog)
    $('#showDepot').modal()
}

async function showFarm(farmAddress) {
    let asset = farms[farmAddress]
    let farm = asset.farm
    let user = {}

    user.balance = asset.user['balance']
    user.assetBalance = asset.user['assetBalance']
    user.rewards = asset.user['rewards']
    user.claimed = asset.user['claimed']

   
    user.tokenApproved = await isTokenApproved(asset.token, vault.options.address)
    user.trunkApproved = await isTokenApproved(trunk, vault.options.address)
    
    user.approved = user.tokenApproved && user.trunkApproved

    user.divs = await vault.methods.available(asset.asset, currentAddress).call()
           
   
    let tplBody = `
    <div id="topStatsContainer" class="row">
        <h4 class="col-12 text-center pb-2 mb-2"><a href="/trunk.html" target="_blank" class="mb-2">Get TRUNK</a></h4>
        <div class="container col-6 col-xl-4 col-lg-4 col-md-4  text-center">
            <div class="price-top-part">
                <i class="iconsmind-Coins large-icon"></i>
                <h5 class="mb-0 font-weight-semibold color-theme-1 mb-2">Available</h5>
                <p class="text-large mb-2 text-white">${formatSun(user.divs)}</p>
                <p class="text-muted text-small">TRUNK</p>
            </div>
        </div>

        <div class="container col-6 col-xl-4 col-lg-4 col-md-4  text-center">
            <div class="price-top-part">
                <!--<i class="iconsmind-Astronaut  large-icon"></i>-->
                <img src="${asset.logo}" width="40px"/>
                <h5 class="mb-0 font-weight-semibold color-theme-1 mb-2">Balance</h5>
                <p class="text-large mb-2 text-white">${formatSunX(user.assetBalance, (asset.padding) ? asset.padding : 4, asset.unit ? asset.unit : 1e18)}</p>
                <p class="text-muted text-small">${asset.symbol}</p>
            </div>
        </div>

        <div class="container col-6 col-xl-4 col-lg-4 col-md-4  text-center">
            <div class="price-top-part">
                <!--<i class="iconsmind-Astronaut  large-icon"></i>-->
                <img src="${asset.baseLogo}" width="40px"/>
                <h5 class="mb-0 font-weight-semibold color-theme-1 mb-2">Balance</h5>
                <p class="text-large mb-2 text-white">${formatSun(user.balance)}</p>
                <p class="text-muted text-small">TRUNK</p>
            </div>
        </div>
        <div class="container col-6 col-xl-4 col-lg-4 col-md-4  text-center">
            <div class="price-top-part">
                <i class="iconsmind-Mine large-icon"></i>
                <h5 class="mb-0 font-weight-semibold color-theme-1 mb-2">Claimed</h5>
                <p class="text-large mb-2 text-white">${formatSun(user.claimed)}</p>
                <p class="text-muted text-small">TRUNK</p>
            </div>
        </div>
      
        <div class="container col-6 col-xl-4 col-lg-4 col-md-4  text-center">
            <div class="price-top-part">
                <i class="iconsmind-Gaugage large-icon"></i>
                <h5 class="mb-0 font-weight-semibold color-theme-1 mb-2">Return</h5>
                <p class="text-large mb-2 text-white">${numeral(asset.apy / 1e18).format('0.000')} %</p>
                <p class="text-muted text-small">APR %</p>
            </div>
        </div>

        <div class="container col-6 col-xl-4 col-lg-4 col-md-4  text-center">
            <div class="price-top-part">
                <i class="iconsmind-Handshake large-icon"></i>
                <h5 class="mb-0 font-weight-semibold color-theme-1 mb-2">Rewards</h5>
                <p class="text-large mb-2 text-white">${formatSun(user.rewards)}</p>
                <p class="text-muted text-small">TRUNK</p>
            </div>
        </div>

        ${(asset.closed > 0) ? `<h4 class="col-12 text-danger text-center mb-2 mt-2">This pool is retired, please withdraw</h4>` : ''}
        <p class="col-12 white mb-3">
            ${(user.approved) ?
            `${(asset.closed == 0) ? `<a class="btn btn-outline-semi-light btn-block default mb-0 mr-4 "
            onclick="depositFarm('${asset.asset}');">DEPOSIT</a>
            <a class="btn btn-outline-semi-light btn-block default mb-4 mr-4"
                onclick="claim('${asset.asset}');">CLAIM</a>
                ` : ''}
                <a class="btn btn-outline-semi-light btn-block default mb-0 mr-4"
                onclick="unfreezeFarm('${asset.asset}');">WITHDRAW</a>
                <a class="btn btn-outline-semi-light btn-block default mb-0 mr-4"
                onclick="revokeFarm('${asset.asset}');">REVOKE</a>` :
            (asset.closed == 0) ? `${(!user.tokenApproved) ? `<a id="approve-${farmAddress}" class="btn btn-outline-semi-light btn-block default mb-0 mr-4"
                onclick="approveFarm('${asset.asset}');">APPROVE ${asset.symbol}</a>` : ''}`  + `${(user.tokenApproved) ? `<a class="btn btn-outline-semi-light btn-block default mb-0 mr-4"
                onclick="revokeFarm('${asset.asset}');">REVOKE</a>` : '' }` : `<a class="btn btn-outline-semi-light btn-block default mb-0 mr-4"
                onclick="unfreezeFarm('${asset.asset}');">WITHDRAW</a>
                <a class="btn btn-outline-semi-light btn-block default mb-0 mr-4"
                onclick="revokeFarm('${asset.asset}');">REVOKE</a>`}
        </p>
    </div>
    `

    let tplDialog = `
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">${asset.title}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                ${tplBody}
            </div>
            <div class="modal-footer text-center">
                <button type="button" class="btn btn-outline-semi-light default"
                        data-dismiss="modal">Close
                </button>
            </div>
        </div>
    </div>
    `

    $('#showFarm').html(tplDialog)
    $('#showFarm').modal()
}

async function hideFarm() {
    $('#showFarm').modal('hide')
}

async function hideDepot() {
    $('#showDepot').modal('hide')
}

async function unfreezeFarm(asset) {
    hideFarm()

    var tpl = `
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Withdraw and Revoke</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <h3>Withdrawing from your farm?</h3>
                <p>This will withdraw the entire TVL from your farm. Do you want to continue?</p>
            </div>
            <div class="modal-footer text-center">
                <button type="button" class="btn btn-outline-semi-light default"
                        data-dismiss="modal" onclick="unfreeze('${asset}');">YES
                </button>
                <button type="button" class="btn btn-outline-semi-light default"
                        data-dismiss="modal">NO
                </button>
            </div>
        </div>
    </div>
    
    `
    $('#unfreezeFarm').html(tpl);
    $('#unfreezeFarm').modal();
}

async function depositDepot() {
    let web3js = getWeb3();
    hideDepot()

    var balance = (await busd.methods.balanceOf(currentAddress).call())
    var trunkBalance = (await trunk.methods.balanceOf(currentAddress).call())

    var tpl = `
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Deposit BUSD</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                    <form>
                        <div class="form-group">
                            <div class="row">
                                <div class="col-3 text-left">
                                    <label for="addAmount">Amount</label>
                                </div>
                                <div class="col-9 text-right">
                                    <label class="text-white">${formatSun(balance)}</label> BUSD &nbsp;<label class="text-white">${formatSun(trunkBalance)}</label> TRUNK
                                </div>
                            </div>
                            <input type="number" class="form-control" id="stakeAmount"
                                    aria-describedby="buyTrxHelp"
                                    placeholder="BUSD">
                            <small  class="form-text text-muted">Estimate <span class="notranslate" id="trunk-estimate"></span>
                            </small>
                        </div>
                        <p class="text-left">
                            <a class="btn btn-outline-semi-light default mb-0 mr-4"
                                 onclick="freezeDepot();">DEPOSIT</a>
                            <a class="text-underline" href="#" onclick="maxInput('#stakeAmount', '${busd.options.address}','${currentAddress}').then(async ()=> await trunkMax()); return false;">Max</a>
                        </p>
                    </form>
            </div>
            <div class="modal-footer text-center">
                <button type="button" class="btn btn-outline-semi-light default"
                        data-dismiss="modal">Close
                </button>
            </div>
        </div>
    </div>
    `
    $('#depositDepot').html(tpl)

    var buyAmountInp = $('#stakeAmount')
    var trunkEstimate = $('#trunk-estimate')

    var calcTokens = async (e) => {

        try {
            var amount = resolveInput(buyAmountInp.val().trim())
        
            
            console.log('calctokens', amount, amount.toString(16))

            amount =  web3js.utils.toBN(await depot.methods.estimateBackedAmount(amount).call())

            console.log('stake-amount-estimate', amount)
            trunkEstimate.html(`${approxStr} ${formatSun(amount)} TRUNK`)
            } catch (error) {
                trunkEstimate.html(`&nbsp;`)
        }
        

    }

    trunkMax = async () => await calcTokens()



    buyAmountInp.on("change paste keyup", _.debounce(calcTokens, 250))

    $('#depositDepot').modal()
}

async function depositFarm(farmAddress) {
    let web3js = getWeb3();
    hideFarm()
    var asset = farms[farmAddress]

    var balance = (await asset.token.methods.balanceOf(currentAddress).call())
    var trunkBalance = (await trunk.methods.balanceOf(currentAddress).call())

    var tpl = `
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Deposit ${asset.symbol} / TRUNK</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                    <form>
                        <div class="form-group">
                            <div class="row">
                                <div class="col-3 text-left">
                                    <label for="addAmount">Amount</label>
                                </div>
                                <div class="col-9 text-right">
                                    <label class="text-white">${formatSunX(balance, asset.padding ? asset.padding : 4, asset.unit ? asset.unit : 1e18)}</label> ${asset.symbol} &nbsp;<label class="text-white">${formatSun(trunkBalance)}</label> TRUNK
                                </div>
                            </div>
                            <input type="number" class="form-control" id="stakeAmount"
                                    aria-describedby="buyTrxHelp"
                                    placeholder="${asset.symbol}">
                            <small  class="form-text text-muted">Estimate <span class="notranslate" id="trunk-estimate"></span>
                            </small>
                        </div>
                        <p class="text-left">
                            <a class="btn btn-outline-semi-light default mb-0 mr-4"
                                 onclick="freeze('${asset.asset}');">DEPOSIT</a>
                            <a class="text-underline" href="#" onclick="maxInput('#stakeAmount', '${asset.asset}','${currentAddress}' ${(asset.unit) ? `,${asset.unit}`: ''}).then(async ()=> await trunkMax()); return false;">Max</a>
                        </p>
                    </form>
            </div>
            <div class="modal-footer text-center">
                <button type="button" class="btn btn-outline-semi-light default"
                        data-dismiss="modal">Close
                </button>
            </div>
        </div>
    </div>
    `
    $('#depositFarm').html(tpl)

    var buyAmountInp = $('#stakeAmount')
    var trunkEstimate = $('#trunk-estimate')

    var calcTokens = async (e) => {

        try {
            var amount = resolveInput(buyAmountInp.val().trim(), asset.unit)
        
            
            console.log('calctokens', amount, amount.toString(16))

            amount =  web3js.utils.toBN(await vault.methods.estimateBackedAmount(asset.asset, amount).call())

            console.log('stake-amount-estimate', amount)
            trunkEstimate.html(`${approxStr} ${formatSun(amount)} TRUNK is required to stake`)
            } catch (error) {
                trunkEstimate.html(`&nbsp;`)
        }
        

    }

    trunkMax = async () => await calcTokens()



    buyAmountInp.on("change paste keyup", _.debounce(calcTokens, 250))

    $('#depositFarm').modal()
}

function hideDepositFarm() {
    $('#depositFarm').modal('hide')
}

function hideDepositDepot() {
    $('#depositDepot').modal('hide')
}


async function  watchSelectedWallet() {
    if ((await window.web3.eth.getAccounts())[0] != currentAddress) {
        location.reload()
        return
    }
}


async function mainLoop() {
    await initAssets()
    await renderAssets()
    await showUserStats()
    await showStats()
    $('#load-symbol').html('&nbsp;')
} 

async function showWalletInfo() {

    let web3js = getWeb3()

    try {
        $('#network').text(BANKROLL.network)
        $('#walletAddress').text(`${shortId(currentAddress, 5)}`)

        $('#walletBalanceValue').text(formatSun(await web3js.eth.getBalance(currentAddress)))
    } catch (e) {
        console.error(e)
    }
}


async function showUserStats() {

    await showWalletInfo()

    try {
        let divs = 0

        for (i = 0; i < assets.length; i++) {
            let asset = assets[i]
            let divsT = 0
            
            //skip over retired contracts
            if (closed_assets.includes(asset.asset)) {
                continue;
            }

           
            try {
                
                //$('#load-symbol').text(`Loading ${asset.symbol} user data...`)

                divsT = (divsT) ? divsT : parseInt(await vault.methods.available(asset.asset, currentAddress).call())
    
                
            } catch (e) {
                console.warn('user fail', asset.asset, e.toString())
            }
            

            divs += divsT

        }

        let summary =  await vault.methods.getUserSummary(currentAddress).call()

        $('#user-divs').text(formatSunX(divs,6))
        $('#user-balance').text(formatSun(summary['current_balance']))
        $('#user-claimed').text(formatSun(summary['payouts']))
        $('#user-rewards').text(formatSun(summary['rewards']))
        $('#load-symbol').html('&nbsp;')

        console.log('user-divs', formatSunX(divs, 18))
        console.log('user-rewards', formatSunX(summary['rewards'], 18))
    } catch (e) {
        console.error(e)
    }

}

async function showStats() {


    let farmStats =  await vault.methods.getInfo().call()
    let collateralizationRatio = await elephantReserve.methods.collateralizationRatio().call()
    

    $('#total_users').text(numeral(farmStats['_total_users']).format('0,0 a'))
    $('#total_deposited').text(formatSun(farmStats['_total_deposited']))
    $('#current_balance').text(formatSun(farmStats['_current_balance']))
    $('#total_claimed').text(formatSun(farmStats['_total_claimed']))
    $('#total_rewards').text(formatSun(farmStats['_total_rewards']))
    $('#total_txs').text(numeral(farmStats['_total_txs']).format('0,0.000 a'))
    $('#collateral-ratio-lp').html(`${approxStr} ${numeral(collateralizationRatio / 1e18).format('0.000000')}`)

    console.log('total_claimed', formatSunX(farmStats['_total_claimed'], 6))
    console.log('total_rewards', formatSunX(farmStats['_total_rewards'], 8))


    /*--------- Depot ---------*/

    let depotStats =  await depot.methods.getInfo().call()

    $('#depot_total_users').text(numeral(depotStats['_total_users']).format('0,0 a'))
    $('#depot_total_deposited').text(formatSun(depotStats['_total_deposited']))
    $('#depot_current_balance').text(formatSun(depotStats['_current_balance']))
    $('#depot_total_claimed').text(formatSun(depotStats['_total_claimed']))
    $('#depot_total_rewards').text(formatSun(depotStats['_total_rewards']))
    $('#depot_total_txs').text(numeral(depotStats['_total_txs']).format('0,0.000 a'))

    
}

async function showNote(msg, tx, reload = false) {

    if (reload) {
        await mainLoop()
    }
    $.notify({
        message: `<a href="${formatTxUrl(tx)}" target="_blank">${msg} ${shortId(tx, 5)}</a>`
    }, {
        type: 'dark',
        delay: 2000,
        allow_dismiss: false
    })

}

async function showReceipt(tx) {
    await mainLoop()
    $('#txId').html(`<a href="${formatTxUrl(tx)}" target="_blank">${shortId(tx, 5)}</a>`)
    $('#txModal').modal()
}

async function txError(error) {
    var msg = error.message
    $('#txErrorId').text(msg)
    $('#txErrorModal').modal()
}

function showAlert(title, msg) {
    $('#alertTitle').text(title)
    $('#alertId').text(msg)
    $('#alertModal').modal()
}

function hideAlert() {
    $('#alertModal').modal('hide')
}

function showError(msg) {
    $('#errorId').text(msg)
    $('#errorModal').modal()
}

function shortId(str, size) {
    return str.substr(0, size) + '...' + str.substr(str.length - size, str.length);
}

/************ Chain Functions *******************/

async function freezeDepot() {
    let web3js = getWeb3()
    hideDepositDepot()

    let rawAmount = $('#stakeAmount').val().trim()
    let amount = Number.parseFloat(rawAmount)
    
    if (amount <= 0 || !isFinite(amount) || amount === '') {
        $('#invalidAmountModal').modal()
    } else {
        
        let balance = await busd.methods.balanceOf(currentAddress).call()
        amount = resolveInputAndBalance(rawAmount, balance)

        depot.methods.deposit(amount).send()
            .on('transactionHash', (tx) => showNote('Depositing...', tx))
            .on('receipt', (receipt) => showReceipt(receipt.transactionHash))
            .on('error', (e) => txError(e))
    }

    return false;
}

async function freeze(farmAddress) {
    let web3js = getWeb3()
    hideDepositFarm()

    let asset = farms[farmAddress]

    let rawAmount = $('#stakeAmount').val().trim()
    let amount = Number.parseFloat(rawAmount)
    
    if (amount <= 0 || !isFinite(amount) || amount === '') {
        $('#invalidAmountModal').modal()
    } else {
        
        let balance = await asset.token.methods.balanceOf(currentAddress).call()
        amount = resolveInputAndBalance(rawAmount, balance, asset.unit)

        

        let trunk_balance = web3js.utils.toBN(await trunk.methods.balanceOf(currentAddress).call())
        

        let amount_in_trunk = web3js.utils.toBN(await vault.methods.estimateBackedAmount(asset.asset, amount).call())

        if (amount_in_trunk.gt(trunk_balance)) {
            showAlert('LOW TRUNK BALANCE', `Make sure TRUNK is approved and you have a sufficient balance of ${formatSun(amount_in_trunk)} TRUNK`)
            return
        }
        
        $(`#loading-${asset.asset}`).text('Loading...')

        vault.methods.deposit(asset.asset, amount).send()
            .on('transactionHash', (tx) => showNote('Depositing...', tx))
            .on('receipt', (receipt) => showReceipt(receipt.transactionHash))
            .on('error', (e) => txError(e))
    }

    return false;
}

async function unfreeze(farmAddress) {
    let web3js = getWeb3()

    $('#unfreezeFarm').modal('hide')

    let user = await vault.methods.getUser(farmAddress, currentAddress).call()

    let balance = web3js.utils.toBN(user['balance'])

    if (balance.eq(web3js.utils.toBN(0))) {
        showAlert('NO BALANCE!!!', 'Slow down there buddy, you need to deposit first!')
        return
    }

    $(`#loading-${farmAddress}`).text('Loading...')

    vault.methods.withdraw(farmAddress).send()
        .on('transactionHash', (tx) => showNote('Withdrawing...', tx))
        .on('receipt', (receipt) => showReceipt(receipt.transactionHash))
        .on('error', (e) => txError(e))

    return false

}

async function claimDepot() {

    hideDepot()

    if (!(parseInt(await depot.methods.available(currentAddress).call()))) {
        showAlert('NO DIVS!!!', 'Slow down there buddy, you need to have some divs first!')
        return
    }

    depot.methods.claim().send()
        .on('transactionHash', (tx) => showNote('Claiming...', tx))
        .on('receipt', (receipt) => showReceipt(receipt.transactionHash))
        .on('error', (e) => txError(e))

    return false
    
}


async function claim(farmAddress) {

    hideFarm()

    let asset = farms[farmAddress]


    if (!(parseInt(await vault.methods.available(asset.asset, currentAddress).call()))) {
        showAlert('NO DIVS!!!', 'Slow down there buddy, you need to have some divs first!')
        return
    }

    if (farmDebug){
        vault.methods.claim(asset.asset).estimateGas()
        .then((gasAmount) => console.log("claim gas amount", gasAmount))
        .catch((e) => console.error(e))
    } else {

        $(`#loading-${asset.asset}`).text('Loading...')

        vault.methods.claim(asset.asset).send()
            .on('transactionHash', (tx) => showNote('Claiming...', tx))
            .on('receipt', (receipt) => showReceipt(receipt.transactionHash))
            .on('error', (e) => txError(e))

        return false
    }
}

async function claimAll() {
    let web3js = getWeb3()
  
    for (i = 0; i < assets.length; i++) {
        var asset = assets[i]
        let divsT = null

        //skip over retired contracts
        if (closed_assets.includes(asset.asset)) {
            continue;
        }

        
        divsT = web3js.utils.toBN(await vault.methods.available(asset.asset, currentAddress).call())
        if (divsT.gt(web3js.utils.toBN(0))) {
            vault.methods.claim(asset.asset).send()
            .on('transactionHash', (tx) => showNote('Claiming...', tx))
            .on('receipt', (receipt) => showNote('Claim complete',receipt.transactionHash), true)
        }
    }


}