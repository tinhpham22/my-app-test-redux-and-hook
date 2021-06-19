import React, { useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { addProduct, removeProduct } from './actions';

function Home(props) {
    const dispatch = useDispatch();
    const state = useSelector(state => state);
    const [count, setCount] = useState(0);

    const onDispatchAddProduct = () => {
        let counts = count + 1;
        setCount(counts)
        dispatch(addProduct(counts))
    }

    console.log('useSelecter', state.home.product)
    return <>
        <h1>hahhahaa</h1>
        <button onClick={onDispatchAddProduct}> add product</button>

        <button onClick={() => dispatch(removeProduct(count))}>remove product</button>
    </>
}

// const mapDispatch = dispatch => ({ addProduct: product => dispatch(action(product)) })

// const mapState = state => {
//     console.log(state)
//     return { product: state.home.product }
// }

export default connect()(Home)