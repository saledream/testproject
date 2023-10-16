import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const Header = ()=> {

    const [text,setText] = useState('');
    const dispatch = useDispatch()

    const handleChange = e => setText(e.target.value)

    const handleKeyDown  = e => {

        const trimmedText = e.target.value.trim()
        if(e.key === 'Enter' && trimmedText) {

                dispatch({type:'TODOADD',payload:trimmedText})

                setText('');
        }
    }
}