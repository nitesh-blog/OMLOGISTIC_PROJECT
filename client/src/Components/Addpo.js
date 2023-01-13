import React from 'react'
import styled from 'styled-components'
import Button from '@mui/material/Button';

import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';


const Addpo = () => {

    const Container = styled.div`
margin-top:30px ;
display: flex;
`
    const Text = styled.p`
display: flex;
margin-left:100px ;
padding-left:500px ;
font-size:30px ;
color:green ;
`
const Buttoncontainer = styled.div`
flex:1 ;

`
const Textcontainer = styled.div`
flex:4 ;
`
    return (
        <>

            <Container>
                <Textcontainer>
                <Text >
                    
                   <b> Purchase Orders</b>
                    
                </Text>
                </Textcontainer>
                <Buttoncontainer>
                    <Link to = {`/add`}>
                    <Button variant="contained" endIcon={<AddIcon />}>
                        ADD NEW PO
                    </Button>
                    </Link> 
                </Buttoncontainer>

            </Container>

        </>
    )
}

export default Addpo