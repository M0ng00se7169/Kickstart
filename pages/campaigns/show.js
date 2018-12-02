import React, { Component } from 'react'
import Layout from '../../components/Layout'
import Campaign from '../../etherium/campaign'

class CampaignShow extends Component {
    static async getInitialProps(props) {
        const campaign = Campaign(props.query.address) // Actual Address of the Campaign

        const summary = await campaign.methods.getSummary().call()

        return { summary: summary }
    }
    
    render() {
        return (
            <Layout>
                <h3>Campaign Show</h3>
            </Layout>
        )
    }
}

export default CampaignShow