import React, { Component } from 'react';
import { Tabs, Tab, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 2 };
    }

    toggleCategories() {
        if(this.state.activeTab === 0){
            return(
                <div className="projects-grid">
                    <Card shadow={0} style={{width: '450px', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff',height:'176px', background: 'url(https://reactjs.org/logo-og.png) center / cover '}}>Welcome</CardTitle>
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris sagittis pellentesque lacus eleifend lacinia...
                    </CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    <Card shadow={0} style={{width: '450px', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff',height:'176px', background: 'url(https://reactjs.org/logo-og.png) center / cover '}}>Welcome</CardTitle>
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris sagittis pellentesque lacus eleifend lacinia...
                    </CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    <Card shadow={0} style={{width: '450px', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff',height:'176px', background: 'url(https://reactjs.org/logo-og.png) center / cover '}}>Welcome</CardTitle>
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris sagittis pellentesque lacus eleifend lacinia...
                    </CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
                
                )
            } else if(this.state.activeTab === 1){
                return(
                    <div><h1>React Context API</h1></div>
                )
            } else if(this.state.activeTab === 2){
                return(
                    <div><h1>React-Native</h1></div>
                )
            } else if(this.state.activeTab === 3){
                return(
                    <div><h1>GraphQL</h1></div>
                ) 
            } else if(this.state.activeTab === 4){
                    return(
                        <div><h1>Django</h1></div>
                    )
                }
            }

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>React Context API</Tab>
                    <Tab>React-Native</Tab>
                    <Tab>GraphQL</Tab>
                    <Tab>Django</Tab>
                </Tabs>
                <section className="project-grid">
                    {this.toggleCategories()}
                </section>
            </div>    
        );
    }
}
export default Projects;