const Header = (props) => {
    return (
        <div className="d-flex justify-content-center">
            <h1 className="m-3">
                {props.text}
            </h1>
        </div>
    );
}

export default Header;
