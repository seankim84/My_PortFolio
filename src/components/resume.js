import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

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
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;