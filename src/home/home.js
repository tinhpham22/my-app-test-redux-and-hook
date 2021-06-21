import React, { useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { addProduct, removeProduct } from './actions';

function Home(props) {
    const dispatch = useDispatch();
    const state = useSelector(state => state);
    const [product, setProduct] = useState({});
    const [id, setId] = useState('');

    console.log(props)

    const onDispatchAddProduct = () => {
        console.log(product)
        if (!product.name) return;
        dispatch(addProduct(product))
    }

    const handleChangeProduct = (inputName, e) => {
        setProduct(prev => ({ ...prev, [inputName]: e.target.value }))
    }

    console.log('useSelecter', state.home.products)

    return <>
        <h1>hahhahaa</h1>
        <input type="text" onChange={(e) => handleChangeProduct('id', e)} />
        <input type="text" onChange={(e) => handleChangeProduct('name', e)} />
        <input type="text" onChange={(e) => handleChangeProduct('amount', e)} />

        <button onClick={onDispatchAddProduct}> add number</button>


        {
            state.home.products ?
                state.home.products.map((product, i) => <div key={product.id}>
                    <div style={{ display: 'flex', margin: 8, padding: 8, background: 'red', color: '#fff' }}>
                        <div>{i + 1}</div>
                        <div>{product.id}</div> -
                        <div>{product.name}</div> -
                        <div>{product.amount}</div>
                    </div>
                </div>)
                : <>No data </>
        }

        <input type="text" onChange={(e) => setId(e.target.value)} />
        <button onClick={() => dispatch(removeProduct(id))}>remove number</button>
    </>
}

export default Home