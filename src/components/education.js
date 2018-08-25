import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';

class Education extends Component{
    render(){
        return(
            <Grid>
                <Cell col={4}>LeftSide</Cell>
                <Cell col={8}>RightSide</Cell>
            </Grid>
        )
    }
}

export default Education;