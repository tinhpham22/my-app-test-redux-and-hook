import React from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { addProduct as action } from './actions';

function Home(props) {
    console.log(props);
    const dispatch = useDispatch();
    const state = useSelector(state => state);
    const product = 'tesst redux';
    console.log('useSelecter', state)
    return <>
    <h1>hahhahaa</h1>
    <button onClick={() => dispatch(action(product))}> add product</button>
    </>
}

const mapDispatch = dispatch => ({addProduct: product => dispatch(action(product))})

const mapState = state=>{
    console.log(state)
    return {product: state.home.product, totalProduct: state.home.product.length}
}

export default connect(mapState, mapDispatch)(Home)