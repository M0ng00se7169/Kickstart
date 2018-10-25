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

for (let contract in output.contracts) {
    fs.outputJsonSync(
        path.resolve(buildPath, output.contracts + '.json'),
        output.contracts
    )
}