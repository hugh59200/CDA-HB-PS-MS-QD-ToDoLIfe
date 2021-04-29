import React, { useEffect } from 'react';
import TacheService from '../../service/TacheService';

const TodoInside = (props) => {
    
    const test = () => {
        TacheService.getListByIdToDoList(props.history.location.idList).then((res) => {
            console.log(res)
        })
    }
    
    
    useEffect(() => {
        test()
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    return (
        <>
        
        {/* {console.log(props.history.location.idList)}
        {console.log(props.history.location.labelList)} */}
        
        <h1 className="text-center text-white">
        List : {props.history.location.labelList}
        </h1>
        
        
            
        </>
    );
};

export default TodoInside;