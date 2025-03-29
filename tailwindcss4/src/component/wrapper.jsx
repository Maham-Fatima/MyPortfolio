const Wrapper = ({ children }) => {
    return (
      <div className="flex flex-col max-w-[100vw] overflow-hidden">
        {children}
      </div>
    );
  };
  
  export default Wrapper;
  