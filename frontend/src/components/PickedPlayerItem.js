function PickedPlayerItem(props) {
    return (
        <div className="picked-player__item">
            <p className="picked-player__title">{props.title}</p>
            <div className="picked-player__info">
                { 
                    props.dashed ? (
                        <div className="circle-image__dashed">
                            <div className="circle-image__round"></div>
                        </div>
                    ) : (
                        <div className="circle-image__round"></div>
                    )
                }
                <div className="picked-player__percent">{props.percent}</div>
            </div>
        </div>
    );
}

export default PickedPlayerItem;