const basePath = process.cwd();
const fs = require("fs");
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);
const dotenv = require('dotenv');




const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "The Noir Agency";
const description = "A community celebrating Black Culture, Fashion, Excellence, and Inclusion. United by a first-of-its-kind collection featuring 2,500 artworks of diverse Black Secret Agents.Created and Illustrated by Aaron Kelly (@iaaronk)";
const baseUri = "ipfs://NewUriToReplace"; // This will be replaced automatically

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
  
    {
      growEditionSizeTo: 2125,
      layersOrder: [
        { name: "Background" },
        { name: "Agent 001" },
        { name: "Eye color 001" },
        { name: "Gala 001" },
        { name: "Hair 001" },
        { name: "Accessories 001" },
  
      ],
    },{
      growEditionSizeTo: 2125,
      layersOrder: [
        { name: "Background" },
        { name: "Agent 001" },
        { name: "Eye color 001" },
        { name: "Gala 001" },
        { name: "Hair 001" },
        { name: "Accessories 001" },
  
      ],
    },
    
  {
      growEditionSizeTo: 2250,
      layersOrder: [
        { name: "Background" },
        { name: "Agent 002" },
        { name: "Eye color 002" },
        { name: "Gala 002" },
        { name: "Hair 002" },
        { name: "Accessories 002" },
  
      ],
    },
    {
      growEditionSizeTo: 2375,
      layersOrder: [
        { name: "Background" },
        { name: "Agent 003" },
        { name: "Eye color 003" },
        { name: "Gala 003" },
        { name: "Hair 003" },
        { name: "Beard 003" },
      ],
    },
    {
      growEditionSizeTo: 2500,
      layersOrder: [
        { name: "Background" },
        { name: "Agent 004" },
        { name: "Eye color 004" },
        { name: "Gala 004" },
        { name: "Hair 004" },
        { name: "Accessories 004" },
  
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
  external_url: "https://codecats.xyz", // Replace with your website or remove this line if you do not have one.
};

// NFTPort Info
// ** REQUIRED **
//const AUTH = process.env.API_KEY;
const AUTH = '638ab196-e830-4440-a62e-4c1fe66033ba';
const LIMIT = 2; // Your API key rate limit
const CHAIN = 'rinkeby'; // only rinkeby or polygon

// REQUIRED CONTRACT DETAILS THAT CANNOT BE UPDATED LATER!
const CONTRACT_NAME = 'The Noir Agency';
const CONTRACT_SYMBOL = 'TNA';
const CONTRACT_TYPE = 'erc721';
const METADATA_UPDATABLE = true; // set to false if you don't want to allow metadata updates after minting
const MINT_TO_ADDRESS = "0x1ebC8c6C5C5A00Cc7A7bAa038598BC5E024e98E1";
const OWNER_ADDRESS = "0x1ebC8c6C5C5A00Cc7A7bAa038598BC5E024e98E1";
const TREASURY_ADDRESS = "0x1ebC8c6C5C5A00Cc7A7bAa038598BC5E024e98E1";
const MAX_SUPPLY = 2500; // The maximum number of NFTs that can be minted. CANNOT BE UPDATED!
const MINT_PRICE = 0.001; // Minting price per NFT. Rinkeby = ETH, Ethereum = ETH, Polygon = MATIC. CANNOT BE UPDATED!
const TOKENS_PER_MINT = 10; // maximum number of NFTs a user can mint in a single transaction. CANNOT BE UPDATED!

// REQUIRED CONTRACT DETAILS THAT CAN BE UPDATED LATER.
const PUBLIC_MINT_START_DATE = "2022-10-11T19:30:48+00:00"; // This is required. Eg: 2022-02-08T11:30:48+00:00

// OPTIONAL CONTRACT DETAILS THAT CAN BE UPDATED LATER.
const PRESALE_MINT_START_DATE = null; // Optional. Eg: 2022-02-08T11:30:48+00:00
const ROYALTY_SHARE = 1000; // Percentage of the token price that goes to the royalty address. 100 bps = 1%
const ROYALTY_ADDRESS = "0x1ebC8c6C5C5A00Cc7A7bAa038598BC5E024e98E1"; // Address that will receive the royalty
const BASE_URI = null; // only update if you want to manually set the base uri
const PREREVEAL_TOKEN_URI = null; // only update if you want to manually set the prereveal token uri
const PRESALE_WHITELISTED_ADDRESSES = []; // only update if you want to manually set the whitelisted addresses

// ** OPTIONAL **
let CONTRACT_ADDRESS = "0x9e35fbf428cc1a03aa0de0dda594d66ab881328b"; // If you want to manually include it
// Generic Metadata is optional if you want to reveal your NFTs
const GENERIC = true; // Set to true if you want to upload generic metas and reveal the real NFTs in the future
const GENERIC_TITLE = "Hidden Agents"; // Replace with what you want the generic titles to say if you want it to be different from the contract name.
const GENERIC_DESCRIPTION = "The Noir Agency coming soon"; // Replace with what you want the generic descriptions to say.
const GENERIC_IMAGE = "https://ipfs.io/ipfs/bafkreie36adwux5ift2j5yei2lirv7ei7e7xof2eesacevyymzfenyqqn4"; // Replace with your generic image that will display for all NFTs pre-reveal.
const REVEAL_PROMPT = true; // Set to false if you want to disable the prompt to confirm each reveal.
const INTERVAL = 900000; // Milliseconds. This is the interval for it to check for sales and reveal the NFT. 900000 = 15 minutes.
// Automatically set contract address if deployed using the deployContract.js script
try {
  const rawContractData = fs.readFileSync(
    `${basePath}/build/contract/_contract.json`
  );
  const contractData = JSON.parse(rawContractData);
  if (contractData.response === "OK") {
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
  CONTRACT_NAME,
  CONTRACT_SYMBOL,
  CONTRACT_TYPE,
  REVEAL_PROMPT,
  METADATA_UPDATABLE,
  ROYALTY_SHARE,
  ROYALTY_ADDRESS,
};
