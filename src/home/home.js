import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeContext } from '../contexts/ThemeContext';
import abcService from '../services/abc.service';
import { addProduct, removeProduct } from './actions';
import './css.css';

function Home(props) {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const [product, setProduct] = useState({});

  const { theme, toggleTheme } = useContext(ThemeContext);
  const { isLightTheme, drark, light } = theme;
  const style = isLightTheme ? light : drark;

  console.log(props)


  const loadData = useCallback(() => {
    abcService.getAll()
      .then(res => console.log(res))
      .catch(e => console.log(e))
  }, [])

  useEffect(() => {
    loadData()
  }, [loadData])

  const onDispatchAddProduct = () => {
    console.log(product)
    if (!product.name) return;
    dispatch(addProduct(product))
  }

  const handleChangeProduct = (inputName, e) => {
    setProduct(prev => ({ ...prev, [inputName]: e.target.value }))
  }

  const handleDel = (product) => {
    dispatch(removeProduct(product.id))
  }

  console.log('useSelecter', state.home.products)

  return <div style={style}>
    <h1>Test redux</h1>
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px 24px' }}>
      <div>
        <div>
          <span>id: </span>
          <input style={{ border: '1px solid #d3d3d3', padding: 8, borderRadius: 4 }} type="text" onChange={(e) => handleChangeProduct('id', e)} />
        </div>
        <div>
          <span>Mầy gì thế: </span>
          <input
            style={{ border: '1px solid #d3d3d3', padding: 8, borderRadius: 4 }} type="text"
            onChange={(e) => handleChangeProduct('name', e)}
          />
        </div>

        <div>
          <span>Mấy tuổi rồi: </span>
          <input
            style={{ border: '1px solid #d3d3d3', padding: 8, borderRadius: 4 }} type="number"
            onChange={(e) => handleChangeProduct('amount', e)}
          />
        </div>
        <div>
          <button
            onClick={onDispatchAddProduct}
            style={{ background: 'blue', color: 'white', border: 'none', padding: 8, borderRadius: 4 }}
          >Thêm</button>
        </div>
      </div>

      <div><button style={{ background: 'red', color: 'white' }} onClick={toggleTheme}>{isLightTheme ? 'Dark' : 'Light'}</button></div>
    </div>

    <table>
      <thead>
        <tr style={{ background: '#006FCA' }}>
          <th className="th-table"  >STT</th>
          <th className="th-table"  >ID</th>
          <th className="th-table"  >Họ và tên</th>
          <th className="th-table" >Đơn giá/Ngày</th>
          <th className="th-table" >Thao tác</th>
        </tr>
      </thead>

      <tbody>
        {
          state.home.products ?
            state.home.products.map((product, i) =>
              <tr key={product.id}>
                <td>{i + 1}</td>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.amount}</td>
                <td>
                  <button
                    onClick={() => handleDel(product)}
                    style={{ background: 'red', color: 'white', border: 'none', padding: 8, borderRadius: 4 }}
                  >Xóa</button></td>
              </tr>)
            : <tr> <td colSpan={5}>No data</td></tr>
        }
      </tbody>
    </table>

  </div>
}

export default Home