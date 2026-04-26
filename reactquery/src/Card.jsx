import { useContext, useEffect } from "react";
import { Context } from "./ContextProvier/createContext";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "./store/counterSlice";
const Card=()=>{

    const { apiData, setApiData }=useContext(Context);
    const count = useSelector((state) => state.counter.value);
    console.log(count, 'count')
    const dispatch=useDispatch()
      
    useEffect(()=>{

      const fetchdata=async()=>{
        try{
        const res=await fetch('https://dummyjson.com/products');
        const resJson=await res.json();
        setApiData(resJson)
        }
        catch(err){
            console.log(err)
        }
      }
      fetchdata()

},[])

    return(
        <>
        <h1>This is data {count}</h1>
        <button onClick={()=>dispatch(increment())}>Increment</button>
        {apiData?.products?.splice(0,5)?.map((item)=>{
            return(
                <div>
                    <span>{item.brand}</span>
                    <img src={item.images?.[0]} width='100' height='100' alt="image"/>
                </div>
            )
        })}
        </>
    )
}
export default Card;