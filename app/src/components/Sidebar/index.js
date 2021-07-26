import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faArrowDown, faExclamation, faBackward} from '@fortawesome/free-solid-svg-icons'
import {NavLink} from 'react-router-dom';
import './index.css'; 

const Sidebar = () => {
	return  (
		<div className="sidebar">
			<NavLink exact to="/received" className="menuitem"> <FontAwesomeIcon className="icon" size="sm" icon={faArrowDown}/> Bills Received</NavLink>
			<NavLink exact to="/overdue" className="menuitem"> <FontAwesomeIcon className="icon" size="sm" icon={faExclamation}/> Bills Overdue</NavLink>
			<NavLink exact to="/history" className="menuitem"> <FontAwesomeIcon className="icon" size="sm" icon={faBackward}/> Hisory</NavLink>
		</div>
	);
}

export default Sidebar;