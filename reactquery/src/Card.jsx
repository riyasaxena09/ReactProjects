import { useEffect, useState } from "react";

const Card=()=>{
     
    const [data, setData]=useState();
    useEffect(()=>{

      const fetchdata=async()=>{
        try{
        const res=await fetch('https://dummyjson.com/products');
        const resJson=await res.json();
        setData(resJson)
        console.log(resJson)
        }
        catch(err){
            console.log(err)
        }
      }
      fetchdata()

},[])

    return(
        <>
        <h1>This is data</h1>
        {data?.products?.map((item)=>{
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