import { useQuery } from "@tanstack/react-query";

const Table=()=>{
    
      const fetchdata=async()=>{
        try{
        const res=await fetch('https://dummyjson.com/products');
        const resJson=await res.json();

        return resJson;
        }
        catch(err){
            console.log(err)
        }
      }

    const {data}=useQuery({
        queryKey:['call-api'],
        queryFn:fetchdata
    })

    return(
        <div>
      <table>
        <thead>
            <th>Title</th>
             <th>Stock</th>
              <th>Price</th>
        </thead>
        <tbody>
            {data?.products?.splice(0,10)?.map((item)=>{
                return(
                    <>
                    <tr>
                        <td>{item.title}</td>
                         <td>{item.price}</td>
                          <td>{item.stock}</td>
                    </tr>
                    </>
                )
            })}
        </tbody>
      </table>
        </div>
    )
}

export default Table;