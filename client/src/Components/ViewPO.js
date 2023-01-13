import React, { useRef, useState, useEffect } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import './ViewPO.css'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import HomeIcon from '@mui/icons-material/Home';
import { Link, useParams,useNavigate } from 'react-router-dom';
import ReactToPrint from 'react-to-print';

import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';



const ViewPO = () => {

    const navigate = useNavigate()

    const componentRef = useRef();
    const { id } = useParams("");
    console.log(id)
    const [data, setdata] = useState([]);
    console.log(data);

    



    const getdata = async (e) => {

        const res = await fetch(`http://localhost:8003/getpo/${id}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        });
        const data = await res.json();
        console.log(data);

        if (res.status === 404 || !data) {
            console.log("error")
        } else {

            setdata(data);
            console.log("get data")
        }

    }


    useEffect(() => {
        getdata();
    }, [])

    const deletepo = async(id)=>{
        console.log("delete");

        const res2 = await fetch(`http://localhost:8003/delete/${id}`,{
          method: "DELETE",
                  headers: { "Content-Type": "application/json" },
                  
        }
        )
      
        const deletepo = await res2.json()
      console.log(deletepo)
      if(res2.status === 404|| !deletepo){
        console.log("error")
      }else{
        console.log("deleted")
        alert("user deleted")
        navigate("/")

      }
           
      };
   

    return (
        <>

            <div className='container ' >

                <div className='home_print mt-4'>
                    <Link to="/">
                        <HomeIcon fontSize='large' />
                    </Link>
                    <ReactToPrint
                        trigger={() => { return <LocalPrintshopIcon fontSize='large' style={{ "cursor": "pointer" }} /> }}
                        content={() => componentRef.current}
                        documentTitle="invoice"
                        pageStyle="print" />

                </div>
                <div className='header mt-5'> 
                <h1 className='mb-3 mt-5'>PURCHASE ORDER</h1>
                <div className='icons'>
                                
                                <DeleteIcon fontSize='large' onClick = {()=>{deletepo(data._id)}} />
                            </div>
                </div>
                <Card sx={{ minWidth: 275 }} ref={componentRef} >
                    <CardContent>
                        <div className='header'>
                           

                        </div>

                        <div className='mt-4'>OM Logistics, we provide you with nonpareil solutions to expand your reach to every corner you desire. We combine our deep understanding of the customer’s internal & external requirement with our strategic approach, providing a one-stop solution to get your brand on the go. Our approach focuses on how we deliver operational excellence to provide viable, cost-effective technology-enabled solutions to the most challenging logistics & supply chain management questions. We reciprocate through our work entirely with a progressive mindset. “YOU TRUST US, WE CARE”. Whether a small, medium or a large business, we cater to every technological need for your business with a modern touch, keeping the world in motion.</div>

                        <div className='leftright mt-5'>
                            <div className='left'>
                                <h3>Order# :<span>{data.order}</span></h3>
                                <h3>Date :<span>{data.date}</span></h3>
                                <h3>PO# : <span>{data.po}</span></h3>
                                <h3>Customer Name :<span>{data.name}</span></h3>
                            </div>

                            <div className='right'>
                                <h3>Item ID :<span>{data.id}</span></h3>
                                <h3>Status :<span>{data.status}</span></h3>
                                <h3>Created By :<span>{data.createdby}</span></h3>
                                <h3>Order Price :<span>₹ 500</span></h3>

                            </div>
                        </div>
                        <h4 style={{"marginLeft":"10px"}}>Address :<span>{data.address}</span></h4>

                        <pre>{`



The above incvoice is autorized by our company and is 100 % genuine.


                            
Adrress : office 145                                 signature : Nitesh Ghubde
                     
45 lane ,                                            contact   : 12847747474
                         
Pune, India

                            ` }</pre>
                    </CardContent>
                </Card>

            </div>

        </>
    )
}

export default ViewPO