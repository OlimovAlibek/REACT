import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react';
import './axios.css';

const AxiosData = () => {


    const [data, setData] = useState([]);
    const [error, setError] = useState(null);


    const fetchData = async () => {

        try {
            const response = await axios.get('https://restcountries.com/v3.1/all')
        setData(response.data)
        } catch (error) {
            setError(error);
        }

        
    }

    useEffect(() => {
        fetchData()
        
    }, )





  return (
    <div className='container'>
        {/* <div className='allwrapper'> */}
            {
                data.map((element) => (
                    
                    <>
                    
                    <img src={element.flags.png}></img>
                    <span>{element.name.common}</span>
                    
                    </>
            

                ))
            }
        {/* </div> */}
    </div>
  )
}

export default AxiosData