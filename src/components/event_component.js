import React, { Component } from 'react';
import axios from 'axios';
import { Card, Icon, Image } from 'semantic-ui-react'
class Get_all_Catgory extends Component {
    constructor(props) {
        super(props);

        this.state = {

            options: []
        };
    }


    componentDidMount() {
        console.log("test")
        axios.get('http://localhost:8080/events')
            .then(response => {
                this.setState({ options: response.data });
                console.log(response.data)
            })
    }



    render() {
        return (
            <div className="container">
                <div>
<br></br>
                <center><h1 style={{ backgroundColor: "lightblue", height:120,width: 300 , borderRadius:20}}><br></br>Popular Groups </h1></center>    
                </div>
                <center>  <div style={{ marginLeft: 500, marginTop: -50, color: '#928A8A' }}><h3>UPCOMING EVENTS</h3></div></center>
                <br></br>
                <br></br>
               
                {this.state.options.length > 0 && this.state.options.map((item, index) => (
                    
                        <Card >
                            <Image src={item.ImageUrl} wrapped ui={false} />
                            <Card.Content>
                                <Card.Header>
                                    {item.Description}
                                </Card.Header>
                                <br></br>
                                <Card.Meta>

                                <Icon name='calendar alternate' /> <span className='date'> {item.Date}</span><br></br>
                                <Icon name='clock' /> <span className='date'> {item.Time}</span><br></br>
                                <Icon name='users' /> <span className='date'> {item.Seats} seats</span><br></br>
                               
                                </Card.Meta>
                                <br></br>
                                <Card.Header>
                                    {item.Price}
                                </Card.Header>

                            </Card.Content>

                        </Card>    
                        
                ))}
                
            </div>
        )
    }
}


export default Get_all_Catgory;