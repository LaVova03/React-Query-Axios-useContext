import './ReactQuery.css';
import React, { useEffect, useState, useContext } from "react";
import Table from '../Table/Table';
import Apple_Juce from '../../assets/Apple_Juce-removebg-preview.png';
import Cola from '../../assets/Cola-removebg-preview.png';
import Limonade from '../../assets/Limonade-removebg-preview.png';
import axios from "axios";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import Context from '../../context/Context';


import { API_URL } from '../../constants/Constants';



const ReactQuery = () => {

    const [productItem, setProductItem] = useState();

    const { myData, setMyData, item, setItem } = useContext(Context);

    useEffect(() => {
        fetchGoods();
        if (productItem) {
            setProductPage();
        }
    });

    const navigate = useNavigate();

    const fetchGoods = async () => {
        const { data } = await axios.get(`${API_URL}/Goods`);
        return data;
    };

    const { isLoading, data, isSuccess, isError, error } = useQuery(
        "Goods",
        fetchGoods
    );

    if (isLoading) {
        return <div>loading...</div>;
    };

    if (isError) {
        return <div>Error: {error.message}</div>;
    };

    const setProductPage = () => {
        setMyData(data[productItem]);
        setItem(productItem);
        navigate("/product");
    };

    return (
        <div className="React-Query">
            <header><h1>New Project </h1>
            </header>
            <Table isSuccess={isSuccess} data={data} />
            <button onClick={() => { setProductItem([0]) }} className='img-button' >
                <img className='img_table' src={Apple_Juce} alt='logo'></img>
            </button>
            <button onClick={() => { setProductItem([1]) }} className='img-button' >
                <img className='img_table' src={Cola} alt='logo'></img>
            </button>
            <button onClick={() => { setProductItem([2]) }} className='img-button' >
                <img className='img_table' src={Limonade} alt='logo'></img>
            </button>
        </div >
    );
};

export default ReactQuery;