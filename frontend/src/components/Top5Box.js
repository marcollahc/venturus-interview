import { Top5Item } from '../components';

function Top5Box(props) {
    return (
        <div className="top-5__box">
            <div className="top-5__box--title">
                <h3 className="top-5__title">{props.title}</h3>
            </div>
            <div className="top-5__average--list">
                <Top5Item name="Ajax Ansterdam" average="21.6" />
            </div>
        </div>
    );
}

export default Top5Box;
