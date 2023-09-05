import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators } from './state/index';


const Shop = () => {
  const dispatch = useDispatch();
  const balance = useSelector(state => state.amount);
  const {depositMoney,withdrawMoney} = bindActionCreators(actionCreators,dispatch);
  return (
  
  <div className='container my-3'>
        <h2>Deposite/Withdraw Money</h2>
        {/* <button className="btn btn-dark mx-2" onClick={()=>dispatch(actionCreators.withdrawMoney(100))}>-</button> */}
        <button className="btn btn-dark mx-2" onClick={()=>withdrawMoney(100)}>-</button>
        Update Balance {balance}
        <button className="btn btn-dark mx-2" onClick={()=>depositMoney(100)}>+</button>
        {/* <button className="btn btn-dark mx-2" onClick={()=>dispatch(actionCreators.depositMoney(100))}>+</button> */}

  </div>
  
  )
}

export default Shop