import React, { useState } from 'react'
import styled from 'styled-components'
import HomeIcon from '@mui/icons-material/Home';
import { json, Link , useNavigate} from 'react-router-dom';


const Container = styled.div`
width: 100vw;
height: 100vh;
background:linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)) ,
url("data:image/jpeg;base64,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") ;
background-size:100% 100% ;
display: flex;
align-items:center ;
justify-content: center;

`
const Wrapper = styled.div`
    
padding: 20px;
width: 70%;
background-color:white ;
border-radius:20px ;

`
const Title = styled.h1`
    font-size:24px ;
    font-weight:300 ;
`
const Form = styled.form`
    display: flex;
    flex-wrap:wrap;
`
const Input = styled.input`
    flex:1;
    min-width:40% ;
    margin: 20px 10px 0 0;
    padding: 10px;
    height:  50px;
`
const Text = styled.p`
font-size:12px ;
margin:20px 0px ;
color:white ;
cursor: pointer;
`
const Button = styled.button`
width: 40%;
border:none ;
background-color:teal ;
padding: 15px 20px;
cursor: pointer;
`
const Select = styled.select`
 flex:1;
    min-width:40% ;
    margin: 20px 10px 0 0;
    padding: 10px;

`
const Option = styled.option`

`
const StyledTextarea = styled.textarea`
flex:1;
    min-width:40% ;
    margin: 20px 10px 0 0;
    padding: 10px;
`

const Container2 = styled.div`

width:100% ;
display: flex;
justify-content:space-between ;
`

const POform = () => {

    const navigate = useNavigate()



    const [inpval, setINP] = useState(
        {
            order: "",
            date: "",
            po: "",
            name: "",
            id: "",
            status: "",
            createdby: "",
            address: ""

        }
    )


    const setdata = (e) => {
        console.log(e.target.value)
        const { name, value } = e.target
        setINP(
            (preval) => {
                return {
                    ...preval,
                    [name]: value
                }
            }
        )

    }


const addpodata = async(e)=>{
    console.log("clicker")
    e.preventDefault();

    const{order,date,po,name,id,status,createdby,address}=inpval;
    
const res = await fetch("http://localhost:8003/add", {method :"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({
    order,date,po,name,id,status,createdby,address

})

});
const data = await res.json();
console.log(data)

if(res.status === 404|| !data){
    alert ("error");
    console.log("error")
}else{
    alert("data added");
    console.log("data added")
    navigate("/")
}

}




    return (
        <>



            <Container>

                <Wrapper>
                    <Container2>
                        <Title>ADD NEW PO</Title>
                        <Link to="/">
                            <HomeIcon fontSize='large' />
                        </Link>
                    </Container2>
                    <Form>
                        <Input placeholder="Order ID" type="number" value={inpval.order} name="order" onChange={setdata} ></Input>

                        <Input placeholder="Order Date" type="date" value={inpval.date} name="date" onChange={setdata}></Input>

                        <Input placeholder="PO NO" value={inpval.po} name="po" onChange={setdata}></Input>

                        <Input placeholder="Customer Name" type="text" value={inpval.name} name="name" onChange={setdata}></Input>

                        <Input placeholder="Item ID" value={inpval.id} name="id" onChange={setdata}></Input>

                        <Select value={inpval.status} name="status" onChange={setdata}>
                            <Option hidden >Pease select the status</Option>
                            <Option>Draft</Option>
                            <Option>Shipping Label Generated</Option>
                            <Option>Shipped</Option>
                            <Option>Delivered</Option>
                        </Select>

                        <Input placeholder="Created By" value={inpval.createdby} name="createdby" onChange={setdata}></Input>

                        <StyledTextarea placeholder="Please enter the complete shipping address" value={inpval.address} name="address" onChange={setdata}></StyledTextarea>

                    </Form>
                    <Button className='mt-4' onClick={addpodata}>ADD PO</Button>
                </Wrapper>
            </Container>

        </>
    )
}

export default POform