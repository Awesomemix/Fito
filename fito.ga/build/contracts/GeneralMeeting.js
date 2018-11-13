var GeneralMeeting_build = {
  "contractName": "GeneralMeeting",
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
          "name": "sellerAddr",
          "type": "address"
        },
        {
          "name": "buyerAddr",
          "type": "address"
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
          "name": "isTradingComplete",
          "type": "bool"
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
      "inputs": [
        {
          "name": "_ownerAddr",
          "type": "address"
        }
      ],
      "name": "getTotalStuck",
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
  "bytecode": "0x608060405261271060005534801561001657600080fd5b5061070d806100266000396000f300608060405260043610610062576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680631290a83814610067578063610495ef146100bb578063c3e53c51146100fe578063d60fdc50146101be575b600080fd5b6100a5600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610215565b6040518082815260200191505060405180910390f35b3480156100c757600080fd5b506100fc600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610507565b005b34801561010a57600080fd5b5061012960048036038101908080359060200190929190505050610557565b604051808781526020018673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200184815260200183815260200182151515158152602001965050505050505060405180910390f35b3480156101ca57600080fd5b506101ff600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506105ef565b6040518082815260200191505060405180910390f35b600061021f61067c565b600083600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410158015610271575060008414155b151561027c57600080fd5b60c0604051908101604052808581526020013373ffffffffffffffffffffffffffffffffffffffff1681526020018673ffffffffffffffffffffffffffffffffffffffff168152602001348152602001428152602001600015158152509150600382908060018154018082558091505090600182039060005260206000209060060201600090919290919091506000820151816000015560208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550606082015181600301556080820151816004015560a08201518160050160006101000a81548160ff021916908315150217905550505090506103e285610638565b83600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254039250508190555083600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508473ffffffffffffffffffffffffffffffffffffffff166108fc349081150290604051600060405180830381858888f193505050501580156104c2573d6000803e3d6000fd5b5060016003828154811015156104d457fe5b906000526020600020906006020160050160006101000a81548160ff021916908315150217905550809250505092915050565b600054600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506000808190555050565b60038181548110151561056657fe5b90600052602060002090600602016000915090508060000154908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060030154908060040154908060050160009054906101000a900460ff16905086565b6000600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60c06040519081016040528060008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600081526020016000815260200160001515815250905600a165627a7a7230582057fb2725c3f004425ad251fc6aa88998b88a83ee4dbee59f36b3a9a33ec833a50029",
  "deployedBytecode": "0x608060405260043610610062576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680631290a83814610067578063610495ef146100bb578063c3e53c51146100fe578063d60fdc50146101be575b600080fd5b6100a5600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610215565b6040518082815260200191505060405180910390f35b3480156100c757600080fd5b506100fc600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610507565b005b34801561010a57600080fd5b5061012960048036038101908080359060200190929190505050610557565b604051808781526020018673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200184815260200183815260200182151515158152602001965050505050505060405180910390f35b3480156101ca57600080fd5b506101ff600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506105ef565b6040518082815260200191505060405180910390f35b600061021f61067c565b600083600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410158015610271575060008414155b151561027c57600080fd5b60c0604051908101604052808581526020013373ffffffffffffffffffffffffffffffffffffffff1681526020018673ffffffffffffffffffffffffffffffffffffffff168152602001348152602001428152602001600015158152509150600382908060018154018082558091505090600182039060005260206000209060060201600090919290919091506000820151816000015560208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550606082015181600301556080820151816004015560a08201518160050160006101000a81548160ff021916908315150217905550505090506103e285610638565b83600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254039250508190555083600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508473ffffffffffffffffffffffffffffffffffffffff166108fc349081150290604051600060405180830381858888f193505050501580156104c2573d6000803e3d6000fd5b5060016003828154811015156104d457fe5b906000526020600020906006020160050160006101000a81548160ff021916908315150217905550809250505092915050565b600054600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506000808190555050565b60038181548110151561056657fe5b90600052602060002090600602016000915090508060000154908060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060030154908060040154908060050160009054906101000a900460ff16905086565b6000600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60c06040519081016040528060008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600081526020016000815260200160001515815250905600a165627a7a7230582057fb2725c3f004425ad251fc6aa88998b88a83ee4dbee59f36b3a9a33ec833a50029",
  "sourceMap": "60:1820:0:-;;;112:5;90:27;;60:1820;8:9:-1;5:2;;;30:1;27;20:12;5:2;60:1820:0;;;;;;;",
  "deployedSourceMap": "60:1820:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;810:632;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;529:130;;8:9:-1;5:2;;;30:1;27;20:12;5:2;529:130:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;489:33;;8:9:-1;5:2;;;30:1;27;20:12;5:2;489:33:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1762:116;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1762:116:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;810:632;899:4;999:33;;:::i;:::-;1120:15;951:14;923:11;:24;935:11;923:24;;;;;;;;;;;;;;;;:42;;:65;;;;;987:1;969:14;:19;;923:65;915:74;;;;;;;;1035:75;;;;;;;;;1047:14;1035:75;;;;1063:10;1035:75;;;;;;1075:11;1035:75;;;;;;1088:9;1035:75;;;;1099:3;1035:75;;;;1104:5;1035:75;;;;;999:111;;1138:12;1156:14;1138:33;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;1138:33:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1120:51;;1181:24;1193:11;1181;:24::i;:::-;1242:14;1215:11;:23;1227:10;1215:23;;;;;;;;;;;;;;;;:41;;;;;;;;;;;1294:14;1266:11;:24;1278:11;1266:24;;;;;;;;;;;;;;;;:42;;;;;;;;;;;1318:11;:20;;:31;1339:9;1318:31;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1318:31:0;1404:4;1359:12;1372:10;1359:24;;;;;;;;;;;;;;;;;;;;:42;;;:49;;;;;;;;;;;;;;;;;;1425:10;1418:17;;810:632;;;;;;:::o;529:130::-;610:14;;585:11;:22;597:9;585:22;;;;;;;;;;;;;;;:39;;;;651:1;634:14;:18;;;;529:130;:::o;489:33::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;1762:116::-;1826:4;1848:11;:23;1860:10;1848:23;;;;;;;;;;;;;;;;1841:30;;1762:116;;;:::o;665:85::-;734:9;723:8;;:20;;;;;;;;;;;;;;;;;;665:85;:::o;60:1820::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o",
  "source": "pragma solidity ^0.4.24;\n\n//token 초기값 이슈 아직X\n\ncontract GeneralMeeting {\n    uint shareOfCompany = 10000; //회사-주주\n    address ethTaker;\n\n    mapping (address => uint) ownedShares;\n\n    struct tradingData {\n        uint tradingShares; //from 주주 개개인의 거래한 주식수\n        address sellerAddr; //주식 양도자\n        address buyerAddr; //주식 양수자\n        uint tradingPrice;\n        uint timestamp;\n        bool isTradingComplete;\n    }\n\n    tradingData[] public tradingDatas;\n\n    function initShares(address _corpAddr) public {\n        ownedShares[_corpAddr] = shareOfCompany;\n        shareOfCompany = 0;\n    }\n\n    function setEthTaker(address _ethTaker) private {\n        ethTaker = _ethTaker;\n    }\n\n    //stockData 추가 ==> 양수자가 거래 요청\n    function addTradingData(address _sellerAddr, uint _tradingShares) payable public returns(uint) {\n        require(ownedShares[_sellerAddr] >= _tradingShares && _tradingShares != 0);\n        tradingData memory newTradingData = tradingData(_tradingShares, msg.sender, _sellerAddr, msg.value, now, false);\n        uint tradingIdx = tradingDatas.push(newTradingData);\n        setEthTaker(_sellerAddr);\n        ownedShares[msg.sender] -= _tradingShares;\n        ownedShares[_sellerAddr] += _tradingShares;\n        _sellerAddr.transfer(msg.value);\n        tradingDatas[tradingIdx].isTradingComplete = true;\n        return tradingIdx;\n    }\n\n    //총 거래 내역 수 리턴\n    // function getLengthOftradingDatas() public view returns (uint) {\n    //     return tradingDatas.length();\n    // }\n\n    //거래 내역 리턴\n    // function getProductStruct(uint _idx) public view returns (tradingData[]) {\n    //     return tradingDatas[_idx];\n    // }\n\n    function getTotalStuck(address _ownerAddr) public view returns (uint){\n        return ownedShares[_ownerAddr];\n    }\n}\n",
  "sourcePath": "/Users/hyun/dev/Fito/fito.ga/contracts/GeneralMeeting.sol",
  "ast": {
    "absolutePath": "/Users/hyun/dev/Fito/fito.ga/contracts/GeneralMeeting.sol",
    "exportedSymbols": {
      "GeneralMeeting": [
        140
      ]
    },
    "id": 141,
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
        "id": 140,
        "linearizedBaseContracts": [
          140
        ],
        "name": "GeneralMeeting",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 4,
            "name": "shareOfCompany",
            "nodeType": "VariableDeclaration",
            "scope": 140,
            "src": "90:27:0",
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
              "src": "90:4:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "3130303030",
              "id": 3,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "112:5:0",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_rational_10000_by_1",
                "typeString": "int_const 10000"
              },
              "value": "10000"
            },
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 6,
            "name": "ethTaker",
            "nodeType": "VariableDeclaration",
            "scope": 140,
            "src": "139:16:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 5,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "139:7:0",
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
            "id": 10,
            "name": "ownedShares",
            "nodeType": "VariableDeclaration",
            "scope": 140,
            "src": "162:37:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
              "typeString": "mapping(address => uint256)"
            },
            "typeName": {
              "id": 9,
              "keyType": {
                "id": 7,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "171:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "162:25:0",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                "typeString": "mapping(address => uint256)"
              },
              "valueType": {
                "id": 8,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "182:4:0",
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
            "canonicalName": "GeneralMeeting.tradingData",
            "id": 23,
            "members": [
              {
                "constant": false,
                "id": 12,
                "name": "tradingShares",
                "nodeType": "VariableDeclaration",
                "scope": 23,
                "src": "235:18:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 11,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "235:4:0",
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
                "id": 14,
                "name": "sellerAddr",
                "nodeType": "VariableDeclaration",
                "scope": 23,
                "src": "310:18:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 13,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "310:7:0",
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
                "id": 16,
                "name": "buyerAddr",
                "nodeType": "VariableDeclaration",
                "scope": 23,
                "src": "357:17:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 15,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "357:7:0",
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
                "id": 18,
                "name": "tradingPrice",
                "nodeType": "VariableDeclaration",
                "scope": 23,
                "src": "403:17:0",
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
                  "src": "403:4:0",
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
                "name": "timestamp",
                "nodeType": "VariableDeclaration",
                "scope": 23,
                "src": "430:14:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 19,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "430:4:0",
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
                "id": 22,
                "name": "isTradingComplete",
                "nodeType": "VariableDeclaration",
                "scope": 23,
                "src": "454:22:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "typeName": {
                  "id": 21,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "454:4:0",
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
            "scope": 140,
            "src": "206:277:0",
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 26,
            "name": "tradingDatas",
            "nodeType": "VariableDeclaration",
            "scope": 140,
            "src": "489:33:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_struct$_tradingData_$23_storage_$dyn_storage",
              "typeString": "struct GeneralMeeting.tradingData[]"
            },
            "typeName": {
              "baseType": {
                "contractScope": null,
                "id": 24,
                "name": "tradingData",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 23,
                "src": "489:11:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_tradingData_$23_storage_ptr",
                  "typeString": "struct GeneralMeeting.tradingData"
                }
              },
              "id": 25,
              "length": null,
              "nodeType": "ArrayTypeName",
              "src": "489:13:0",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_struct$_tradingData_$23_storage_$dyn_storage_ptr",
                "typeString": "struct GeneralMeeting.tradingData[]"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 41,
              "nodeType": "Block",
              "src": "575:84:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 35,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 31,
                        "name": "ownedShares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10,
                        "src": "585:11:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 33,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 32,
                        "name": "_corpAddr",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 28,
                        "src": "597:9:0",
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
                      "src": "585:22:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 34,
                      "name": "shareOfCompany",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4,
                      "src": "610:14:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "585:39:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 36,
                  "nodeType": "ExpressionStatement",
                  "src": "585:39:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 39,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 37,
                      "name": "shareOfCompany",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4,
                      "src": "634:14:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 38,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "651:1:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "634:18:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 40,
                  "nodeType": "ExpressionStatement",
                  "src": "634:18:0"
                }
              ]
            },
            "documentation": null,
            "id": 42,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "initShares",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 29,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28,
                  "name": "_corpAddr",
                  "nodeType": "VariableDeclaration",
                  "scope": 42,
                  "src": "549:17:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 27,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "549:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "548:19:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 30,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "575:0:0"
            },
            "scope": 140,
            "src": "529:130:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 51,
              "nodeType": "Block",
              "src": "713:37:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 49,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 47,
                      "name": "ethTaker",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6,
                      "src": "723:8:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 48,
                      "name": "_ethTaker",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 44,
                      "src": "734:9:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "723:20:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 50,
                  "nodeType": "ExpressionStatement",
                  "src": "723:20:0"
                }
              ]
            },
            "documentation": null,
            "id": 52,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setEthTaker",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 45,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44,
                  "name": "_ethTaker",
                  "nodeType": "VariableDeclaration",
                  "scope": 52,
                  "src": "686:17:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 43,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "686:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "685:19:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 46,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "713:0:0"
            },
            "scope": 140,
            "src": "665:85:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "private"
          },
          {
            "body": {
              "id": 126,
              "nodeType": "Block",
              "src": "905:537:0",
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
                        "id": 70,
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
                          "id": 66,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 62,
                              "name": "ownedShares",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 10,
                              "src": "923:11:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 64,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 63,
                              "name": "_sellerAddr",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 54,
                              "src": "935:11:0",
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
                            "src": "923:24:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">=",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 65,
                            "name": "_tradingShares",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 56,
                            "src": "951:14:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "923:42:0",
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
                          "id": 69,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 67,
                            "name": "_tradingShares",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 56,
                            "src": "969:14:0",
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
                            "id": 68,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "987:1:0",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "969:19:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "923:65:0",
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
                      "id": 61,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        215,
                        216
                      ],
                      "referencedDeclaration": 215,
                      "src": "915:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 71,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "915:74:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 72,
                  "nodeType": "ExpressionStatement",
                  "src": "915:74:0"
                },
                {
                  "assignments": [
                    74
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 74,
                      "name": "newTradingData",
                      "nodeType": "VariableDeclaration",
                      "scope": 127,
                      "src": "999:33:0",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_tradingData_$23_memory_ptr",
                        "typeString": "struct GeneralMeeting.tradingData"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 73,
                        "name": "tradingData",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 23,
                        "src": "999:11:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_tradingData_$23_storage_ptr",
                          "typeString": "struct GeneralMeeting.tradingData"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 85,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 76,
                        "name": "_tradingShares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 56,
                        "src": "1047:14:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 77,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 212,
                          "src": "1063:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 78,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1063:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 79,
                        "name": "_sellerAddr",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 54,
                        "src": "1075:11:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 80,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 212,
                          "src": "1088:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 81,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "value",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1088:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 82,
                        "name": "now",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 214,
                        "src": "1099:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "66616c7365",
                        "id": 83,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1104:5:0",
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
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
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
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 75,
                      "name": "tradingData",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 23,
                      "src": "1035:11:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_struct$_tradingData_$23_storage_ptr_$",
                        "typeString": "type(struct GeneralMeeting.tradingData storage pointer)"
                      }
                    },
                    "id": 84,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "structConstructorCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1035:75:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_tradingData_$23_memory",
                      "typeString": "struct GeneralMeeting.tradingData memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "999:111:0"
                },
                {
                  "assignments": [
                    87
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 87,
                      "name": "tradingIdx",
                      "nodeType": "VariableDeclaration",
                      "scope": 127,
                      "src": "1120:15:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 86,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "1120:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 92,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 90,
                        "name": "newTradingData",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 74,
                        "src": "1156:14:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_tradingData_$23_memory_ptr",
                          "typeString": "struct GeneralMeeting.tradingData memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_tradingData_$23_memory_ptr",
                          "typeString": "struct GeneralMeeting.tradingData memory"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 88,
                        "name": "tradingDatas",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 26,
                        "src": "1138:12:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_tradingData_$23_storage_$dyn_storage",
                          "typeString": "struct GeneralMeeting.tradingData storage ref[] storage ref"
                        }
                      },
                      "id": 89,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1138:17:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_struct$_tradingData_$23_storage_$returns$_t_uint256_$",
                        "typeString": "function (struct GeneralMeeting.tradingData storage ref) returns (uint256)"
                      }
                    },
                    "id": 91,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1138:33:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1120:51:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 94,
                        "name": "_sellerAddr",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 54,
                        "src": "1193:11:0",
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
                      "id": 93,
                      "name": "setEthTaker",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 52,
                      "src": "1181:11:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 95,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1181:24:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 96,
                  "nodeType": "ExpressionStatement",
                  "src": "1181:24:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 102,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 97,
                        "name": "ownedShares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10,
                        "src": "1215:11:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 100,
                      "indexExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 98,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 212,
                          "src": "1227:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 99,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1227:10:0",
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
                      "src": "1215:23:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "-=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 101,
                      "name": "_tradingShares",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 56,
                      "src": "1242:14:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1215:41:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 103,
                  "nodeType": "ExpressionStatement",
                  "src": "1215:41:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 108,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 104,
                        "name": "ownedShares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10,
                        "src": "1266:11:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 106,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 105,
                        "name": "_sellerAddr",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 54,
                        "src": "1278:11:0",
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
                      "src": "1266:24:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "+=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 107,
                      "name": "_tradingShares",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 56,
                      "src": "1294:14:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1266:42:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 109,
                  "nodeType": "ExpressionStatement",
                  "src": "1266:42:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 113,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 212,
                          "src": "1339:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 114,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "value",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1339:9:0",
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
                        "id": 110,
                        "name": "_sellerAddr",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 54,
                        "src": "1318:11:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "id": 112,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1318:20:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 115,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1318:31:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 116,
                  "nodeType": "ExpressionStatement",
                  "src": "1318:31:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 122,
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
                          "id": 117,
                          "name": "tradingDatas",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 26,
                          "src": "1359:12:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_struct$_tradingData_$23_storage_$dyn_storage",
                            "typeString": "struct GeneralMeeting.tradingData storage ref[] storage ref"
                          }
                        },
                        "id": 119,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 118,
                          "name": "tradingIdx",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 87,
                          "src": "1372:10:0",
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
                        "src": "1359:24:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_tradingData_$23_storage",
                          "typeString": "struct GeneralMeeting.tradingData storage ref"
                        }
                      },
                      "id": 120,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "isTradingComplete",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 22,
                      "src": "1359:42:0",
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
                      "id": 121,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1404:4:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "1359:49:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 123,
                  "nodeType": "ExpressionStatement",
                  "src": "1359:49:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 124,
                    "name": "tradingIdx",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 87,
                    "src": "1425:10:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 60,
                  "id": 125,
                  "nodeType": "Return",
                  "src": "1418:17:0"
                }
              ]
            },
            "documentation": null,
            "id": 127,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "addTradingData",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 57,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 54,
                  "name": "_sellerAddr",
                  "nodeType": "VariableDeclaration",
                  "scope": 127,
                  "src": "834:19:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 53,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "834:7:0",
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
                  "id": 56,
                  "name": "_tradingShares",
                  "nodeType": "VariableDeclaration",
                  "scope": 127,
                  "src": "855:19:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 55,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "855:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "833:42:0"
            },
            "payable": true,
            "returnParameters": {
              "id": 60,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 59,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 127,
                  "src": "899:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 58,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "899:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "898:6:0"
            },
            "scope": 140,
            "src": "810:632:0",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 138,
              "nodeType": "Block",
              "src": "1831:47:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 134,
                      "name": "ownedShares",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10,
                      "src": "1848:11:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                        "typeString": "mapping(address => uint256)"
                      }
                    },
                    "id": 136,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 135,
                      "name": "_ownerAddr",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 129,
                      "src": "1860:10:0",
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
                    "src": "1848:23:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 133,
                  "id": 137,
                  "nodeType": "Return",
                  "src": "1841:30:0"
                }
              ]
            },
            "documentation": null,
            "id": 139,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getTotalStuck",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 130,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 129,
                  "name": "_ownerAddr",
                  "nodeType": "VariableDeclaration",
                  "scope": 139,
                  "src": "1785:18:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 128,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1785:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1784:20:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 133,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 132,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 139,
                  "src": "1826:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 131,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1826:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1825:6:0"
            },
            "scope": 140,
            "src": "1762:116:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 141,
        "src": "60:1820:0"
      }
    ],
    "src": "0:1881:0"
  },
  "legacyAST": {
    "absolutePath": "/Users/hyun/dev/Fito/fito.ga/contracts/GeneralMeeting.sol",
    "exportedSymbols": {
      "GeneralMeeting": [
        140
      ]
    },
    "id": 141,
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
        "id": 140,
        "linearizedBaseContracts": [
          140
        ],
        "name": "GeneralMeeting",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 4,
            "name": "shareOfCompany",
            "nodeType": "VariableDeclaration",
            "scope": 140,
            "src": "90:27:0",
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
              "src": "90:4:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "3130303030",
              "id": 3,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "112:5:0",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_rational_10000_by_1",
                "typeString": "int_const 10000"
              },
              "value": "10000"
            },
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 6,
            "name": "ethTaker",
            "nodeType": "VariableDeclaration",
            "scope": 140,
            "src": "139:16:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 5,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "139:7:0",
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
            "id": 10,
            "name": "ownedShares",
            "nodeType": "VariableDeclaration",
            "scope": 140,
            "src": "162:37:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
              "typeString": "mapping(address => uint256)"
            },
            "typeName": {
              "id": 9,
              "keyType": {
                "id": 7,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "171:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "162:25:0",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                "typeString": "mapping(address => uint256)"
              },
              "valueType": {
                "id": 8,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "182:4:0",
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
            "canonicalName": "GeneralMeeting.tradingData",
            "id": 23,
            "members": [
              {
                "constant": false,
                "id": 12,
                "name": "tradingShares",
                "nodeType": "VariableDeclaration",
                "scope": 23,
                "src": "235:18:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 11,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "235:4:0",
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
                "id": 14,
                "name": "sellerAddr",
                "nodeType": "VariableDeclaration",
                "scope": 23,
                "src": "310:18:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 13,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "310:7:0",
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
                "id": 16,
                "name": "buyerAddr",
                "nodeType": "VariableDeclaration",
                "scope": 23,
                "src": "357:17:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 15,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "357:7:0",
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
                "id": 18,
                "name": "tradingPrice",
                "nodeType": "VariableDeclaration",
                "scope": 23,
                "src": "403:17:0",
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
                  "src": "403:4:0",
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
                "name": "timestamp",
                "nodeType": "VariableDeclaration",
                "scope": 23,
                "src": "430:14:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 19,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "430:4:0",
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
                "id": 22,
                "name": "isTradingComplete",
                "nodeType": "VariableDeclaration",
                "scope": 23,
                "src": "454:22:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "typeName": {
                  "id": 21,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "454:4:0",
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
            "scope": 140,
            "src": "206:277:0",
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 26,
            "name": "tradingDatas",
            "nodeType": "VariableDeclaration",
            "scope": 140,
            "src": "489:33:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_struct$_tradingData_$23_storage_$dyn_storage",
              "typeString": "struct GeneralMeeting.tradingData[]"
            },
            "typeName": {
              "baseType": {
                "contractScope": null,
                "id": 24,
                "name": "tradingData",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 23,
                "src": "489:11:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_tradingData_$23_storage_ptr",
                  "typeString": "struct GeneralMeeting.tradingData"
                }
              },
              "id": 25,
              "length": null,
              "nodeType": "ArrayTypeName",
              "src": "489:13:0",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_struct$_tradingData_$23_storage_$dyn_storage_ptr",
                "typeString": "struct GeneralMeeting.tradingData[]"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 41,
              "nodeType": "Block",
              "src": "575:84:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 35,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 31,
                        "name": "ownedShares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10,
                        "src": "585:11:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 33,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 32,
                        "name": "_corpAddr",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 28,
                        "src": "597:9:0",
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
                      "src": "585:22:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 34,
                      "name": "shareOfCompany",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4,
                      "src": "610:14:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "585:39:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 36,
                  "nodeType": "ExpressionStatement",
                  "src": "585:39:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 39,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 37,
                      "name": "shareOfCompany",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4,
                      "src": "634:14:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 38,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "651:1:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "634:18:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 40,
                  "nodeType": "ExpressionStatement",
                  "src": "634:18:0"
                }
              ]
            },
            "documentation": null,
            "id": 42,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "initShares",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 29,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 28,
                  "name": "_corpAddr",
                  "nodeType": "VariableDeclaration",
                  "scope": 42,
                  "src": "549:17:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 27,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "549:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "548:19:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 30,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "575:0:0"
            },
            "scope": 140,
            "src": "529:130:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 51,
              "nodeType": "Block",
              "src": "713:37:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 49,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 47,
                      "name": "ethTaker",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6,
                      "src": "723:8:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 48,
                      "name": "_ethTaker",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 44,
                      "src": "734:9:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "723:20:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 50,
                  "nodeType": "ExpressionStatement",
                  "src": "723:20:0"
                }
              ]
            },
            "documentation": null,
            "id": 52,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setEthTaker",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 45,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 44,
                  "name": "_ethTaker",
                  "nodeType": "VariableDeclaration",
                  "scope": 52,
                  "src": "686:17:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 43,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "686:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "685:19:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 46,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "713:0:0"
            },
            "scope": 140,
            "src": "665:85:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "private"
          },
          {
            "body": {
              "id": 126,
              "nodeType": "Block",
              "src": "905:537:0",
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
                        "id": 70,
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
                          "id": 66,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 62,
                              "name": "ownedShares",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 10,
                              "src": "923:11:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 64,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 63,
                              "name": "_sellerAddr",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 54,
                              "src": "935:11:0",
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
                            "src": "923:24:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">=",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 65,
                            "name": "_tradingShares",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 56,
                            "src": "951:14:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "923:42:0",
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
                          "id": 69,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 67,
                            "name": "_tradingShares",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 56,
                            "src": "969:14:0",
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
                            "id": 68,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "987:1:0",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "969:19:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "923:65:0",
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
                      "id": 61,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        215,
                        216
                      ],
                      "referencedDeclaration": 215,
                      "src": "915:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 71,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "915:74:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 72,
                  "nodeType": "ExpressionStatement",
                  "src": "915:74:0"
                },
                {
                  "assignments": [
                    74
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 74,
                      "name": "newTradingData",
                      "nodeType": "VariableDeclaration",
                      "scope": 127,
                      "src": "999:33:0",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_tradingData_$23_memory_ptr",
                        "typeString": "struct GeneralMeeting.tradingData"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 73,
                        "name": "tradingData",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 23,
                        "src": "999:11:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_tradingData_$23_storage_ptr",
                          "typeString": "struct GeneralMeeting.tradingData"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 85,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 76,
                        "name": "_tradingShares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 56,
                        "src": "1047:14:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 77,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 212,
                          "src": "1063:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 78,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1063:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 79,
                        "name": "_sellerAddr",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 54,
                        "src": "1075:11:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 80,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 212,
                          "src": "1088:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 81,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "value",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1088:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 82,
                        "name": "now",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 214,
                        "src": "1099:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "66616c7365",
                        "id": 83,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1104:5:0",
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
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
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
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 75,
                      "name": "tradingData",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 23,
                      "src": "1035:11:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_struct$_tradingData_$23_storage_ptr_$",
                        "typeString": "type(struct GeneralMeeting.tradingData storage pointer)"
                      }
                    },
                    "id": 84,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "structConstructorCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1035:75:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_tradingData_$23_memory",
                      "typeString": "struct GeneralMeeting.tradingData memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "999:111:0"
                },
                {
                  "assignments": [
                    87
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 87,
                      "name": "tradingIdx",
                      "nodeType": "VariableDeclaration",
                      "scope": 127,
                      "src": "1120:15:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 86,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "1120:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 92,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 90,
                        "name": "newTradingData",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 74,
                        "src": "1156:14:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_tradingData_$23_memory_ptr",
                          "typeString": "struct GeneralMeeting.tradingData memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_tradingData_$23_memory_ptr",
                          "typeString": "struct GeneralMeeting.tradingData memory"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 88,
                        "name": "tradingDatas",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 26,
                        "src": "1138:12:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_tradingData_$23_storage_$dyn_storage",
                          "typeString": "struct GeneralMeeting.tradingData storage ref[] storage ref"
                        }
                      },
                      "id": 89,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1138:17:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_struct$_tradingData_$23_storage_$returns$_t_uint256_$",
                        "typeString": "function (struct GeneralMeeting.tradingData storage ref) returns (uint256)"
                      }
                    },
                    "id": 91,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1138:33:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1120:51:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 94,
                        "name": "_sellerAddr",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 54,
                        "src": "1193:11:0",
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
                      "id": 93,
                      "name": "setEthTaker",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 52,
                      "src": "1181:11:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 95,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1181:24:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 96,
                  "nodeType": "ExpressionStatement",
                  "src": "1181:24:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 102,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 97,
                        "name": "ownedShares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10,
                        "src": "1215:11:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 100,
                      "indexExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 98,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 212,
                          "src": "1227:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 99,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1227:10:0",
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
                      "src": "1215:23:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "-=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 101,
                      "name": "_tradingShares",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 56,
                      "src": "1242:14:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1215:41:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 103,
                  "nodeType": "ExpressionStatement",
                  "src": "1215:41:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 108,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 104,
                        "name": "ownedShares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10,
                        "src": "1266:11:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 106,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 105,
                        "name": "_sellerAddr",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 54,
                        "src": "1278:11:0",
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
                      "src": "1266:24:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "+=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 107,
                      "name": "_tradingShares",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 56,
                      "src": "1294:14:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1266:42:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 109,
                  "nodeType": "ExpressionStatement",
                  "src": "1266:42:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 113,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 212,
                          "src": "1339:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 114,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "value",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1339:9:0",
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
                        "id": 110,
                        "name": "_sellerAddr",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 54,
                        "src": "1318:11:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "id": 112,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1318:20:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 115,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1318:31:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 116,
                  "nodeType": "ExpressionStatement",
                  "src": "1318:31:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 122,
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
                          "id": 117,
                          "name": "tradingDatas",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 26,
                          "src": "1359:12:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_struct$_tradingData_$23_storage_$dyn_storage",
                            "typeString": "struct GeneralMeeting.tradingData storage ref[] storage ref"
                          }
                        },
                        "id": 119,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 118,
                          "name": "tradingIdx",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 87,
                          "src": "1372:10:0",
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
                        "src": "1359:24:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_tradingData_$23_storage",
                          "typeString": "struct GeneralMeeting.tradingData storage ref"
                        }
                      },
                      "id": 120,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "isTradingComplete",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 22,
                      "src": "1359:42:0",
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
                      "id": 121,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1404:4:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "1359:49:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 123,
                  "nodeType": "ExpressionStatement",
                  "src": "1359:49:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 124,
                    "name": "tradingIdx",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 87,
                    "src": "1425:10:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 60,
                  "id": 125,
                  "nodeType": "Return",
                  "src": "1418:17:0"
                }
              ]
            },
            "documentation": null,
            "id": 127,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "addTradingData",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 57,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 54,
                  "name": "_sellerAddr",
                  "nodeType": "VariableDeclaration",
                  "scope": 127,
                  "src": "834:19:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 53,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "834:7:0",
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
                  "id": 56,
                  "name": "_tradingShares",
                  "nodeType": "VariableDeclaration",
                  "scope": 127,
                  "src": "855:19:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 55,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "855:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "833:42:0"
            },
            "payable": true,
            "returnParameters": {
              "id": 60,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 59,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 127,
                  "src": "899:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 58,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "899:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "898:6:0"
            },
            "scope": 140,
            "src": "810:632:0",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 138,
              "nodeType": "Block",
              "src": "1831:47:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 134,
                      "name": "ownedShares",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10,
                      "src": "1848:11:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                        "typeString": "mapping(address => uint256)"
                      }
                    },
                    "id": 136,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 135,
                      "name": "_ownerAddr",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 129,
                      "src": "1860:10:0",
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
                    "src": "1848:23:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 133,
                  "id": 137,
                  "nodeType": "Return",
                  "src": "1841:30:0"
                }
              ]
            },
            "documentation": null,
            "id": 139,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getTotalStuck",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 130,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 129,
                  "name": "_ownerAddr",
                  "nodeType": "VariableDeclaration",
                  "scope": 139,
                  "src": "1785:18:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 128,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1785:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1784:20:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 133,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 132,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 139,
                  "src": "1826:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 131,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1826:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1825:6:0"
            },
            "scope": 140,
            "src": "1762:116:0",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 141,
        "src": "60:1820:0"
      }
    ],
    "src": "0:1881:0"
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
      "transactionHash": "0x0c0f4157de7776ec874b80b81de32f7ec97bcac92d8ac732b129df1be04f7d0b"
    }
  },
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-11-13T04:58:09.117Z"
}