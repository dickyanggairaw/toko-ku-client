import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../store/actions/product'
import ProductData from '../components/ProductData'

export default function Home () {
  const dispatch = useDispatch()
  const { isLoading, error, products} = useSelector(state => state.productReducer)
  useEffect(() => {
   dispatch(getProduct())
  }, [dispatch])
  if(isLoading) {
    return <h1>Loading</h1>
  }
  if(error) {
    return <h1>Error</h1>
  }
  return (
    <div className="container">
      <h1>Home</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
            <th scope="col">Harga</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            products.map((product, index) => {
              return <ProductData product={product} key={index} index={index} />
            })
          }
        </tbody>
      </table>
    </div>
  )
}