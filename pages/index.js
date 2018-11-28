import React, { Component } from 'react'
import { Card, Button } from 'semantic-ui-react'
import factory from '../etherium/factory'

class CampaignIndex extends Component {
    static async getInitialProps() {
        const campaigns = await factory.methods.getDeployedCampaigns().call()

        return { campaigns }
    }
    
    renderCampaigns() {
        const items = this.props.campaigns.map(address => {
            return {
                header: address,
                description: <a>View Campaign</a>,
                fluid: true
            }
        })

        return <Card.Group items={items} />
    }

    render() {
        return (
            <div>
                <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css" />
                <h3>Open Campaingns</h3>
                {this.renderCampaigns()}
                <Button content="Create Campaign" icon="add circle" primary={true} />
            </div>
        )
    }
}

export default CampaignIndex;
