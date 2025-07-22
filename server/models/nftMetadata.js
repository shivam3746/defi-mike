const mongoose = require('mongoose');

const nftMetaDataSchema = new mongoose.Schema({
    contractAddress: {type: String, required: true},
    tokenId: {type: String, required: true},
    name: String,
    description : String,
    image: String
},{timestamps: true});

module.exports = mongoose.model('NFTMetaData', nftMetaDataSchema);