import logo from './logo.png';
import './App.css';
import {React, useEffect, useState, Component} from 'react'
import { FiSearch, FiRefreshCw } from 'react-icons/fi';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { Amplify, Auth } from 'aws-amplify';
import { DataStore } from '@aws-amplify/datastore';
import { Output, Sources } from './models';
import awsExports from './aws-exports';
import { withAuthenticator, Authenticator } from '@aws-amplify/ui-react';

Amplify.configure(awsExports);


function App() {

  const [outputs, updateOutputs] = useState([{id: 'null', CompanyName: 'null', OutputQuantity: 'null', ProductName: 'null', ProductBarcode: 'null', Sources:'[{"selectedSourceName": "null", "selectedSource": "null", "sourceQuantity": "null", "sourceCarbonFootprint": "0" }]', CarbonPerOutput: 'null' }])
  const [val,setVal] = useState('')

  useEffect(()=>{
    fetchOutputs()
  }, [])

  useEffect(()=>{
    getSearchItems()
  },[val])

  async function fetchOutputs(){
    const outputs = await DataStore.query(Output);
    //const sources = JSON.parse((outputs.map((p)=>p.Sources))[0])
    console.log(outputs)
    updateOutputs(outputs)

  }

  async function getSearchItems(){
    const searchItems = outputs.filter(item => item.ProductName.toLowerCase().includes(val));
    updateOutputs(searchItems)
  }

  const change = event => {
    setVal(event.target.value)
  }



  return (
    <div className="App">

    <img src={logo} className='oxiLogo'/>

    <div className='pageItems'>
      <div className='actionBar1'>
        <div className='searchAndRefresh'>
          
        <div className="searchBar" > <input className = "searchBarField" onChange={change} value={val}/> <FiSearch color='#00C2FF'/> </div>

        <button className='refreshButton' onClick={()=>{fetchOutputs()}}><FiRefreshCw className='refreshIcon'/></button>
        </div>

        {/* <Link className='editButton' to="/AddProduct" state={{barcode,name}}>Edit</Link>*/}

        <Link className='addProductButton' to="/AddProduct">Add Output</Link> 

      </div>
      
      <div className="productList">
<table>
  <thead>
    <tr>
      <th>Company Name</th>
      <th>Output Name</th>
      <th>Barcode</th>
      <th>Added Carbon Footprint (kg)</th>
    </tr>
  </thead>
  <tbody>
  {outputs.map((output) => (
      <tr key={output.id} className="row" tabIndex="0">
        <td>{output.CompanyName}</td>
        <td>{output.ProductName}</td>
        <td>{output.ProductBarcode}</td>
        <td>{parseFloat(output.CarbonPerOutput).toFixed(2)}</td>
      </tr>
    ))}
  </tbody>
</table>
</div>


<button onClick={()=>{Auth.signOut()}} className='addProductButton'>Sign Out</button>

    </div>
    
  </div>
  );
}

export default withAuthenticator(App);
