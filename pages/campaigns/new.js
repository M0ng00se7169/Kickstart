import React, { Component } from 'react'
import { Form, Button, Input } from 'semantic-ui-react'
import Layout from '../../components/Layout'
import factory from '../../etherium/factory'

class CampaignNew extends Component {
    state = {
        minimumContribution: ''
    }

    onSubmit = async (event) => {
        event.preventDefault();

        await factory.methods
            .createCampaign(this.state.minimumContribution)
            .send({
                
            })
    }
    
    render() {
        return (
            <Layout>
                <h3>Create a Campaign</h3> 
                <Form onSubmit={this.onSubmit}>
                    <Form.Field>
                        <label>Minimum Contribution</label>
                        <Input
                            label="wei"
                            labelPosition="right"
                            value={this.state.minimumContribution}
                            onChange={ event => 
                                this.setState({ minimumContribution: event.target.value })}
                        />
                    </Form.Field>
                    <Button primary>Create!</Button>
                </Form>
            </Layout>
        )
    }
}

export default CampaignNew