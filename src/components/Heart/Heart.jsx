function Heart(props) {
    return (
        <div className="__heart" color={props.color || ""} style={props.style}>
            <span></span>
        </div>
    );
}
export default Heart;
