import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Fee = () => {
    const [feeclass, setFeeclass]= useState();
    const [tax, setTax]= useState();
    const sendTax = () =>{
        axios.post(`http://fee-management-api.nastechltd.co/api/fee_structure`,
        {
            tax :tax,
            school_class_id: 2  
        })
        .then(response => console.log(response))
        .catch(error => console.log(error) )

    };
    const sendMonthly = () =>{
        axios.post(`http://fee-management-api.nastechltd.co/api/monthly_charges`,
        {
            description : inputList[0].Description,
            charges : inputList[0].Charges,
            // fee_structure_id: 1  
            // description : "tuition",
            // charges : 344,
            fee_structure_id: 8  
        })
        .then(response => console.log(response))
        .catch(error => console.log(error) )

    };
    const sendYearly = () =>{
        axios.post(`http://fee-management-api.nastechltd.co/api/yearly_charges`,
        {
            description : inputListYear[0].DescriptionYear,
            charges : inputListYear[0].ChargesYear,
            // fee_structure_id: 1  
            // description : "tuition",
            // charges : 344,
            fee_structure_id: 8  
        })
        .then(response => console.log(response))
        .catch(error => console.log(error) )

    };
    const [inputList,setInputList]=useState([
        {Description : "",Charges :""}
    ]
    );
    
    const handleChange = (e,index) => {
        const {name,value} = e.target;
        const list = [...inputList];
        list[index][name]= value;
        setInputList(list);
    }
    const handleAdd = () => {
        setInputList([...inputList,{Description:"", Charges:""}]);   
    }
    const [inputListYear,setInputListYear]=useState([
        {DescriptionYear : "",ChargesYear :""}
    ]
    );
    
    const handleChangeY = (e,index) => {
        const {name,value} = e.target;
        const list = [...inputListYear];
        list[index][name]= value;
        setInputListYear(list);
    }
    const handleAddY = () => {
        setInputListYear([...inputListYear,{DescriptionYear:"", ChargesYear:""}]);   
    }
    console.log(tax)
    const two = () => {
        sendMonthly();
        handleAdd();
        // console.log(inputListYear)
        // console.log(inputList[0].Charges)
        // console.log(feeclass)
        // console.log(inputList[0].Description);
     }   
    return(
        <>
        <div class="dashboard">
        <div class="left">
            <div class="navigation">
                <div class="wrapper2">
                    <div class="abilan">
                        <img
                            src="https://www.pngitem.com/pimgs/m/536-5365943_school-management-system-icons-hd-png-download.png" />
                    </div>

                    <div class="folder-icons ">
                        <div class="icon1">
                            <i class="fas fa-columns"></i>
                        </div>
                        <div class="icon-name1 nav-link "><Link to="/dashboard" >Dashboard</Link></div>
                    </div>

                    <div class="folder-icons">
                        <div class="icon1">
                            <i class="fas fa-school"></i>
                        </div>
                        <div class="icon-name nav-link"><Link to="/school" >Schools</Link></div>
                    </div>
                    <div class="folder-icons">
                        <div class="icon1">
                            <i class="fas fa-user-graduate"></i>
                        </div>
                        <div class="icon-name nav-link "><Link to="/students" class="">St   udents</Link></div>
                    </div>
                    <div class="folder-icons">
                        <div class="icon1">
                        <i class="fas fa-wallet"></i>
                        </div>
                        <div class="icon-name "><Link to="/finance" class="nav-link active ">Finance Employee</Link></div>
                    </div>


                </div>
            </div>
        </div>
        <div class="right-side">
            <div class="right-header">
                <div class="top-bar">
                    <div class="top-bar-justify">
                        <div class="big-inbox">
                            Fee
                        </div>
                    </div>
                </div>
                <hr class="new-hr" />
            </div>
            <div class="right-body">
                
                <div class="message">
                    <h2 class="text-center secondary">Fee Generation</h2>
                <hr class="new-hr1 secondary" />

                    <div class="row">
                     <div class="col-5">
                       <label for="select-class" class="inline" >Class:</label>     
                    <select class="inline select" id="select-class" onChange={(e)=> setFeeclass(e.target.value)} aria-label="Default select example">
                        <option selected disabled>Select Class</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    <div class="col-5">
                        <label for="tax">Tax:</label>
                        <input type="text" id="tax" name="tax" onChange={(e)=> setTax(e.target.value)} placeholder="Enter Tax" class="inline select"/>
                    </div>
                    <div className="col-2">
                        <button className="btn btn-primary" onClick={sendTax}>Submit</button>
                    </div>
                    </div>
                   <hr class="new-hr"/>
                   
                    <div class="monthly-charges">
                        <h4 class="text-center">Monthly Charges</h4>
            
                   <hr class="new-hr"/>
                   { inputList.map ((item, i) => {
                       return (
                        <div key={i} class="row mb-2">
                       <div class="col-5">
                   <input type="text" id="tax" name="Description" onChange={(e) => handleChange (e,i)} value={item.Description} placeholder="Description" class="inline select"/>
                   </div>
                   <div class="col-5">
                   <input type="text" id="tax" name="Charges" onChange={(e) => handleChange (e,i)} value={item.Charges} placeholder="Charges" class="inline select"/>

                   </div>
                   <div class="col-2">
                       {inputList.length -1 === i &&
                       <button type="button" onClick={two}  class="btn btn-primary mt-1">Add More</button>
                    }
                       
                   </div>
               </div>
                       )
                   })}
                       
                    

                        
                     </div>
                       <div class="monthly-charges">
                        <hr class="new-hr"/>

                            <h4 class="text-center">Yearly Charges</h4>
                                <hr class="new-hr"/>
                                            {inputListYear.map((item,i)=>{
                                return (
                                <div key={i} class="row mb-2">
                                <div class="col-5">
                            <input type="text" id="tax" name="DescriptionYear" value={item.Description} onChange={e => handleChangeY(e,i)} placeholder="Description" class="inline select"/>
                            </div>
                            <div class="col-5">
                            <input type="text" id="tax" name="ChargesYear" value={item.Charges} onChange={e => handleChangeY(e,i)} placeholder="Charges" class="inline select"/>

                            </div>
                            <div class="col-2">
                                {inputListYear.length -1 === i && 
                                <button type="button" onClick={sendYearly} class="btn btn-primary mt-1">Add More</button>
                                }
                            </div>
                        </div>)
                                
                                })}
                   


                        </div>
                        <div class="text-center mt-4">  <button class="btn btn-generate btn-success">Generate</button></div>
                </div>
            </div>
        </div>
    </div>
        </>
    );
};
export default Fee;