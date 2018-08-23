import React, { Component } from 'react';
import { Grid, Ceil } from 'react-mdl'; 


class LandingPage extends Component {
    render(){
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Ceil col={12}></Ceil>
                </Grid>
            </div>
        )
    }
}

export default LandingPage;