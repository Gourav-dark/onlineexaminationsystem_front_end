const Loader = () => {
    return (
        <div className="position-absolute top-50 start-50 translate-middle">
            {/* <div className="spinner-grow text-primary" role="status" style={{height:"1.5rem",width:"1.5rem"}}>
                <span className="sr-only"></span>
            </div>
            <div className="spinner-grow text-light" role="status" style={{height:"1.5rem",width:"1.5rem"}}>
                <span className="sr-only"></span>
            </div>
            <div className="spinner-grow text-dark" role="status" style={{height:"1.5rem",width:"1.5rem"}}>
                <span className="sr-only"></span>
            </div> */}
            <div className="spinner-border text-light" role="status" style={{height:"2rem",width:"2rem"}}>
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
}
export default Loader;
