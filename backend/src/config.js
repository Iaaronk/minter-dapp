const basePath = process.cwd();
const fs = require("fs");
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "The Noir Agency";
const description = "A community celebrating Black Culture, Fashion, Excellence, and Inclusion. United by a first-of-its-kind collection featuring 2,000 artworks of diverse Black Secret Agents.Created and Illustrated by Aaron Kelly (@iaaronk)";
const baseUri = "ipfs://NewUriToReplace"; // This will be replaced automatically

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 500,
    layersOrder: [
      { name: "Background" },
      { name: "Agent 001" },
      { name: "Eye color 001" },
      { name: "Outfit 001" },
      { name: "Hair 001" },
      
    ],
  },
  {
    growEditionSizeTo: 1000,
    layersOrder: [
      { name: "Background" },
      { name: "Agent 002" },
      { name: "Eye color 002" },
      { name: "Outfit 002" },
      { name: "Hair 002" },
      
    ],
  },
  {
    growEditionSizeTo: 1500,
    layersOrder: [
      
      { name: "Background" },
      { name: "Agent 003" },
      { name: "Eye color 003" },
      { name: "Outfit 003" },
      { name: "Hair 003" },
      { name: "Beard 003" },
      
    ],
  },
  {
    growEditionSizeTo: 2000,
    layersOrder: [
      { name: "Background" },
      { name: "Agent 004" },
      { name: "Eye color 004" },
      { name: "Outfit 004" },
      { name: "Hair 004" },
      
    ],
  },
];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 2500,
  height: 2500,
  smoothing: false,
};

const extraMetadata = {
  //external_url: "https://codecats.xyz", // Replace with your website or remove this line if you do not have one.
};

// NFTPort Info
// ** REQUIRED **
const AUTH = "bf525c19-6d79-49f0-a4ea-125102780da8";
const LIMIT = 2; // Your API key rate limit
const CONTRACT_NAME = 'The Noir Agency';
const CONTRACT_SYMBOL = 'TNA';
const CONTRACT_TYPE = 'erc721';
const MINT_TO_ADDRESS = '0x1ebC8c6C5C5A00Cc7A7bAa038598BC5E024e98E1';
const CHAIN = 'rinkeby';
const METADATA_UPDATABLE = true; // set to false if you don't want to allow metadata updates after minting
const ROYALTY_SHARE = 1000; // Percentage of the token price that goes to the royalty address. 100 bps = 1%
const ROYALTY_ADDRESS = "0x1ebC8c6C5C5A00Cc7A7bAa038598BC5E024e98E1"; // Address that will receive the royalty
// ** OPTIONAL **
let CONTRACT_ADDRESS = "0xBBEF25b1A829D8884C746cE17ad8a92acBAE8660"; // If you want to manually include it
// Generic Metadata is optional if you want to reveal your NFTs
const GENERIC = true; // Set to true if you want to upload generic metas and reveal the real NFTs in the future
const GENERIC_TITLE = "Hidden Agent"; // Replace with what you want the generic titles to say.
const GENERIC_DESCRIPTION = "The Noir Agency coming soon"; // Replace with what you want the generic descriptions to say.
const GENERIC_IMAGE = [
  "ipfs://bafybeidni4f67yw4kbq2sashcjg4mf4qnilg2ufvz462tnsyb2w67powr4/hidden.png",
]; // Replace with your generic image(s). If multiple, separate with a comma.
const REVEAL_PROMPT = true; // Set to false if you want to disable the prompt to confirm each reveal.
const INTERVAL = 900000; // Milliseconds. This is the interval for it to check for sales and reveal the NFT. 900000 = 15 minutes.

// Automatically set contract address if deployed using the deployContract.js script
try {
  const rawContractData = fs.readFileSync(
    `${basePath}/build/contract/_contract.json`
  );
  const contractData = JSON.parse(rawContractData);
  if (contractData.response === "OK" && contractData.error === null) {
    CONTRACT_ADDRESS = contractData.contract_address;
  }
} catch (error) {
  // Do nothing, falling back to manual contract address
}
// END NFTPort Info

const solanaMetadata = {
  symbol: "YC",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.youtube.com/c/hashlipsnft",
  creators: [
    {
      address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
      share: 100,
    },
  ],
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
  AUTH,
  LIMIT,
  CONTRACT_ADDRESS,
  MINT_TO_ADDRESS,
  CHAIN,
  GENERIC,
  GENERIC_TITLE,
  GENERIC_DESCRIPTION,
  GENERIC_IMAGE,
  INTERVAL,
  CONTRACT_NAME,
  CONTRACT_SYMBOL,
  CONTRACT_TYPE,
  REVEAL_PROMPT,
  METADATA_UPDATABLE,
  ROYALTY_SHARE,
  ROYALTY_ADDRESS,
};
