import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import './AddProducts.css'
import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik'
import * as yup from 'yup';

export const validateFormSchema = yup.object({
    name: yup.string().required('Please fill the Product Name'),
    image: yup.string().required('Please fill the Product Image URL'),
    price: yup.string().required('Please fill the Product Price').matches(/^[0-9]+\.[0-9]{2}$/i, "pattern not matched"),
    stock: yup.string().required('Please fill amount of stock left'),
    status: yup.string().required('Please fill the Available Status'),
    rating: yup.string().required('Please enter the rating')
})

const AddProducts = () => {
    const {handleBlur, handleChange, handleSubmit, errors, values, touched} = useFormik(
        {
            initialValues:{name:"",image:"",price:"",stock:"",status:"in stock",rating:""},
            validationSchema: validateFormSchema,
            onSubmit: (values) => {
                addProduct(values)
            }
        }
    )

    const history = useHistory()

    const addProduct = (values) => {
        fetch('https://6166c4d713aa1d00170a66f3.mockapi.io/products', {
        method:'POST',
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(values)
    }).then(()=> history.push('/'))
    }

    return (
        <div>
            <article className="container add-product-wrapper">
              <Card className="form-card">
                <CardContent className="form-cardContent">
                <form className="form-wrapper" onSubmit={handleSubmit}>
                  <div className="form-control">
                    <TextField className="userInput" label='Product Name' placeholder='Enter Product Name' id="name" name="name" value={values.name} error={errors.name && touched.name} helperText={errors.name && touched.name && errors.name} onChange={handleChange} onBlur={handleBlur}  multiline variant="standard" />

                  </div>
                  <div className="form-control">
                    <TextField className="userInput" label='Image URL' placeholder='Enter Image URL' id="image" name="image" value={values.image} error={errors.image && touched.image} helperText={errors.image && touched.image && errors.image} onChange={handleChange} onBlur={handleBlur} multiline variant="standard" />
                  </div>
                  <div className="form-control">
                    <TextField className="userInput" label='Product Price' placeholder='Enter Price ex: 10.99 in decimals' id="price" name="price" value={values.price} error={errors.price && touched.price} helperText={errors.price && touched.price && errors.price} onChange={handleChange} onBlur={handleBlur} multiline variant="standard" />
                  </div>
                  <div className="form-control">
                    <TextField className="userInput" label='Total Stock' placeholder='Enter Stock Amount Ex: 20' id="stock" name="stock" value={values.stock} error={errors.stock && touched.stock} helperText={errors.stock && touched.stock && errors.stock} onChange={handleChange} onBlur={handleBlur} multiline variant="standard" />
                  </div>
                  <div className="form-control status-div">
                    <InputLabel id="demo-simple-select-standard-label" className="userInput">Status</InputLabel>
                    <Select
                        labelId="demo-simple-select-standard-label"
                        id="status"
                        name="status"
                        label="Status"
                        value={values.status}
                        onChange={handleChange}
                        error={errors.status && touched.status}
                        helperText={errors.status && touched.status && errors.status}
                        onBlur={handleBlur}
                        >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={"in stock"}>In Stock</MenuItem>
                        <MenuItem value={"not available"}>Not Available</MenuItem>
                    </Select>
                  </div>
                  
                  <div className="form-control ratings-div">
                    <Stack spacing={1}>
                      <Rating
                        id="rating"
                        name="rating"
                        value={values.rating}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.rating && touched.rating}
                        helperText={errors.rating && touched.rating && errors.rating}
                         precision={0.5}
                      />
                    </Stack>
                  </div>
                  <Button className="submitBtn" variant="contained" size="medium"  type="submit">Add Product</Button>
                </form>
                </CardContent>
                </Card>
            </article>
        </div>
    )
}

export default AddProducts
