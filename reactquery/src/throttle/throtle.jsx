import { useEffect } from "react";

const Trottle=()=>{

    function throtle(fn, delay){
        let lastCall=0;

        return function (...args){
            let now=Date.now()

            if(now-lastCall>=delay){
                lastCall=now
            fn(...args)
            }
        }
    }

     function scrollHandler(){
        console.log('scrollHandler')
     }

    useEffect(()=>{
       const handleScroll=throtle(scrollHandler, 1000)
        window.addEventListener('scroll', handleScroll)
    },[])
return(
    <>
    <div style={{height: '200vh', backgroundColor: 'pink'}}>Scoll me</div>
    </>
)
}

export default Trottle;