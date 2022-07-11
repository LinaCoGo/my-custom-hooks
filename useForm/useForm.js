import { useState } from 'react';

export const useForm = (initialState = {}) => {
   
    const [formState, setformState] = useState(initialState);

    const reset = ()=>{
        setValue(initialState)
    };

    const onInputChange = ( { target } )=> {

        const { name, value } = target;
        
        setValue({
            ...formState,
            [ name ] : value
        })
    }

   return {...formState, formState, onInputChange, reset}
   
}
