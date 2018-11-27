import React, { Component } from 'react'
import factory from '../etherium/factory'

class CampaignIndex extends Component {
    async componentDidMount() {
        const campaigns = await factory.methods.getDeployedCampaigns().call()
        console.log(campaigns)
    }

    render() {
        return <div>CampaignIndex !</div>
    }
}

export default CampaignIndex
