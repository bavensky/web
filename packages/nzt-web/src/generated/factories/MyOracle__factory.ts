/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MyOracle, MyOracleInterface } from "../MyOracle";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "lat",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "lon",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "name",
        type: "string",
      },
    ],
    name: "AddLocation",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "AddWhitelist",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "idx",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "OracleUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "RemoveWhitelist",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "lat",
        type: "string",
      },
      {
        internalType: "string",
        name: "lon",
        type: "string",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
    ],
    name: "addLocation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_addr",
        type: "address",
      },
    ],
    name: "addWhitelist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "addresses",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "arr",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "dummy",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "i",
        type: "uint256",
      },
    ],
    name: "get",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAddressList",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllLocations",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "lat",
            type: "string",
          },
          {
            internalType: "string",
            name: "lon",
            type: "string",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
        ],
        internalType: "struct MyOracle.Location[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getArr",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getLength",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "getValueAt",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "locations",
    outputs: [
      {
        internalType: "string",
        name: "lat",
        type: "string",
      },
      {
        internalType: "string",
        name: "lon",
        type: "string",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "metaData",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "remove",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_addr",
        type: "address",
      },
    ],
    name: "removeWhitelist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "sensors",
    outputs: [
      {
        internalType: "string",
        name: "lat",
        type: "string",
      },
      {
        internalType: "string",
        name: "lon",
        type: "string",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "sensorsValue",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[10]",
        name: "_values",
        type: "uint256[10]",
      },
    ],
    name: "setArr",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "idx",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "lat",
        type: "string",
      },
      {
        internalType: "string",
        name: "lon",
        type: "string",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
    ],
    name: "setMeta",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "updateValue",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "valueOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "values",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "whitelistAddress",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161154438038061154483398101604081905261002f9161006a565b600080546001600160a01b039092166001600160a01b031990921682178155908152600460205260409020805460ff1916600117905561009a565b60006020828403121561007c57600080fd5b81516001600160a01b038116811461009357600080fd5b9392505050565b61149b806100a96000396000f3fe608060405234801561001057600080fd5b50600436106101735760003560e01c80638da5cb5b116100de578063c0c39c7e11610097578063f19ba20911610071578063f19ba20914610367578063f80f5dd51461037a578063f92ee84f1461038d578063fb8cbced146103cd57600080fd5b8063c0c39c7e14610341578063cbc609721461025a578063edf26d9b1461035457600080fd5b80638da5cb5b146102e05780639507d39a1461030b578063a48028aa1461025a578063b9e0db351461031e578063baf2a4eb14610331578063be1c766b1461033957600080fd5b806354fe9fd71161013057806354fe9fd71461023a57806370a082311461025a57806371e5ee5f1461028357806378c8cda71461029657806381119130146102a9578063887a5042146102be57600080fd5b80631076e967146101785780631b373f4e14610196578063207978a6146101b757806332e43a11146101cc57806341566585146101f45780634cc8221514610227575b600080fd5b6101806103e2565b60405161018d919061129f565b60405180910390f35b6101a96101a4366004610fe7565b6105f7565b60405190815260200161018d565b6101ca6101c53660046110d7565b610680565b005b60408051808201909152600381526268657960e81b60208201525b60405161018d9190611378565b610217610202366004610fc5565b60046020526000908152604090205460ff1681565b604051901515815260200161018d565b6101ca61023536600461115f565b610805565b6101a9610248366004610fc5565b60056020526000908152604090205481565b6101a9610268366004610fc5565b6001600160a01b031660009081526005602052604090205490565b6101a961029136600461115f565b610826565b6101ca6102a4366004610fc5565b610847565b6102b16108f8565b60405161018d9190611252565b6102d16102cc36600461109a565b61095a565b60405161018d9392919061138b565b6000546102f3906001600160a01b031681565b6040516001600160a01b03909116815260200161018d565b6101a961031936600461115f565b610b1f565b6102d161032c36600461115f565b610b46565b6101e7610b79565b6008546101a9565b6101ca61034f366004611178565b610c07565b6102f361036236600461115f565b610cb8565b6101ca610375366004611011565b610ce2565b6101ca610388366004610fc5565b610cf3565b6103bb61039b36600461109a565b805160208183018101805160078252928201919093012091525460ff1681565b60405160ff909116815260200161018d565b6103d5610df2565b60405161018d9190611340565b60606009805480602002602001604051908101604052809291908181526020016000905b828210156105ee5783829060005260206000209060030201604051806060016040529081600082018054610439906113fe565b80601f0160208091040260200160405190810160405280929190818152602001828054610465906113fe565b80156104b25780601f10610487576101008083540402835291602001916104b2565b820191906000526020600020905b81548152906001019060200180831161049557829003601f168201915b505050505081526020016001820180546104cb906113fe565b80601f01602080910402602001604051908101604052809291908181526020018280546104f7906113fe565b80156105445780601f1061051957610100808354040283529160200191610544565b820191906000526020600020905b81548152906001019060200180831161052757829003601f168201915b5050505050815260200160028201805461055d906113fe565b80601f0160208091040260200160405190810160405280929190818152602001828054610589906113fe565b80156105d65780601f106105ab576101008083540402835291602001916105d6565b820191906000526020600020905b8154815290600101906020018083116105b957829003601f168201915b50505050508152505081526020019060010190610406565b50505050905090565b6001600160a01b03821660009081526005602052604081205461065f576001805480820182556000919091527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf60180546001600160a01b0319166001600160a01b0385161790555b506001600160a01b0391909116600090815260056020526040902081905590565b6007816040516106909190611236565b9081526040519081900360200190205460ff16156106f55760405162461bcd60e51b815260206004820152601860248201527f4c6f636174696f6e20616c7265616479206578697374732e000000000000000060448201526064015b60405180910390fd5b7faefe92e1bf7f2683b747d69535718cc2b5af27d5dd6086df4862707451fde8a78383836040516107289392919061138b565b60405180910390a160016007826040516107429190611236565b908152604080519182900360209081018320805460ff9590951660ff199095169490941790935560608201815285825281830185905281018390526009805460018101825560009190915281518051929360039092027f6e1540171b6c0c960b71a7020d9f60077f6af931a8bbf590da0223dacf75c7af01926107c89284920190610e49565b5060208281015180516107e19260018501920190610e49565b50604082015180516107fd916002840191602090910190610e49565b505050505050565b6008818154811061081857610818611439565b600091825260208220015550565b6008818154811061083657600080fd5b600091825260209091200154905081565b6001600160a01b03811660009081526004602052604090205460ff166108a35760405162461bcd60e51b81526020600482015260116024820152701059191c995cdcc81b9bdd08199bdd5b99607a1b60448201526064016106ec565b6040516001600160a01b038216907fa6667e187c57c5b0fa4e1122a695ed0754287513bcb4901fa6c1f44ba22c018790600090a26001600160a01b03166000908152600460205260409020805460ff19169055565b6060600180548060200260200160405190810160405280929190818152602001828054801561095057602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610932575b5050505050905090565b8051602081830181018051600682529282019190930120915280548190610980906113fe565b80601f01602080910402602001604051908101604052809291908181526020018280546109ac906113fe565b80156109f95780601f106109ce576101008083540402835291602001916109f9565b820191906000526020600020905b8154815290600101906020018083116109dc57829003601f168201915b505050505090806001018054610a0e906113fe565b80601f0160208091040260200160405190810160405280929190818152602001828054610a3a906113fe565b8015610a875780601f10610a5c57610100808354040283529160200191610a87565b820191906000526020600020905b815481529060010190602001808311610a6a57829003601f168201915b505050505090806002018054610a9c906113fe565b80601f0160208091040260200160405190810160405280929190818152602001828054610ac8906113fe565b8015610b155780601f10610aea57610100808354040283529160200191610b15565b820191906000526020600020905b815481529060010190602001808311610af857829003601f168201915b5050505050905083565b600060088281548110610b3457610b34611439565b90600052602060002001549050919050565b60098181548110610b5657600080fd5b9060005260206000209060030201600091509050806000018054610980906113fe565b60028054610b86906113fe565b80601f0160208091040260200160405190810160405280929190818152602001828054610bb2906113fe565b8015610bff5780601f10610bd457610100808354040283529160200191610bff565b820191906000526020600020905b815481529060010190602001808311610be257829003601f168201915b505050505081565b8260098581548110610c1b57610c1b611439565b90600052602060002090600302016000019080519060200190610c3f929190610e49565b508160098581548110610c5457610c54611439565b90600052602060002090600302016001019080519060200190610c78929190610e49565b508060098581548110610c8d57610c8d611439565b90600052602060002090600302016002019080519060200190610cb1929190610e49565b5050505050565b60018181548110610cc857600080fd5b6000918252602090912001546001600160a01b0316905081565b610cef600882600a610ecd565b5050565b6001600160a01b038116610d3b5760405162461bcd60e51b815260206004820152600f60248201526e496e76616c6964206164647265737360881b60448201526064016106ec565b6001600160a01b03811660009081526004602052604090205460ff1615610d9a5760405162461bcd60e51b8152602060048201526013602482015272105b1c9958591e481dda1a5d195b1a5cdd1959606a1b60448201526064016106ec565b6040516001600160a01b038216907fe463fa6bdecb16f96f58191d902152633214e760ea443684105a7eef1ad16b9d90600090a26001600160a01b03166000908152600460205260409020805460ff19166001179055565b6060600880548060200260200160405190810160405280929190818152602001828054801561095057602002820191906000526020600020905b815481526020019060010190808311610e2c575050505050905090565b828054610e55906113fe565b90600052602060002090601f016020900481019282610e775760008555610ebd565b82601f10610e9057805160ff1916838001178555610ebd565b82800160010185558215610ebd579182015b82811115610ebd578251825591602001919060010190610ea2565b50610ec9929150610f07565b5090565b828054828255906000526020600020908101928215610ebd5791602002820182811115610ebd578251825591602001919060010190610ea2565b5b80821115610ec95760008155600101610f08565b80356001600160a01b0381168114610f3357600080fd5b919050565b600082601f830112610f4957600080fd5b813567ffffffffffffffff80821115610f6457610f6461144f565b604051601f8301601f19908116603f01168101908282118183101715610f8c57610f8c61144f565b81604052838152866020858801011115610fa557600080fd5b836020870160208301376000602085830101528094505050505092915050565b600060208284031215610fd757600080fd5b610fe082610f1c565b9392505050565b60008060408385031215610ffa57600080fd5b61100383610f1c565b946020939093013593505050565b600061014080838503121561102557600080fd5b83601f84011261103457600080fd5b60405181810181811067ffffffffffffffff821117156110565761105661144f565b604052808483810187101561106a57600080fd5b600093505b600a84101561108f5780358252600193909301926020918201910161106f565b509095945050505050565b6000602082840312156110ac57600080fd5b813567ffffffffffffffff8111156110c357600080fd5b6110cf84828501610f38565b949350505050565b6000806000606084860312156110ec57600080fd5b833567ffffffffffffffff8082111561110457600080fd5b61111087838801610f38565b9450602086013591508082111561112657600080fd5b61113287838801610f38565b9350604086013591508082111561114857600080fd5b5061115586828701610f38565b9150509250925092565b60006020828403121561117157600080fd5b5035919050565b6000806000806080858703121561118e57600080fd5b84359350602085013567ffffffffffffffff808211156111ad57600080fd5b6111b988838901610f38565b945060408701359150808211156111cf57600080fd5b6111db88838901610f38565b935060608701359150808211156111f157600080fd5b506111fe87828801610f38565b91505092959194509250565b600081518084526112228160208601602086016113ce565b601f01601f19169290920160200192915050565b600082516112488184602087016113ce565b9190910192915050565b6020808252825182820181905260009190848201906040850190845b818110156112935783516001600160a01b03168352928401929184019160010161126e565b50909695505050505050565b60006020808301818452808551808352604092508286019150828160051b87010184880160005b8381101561133257603f198984030185528151606081518186526112ec8287018261120a565b915050888201518582038a870152611304828261120a565b9150508782015191508481038886015261131e818361120a565b9689019694505050908601906001016112c6565b509098975050505050505050565b6020808252825182820181905260009190848201906040850190845b818110156112935783518352928401929184019160010161135c565b602081526000610fe0602083018461120a565b60608152600061139e606083018661120a565b82810360208401526113b0818661120a565b905082810360408401526113c4818561120a565b9695505050505050565b60005b838110156113e95781810151838201526020016113d1565b838111156113f8576000848401525b50505050565b600181811c9082168061141257607f821691505b6020821081141561143357634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fdfea26469706673582212206cc28ec247a603e3afb2ca2978f6b314eb10d445c5313e0db4d2706726fe09ab64736f6c63430008060033";

type MyOracleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MyOracleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MyOracle__factory extends ContractFactory {
  constructor(...args: MyOracleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "MyOracle";
  }

  deploy(
    _owner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MyOracle> {
    return super.deploy(_owner, overrides || {}) as Promise<MyOracle>;
  }
  getDeployTransaction(
    _owner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_owner, overrides || {});
  }
  attach(address: string): MyOracle {
    return super.attach(address) as MyOracle;
  }
  connect(signer: Signer): MyOracle__factory {
    return super.connect(signer) as MyOracle__factory;
  }
  static readonly contractName: "MyOracle";
  public readonly contractName: "MyOracle";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MyOracleInterface {
    return new utils.Interface(_abi) as MyOracleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MyOracle {
    return new Contract(address, _abi, signerOrProvider) as MyOracle;
  }
}
