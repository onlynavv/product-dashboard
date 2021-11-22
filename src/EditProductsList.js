import React,{useState,useEffect} from 'react'
import './EditProductsList.css'
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useHistory } from 'react-router-dom';

const EditProductsList = () => {

  const [products, setProducts] = useState([])

  const history = useHistory()

  const getProducts = () => {
      fetch('https://6166c4d713aa1d00170a66f3.mockapi.io/products')
        .then((data)=> data.json())
        .then((products)=> setProducts(products))
  }

  useEffect(getProducts, [])

    const handleDelete = (id) => {
      fetch(`https://6166c4d713aa1d00170a66f3.mockapi.io/products/${id}`, {method:"DELETE"})
      .then(()=>getProducts())
    }

    return (
      <section className="container product-table-wrapper">
        <div className="wrapper-div">
                <div className="users-heading">
                    <div className="row">
                        <div className="row-mobile">
                            <h4>Id</h4>
                        </div>
                        <div className="">
                            <h4>Name</h4>
                        </div>
                        <div className="">
                            <h4>Image</h4>
                        </div>
                        <div className="">
                            <h4>Price</h4>
                        </div>
                        <div>
                          <h4>Rating</h4>
                        </div>
                        <div>
                          <h4>Stock</h4>
                        </div>
                        <div>
                          <h4>Status</h4>
                        </div>
                        <div>
                          <h4>Actions</h4>
                        </div>
                    </div>
                </div>
                <div className="users-body">
                    {products.map((item)=>{
                        const {name,image,id,price,rating,stock,status} = item
                        return(
                            <div className="row" key={id}>
                                <div className="row row-mobile">
                                    {id}
                                </div>
                                <div className="row">
                                    {name}
                                </div>
                                <div className="row product-image-div">
                                    <img src={image} alt={name} className="product-image"></img>
                                </div>
                                <div className="row">
                                  {price}
                                </div>
                                <div className="row">
                                  {rating}
                                </div>
                                <div className="row">
                                  {stock}
                                </div>
                                <div className="row">
                                  {status}
                                </div>
                                <div className="row btn-wrapper">
                                    <Button className="action-btn edit-btn" onClick={()=>{history.push(`/editproducts/${id}`)}}><EditIcon /> Edit</Button>
                                    <Button className="action-btn view-btn" onClick={()=>handleDelete(id)}><DeleteIcon /> Delete</Button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
      </section>
    )
}

export default EditProductsList
