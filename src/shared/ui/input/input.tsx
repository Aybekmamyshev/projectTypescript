import React, {Dispatch, SetStateAction} from 'react';
import "./input.sass"
type Props = {
    className : string
    placeHolder : string
    value : string,
    setValue : Dispatch<SetStateAction<string>>
    onChange? : (e : React.ChangeEvent<HTMLInputElement>) => void
}
const Input = ({className,placeHolder,value,setValue,onChange} : Props) => {
    return  <input value={value} onChange={onChange}  placeholder={placeHolder} className={className}/>
};

export default Input;