'use client'
const Button = ({ title, disabled = '', onClick = () => { } }) => {
    return (
        <button className={disabled ? `m-[10px] bg-gray-300 px-4 py-2 cursor-not-allowed rounded-sm opacity-50` : `btn `} onClick={onClick}>{title}</button>
    );
}
// https://stackoverflow.com/questions/41488715/how-to-disable-button-in-react-js
export default Button;
