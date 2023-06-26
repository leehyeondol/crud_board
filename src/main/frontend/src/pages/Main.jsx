// # main/frontend/src/pages/Main.jsx
import './Main.css';
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import BoardList from "../components/BoardList/BoardList";

const Main = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getBoardList = async () => {
            try {
                console.log('Main/getBoardList()');
                const response = await axios.get("/api/board-list");
                console.log('main/response: ', response);
                setData(response.data.data);
            } catch (error) {
                console.error('Error fetching board list:', error);
            }
        };

        getBoardList();
    }, []);

    return (

        <div className="main-container">
            <h1>게시판</h1>
            <BoardList data={data} />
            <Link to="/create-board">
                <button className="create-button">게시글 작성하기</button>
            </Link>

        </div>
    );
};

export default Main;