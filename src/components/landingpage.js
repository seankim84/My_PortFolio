import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class LandingPage extends Component {
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                            src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwJS1sOwCuznwpN4JVs-ZywdZXjnsaM_WiK3PVraQs9ntx9yG4"
                            alt="seanPhoto" 
                            className="avatar-img"
                            />
                        <div className="banner-text">
                            <h1>Full Stack Developer</h1>
                            <hr />
                            <p>HTML/CSS | JavaScript | React | React-Native | NodeJs | Django | Express | GraphQL</p>
                            <div className="social-links">
                                {/* LinkedIN */}
                                <a href="https://www.linkedin.com/in/hyeon-gyu-kim-b59691112/" rel="noopener noreferrer" target="_blank">
                                    <i class="fa fa-linkedin" aria-hidden="true" />
                                </a>
                                {/* Github */}
                                <a href="https://github.com/seankim84" rel="noopener noreferrer" target="_blank">
                                    <i class="fa fa-github" />
                                </a>
                                {/* Instagram */}
                                <a href="https://www.instagram.com/sean.kim84/" rel="noopener noreferrer" target="_blank">
                                    <i class="fa fa-instagram"/>
                                </a>
                                {/* FaceBook */}
                                <a href="https://www.facebook.com/sean.kim.31586" rel="noopener noreferrer" target="_blank">
                                    <i class="fa fa-facebook-square"/>
                                </a>
                            </div>
                        </div>
                    </Cell>     
                </Grid>
            </div>
        )
    }
}

export default LandingPage;