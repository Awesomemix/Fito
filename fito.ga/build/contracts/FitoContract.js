var FitoContract_build = {
  "contractName": "FitoContract",
  "abi": [
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "tradingDatas",
      "outputs": [
        {
          "name": "tradingShares",
          "type": "uint256"
        },
        {
          "name": "tradingPrice",
          "type": "uint256"
        },
        {
          "name": "timestamp",
          "type": "uint256"
        },
        {
          "name": "sellerAddr",
          "type": "address"
        },
        {
          "name": "buyerAddr",
          "type": "address"
        },
        {
          "name": "isTradingComplete",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "balance",
          "type": "uint256"
        }
      ],
      "name": "Sended",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_corpAddr",
          "type": "address"
        }
      ],
      "name": "initShares",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "transfer",
      "outputs": [],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_sellerAddr",
          "type": "address"
        },
        {
          "name": "_tradingShares",
          "type": "uint256"
        }
      ],
      "name": "addTradingData",
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
      "inputs": [],
      "name": "getLengthOftradingDatas",
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
          "name": "_ownerAddr",
          "type": "address"
        }
      ],
      "name": "getOwnedShares",
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
      "name": "getUnissuedShareOfCompany",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "bytecode": "0x6080604052620f424060005534801561001757600080fd5b5061083a806100276000396000f300608060405260043610610083576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680631290a8381461008857806323420cdc146100dc578063433c381e14610107578063610495ef1461015e5780638a4068dd146101a15780638fe00b21146101ab578063c3e53c51146101d6575b600080fd5b6100c6600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610296565b6040518082815260200191505060405180910390f35b3480156100e857600080fd5b506100f1610557565b6040518082815260200191505060405180910390f35b34801561011357600080fd5b50610148600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610564565b6040518082815260200191505060405180910390f35b34801561016a57600080fd5b5061019f600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506105ad565b005b6101a961060f565b005b3480156101b757600080fd5b506101c061067a565b6040518082815260200191505060405180910390f35b3480156101e257600080fd5b5061020160048036038101908080359060200190929190505050610683565b604051808781526020018681526020018581526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182151515158152602001965050505050505060405180910390f35b60006102a06107a9565b600083600360008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054101580156102f2575060008414155b15156102fd57600080fd5b60c0604051908101604052808581526020013481526020014281526020018673ffffffffffffffffffffffffffffffffffffffff1681526020013373ffffffffffffffffffffffffffffffffffffffff1681526020016000151581525091506004829080600181540180825580915050906001820390600052602060002090600502016000909192909190915060008201518160000155602082015181600101556040820151816002015560608201518160030160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060808201518160040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060a08201518160040160146101000a81548160ff021916908315150217905550505090506104638561071b565b61046b61075f565b83600360008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254039250508190555083600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254019250508190555061050d61060f565b600160046001830381548110151561052157fe5b906000526020600020906005020160040160146101000a81548160ff021916908315150217905550600181039250505092915050565b6000600480549050905090565b6000600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6000819050620186a0600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550620186a060008082825403925050819055505050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc349081150290604051600060405180830381858888f19350505050158015610677573d6000803e3d6000fd5b50565b60008054905090565b60048181548110151561069257fe5b90600052602060002090600502016000915090508060000154908060010154908060020154908060030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060040160149054906101000a900460ff16905086565b80600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b346001819055507f8af68a55d4ee2bb2549f41a62e9a9ff1288d3a581c8960e3ecf22e9fa4b4691634600154604051808381526020018281526020019250505060405180910390a1565b60c060405190810160405280600081526020016000815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200160001515815250905600a165627a7a72305820acc52dba8fea27b373f04ae01aa7a6f9763b0643ac0917bce348d07265b77e250029",
  "deployedBytecode": "0x608060405260043610610083576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680631290a8381461008857806323420cdc146100dc578063433c381e14610107578063610495ef1461015e5780638a4068dd146101a15780638fe00b21146101ab578063c3e53c51146101d6575b600080fd5b6100c6600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610296565b6040518082815260200191505060405180910390f35b3480156100e857600080fd5b506100f1610557565b6040518082815260200191505060405180910390f35b34801561011357600080fd5b50610148600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610564565b6040518082815260200191505060405180910390f35b34801561016a57600080fd5b5061019f600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506105ad565b005b6101a961060f565b005b3480156101b757600080fd5b506101c061067a565b6040518082815260200191505060405180910390f35b3480156101e257600080fd5b5061020160048036038101908080359060200190929190505050610683565b604051808781526020018681526020018581526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182151515158152602001965050505050505060405180910390f35b60006102a06107a9565b600083600360008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054101580156102f2575060008414155b15156102fd57600080fd5b60c0604051908101604052808581526020013481526020014281526020018673ffffffffffffffffffffffffffffffffffffffff1681526020013373ffffffffffffffffffffffffffffffffffffffff1681526020016000151581525091506004829080600181540180825580915050906001820390600052602060002090600502016000909192909190915060008201518160000155602082015181600101556040820151816002015560608201518160030160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060808201518160040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060a08201518160040160146101000a81548160ff021916908315150217905550505090506104638561071b565b61046b61075f565b83600360008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254039250508190555083600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254019250508190555061050d61060f565b600160046001830381548110151561052157fe5b906000526020600020906005020160040160146101000a81548160ff021916908315150217905550600181039250505092915050565b6000600480549050905090565b6000600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6000819050620186a0600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550620186a060008082825403925050819055505050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc349081150290604051600060405180830381858888f19350505050158015610677573d6000803e3d6000fd5b50565b60008054905090565b60048181548110151561069257fe5b90600052602060002090600502016000915090508060000154908060010154908060020154908060030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060040160149054906101000a900460ff16905086565b80600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b346001819055507f8af68a55d4ee2bb2549f41a62e9a9ff1288d3a581c8960e3ecf22e9fa4b4691634600154604051808381526020018281526020019250505060405180910390a1565b60c060405190810160405280600081526020016000815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200160001515815250905600a165627a7a72305820acc52dba8fea27b373f04ae01aa7a6f9763b0643ac0917bce348d07265b77e250029",
  "sourceMap": "26:3480:0:-;;;85:7;55:37;;26:3480;8:9:-1;5:2;;;30:1;27;20:12;5:2;26:3480:0;;;;;;;",
  "deployedSourceMap": "26:3480:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2007:634;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2683:105;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2683:105:0;;;;;;;;;;;;;;;;;;;;;;;3011:117;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3011:117:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;862:222;;8:9:-1;5:2;;;30:1;27;20:12;5:2;862:222:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;1727:80;;;;;;3167:109;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3167:109:0;;;;;;;;;;;;;;;;;;;;;;;749:33;;8:9:-1;5:2;;;30:1;27;20:12;5:2;749:33:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2007:634;2096:4;2196:33;;:::i;:::-;2317:15;2148:14;2120:11;:24;2132:11;2120:24;;;;;;;;;;;;;;;;:42;;:65;;;;;2184:1;2166:14;:19;;2120:65;2112:74;;;;;;;;2232:75;;;;;;;;;2244:14;2232:75;;;;2260:9;2232:75;;;;2271:3;2232:75;;;;2276:11;2232:75;;;;;;2289:10;2232:75;;;;;;2301:5;2232:75;;;;;2196:111;;2335:12;2353:14;2335:33;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;2335:33:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2317:51;;2378:24;2390:11;2378;:24::i;:::-;2412:9;:7;:9::i;:::-;2459:14;2431:11;:24;2443:11;2431:24;;;;;;;;;;;;;;;;:42;;;;;;;;;;;2510:14;2483:11;:23;2495:10;2483:23;;;;;;;;;;;;;;;;:41;;;;;;;;;;;2534:10;:8;:10::i;:::-;2601:4;2554:12;2578:1;2567:10;:12;2554:26;;;;;;;;;;;;;;;;;;;;:44;;;:51;;;;;;;;;;;;;;;;;;2633:1;2622:10;:12;2615:19;;2007:634;;;;;;:::o;2683:105::-;2739:4;2762:12;:19;;;;2755:26;;2683:105;:::o;3011:117::-;3076:4;3098:11;:23;3110:10;3098:23;;;;;;;;;;;;;;;;3091:30;;3011:117;;;:::o;862:222::-;918:16;937:9;918:28;;980:6;956:11;:21;968:8;956:21;;;;;;;;;;;;;;;:30;;;;1071:6;1045:22;;:32;;;;;;;;;;;862:222;;:::o;1727:80::-;1772:8;;;;;;;;;;;:17;;:28;1790:9;1772:28;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1772:28:0;1727:80::o;3167:109::-;3224:4;3247:22;;3240:29;;3167:109;:::o;749:33::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;1409:85::-;1478:9;1467:8;;:20;;;;;;;;;;;;;;;;;;1409:85;:::o;1554:104::-;1601:9;1591:7;:19;;;;1625:26;1632:9;1643:7;;1625:26;;;;;;;;;;;;;;;;;;;;;;;;1554:104::o;26:3480::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o",
  "source": "pragma solidity ^0.4.24;\n\ncontract FitoContract {\n\n    uint unissuedShareOfCompany = 1000000;  //총 발행가능 주식수\n    uint balance;                   //ETH transfer 전송할 이더 수량 저장을 위한 임시 변수\n    address ethTaker;               //Eth transfer 수령자 저장을 위한 임시 변수\n\n    mapping (address => uint) ownedShares;\n\n    struct tradingData {\n        uint tradingShares;         //거래할 주식수\n        uint tradingPrice;          //거래할 총액(ETH)\n        uint timestamp;             //거래시간\n        address sellerAddr;         //주식 양도자\n        address buyerAddr;          //주식 양수자\n        bool isTradingComplete;     //거래 및 ETH 송금 완료\n    }\n\n    tradingData[] public tradingDatas;\n\n    //최초 회사 유통발행주식의 매개자 설정 및 초기화\n    function initShares(address _corpAddr) public {\n        address corpAddr = _corpAddr;\n        ownedShares[corpAddr] = 100000;  //총 발행가능 주식수 100% 발행 가정\n        unissuedShareOfCompany -= 100000;\n    }\n\n    // -----------------------------------------------------------\n    // EOA-CA-EOA ETH transfer를 위한 function\n    // -----------------------------------------------------------\n\n    //로깅을 위한 이벤트\n    event Sended (\n        uint256 value,\n        uint256 balance\n    );\n\n    //Eth 수령자 저장\n    function setEthTaker(address _ethTaker) private {\n        ethTaker = _ethTaker;\n    }\n\n    //호출자가 보낼 Eth 수량을 임시 저장\n    function sending() private {\n        balance = msg.value;\n        emit Sended(msg.value, balance);\n    }\n\n    //set함수를 통해 저장한 주소에 이더를 전송\n    function transfer() payable public {\n        ethTaker.transfer(msg.value);\n    }\n    // -----------------------------------------------------------\n\n    //양수자가 거래를 요청하고 이더를 전송하는 함수\n    //차후 요청-승인 구조로 분화해야 함.\n    function addTradingData(address _sellerAddr, uint _tradingShares) payable public returns(uint) {\n        require(ownedShares[_sellerAddr] >= _tradingShares && _tradingShares != 0);\n        tradingData memory newTradingData = tradingData(_tradingShares, msg.value, now, _sellerAddr, msg.sender, false);\n        uint tradingIdx = tradingDatas.push(newTradingData);\n        setEthTaker(_sellerAddr);\n        sending();\n        ownedShares[_sellerAddr] -= _tradingShares;\n        ownedShares[msg.sender] += _tradingShares;\n        transfer();\n        tradingDatas[tradingIdx-1].isTradingComplete = true;\n        return tradingIdx-1;\n    }\n\n    // 총 거래 내역 수 리턴\n    function getLengthOftradingDatas() public view returns (uint) {\n        return tradingDatas.length;\n    }\n\n    // 거래 내역 리턴\n    // function getProductStruct(uint _idx) public view returns (tradingData) {\n    //     return tradingDatas[_idx];\n    //     작성중\n    // }\n\n    //주주가 가진 주식수 리턴\n    function getOwnedShares(address _ownerAddr) public view returns (uint){\n        return ownedShares[_ownerAddr];\n    }\n\n    //회사 미발행 주식수\n    function getUnissuedShareOfCompany() public view returns(uint) {\n        return unissuedShareOfCompany;\n    }\n\n    //회사 유통 주식수\n    // function getIssuedShares() public view returns(uint) {\n    //     // 작성중\n    // }\n\n    //CA에 Eth를 transfer하기 위한 함수(백업) \n    // function sendEth() public payable {}\n}\n",
  "sourcePath": "/Users/hyun/dev/Fito/fito.ga/contracts/FitoContract.sol",
  "ast": {
    "absolutePath": "/Users/hyun/dev/Fito/fito.ga/contracts/FitoContract.sol",
    "exportedSymbols": {
      "FitoContract": [
        198
      ]
    },
    "id": 199,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:0"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 198,
        "linearizedBaseContracts": [
          198
        ],
        "name": "FitoContract",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 4,
            "name": "unissuedShareOfCompany",
            "nodeType": "VariableDeclaration",
            "scope": 198,
            "src": "55:37:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 2,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "55:4:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "31303030303030",
              "id": 3,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "85:7:0",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_rational_1000000_by_1",
                "typeString": "int_const 1000000"
              },
              "value": "1000000"
            },
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 6,
            "name": "balance",
            "nodeType": "VariableDeclaration",
            "scope": 198,
            "src": "128:12:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 5,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "128:4:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 8,
            "name": "ethTaker",
            "nodeType": "VariableDeclaration",
            "scope": 198,
            "src": "234:16:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 7,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "234:7:0",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 12,
            "name": "ownedShares",
            "nodeType": "VariableDeclaration",
            "scope": 198,
            "src": "327:37:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
              "typeString": "mapping(address => uint256)"
            },
            "typeName": {
              "id": 11,
              "keyType": {
                "id": 9,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "336:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "327:25:0",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                "typeString": "mapping(address => uint256)"
              },
              "valueType": {
                "id": 10,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "347:4:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "canonicalName": "FitoContract.tradingData",
            "id": 25,
            "members": [
              {
                "constant": false,
                "id": 14,
                "name": "tradingShares",
                "nodeType": "VariableDeclaration",
                "scope": 25,
                "src": "400:18:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 13,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "400:4:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 16,
                "name": "tradingPrice",
                "nodeType": "VariableDeclaration",
                "scope": 25,
                "src": "458:17:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 15,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "458:4:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 18,
                "name": "timestamp",
                "nodeType": "VariableDeclaration",
                "scope": 25,
                "src": "518:14:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 17,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "518:4:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 20,
                "name": "sellerAddr",
                "nodeType": "VariableDeclaration",
                "scope": 25,
                "src": "569:18:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 19,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "569:7:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 22,
                "name": "buyerAddr",
                "nodeType": "VariableDeclaration",
                "scope": 25,
                "src": "624:17:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 21,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "624:7:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 24,
                "name": "isTradingComplete",
                "nodeType": "VariableDeclaration",
                "scope": 25,
                "src": "679:22:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "typeName": {
                  "id": 23,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "679:4:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "tradingData",
            "nodeType": "StructDefinition",
            "scope": 198,
            "src": "371:372:0",
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 28,
            "name": "tradingDatas",
            "nodeType": "VariableDeclaration",
            "scope": 198,
            "src": "749:33:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_struct$_tradingData_$25_storage_$dyn_storage",
              "typeString": "struct FitoContract.tradingData[]"
            },
            "typeName": {
              "baseType": {
                "contractScope": null,
                "id": 26,
                "name": "tradingData",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 25,
                "src": "749:11:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_tradingData_$25_storage_ptr",
                  "typeString": "struct FitoContract.tradingData"
                }
              },
              "id": 27,
              "length": null,
              "nodeType": "ArrayTypeName",
              "src": "749:13:0",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_struct$_tradingData_$25_storage_$dyn_storage_ptr",
                "typeString": "struct FitoContract.tradingData[]"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 47,
              "nodeType": "Block",
              "src": "908:176:0",
              "statements": [
                {
                  "assignments": [
                    34
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 34,
                      "name": "corpAddr",
                      "nodeType": "VariableDeclaration",
                      "scope": 48,
                      "src": "918:16:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 33,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "918:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 36,
                  "initialValue": {
                    "argumentTypes": null,
                    "id": 35,
                    "name": "_corpAddr",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 30,
                    "src": "937:9:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "918:28:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 41,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 37,
                        "name": "ownedShares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 12,
                        "src": "956:11:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 39,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 38,
                        "name": "corpAddr",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34,
                        "src": "968:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "956:21:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "313030303030",
                      "id": 40,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "980:6:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_100000_by_1",
                        "typeString": "int_const 100000"
                      },
                      "value": "100000"
                    },
                    "src": "956:30:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 42,
                  "nodeType": "ExpressionStatement",
                  "src": "956:30:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 45,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 43,
                      "name": "unissuedShareOfCompany",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4,
                      "src": "1045:22:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "-=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "313030303030",
                      "id": 44,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1071:6:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_100000_by_1",
                        "typeString": "int_const 100000"
                      },
                      "value": "100000"
                    },
                    "src": "1045:32:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 46,
                  "nodeType": "ExpressionStatement",
                  "src": "1045:32:0"
                }
              ]
            },
            "documentation": null,
            "id": 48,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "initShares",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 31,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30,
                  "name": "_corpAddr",
                  "nodeType": "VariableDeclaration",
                  "scope": 48,
                  "src": "882:17:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 29,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "882:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "881:19:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 32,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "908:0:0"
            },
            "scope": 198,
            "src": "862:222:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 54,
            "name": "Sended",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 53,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 50,
                  "indexed": false,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 54,
                  "src": "1331:13:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 49,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1331:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 52,
                  "indexed": false,
                  "name": "balance",
                  "nodeType": "VariableDeclaration",
                  "scope": 54,
                  "src": "1354:15:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 51,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1354:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1321:54:0"
            },
            "src": "1308:68:0"
          },
          {
            "body": {
              "id": 63,
              "nodeType": "Block",
              "src": "1457:37:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 61,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 59,
                      "name": "ethTaker",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 8,
                      "src": "1467:8:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 60,
                      "name": "_ethTaker",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 56,
                      "src": "1478:9:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "1467:20:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 62,
                  "nodeType": "ExpressionStatement",
                  "src": "1467:20:0"
                }
              ]
            },
            "documentation": null,
            "id": 64,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setEthTaker",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 57,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 56,
                  "name": "_ethTaker",
                  "nodeType": "VariableDeclaration",
                  "scope": 64,
                  "src": "1430:17:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 55,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1430:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1429:19:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 58,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1457:0:0"
            },
            "scope": 198,
            "src": "1409:85:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "private"
          },
          {
            "body": {
              "id": 78,
              "nodeType": "Block",
              "src": "1581:77:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 70,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 67,
                      "name": "balance",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6,
                      "src": "1591:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 68,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 270,
                        "src": "1601:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 69,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "value",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1601:9:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1591:19:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 71,
                  "nodeType": "ExpressionStatement",
                  "src": "1591:19:0"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 73,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 270,
                          "src": "1632:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 74,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "value",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1632:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 75,
                        "name": "balance",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6,
                        "src": "1643:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 72,
                      "name": "Sended",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 54,
                      "src": "1625:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (uint256,uint256)"
                      }
                    },
                    "id": 76,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1625:26:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 77,
                  "nodeType": "EmitStatement",
                  "src": "1620:31:0"
                }
              ]
            },
            "documentation": null,
            "id": 79,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "sending",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 65,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1570:2:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 66,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1581:0:0"
            },
            "scope": 198,
            "src": "1554:104:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "private"
          },
          {
            "body": {
              "id": 89,
              "nodeType": "Block",
              "src": "1762:45:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 85,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 270,
                          "src": "1790:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 86,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "value",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1790:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 82,
                        "name": "ethTaker",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 8,
                        "src": "1772:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "id": 84,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1772:17:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 87,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1772:28:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 88,
                  "nodeType": "ExpressionStatement",
                  "src": "1772:28:0"
                }
              ]
            },
            "documentation": null,
            "id": 90,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 80,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1744:2:0"
            },
            "payable": true,
            "returnParameters": {
              "id": 81,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1762:0:0"
            },
            "scope": 198,
            "src": "1727:80:0",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 167,
              "nodeType": "Block",
              "src": "2102:539:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 108,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 104,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 100,
                              "name": "ownedShares",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 12,
                              "src": "2120:11:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 102,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 101,
                              "name": "_sellerAddr",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 92,
                              "src": "2132:11:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "2120:24:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">=",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 103,
                            "name": "_tradingShares",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 94,
                            "src": "2148:14:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2120:42:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "&&",
                        "rightExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 107,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 105,
                            "name": "_tradingShares",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 94,
                            "src": "2166:14:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "!=",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 106,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "2184:1:0",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "2166:19:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "2120:65:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 99,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        273,
                        274
                      ],
                      "referencedDeclaration": 273,
                      "src": "2112:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 109,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2112:74:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 110,
                  "nodeType": "ExpressionStatement",
                  "src": "2112:74:0"
                },
                {
                  "assignments": [
                    112
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 112,
                      "name": "newTradingData",
                      "nodeType": "VariableDeclaration",
                      "scope": 168,
                      "src": "2196:33:0",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_tradingData_$25_memory_ptr",
                        "typeString": "struct FitoContract.tradingData"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 111,
                        "name": "tradingData",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 25,
                        "src": "2196:11:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_tradingData_$25_storage_ptr",
                          "typeString": "struct FitoContract.tradingData"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 123,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 114,
                        "name": "_tradingShares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 94,
                        "src": "2244:14:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 115,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 270,
                          "src": "2260:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 116,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "value",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2260:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 117,
                        "name": "now",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 272,
                        "src": "2271:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 118,
                        "name": "_sellerAddr",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 92,
                        "src": "2276:11:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 119,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 270,
                          "src": "2289:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 120,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2289:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "66616c7365",
                        "id": 121,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2301:5:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "value": "false"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 113,
                      "name": "tradingData",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 25,
                      "src": "2232:11:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_struct$_tradingData_$25_storage_ptr_$",
                        "typeString": "type(struct FitoContract.tradingData storage pointer)"
                      }
                    },
                    "id": 122,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "structConstructorCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2232:75:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_tradingData_$25_memory",
                      "typeString": "struct FitoContract.tradingData memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2196:111:0"
                },
                {
                  "assignments": [
                    125
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 125,
                      "name": "tradingIdx",
                      "nodeType": "VariableDeclaration",
                      "scope": 168,
                      "src": "2317:15:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 124,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "2317:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 130,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 128,
                        "name": "newTradingData",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 112,
                        "src": "2353:14:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_tradingData_$25_memory_ptr",
                          "typeString": "struct FitoContract.tradingData memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_tradingData_$25_memory_ptr",
                          "typeString": "struct FitoContract.tradingData memory"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 126,
                        "name": "tradingDatas",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 28,
                        "src": "2335:12:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_tradingData_$25_storage_$dyn_storage",
                          "typeString": "struct FitoContract.tradingData storage ref[] storage ref"
                        }
                      },
                      "id": 127,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "2335:17:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_struct$_tradingData_$25_storage_$returns$_t_uint256_$",
                        "typeString": "function (struct FitoContract.tradingData storage ref) returns (uint256)"
                      }
                    },
                    "id": 129,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2335:33:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2317:51:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 132,
                        "name": "_sellerAddr",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 92,
                        "src": "2390:11:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 131,
                      "name": "setEthTaker",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 64,
                      "src": "2378:11:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 133,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2378:24:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 134,
                  "nodeType": "ExpressionStatement",
                  "src": "2378:24:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 135,
                      "name": "sending",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 79,
                      "src": "2412:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                        "typeString": "function ()"
                      }
                    },
                    "id": 136,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2412:9:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 137,
                  "nodeType": "ExpressionStatement",
                  "src": "2412:9:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 142,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 138,
                        "name": "ownedShares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 12,
                        "src": "2431:11:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 140,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 139,
                        "name": "_sellerAddr",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 92,
                        "src": "2443:11:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "2431:24:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "-=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 141,
                      "name": "_tradingShares",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 94,
                      "src": "2459:14:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2431:42:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 143,
                  "nodeType": "ExpressionStatement",
                  "src": "2431:42:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 149,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 144,
                        "name": "ownedShares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 12,
                        "src": "2483:11:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 147,
                      "indexExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 145,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 270,
                          "src": "2495:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 146,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2495:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "2483:23:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "+=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 148,
                      "name": "_tradingShares",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 94,
                      "src": "2510:14:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2483:41:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 150,
                  "nodeType": "ExpressionStatement",
                  "src": "2483:41:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 151,
                      "name": "transfer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 90,
                      "src": "2534:8:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                        "typeString": "function ()"
                      }
                    },
                    "id": 152,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2534:10:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 153,
                  "nodeType": "ExpressionStatement",
                  "src": "2534:10:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 161,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 154,
                          "name": "tradingDatas",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 28,
                          "src": "2554:12:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_struct$_tradingData_$25_storage_$dyn_storage",
                            "typeString": "struct FitoContract.tradingData storage ref[] storage ref"
                          }
                        },
                        "id": 158,
                        "indexExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 157,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 155,
                            "name": "tradingIdx",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 125,
                            "src": "2567:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "-",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "31",
                            "id": 156,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "2578:1:0",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1_by_1",
                              "typeString": "int_const 1"
                            },
                            "value": "1"
                          },
                          "src": "2567:12:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "2554:26:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_tradingData_$25_storage",
                          "typeString": "struct FitoContract.tradingData storage ref"
                        }
                      },
                      "id": 159,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "isTradingComplete",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 24,
                      "src": "2554:44:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "74727565",
                      "id": 160,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2601:4:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "2554:51:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 162,
                  "nodeType": "ExpressionStatement",
                  "src": "2554:51:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 165,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 163,
                      "name": "tradingIdx",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 125,
                      "src": "2622:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "-",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "31",
                      "id": 164,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2633:1:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1_by_1",
                        "typeString": "int_const 1"
                      },
                      "value": "1"
                    },
                    "src": "2622:12:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 98,
                  "id": 166,
                  "nodeType": "Return",
                  "src": "2615:19:0"
                }
              ]
            },
            "documentation": null,
            "id": 168,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "addTradingData",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 95,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 92,
                  "name": "_sellerAddr",
                  "nodeType": "VariableDeclaration",
                  "scope": 168,
                  "src": "2031:19:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 91,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2031:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 94,
                  "name": "_tradingShares",
                  "nodeType": "VariableDeclaration",
                  "scope": 168,
                  "src": "2052:19:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 93,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2052:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2030:42:0"
            },
            "payable": true,
            "returnParameters": {
              "id": 98,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 97,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 168,
                  "src": "2096:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 96,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2096:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2095:6:0"
            },
            "scope": 198,
            "src": "2007:634:0",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 176,
              "nodeType": "Block",
              "src": "2745:43:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "id": 173,
                      "name": "tradingDatas",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 28,
                      "src": "2762:12:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_struct$_tradingData_$25_storage_$dyn_storage",
                        "typeString": "struct FitoContract.tradingData storage ref[] storage ref"
                      }
                    },
                    "id": 174,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "length",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": null,
                    "src": "2762:19:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 172,
                  "id": 175,
                  "nodeType": "Return",
                  "src": "2755:26:0"
                }
              ]
            },
            "documentation": null,
            "id": 177,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getLengthOftradingDatas",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 169,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2715:2:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 172,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 171,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 177,
                  "src": "2739:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 170,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2739:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2738:6:0"
            },
            "scope": 198,
            "src": "2683:105:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 188,
              "nodeType": "Block",
              "src": "3081:47:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 184,
                      "name": "ownedShares",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 12,
                      "src": "3098:11:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                        "typeString": "mapping(address => uint256)"
                      }
                    },
                    "id": 186,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 185,
                      "name": "_ownerAddr",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 179,
                      "src": "3110:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "3098:23:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 183,
                  "id": 187,
                  "nodeType": "Return",
                  "src": "3091:30:0"
                }
              ]
            },
            "documentation": null,
            "id": 189,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getOwnedShares",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 180,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 179,
                  "name": "_ownerAddr",
                  "nodeType": "VariableDeclaration",
                  "scope": 189,
                  "src": "3035:18:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 178,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3035:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3034:20:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 183,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 182,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 189,
                  "src": "3076:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 181,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3076:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3075:6:0"
            },
            "scope": 198,
            "src": "3011:117:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 196,
              "nodeType": "Block",
              "src": "3230:46:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 194,
                    "name": "unissuedShareOfCompany",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 4,
                    "src": "3247:22:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 193,
                  "id": 195,
                  "nodeType": "Return",
                  "src": "3240:29:0"
                }
              ]
            },
            "documentation": null,
            "id": 197,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getUnissuedShareOfCompany",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 190,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3201:2:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 193,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 192,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 197,
                  "src": "3224:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 191,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3224:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3223:6:0"
            },
            "scope": 198,
            "src": "3167:109:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 199,
        "src": "26:3480:0"
      }
    ],
    "src": "0:3507:0"
  },
  "legacyAST": {
    "absolutePath": "/Users/hyun/dev/Fito/fito.ga/contracts/FitoContract.sol",
    "exportedSymbols": {
      "FitoContract": [
        198
      ]
    },
    "id": 199,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:0"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 198,
        "linearizedBaseContracts": [
          198
        ],
        "name": "FitoContract",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 4,
            "name": "unissuedShareOfCompany",
            "nodeType": "VariableDeclaration",
            "scope": 198,
            "src": "55:37:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 2,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "55:4:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "31303030303030",
              "id": 3,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "85:7:0",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_rational_1000000_by_1",
                "typeString": "int_const 1000000"
              },
              "value": "1000000"
            },
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 6,
            "name": "balance",
            "nodeType": "VariableDeclaration",
            "scope": 198,
            "src": "128:12:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 5,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "128:4:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 8,
            "name": "ethTaker",
            "nodeType": "VariableDeclaration",
            "scope": 198,
            "src": "234:16:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 7,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "234:7:0",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 12,
            "name": "ownedShares",
            "nodeType": "VariableDeclaration",
            "scope": 198,
            "src": "327:37:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
              "typeString": "mapping(address => uint256)"
            },
            "typeName": {
              "id": 11,
              "keyType": {
                "id": 9,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "336:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "327:25:0",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                "typeString": "mapping(address => uint256)"
              },
              "valueType": {
                "id": 10,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "347:4:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "canonicalName": "FitoContract.tradingData",
            "id": 25,
            "members": [
              {
                "constant": false,
                "id": 14,
                "name": "tradingShares",
                "nodeType": "VariableDeclaration",
                "scope": 25,
                "src": "400:18:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 13,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "400:4:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 16,
                "name": "tradingPrice",
                "nodeType": "VariableDeclaration",
                "scope": 25,
                "src": "458:17:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 15,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "458:4:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 18,
                "name": "timestamp",
                "nodeType": "VariableDeclaration",
                "scope": 25,
                "src": "518:14:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 17,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "518:4:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 20,
                "name": "sellerAddr",
                "nodeType": "VariableDeclaration",
                "scope": 25,
                "src": "569:18:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 19,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "569:7:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 22,
                "name": "buyerAddr",
                "nodeType": "VariableDeclaration",
                "scope": 25,
                "src": "624:17:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 21,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "624:7:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 24,
                "name": "isTradingComplete",
                "nodeType": "VariableDeclaration",
                "scope": 25,
                "src": "679:22:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "typeName": {
                  "id": 23,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "679:4:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "tradingData",
            "nodeType": "StructDefinition",
            "scope": 198,
            "src": "371:372:0",
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 28,
            "name": "tradingDatas",
            "nodeType": "VariableDeclaration",
            "scope": 198,
            "src": "749:33:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_struct$_tradingData_$25_storage_$dyn_storage",
              "typeString": "struct FitoContract.tradingData[]"
            },
            "typeName": {
              "baseType": {
                "contractScope": null,
                "id": 26,
                "name": "tradingData",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 25,
                "src": "749:11:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_tradingData_$25_storage_ptr",
                  "typeString": "struct FitoContract.tradingData"
                }
              },
              "id": 27,
              "length": null,
              "nodeType": "ArrayTypeName",
              "src": "749:13:0",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_struct$_tradingData_$25_storage_$dyn_storage_ptr",
                "typeString": "struct FitoContract.tradingData[]"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 47,
              "nodeType": "Block",
              "src": "908:176:0",
              "statements": [
                {
                  "assignments": [
                    34
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 34,
                      "name": "corpAddr",
                      "nodeType": "VariableDeclaration",
                      "scope": 48,
                      "src": "918:16:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 33,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "918:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 36,
                  "initialValue": {
                    "argumentTypes": null,
                    "id": 35,
                    "name": "_corpAddr",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 30,
                    "src": "937:9:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "918:28:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 41,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 37,
                        "name": "ownedShares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 12,
                        "src": "956:11:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 39,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 38,
                        "name": "corpAddr",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34,
                        "src": "968:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "956:21:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "313030303030",
                      "id": 40,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "980:6:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_100000_by_1",
                        "typeString": "int_const 100000"
                      },
                      "value": "100000"
                    },
                    "src": "956:30:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 42,
                  "nodeType": "ExpressionStatement",
                  "src": "956:30:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 45,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 43,
                      "name": "unissuedShareOfCompany",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4,
                      "src": "1045:22:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "-=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "313030303030",
                      "id": 44,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1071:6:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_100000_by_1",
                        "typeString": "int_const 100000"
                      },
                      "value": "100000"
                    },
                    "src": "1045:32:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 46,
                  "nodeType": "ExpressionStatement",
                  "src": "1045:32:0"
                }
              ]
            },
            "documentation": null,
            "id": 48,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "initShares",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 31,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30,
                  "name": "_corpAddr",
                  "nodeType": "VariableDeclaration",
                  "scope": 48,
                  "src": "882:17:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 29,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "882:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "881:19:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 32,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "908:0:0"
            },
            "scope": 198,
            "src": "862:222:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 54,
            "name": "Sended",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 53,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 50,
                  "indexed": false,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 54,
                  "src": "1331:13:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 49,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1331:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 52,
                  "indexed": false,
                  "name": "balance",
                  "nodeType": "VariableDeclaration",
                  "scope": 54,
                  "src": "1354:15:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 51,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1354:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1321:54:0"
            },
            "src": "1308:68:0"
          },
          {
            "body": {
              "id": 63,
              "nodeType": "Block",
              "src": "1457:37:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 61,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 59,
                      "name": "ethTaker",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 8,
                      "src": "1467:8:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 60,
                      "name": "_ethTaker",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 56,
                      "src": "1478:9:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "1467:20:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 62,
                  "nodeType": "ExpressionStatement",
                  "src": "1467:20:0"
                }
              ]
            },
            "documentation": null,
            "id": 64,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setEthTaker",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 57,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 56,
                  "name": "_ethTaker",
                  "nodeType": "VariableDeclaration",
                  "scope": 64,
                  "src": "1430:17:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 55,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1430:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1429:19:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 58,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1457:0:0"
            },
            "scope": 198,
            "src": "1409:85:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "private"
          },
          {
            "body": {
              "id": 78,
              "nodeType": "Block",
              "src": "1581:77:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 70,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 67,
                      "name": "balance",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6,
                      "src": "1591:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 68,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 270,
                        "src": "1601:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 69,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "value",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1601:9:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1591:19:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 71,
                  "nodeType": "ExpressionStatement",
                  "src": "1591:19:0"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 73,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 270,
                          "src": "1632:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 74,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "value",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1632:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 75,
                        "name": "balance",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6,
                        "src": "1643:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 72,
                      "name": "Sended",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 54,
                      "src": "1625:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (uint256,uint256)"
                      }
                    },
                    "id": 76,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1625:26:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 77,
                  "nodeType": "EmitStatement",
                  "src": "1620:31:0"
                }
              ]
            },
            "documentation": null,
            "id": 79,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "sending",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 65,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1570:2:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 66,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1581:0:0"
            },
            "scope": 198,
            "src": "1554:104:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "private"
          },
          {
            "body": {
              "id": 89,
              "nodeType": "Block",
              "src": "1762:45:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 85,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 270,
                          "src": "1790:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 86,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "value",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1790:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 82,
                        "name": "ethTaker",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 8,
                        "src": "1772:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "id": 84,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1772:17:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 87,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1772:28:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 88,
                  "nodeType": "ExpressionStatement",
                  "src": "1772:28:0"
                }
              ]
            },
            "documentation": null,
            "id": 90,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 80,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1744:2:0"
            },
            "payable": true,
            "returnParameters": {
              "id": 81,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1762:0:0"
            },
            "scope": 198,
            "src": "1727:80:0",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 167,
              "nodeType": "Block",
              "src": "2102:539:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 108,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 104,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 100,
                              "name": "ownedShares",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 12,
                              "src": "2120:11:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 102,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 101,
                              "name": "_sellerAddr",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 92,
                              "src": "2132:11:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "2120:24:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">=",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 103,
                            "name": "_tradingShares",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 94,
                            "src": "2148:14:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2120:42:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "&&",
                        "rightExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 107,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 105,
                            "name": "_tradingShares",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 94,
                            "src": "2166:14:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "!=",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 106,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "2184:1:0",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "2166:19:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "2120:65:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 99,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        273,
                        274
                      ],
                      "referencedDeclaration": 273,
                      "src": "2112:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 109,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2112:74:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 110,
                  "nodeType": "ExpressionStatement",
                  "src": "2112:74:0"
                },
                {
                  "assignments": [
                    112
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 112,
                      "name": "newTradingData",
                      "nodeType": "VariableDeclaration",
                      "scope": 168,
                      "src": "2196:33:0",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_tradingData_$25_memory_ptr",
                        "typeString": "struct FitoContract.tradingData"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 111,
                        "name": "tradingData",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 25,
                        "src": "2196:11:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_tradingData_$25_storage_ptr",
                          "typeString": "struct FitoContract.tradingData"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 123,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 114,
                        "name": "_tradingShares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 94,
                        "src": "2244:14:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 115,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 270,
                          "src": "2260:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 116,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "value",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2260:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 117,
                        "name": "now",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 272,
                        "src": "2271:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 118,
                        "name": "_sellerAddr",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 92,
                        "src": "2276:11:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 119,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 270,
                          "src": "2289:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 120,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2289:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "66616c7365",
                        "id": 121,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2301:5:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "value": "false"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 113,
                      "name": "tradingData",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 25,
                      "src": "2232:11:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_struct$_tradingData_$25_storage_ptr_$",
                        "typeString": "type(struct FitoContract.tradingData storage pointer)"
                      }
                    },
                    "id": 122,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "structConstructorCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2232:75:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_tradingData_$25_memory",
                      "typeString": "struct FitoContract.tradingData memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2196:111:0"
                },
                {
                  "assignments": [
                    125
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 125,
                      "name": "tradingIdx",
                      "nodeType": "VariableDeclaration",
                      "scope": 168,
                      "src": "2317:15:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 124,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "2317:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 130,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 128,
                        "name": "newTradingData",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 112,
                        "src": "2353:14:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_tradingData_$25_memory_ptr",
                          "typeString": "struct FitoContract.tradingData memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_tradingData_$25_memory_ptr",
                          "typeString": "struct FitoContract.tradingData memory"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 126,
                        "name": "tradingDatas",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 28,
                        "src": "2335:12:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_tradingData_$25_storage_$dyn_storage",
                          "typeString": "struct FitoContract.tradingData storage ref[] storage ref"
                        }
                      },
                      "id": 127,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "2335:17:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_struct$_tradingData_$25_storage_$returns$_t_uint256_$",
                        "typeString": "function (struct FitoContract.tradingData storage ref) returns (uint256)"
                      }
                    },
                    "id": 129,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2335:33:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2317:51:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 132,
                        "name": "_sellerAddr",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 92,
                        "src": "2390:11:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 131,
                      "name": "setEthTaker",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 64,
                      "src": "2378:11:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 133,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2378:24:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 134,
                  "nodeType": "ExpressionStatement",
                  "src": "2378:24:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 135,
                      "name": "sending",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 79,
                      "src": "2412:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                        "typeString": "function ()"
                      }
                    },
                    "id": 136,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2412:9:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 137,
                  "nodeType": "ExpressionStatement",
                  "src": "2412:9:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 142,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 138,
                        "name": "ownedShares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 12,
                        "src": "2431:11:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 140,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 139,
                        "name": "_sellerAddr",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 92,
                        "src": "2443:11:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "2431:24:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "-=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 141,
                      "name": "_tradingShares",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 94,
                      "src": "2459:14:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2431:42:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 143,
                  "nodeType": "ExpressionStatement",
                  "src": "2431:42:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 149,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 144,
                        "name": "ownedShares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 12,
                        "src": "2483:11:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 147,
                      "indexExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 145,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 270,
                          "src": "2495:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 146,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2495:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "2483:23:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "+=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 148,
                      "name": "_tradingShares",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 94,
                      "src": "2510:14:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2483:41:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 150,
                  "nodeType": "ExpressionStatement",
                  "src": "2483:41:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 151,
                      "name": "transfer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 90,
                      "src": "2534:8:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                        "typeString": "function ()"
                      }
                    },
                    "id": 152,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2534:10:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 153,
                  "nodeType": "ExpressionStatement",
                  "src": "2534:10:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 161,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 154,
                          "name": "tradingDatas",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 28,
                          "src": "2554:12:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_struct$_tradingData_$25_storage_$dyn_storage",
                            "typeString": "struct FitoContract.tradingData storage ref[] storage ref"
                          }
                        },
                        "id": 158,
                        "indexExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 157,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 155,
                            "name": "tradingIdx",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 125,
                            "src": "2567:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "-",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "31",
                            "id": 156,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "2578:1:0",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1_by_1",
                              "typeString": "int_const 1"
                            },
                            "value": "1"
                          },
                          "src": "2567:12:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "2554:26:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_tradingData_$25_storage",
                          "typeString": "struct FitoContract.tradingData storage ref"
                        }
                      },
                      "id": 159,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "isTradingComplete",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 24,
                      "src": "2554:44:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "74727565",
                      "id": 160,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2601:4:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "2554:51:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 162,
                  "nodeType": "ExpressionStatement",
                  "src": "2554:51:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 165,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 163,
                      "name": "tradingIdx",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 125,
                      "src": "2622:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "-",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "31",
                      "id": 164,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2633:1:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1_by_1",
                        "typeString": "int_const 1"
                      },
                      "value": "1"
                    },
                    "src": "2622:12:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 98,
                  "id": 166,
                  "nodeType": "Return",
                  "src": "2615:19:0"
                }
              ]
            },
            "documentation": null,
            "id": 168,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "addTradingData",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 95,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 92,
                  "name": "_sellerAddr",
                  "nodeType": "VariableDeclaration",
                  "scope": 168,
                  "src": "2031:19:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 91,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2031:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 94,
                  "name": "_tradingShares",
                  "nodeType": "VariableDeclaration",
                  "scope": 168,
                  "src": "2052:19:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 93,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2052:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2030:42:0"
            },
            "payable": true,
            "returnParameters": {
              "id": 98,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 97,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 168,
                  "src": "2096:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 96,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2096:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2095:6:0"
            },
            "scope": 198,
            "src": "2007:634:0",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 176,
              "nodeType": "Block",
              "src": "2745:43:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "id": 173,
                      "name": "tradingDatas",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 28,
                      "src": "2762:12:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_struct$_tradingData_$25_storage_$dyn_storage",
                        "typeString": "struct FitoContract.tradingData storage ref[] storage ref"
                      }
                    },
                    "id": 174,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "length",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": null,
                    "src": "2762:19:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 172,
                  "id": 175,
                  "nodeType": "Return",
                  "src": "2755:26:0"
                }
              ]
            },
            "documentation": null,
            "id": 177,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getLengthOftradingDatas",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 169,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2715:2:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 172,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 171,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 177,
                  "src": "2739:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 170,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2739:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2738:6:0"
            },
            "scope": 198,
            "src": "2683:105:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 188,
              "nodeType": "Block",
              "src": "3081:47:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 184,
                      "name": "ownedShares",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 12,
                      "src": "3098:11:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                        "typeString": "mapping(address => uint256)"
                      }
                    },
                    "id": 186,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 185,
                      "name": "_ownerAddr",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 179,
                      "src": "3110:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "3098:23:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 183,
                  "id": 187,
                  "nodeType": "Return",
                  "src": "3091:30:0"
                }
              ]
            },
            "documentation": null,
            "id": 189,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getOwnedShares",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 180,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 179,
                  "name": "_ownerAddr",
                  "nodeType": "VariableDeclaration",
                  "scope": 189,
                  "src": "3035:18:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 178,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3035:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3034:20:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 183,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 182,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 189,
                  "src": "3076:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 181,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3076:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3075:6:0"
            },
            "scope": 198,
            "src": "3011:117:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 196,
              "nodeType": "Block",
              "src": "3230:46:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 194,
                    "name": "unissuedShareOfCompany",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 4,
                    "src": "3247:22:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 193,
                  "id": 195,
                  "nodeType": "Return",
                  "src": "3240:29:0"
                }
              ]
            },
            "documentation": null,
            "id": 197,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getUnissuedShareOfCompany",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 190,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3201:2:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 193,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 192,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 197,
                  "src": "3224:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 191,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3224:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3223:6:0"
            },
            "scope": 198,
            "src": "3167:109:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 199,
        "src": "26:3480:0"
      }
    ],
    "src": "0:3507:0"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {
    "5777": {
      "events": {},
      "links": {},
      "address": "0xa8a4665904d6909b3ca5d43238d59ef3cba6e17d",
      "transactionHash": "0xcdf90697b8895209202dfafb5e938c92c4ffd91a49fa573431d4680355281d89"
    }
  },
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-11-13T15:42:27.099Z"
}