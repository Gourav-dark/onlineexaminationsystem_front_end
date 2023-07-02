const AlertMessage = (props) => {
    const closebtn = () => {
        props.show=false;
    }
    return (
        <>
            {props.show &&
                <div className={`alert d-flex justify-content-between w-25 position-absolute top-50 start-50 translate-middle ${props.classname}`} role="alert">
                    {props.Message}
                    <button type="button" className="btn-close" onClick={closebtn}></button>
                </div>
            }
        </>
    );
}

export default AlertMessage
