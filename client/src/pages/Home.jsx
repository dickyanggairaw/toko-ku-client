import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../store/actions/product'
import ProductData from '../components/ProductData'
import { useHistory } from "react-router-dom";

export default function Home () {
  const history = useHistory()
  const dispatch = useDispatch()
  const { isLoading, products} = useSelector(state => state.productReducer)
  useEffect(() => {
   dispatch(getProduct())
  }, [dispatch])
  if(isLoading) {
    return <h1>Loading</h1>
  }
  return (
    <div className="container">
      <h1>Home</h1>
      {
        localStorage.access_token ? <button className="btn btn-success" onClick={() => history.push('/addProduct')}>Add Product</button> : ''
      }      
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
            <th scope="col">Harga</th>
            <th scope="col">Stok</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            products?.map((product, index) => {
              return <ProductData product={product} key={index} index={index} />
            })
          }
        </tbody>
      </table>
    </div>
  )
}