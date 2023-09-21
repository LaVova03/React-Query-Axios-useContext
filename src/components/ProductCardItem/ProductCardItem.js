import './ProductCardItem.css';
import React, { useContext, useEffect, useState } from 'react';
import Context from '../../context/Context';
import Apple_Juce from '../../assets/Apple_Juce-removebg-preview.png';
import Cola from '../../assets/Cola-removebg-preview.png';
import Limonade from '../../assets/Limonade-removebg-preview.png';

const ProductCardItem = () => {

    const [value, setValue] = useState();
    const [number, setNumber] = useState();

    const contextValue = useContext(Context);
    const keyValuePairs = Object.entries(contextValue);

    let objectString;
    let objNumber;

    useEffect(() => {
        if (keyValuePairs[0][1] && keyValuePairs[2][1] !== undefined) {
            sessionStorage.setItem('myObject', JSON.stringify(keyValuePairs[0][1]));
            sessionStorage.setItem('myNumber', JSON.stringify(keyValuePairs[2][1]));
        }
        objectString = sessionStorage.getItem('myObject');
        objNumber = sessionStorage.getItem('myNumber');

        setValue(JSON.parse(objectString));
        setNumber(JSON.parse(objNumber));
    }, []);

    return (
        <div>
            <ul className='card_block'>
                <strong><li>Category: {value ? value.Category : null}</li></strong>
                <strong><li>Name: {value ? value.Name : null}</li></strong>
                <strong><li>Quantity: {value ? value.Quantity : null}</li></strong>
                <strong><li>Price: {value ? value.Price : null}</li></strong>
                <strong><li>Description: {value ? value.Description : null}</li></strong>
            </ul>
            <img className='img_card' src={number && number[0] === 0 ? Apple_Juce : null ||
                number && number[0] === 1 ? Cola : null ||
                    number && number[0] === 2 ? Limonade : null
            } alt='logo'></img>
            <strong><label className='text_card'>Є в наявності</label></strong>
        </div >
    );
};


export default ProductCardItem;