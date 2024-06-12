import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const ViewCourse = () => {
    const [data,changeData]= useState([])
    const fetchData=()=>{
        axios.get("http://localhost:8080/view").then(
            (response)=>{
        
            changeData(response.data)
        }
    )
    }
    useEffect(()=>{fetchData()},[])
    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-4">
                           {data.map(
                            (value,index)=>{
                                return  <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-3">
                                <div class="card" >
                                    <img src="https://d2v9ipibika81v.cloudfront.net/uploads/sites/104/2015/06/Fotolia_57831832_Subscription_M.jpg" class="card-img-top" alt="..."></img>
                                    <div class="card-body">
                                        <h5 class="card-title">{value.coursetitle}</h5>
                                        <p class="card-text">{value.coursedescribtion}</p>
                                        <p class="card-text">{value.coursedate}</p>
                                        <p class="card-text">{value.courseduration}</p>
                                        <p class="card-text">{value.coursevenue}</p>
                                        <p class="card-text">{value.coursetrainername}</p>
                                        <a href="#" class="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                            }
                           )
}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ViewCourse
