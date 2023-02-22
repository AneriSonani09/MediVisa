import React, { Component } from 'react'
import axios from 'axios'

export default class Dummy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            regionName: ''
        }
    }
    getGeoInfo = () => {
        axios.get('https://ipapi.co/json/').then((response) => {
            let data = response.data;
       
            this.setState({
                regionName: data.region,
            });
        }).catch((error) => {
            console.log(error);
        });
    };

    componentDidMount(){
        this.getGeoInfo();
    }

  render() {
    const style1 = {"height":"55px"};
    return (
        <h1>f</h1>
    )
  }
}
