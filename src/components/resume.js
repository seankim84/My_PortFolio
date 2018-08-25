import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skill from './skills';

class Resume extends Component {
    render(){
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign:'center'}}>
                            <img src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                                 alt="avatar"
                                 style={{height: '200px'}}
                            />
                        </div>

                        <h2 style={{paddingTop:'2rem'}}>Kim Hyeon Gyu</h2>
                        <h4 style={{color: 'grey'}}>Coder</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width:'50%'}} />
                        <p>Programming is really fun</p>
                        <hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>
                        <h5>Address</h5>
                        <p>Dist.7 Ho Chi Minh City, Vietnam</p>
                        <h5>Phone</h5>
                        <p>+84 90 270 4417</p>
                        <h5>Email</h5>
                        <p>sean.kim84@gmail.com</p>
                        <h5>Web</h5>
                        <p><a href="https://seankim84.github.io/PortFolio/Profile.html" target="blank">https://seankim84.github.io/PortFolio/Profile.html</a></p>
                        <hr style={{borderTop: '3px solid #833fb2', width:'50%'}} />
                        </Cell>
                        <Cell className="resume-right-col" col={8}>
                            <h2>Education</h2>
                            <Education 
                                startYear={2014} 
                                endYear={2016}
                                schoolName="KANG WON National Univ"
                                schoolDescription="InterNational Univ"
                            />
                            <Education 
                                startYear={2014} 
                                endYear={2016}
                                schoolName="KANG WON National Univ"
                                schoolDescription="InterNational Univ"
                            />
                            <hr style={{borderTop:'3px solid #e22947'}} />
                            <h2>Experience</h2>
                            <Experience 
                                startYear={2014} 
                                endYear={2016}
                                jobName="KANG WON National Univ"
                                jobDescription="InterNational Univ"
                            />
                            <hr style={{borderTop:'3px solid #e22947'}} />
                            <h2>Skills</h2>
                            <Skill 
                                skills="JavaScript"
                                progress={100}
                            />
                            <Skill 
                                skills="HTML/CSS"
                                progress={80}
                            />
                            <Skill 
                                skills="NodeJS"
                                progress={50}
                            />
                            <Skill 
                                skills="React / React-Native"
                                progress={100}
                            />
                        </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;