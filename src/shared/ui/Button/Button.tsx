import React, {ReactNode} from 'react';
import "./button.sass"

interface TypeButton {
    children : ReactNode
    onClick? : () => void,
    type : 'submit' | 'button',
    isLoading : boolean,
    className : string,
    disabled? : boolean,
    style? :  React.CSSProperties | undefined
}
const Button = ({onClick, type,children,isLoading,className,disabled,style} : TypeButton) => {
    return (
        <button style={style} disabled={disabled} className={`btn btn_${className}`}  type={type} onClick={onClick}>
            {isLoading && children}
        </button>
    );
};

export default Button;