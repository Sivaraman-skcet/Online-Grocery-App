import React from 'react'
import '../Product/ProductList.css'
import Apple from '../Images/apple.png'
import Orange from '../Images/orange.png'
import Kiwi from '../Images/Kiwi.png'
function ProductList() {
  return (
    <div className='item'>
        <div className='apple'>
            <img src={Apple} alt='error'style={{width:200,height:200}}/>
            <p>Apple - $20</p>
            <button>Add</button>
        </div>
        <div className='orange'>
            <img src={Orange} alt='error'style={{width:200,height:200}}/>
            <p>Orange - $10</p>
            <button>Add</button>
        </div>
        <div className='kiwi'>
            <img src={Kiwi} alt='error'style={{width:200,height:200}}/>
            <p>Kiwi - $40</p>
            <button>Add</button>
        </div>
    </div>
  )
}

export default ProductList