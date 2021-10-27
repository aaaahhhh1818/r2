import React from 'react';

const ProductDisplay = ({products, addCart}) => {

    const list = products.map( p => <li key={p.pno} onClick={()=> addCart(p)}>{p.pname} --- {p.price}</li>) //p가 들어가면 <li>로 바꿔준다

    return (
        <div>
            <h1>상품목록</h1>
            <div className="card">
                <div className="card-header">
                    This is some text within a card body.
                </div>
                <div className="card-body">
                    This is some text within a card body.
                </div>
                <div className="card-footer">
                    This is some text within a card body.
                </div>
            </div>
            <ul>
                {list}
            </ul>
        </div>
    );
};

export default ProductDisplay;