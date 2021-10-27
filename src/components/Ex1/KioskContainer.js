import React, {useState} from 'react';
import ProductDisplay from "./ProductDisplay";
import CartDisplay from "./CartDisplay";
import useCart from "../../hooks/useCart";

const products = [
    {pno:1, pname:'샤프', price:3000},
    {pno:2, pname:'공책', price:1000},
    {pno:3, pname:'지우개', price:700},
    {pno:4, pname:'샤프심', price:500},
    {pno:5, pname:'실내화', price:6000}
]

const cart = []

const KioskContainer = () => {

    // //상태추가
    // const [cartState, setCartState] = useState(cart) //리셋버튼을 누르면 다시 빈카트로 만들기 위해서 위에 cart를 빈배열로 지정
    //
    // const addCart = (product) => {
    //     console.log("addCart...",product)
    //     setCartState([...cartState, product]) //전개연산자를 사용해서 레퍼런스자체를 변경해주는 것
    // }

    //이제 위에 필요 없어요 ~~ hooks로 빼놨음~ 필요한 것만 뽑아서 사용!
    const {cart, addProduct, removeProduct, getTotal, clearCart, changeQty} = useCart()

    //함수자체를 props로 넣지말고 함수의 실행 결과를 넣어줘야 하는 것 : addCart() X , addCart O
    return (
        <div>
            {/*<ProductDisplay products={products} addCart={addCart}></ProductDisplay>
            <CartDisplay cart={cartState}></CartDisplay>*/}
            <div> {/*clear 버튼 추가*/}
                <button onClick={() => clearCart()}>Clear</button>
            </div>
            {/*간단하게 hooks에 있는 값 뽑아서 사용 가능*/}
            <ProductDisplay products={products} addCart={addProduct}></ProductDisplay>
            <CartDisplay cart={cart} remove={removeProduct} getTotal={getTotal} changeQty={changeQty}></CartDisplay> {/*카트의 기능이 많아지면서 props 받을게 많아져서 지저분해짐 -> 근데 일단 그냥 둘게요*/}
        </div>
    );
};

export default KioskContainer;