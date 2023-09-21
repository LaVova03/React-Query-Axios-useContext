import './Button.css';

const Button = ({ handleClick }) => {
    return (
        <button className='button_come_back' onClick={handleClick}>Back</button>
    );
};

export default Button;