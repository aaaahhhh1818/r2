import {useState} from "react";

export default () => {

    const [num, setNum] = useState(0)

    //hooks 역할 : 로직을 분리해 놓는 것. 사용자가 쉽게 쓸 수 있도록
    const change = (amount) => {
        setNum(num + amount)
    }

    return (
        {num, change}
    )
}