import React, { Component } from 'react';
import { Tabs, Tab } from 'react-mdl';


class Projects extends Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 2 };
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>React-Native</Tab>
                    <Tab>GraphQL</Tab>
                    <Tab>Django</Tab>
                </Tabs>
            </div>    
        );
    }
}
export default Projects;