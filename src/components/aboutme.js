import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';
import Sean2 from '../image/Sean2.jpeg';
import Introduce from './introduce';

class AboutMe extends Component {
    render(){
        return (
            <div>
                <Grid>
                    <Cell col={8}>
                        <h2 style={{paddingTop:'2rem'}}>About Me</h2>
                        <h5 style={{fontWeight:"bold"}}>Intro</h5>
                        <hr style={{borderTop: '3px solid #833fb2', width:'50%'}} />
                        <Introduce />

                        <hr style={{borderTop: '3px solid #833fb2', width:'50%'}} />
                        </Cell>
                        <Cell className="about-right-col" col={4}>
                            <div className="Image" style={{}}>
                                <img style={{width: '90%', height: '90%', borderRadius: "10px"}}src={Sean2} alt="SeanPhoto" />
                            </div>
                        </Cell>
                </Grid>
            </div>
            
        )
    }
}

export default AboutMe;