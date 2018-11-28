import web3 from './web3'
import CampaignFactory from './build/CampaignFactory.json'

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xd4906e52a1027A6d99905e2d368EcC2BeDb12154'
)

export default instance;
