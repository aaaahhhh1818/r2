import React from 'react';

const CartDisplay = ({cart, remove, getTotal, changeQty}) => { //정확하게는 cartState를 뿌려주는 것 //삭제처리하면서 remove property 추가

    //(item,idx) : 인덱스번호를 주는 법 => id가 없을 때 키값을 주기 위해서 사용
    const list = cart.map((item,idx) => <li key={idx}>{item.pno} - {item.pname} - {item.price}
        <button onClick={() => changeQty(item.pno, -1)}>-</button>{item.qty}<button onClick={() => changeQty(item.pno, +1)}>+</button> {/*수량 업다운 버튼 추가*/}
        <button className="btn btn-primary btn-sm" onClick={() => remove(item.pno)}>X</button> {/*삭제버튼추가*/}
    </li>)

    return (
        <div>
            <h1>장바구니</h1>
            <ul>
                {list}
            </ul>
            <h3>{getTotal()}</h3> {/*return 값이 있으니까 getTotal함수 () 실행해주면됨*/}
        </div>
    );
};

export default CartDisplay;