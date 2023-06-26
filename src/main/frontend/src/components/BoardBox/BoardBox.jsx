import React from 'react';
import { Link } from 'react-router-dom';
import './BoardBox.css';

const BoardBox = (props) => {
    return (
        <Link to="/detail" state={{ id: props.id }} className="board-box">
            <div>
                <h1>{props.title}</h1>
            </div>
        </Link>
    );
};

export default BoardBox;