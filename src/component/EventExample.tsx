import React, { FC,useState ,useRef} from 'react';

const EventExample: FC = () => {
    const [value, setValue] = useState<string>('');
    const [isDrag, setIsDrag] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>( null);

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        
    }

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(value)
    }

    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
        
    }

    const dragWithPreventHandler= (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(true)
    }

    const LeaveHandler= (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(false)
    }
    
    const dropHandler= (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(false)
    }

    return (
        <div>
            <input value={value}  onChange={changeHandler} type="text" placeholder='управляемый' />
            <input ref={inputRef} onChange={changeHandler} type="text" placeholder='не управляемый' />
            <button onClick={clickHandler}>search</button>
            <div onDrag={dragHandler} draggable  style={{width: 200, height: 200, background: 'red'}}></div>
            <div 
            onDrop={dropHandler} 
            onDragLeave={LeaveHandler} 
            onDragOver={dragWithPreventHandler}
            style={
                {width: 200, height: 200, 
                    background: 
                        isDrag ?'blue' : 'red',
                        marginTop: '15px'
                }
            }></div>
        </div>
    );
};

export default EventExample;