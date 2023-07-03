const Loader = () => {
    return (
        // <div className="d-flex justify-content-center align-items-center">
        //     <div className="spinner-border" style={{ height: "2rem", width:"2rem"}} role="status">
        //         <span className="visually-hidden">Loading...</span>
        //     </div>
        // </div>
        // <div className="vh-100 w-100 d-flex justify-content-center align-items-center" style={{zIndex:"2000",background: "rgba(255, 255, 255, 0.05)",backdropfilter: "blur(8px)"}}>
        //     <div className="spinner-border" style={{ height: "3rem", width:"3rem"}} role="status">
        //         <span className="visually-hidden">Loading...</span>
        //     </div>
        // </div>
        <div class="spinner-grow" role="status">
            <span class="sr-only">Loading...</span>
        </div>
    );
}
export default Loader;
