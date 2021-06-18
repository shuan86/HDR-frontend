import React, { useState, useEffect, useRef } from 'react';


export const useIsNotFirst = () => {
    let check = useRef<boolean>(false)
    useEffect(() => {
        if (check.current === false)
            check.current = true
        return () => {

        }
    }, [])
    return check.current
}
