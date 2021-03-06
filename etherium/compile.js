const path = require('path')
const fs = require('fs-extra')
const solc = require('solc')

const buildPath = path.resolve(__dirname, 'build')
fs.removeSync(buildPath)

const campaignPath = path.resolve(__dirname, 'contracts', 'Campaign.sol')
const source = fs.readFileSync(campaignPath, 'utf8')
const output = solc.compile(source, 1)

console.log(output.contracts)
fs.ensureDirSync(buildPath)

fs.outputJsonSync(
    path.resolve(buildPath, 'Campaign.json'),
    output.contracts[":Campaign"]
)

fs.outputJsonSync(
    path.resolve(buildPath, 'CampaignFactory.json'),
    output.contracts[":CampaignFactory"]
)