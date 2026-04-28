const Wrapper=(WrappedComponent)=>{
  return (props) => {
    console.log("Component rendered with props:", props);
    return <WrappedComponent {...props} />;
  };
}

export default Wrapper;