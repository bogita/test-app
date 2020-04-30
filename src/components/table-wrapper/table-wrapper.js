import React, {Component} from 'react';
import './table-wrapper.css'

import axios from 'axios'

import Table from '../table/table'

class TableWrapper extends Component {

    state = {
        adminEnabled: false,
        dataList: []
    }

    componentWillMount(){
        //http://localhost:80/get-all-users
        axios.get("https://blockchain.info/latestblock")
            .then( response => {
                console.log("Response ::> ", response)
            })
            .catch(err => {
                console.log("Error making call")
            })
    }

    componentDidMount(){
        if(this.props.type == "one"){
 
            //You can make your api call here
            let list = [
                {name: "Hiram", grade: "87"},
                {name: "Hiram Jr", grade: "30"},
                {name: "Hiram Sr", grade: "100"},
            ]
            this.setState({
                adminEnabled: true,
                dataList: list
              })
        }else if(this.props.type == "two"){
            let list = [
                {name: "Child one", grade: "34"},
                {name: "Child Jr", grade: "78"},
                {name: "Child Sr", grade: "100"},
            ]
            this.setState({
                adminEnabled: false,
                dataList: list
            })
        }
    }

    render(){
        return (
            <div>
                <h2>{this.props.name}</h2>
                <Table {...this.state} />
            </div>
        )
    }

}

export default TableWrapper