import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Introduce extends Component {
    render() {
        return(
            <div>
                <Grid>
                    <Cell col={6}>
                        <p style={{fontSize:"20px", lineHeight: "35px"}}>
                        Hellow my name is Sean.Kim, Korean name is Hyeon Gyu Kim. Good to see you.<br />
                        The world is wide, and life is short. This lesson learned while traveling has driven my life; I have decided not to fear change.<br />
                        I have taught myself but have leared more collaboratively. Eager to meet other student developers.<br />
                        My passion for cultivating my career as a developer has broadened my practical experience throughout my global journey.<br />
                        Now I look forward to continuing this journey in this city to attain profound theoretical usderstandings of Computer Science.
                        </p>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Introduce
