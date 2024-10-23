import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';

const ProductDetail = () => {
  let {id} = useParams();
  const [product,setProduct] = useState(null)
  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/Hotpack1/reacthnm/products/${id}`
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data);
  }
  useEffect(()=>{
    getProductDetail();
  },[])
  return (
    <Container>
      <Row>
        <Col className='product-img'>
        <img src={product?.img}/>
        </Col>
        <Col >
        <div className='product-info'>{product?.title}</div>
        <div className='product-info'>{product?.price}</div>
        <Dropdown className='product-info'><Dropdown.Toggle variant="secondary" id="dropdown-basic">
        사이즈 선택
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#">{product?.size[0]}</Dropdown.Item>
        <Dropdown.Item href="#">{product?.size[1]}</Dropdown.Item>
        <Dropdown.Item href="#">{product?.size[2]}</Dropdown.Item>
      </Dropdown.Menu></Dropdown>
      <Button variant='dark' className='product-button'>추가</Button>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail
