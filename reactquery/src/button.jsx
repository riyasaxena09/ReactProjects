import { useMutation } from "@tanstack/react-query";

const Button=()=>{
    
     const fetchdata=async()=>{
        try{
        const res=await fetch('https://dummyjson.com/products');
        const resJson=await res.json();
            console.log(resJson)

        return resJson;
        }
        catch(err){
            console.log(err)
        }
      }

    const {mutate: clickHandler, data:buttonData}=useMutation({
        mutationKey:['mutate-key'],
        mutationFn: fetchdata,
        onSuccess:(res)=>{
          console.log(res)
        }
    })

    return(
        <>
        <button onClick={clickHandler}>Click to show data in list</button>

        <h1>{buttonData?.products?.[0]?.title}
        </h1>
        </>
    )
}

export default Button;
