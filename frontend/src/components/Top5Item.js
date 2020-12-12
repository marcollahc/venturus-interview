function Top5Item(props) {
    return (
        <div className="top-5__average--list">
            <div className="top__average--item">
                <p>{props.name}</p>
                <p>{props.average}</p>
            </div>
        </div>
    );
}

export default Top5Item;
