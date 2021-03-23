import React, {useEffect} from 'react'
import useStorage from "../hooks/useStorage"

export const ProgressBar = ({file, setFile}) => {

    const {url, progress} = useStorage(file); // useStorage(file) - passando o arquivo e do return armazeno apenas o url e o progress

    useEffect(() => {
        if(url){
            setFile(null)
        } 
    }, [url]);
    
    return (
        <div className="progress-bar" style={{width: progress + "%"}}>

        </div>
    )
}

