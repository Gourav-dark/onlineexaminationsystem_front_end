const InPut = (props) => {
    const handleInputChange = (event => {
        const { name, value } = event.target;
        props.input.onChange(name, value);
    });
    return (
        <>
            <input {...props.input} />
            <label className={props.labelclass}>{props.label}</label>
        </>
    )
}
export default InPut
