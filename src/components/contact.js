import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
    render(){
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Kim Hyeon Gyu</h2>
                        <img src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                             alt="avartar"
                             style={{height: '250px'}}
                        />
                        <p style={{width:"75%", margin: "auto", paddingTop: '1em'}}>Full stack developer</p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Conatact Me</h2>
                        <hr />
                        <div className="contact-list">
                        <List>
                            <ListItem>
                                <ListItemContent style={{fontSize:"25px", fontFamily: 'Anton'}}>
                                    <i className='fa fa-phone-square' aria-hidden="true" />
                                    +84 90 270 4417
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontSize:"25px", fontFamily: 'Anton'}}>
                                    <i class="fa fa-skype" aria-hidden="true" />
                                    live:sean.kim84
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontSize:"25px", fontFamily: 'Anton'}}>
                                    <i class="fa fa-envelope" aria-hidden="true"/>
                                    sean.kim84@gmail.com
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontSize:"25px", fontFamily: 'Anton'}}>
                                    <i class="fa fa-globe"></i>
                                    Dist.7 Ho Chi Minh City in VietNam
                                </ListItemContent>
                            </ListItem>
                        </List>
                        </div>
                    </Cell>
                    <Cell col={6}></Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;