import ReactTooltip from 'react-tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faShareAlt, faTrash } from '@fortawesome/free-solid-svg-icons';

function MyTeamItem(props) {
    return (
        <div className="list-teams__item">
            <div>{props.name}</div>
            <div>{props.description}</div>
            <div className="list-teams__icons">
                <FontAwesomeIcon icon={faTrash} size="sm" data-tip data-for="TooltipTrash" effect="solid" />
                <ReactTooltip id="TooltipTrash" place="top" type="dark">Excluir</ReactTooltip>
                <FontAwesomeIcon icon={faShareAlt} size="sm" data-tip data-for="TooltipShare" effect="solid" />
                <ReactTooltip id="TooltipShare" place="top" type="dark">Compartilhar</ReactTooltip>
                <FontAwesomeIcon icon={faPen} size="sm" data-tip data-for="TooltipPen" effect="solid" />
                <ReactTooltip id="TooltipPen" place="top" type="dark">Editar</ReactTooltip>
            </div>
        </div>
    );
}

export default MyTeamItem;
