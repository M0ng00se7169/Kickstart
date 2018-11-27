import web3 from './web3'
import CampaignFactory from './build/CampaignFactory.json'

const contract = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xc91C0e5099B08Dd207e7957ACfe777C6648800Bb'
)

export default contract;
