import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const AddCourse = () => {
    const[data,setData] =useState(
        {
            "coursetitle":"",
            "coursedescribtion":"",
            "coursedate":"",
            "courseduration":"",
            "coursevenue":"",
             "coursetrainername":"",
          
        }
    )
    const inputHandler=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(data)
        axios.post("http://localhost:8080/add",data).then(
            (response)=>{
                console.log(response.data)
                if(response.data.status=="test")
                    {
                        alert("added")
                    }
                    else{
                        alert("not added")
                    }
            }
        )
    }
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">coursetitle</label>
                            <input type="text" className="form-control" name="coursetitle" value={data.coursetitle} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">coursedescribtion</label>
                            <input type="text" className="form-control" name="coursedescribtion" value={data.coursedescribtion} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">coursedate</label>
                            <input type="date"  id="" className="form-control" name="coursedate" value={data.coursedate} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">courseduration</label>
                            <input type="text" className="form-control" name="courseduration" value={data.courseduration} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">coursevenue</label>
                            <input type="text" className="form-control" name='coursevenue' value={data.coursevenue} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">coursetrainername</label>
                            <input type="text" className="form-control" name='coursetrainername' value={data.coursetrainername} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-success" onClick={readValue}>ADD</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

       

        </div>
  )
}

export default AddCourse