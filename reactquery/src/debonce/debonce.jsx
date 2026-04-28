import { useRef, useState } from "react";

const Debounce=()=>{
    const [q, setQ]=useState();
    const ref=useRef()

    const handleSearch=(e)=>{
        setQ(e.target.value)
        if(ref.current) {
            clearTimeout(ref.current)
        }
        ref.current=setTimeout(()=>{
            console.log(q)
        },1000)
 
    }

    //  useEffect(()=>{
    //     let timer=setTimeout(()=>{
    //         console.log(q)
    //     },1000)

    //     return ()=>{
    //        clearTimeout(timer)
    //     }
    // }, [q])

    return(
        <>
        <input type='text' onChange={handleSearch} value={q}/>
        </>
    )
}
export default Debounce;