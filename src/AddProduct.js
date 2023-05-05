import logo from './logo.png';
import './App.css';
import {React, useEffect, useState, Component} from 'react'
import { FiSearch, FiRefreshCw } from 'react-icons/fi';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import uuid from 'react-uuid';
import Select from 'react-select'
import { Amplify } from 'aws-amplify';
import { DataStore } from '@aws-amplify/datastore';
import { Output, Sources } from './models';
import { withAuthenticator, Authenticator } from '@aws-amplify/ui-react';
import awsExports from './aws-exports';
Amplify.configure(awsExports);


function AddProduct (){
    
const [companyName, updateCompanyName] = useState('')
const [productName, updateProductName] = useState('')
const [productBarcode, updateProductBarcode] = useState('')
const [outputs, updateOutputs] = useState(null)
const [sourceQuantity, updateSourceQuantity] = useState(null)
const [selectedSource, setSelectedSource] = useState("");
const [selectedSourceName, setSelectedSourceName] = useState("");
const [sources, updateSources] = useState([{selectedSourceName: 'a', selectedSource: 'a', sourceQuantity: 0, sourceCarbonFootprint: 0}]) 

const options = [
    { value: 2.53925, label: 'Natural Gas (kg)' },
    { value: 1.54, label: 'Propane (litres)' },
    { value: 2.7, label: 'Diesel (litres)' },
    { value: 2.16, label: 'Petrol (litres)' },
    { value: 2.41143, label: 'Coal (kg)' },
    { value: 0.19338, label: 'Non-Renewable Electricity (kWh)'},
    { value: 0, label: 'Renewable Electricity (kWh)'}
    
]

const changeCompanyName = event => {
    updateCompanyName(event.target.value)
  }

  const changeProductName = event => {
    updateProductName(event.target.value)
  }

  const changeProductBarcode = event => {
    updateProductBarcode(event.target.value)
  }

  const changeOutputs = event => {
    updateOutputs(event.target.value)
  }

  const handleTypeSelect = e => {
    setSelectedSource(e.value);
    setSelectedSourceName(e.label);
  };

  const changeSourceQuantity = event => {
    updateSourceQuantity(event.target.value)
  }



  async function postProduct(){
   await DataStore.save(
        new Output({
            "CompanyName": companyName,
            "ProductName": productName,
            "ProductBarcode": productBarcode,
            "OutputQuantity": outputs,
            "Sources": JSON.stringify(sources.slice(1)),
            "CarbonPerOutput": JSON.stringify((sources.reduce((sum, source)=> sum + source.sourceCarbonFootprint,0))/outputs)
        })
    );

  }

  function addSource(){
    const sourceCarbonFootprint = selectedSource*sourceQuantity;
    const newSource = {selectedSourceName: selectedSourceName, selectedSource: selectedSource, sourceQuantity: sourceQuantity, sourceCarbonFootprint: sourceCarbonFootprint};
    const newSources = [...sources, newSource];
    updateSources(newSources);
  }

    return (

      <Authenticator hideSignUp={true}>

        <div className="App">

            <img src={logo} className='oxiLogo'/>
    
            <div className='addProductPageItems'>

                <div><b>Add a new output by filling out this form:</b></div>

                <div className='barcode'>
                     <div className='nameLabel'>
                        Company Name:
                     </div> 
                    <div className='barcodeInput'>
                        <input className='barcodeInputField' onChange={changeCompanyName} value={companyName}></input>
                    </div>
                </div>

                <div>1) About the output</div>
                <div className='barcode'>
                     <div className='nameLabel'>
                        Output Name:
                     </div> 
                    <div className='barcodeInput'>
                        <input className='barcodeInputField' onChange={changeProductName} value={productName}></input> 
                    </div>
                </div>
                <div className='barcode'>
                     <div className='nameLabel'>
                        Barcode:
                     </div> 
                    <div className='barcodeInput'>
                        <input className='barcodeInputField' onChange={changeProductBarcode} value={productBarcode}></input> 
                    </div>
                </div>
                <div className='barcode'>
                     <div className='nameLabel'>
                        Number of outputs:
                     </div> 
                    <div className='barcodeInput'>
                        <input className='barcodeInputField' onChange={changeOutputs} value={outputs}></input>
                    </div>
                </div>
                <div>2) Sources of energy used to produce the output (Fuels & Electricity)</div>
                <div className='barcode'>
                     <div className='nameLabel'>
                        Source:
                     </div> 
                     <Select options={options}         onChange={handleTypeSelect}
        value={options.filter(function(option) {
          return option.value === selectedSource, option.label === selectedSourceName;
          
        })} />
                </div>

                

                <div className='barcode'>
                     <div className='nameLabel'>
                        Quantity (in units provided):
                     </div> 
                    <div className='barcodeInput'>
                        <input className='barcodeInputField' onChange={changeSourceQuantity} value={sourceQuantity}></input>
                    </div>
                </div>

                <div className='actionBar1'>
                    <div>
                    </div>
                <button onClick={()=>{addSource()}} className='addProductButton'>Add Source</button>
                </div>

  

                <div>Table of Sources</div>

                

                <div className="productList">

<table>
  
  <div className="productList2">

  <div></div>  
  <tbody>
  {sources.slice(1).map((source, index)=>(
    <tr key={index} className="row" tabindex="0">
    <td>
      {/* <button className='textBlack' onClick={() =>{
      updateBarcode(item.Barcode)
      updateName(item.Name)
    }}> */}
      {source.selectedSourceName}
      {/* </button> */}
      </td>
    <td>{source.sourceQuantity}</td>
    <td>{source.sourceCarbonFootprint}</td>
    </tr>
    ))}
  </tbody>
  </div>

  <thead>
    <tr>
      <th>Source</th>
      <th>Quantity</th>
      <th>Carbon Footprint</th>
    </tr>
  </thead>
  
 
</table>
</div>

<div>
    Carbon Footprint per Output: {((sources.reduce((sum, source)=> sum + source.sourceCarbonFootprint,0))/outputs).toFixed(2)}kg 
</div>

<div className='actionBar1'>
    <Link className="addButton" to="/Home">Back</Link>

    <Link onClick={()=>{postProduct()}} className='addProductButton' to='/Home'>Add Output</Link>
</div>










        </div>


            </div>


            

            </Authenticator>
    )
}
  
export default AddProduct;