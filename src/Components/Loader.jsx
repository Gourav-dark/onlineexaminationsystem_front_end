const Loader = () => {
    return (
        <div class="vh-100 w-100 d-flex justify-content-center align-items-center" style={{zIndex:"2000",background: "rgba(255, 255, 255, 0.05)",backdropfilter: "blur(8px)"}}>
            <div class="spinner-border" style={{ height: "3rem", width:"3rem"}} role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    );
}
export default Loader;
