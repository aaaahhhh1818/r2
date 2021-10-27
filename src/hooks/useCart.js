import {useState} from "react";

//그냥 보관할 때 쓸거임 (CRUD 기능 필요) + total 기능까지 있으면 편하겠쥬?

// 상품의 번호 이름 가격 수량 qty
const initState = [] //빈 배열

export default () => {

    const [cart, setCart] = useState(initState)

    //카트에 추가하면 중복 된 값있는지 확인해줘야함
    const addProduct = p => { //파라미터 하나기 때문에 괄호 생략 가능!

        //카트에 이미 같은 상품 있는지 확인(상품의 번호가 똑같은 상품이있는지)
        const before = cart.filter(item => item.pno === p.pno)[0] //filter[0] -> 자바랑 똑같음 걸러내는것 [0]첫 번째에서!

        if(before) { //before가 존재하면 새로 추가하면 안됨

            //setTimeout(() => { //비동기 처리

                before.qty = before.qty + 1 //존재하면 원래있던 수량에 1 더해주는 것
                setCart([...cart]) //setCart에 cart 펼쳐서 담아주기
                return

            //}, 1000) //비동기 처리 END //1초 후에 처리됨

        }

        setCart([...cart, {...p, qty: 1}]) //들어가면 수량 추가 (전개연산자에 p값 펴주고 수량 1로 세팅)

        /*다은언니를 위한 로그 주석^^*/
        /*console.log("--------")
        console.log(cart)*/
    }

    //삭제 처리 //번호(pno)만 있으면 목록에서 찾아서 사용할 수 있음
    const removeProduct = (pno) => {
        console.log("removeProduct: " + pno)

        //filter에서 find index해서 버튼누르면 삭제처리
        const idx = cart.findIndex(item => item.pno === pno)
        console.log("idx: " + idx)

        if(idx > -1) { //안전하게 처리

            cart.splice(idx, 1) //하나 뺄게요~ (버튼 누른거 빼고 다른 배열? 뽑기)
            setCart([...cart])

        }

    }

    //total 기능 추가
    const getTotal = () => {

        //간단해요 루프돌리면 됨 ㅋ //수량 다 더해서 곱하기?
        let sum = 0

        for(let i = 0; i < cart.length; i++) {
            const item = cart[i] //상품 인덱스
            sum += item.price * item.qty
        }
        return sum

    }

    // cart reset 기능
    const clearCart = () => {
        setCart(initState)
    }

    //수량 업다운 기능
    const changeQty = (pno, amount) => {

        //pno로 찾기
        const target = cart.filter(item => item.pno === pno)[0]

        if(target) { //타겟에 값이 있다면

            target.qty = target.qty + amount

            // - 버튼눌렀을 때 음수되는거 처리
            if(target.qty <= 0) {
                removeProduct(pno)
                return //다른거 할필요없이 0보다 작으면 걍 리턴 아무것도하지마 걍
            }

        }

        setCart([...cart]) //cart 값 객체에 넣어서 뿌려주는 거

    }

    return (
        //{cart, addProduct}
        //{cart, addProduct, removeProduct} //삭제처리하면서 remove 된 정보 같이 넘겨주기
        {cart, addProduct, removeProduct, getTotal, clearCart, changeQty} //외부에서 total, clearCart, chageQty 사용할 수 있게 추가
    )
}