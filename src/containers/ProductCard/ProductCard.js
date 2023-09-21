import './ProductCard.css';
import Button from '../../components/Button/Button';
import ProductCardItem from '../../components/ProductCardItem/ProductCardItem';
import { useNavigate } from "react-router-dom";

const ProductCard = () => {

    const navigate = useNavigate();

    const handleClick = () => navigate("/app");

    return (
        <div>
            <div className="button_lable">
                <Button handleClick={handleClick} />
            </div>
            <header>
                <h1>ProductCard</h1>
            </header>
            <div>
                <ProductCardItem />
            </div>
        </div>
    );
};

export default ProductCard;