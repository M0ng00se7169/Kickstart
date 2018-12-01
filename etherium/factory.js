import web3 from './web3'
import CampaignFactory from './build/CampaignFactory.json'

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xb37f42e14539D429cF1BF480040C8B22CC6b8aAD'
)

export default instance;
