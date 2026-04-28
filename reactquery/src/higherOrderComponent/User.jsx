import Wrapper from "./Wrapper";

const User=({name})=>{
    return(
        <>
        <h1>Users is {name}</h1>
        </>
    )
}
export const EnhancedData=Wrapper(User);
export default User;
