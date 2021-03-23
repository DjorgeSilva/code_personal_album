import React, { useState } from 'react'
import { ProgressBar } from "./ProgressBar"

export const UploadForm = () => {

    const [file, setFile] = useState(null); // estado - controla se foi selecionado algum arquivo no upload.
    const types = ["image/png", "image/jpeg", "image/jpg"]; // tipos de arquivos aceitos
    const [error, setError] = useState(null); // lida com erros


    const changeHandler = (e) => { // sempre quando for selecionado algum arquivo

        let selected = e.target.files[0]; // armazena na variavél

        if (selected && types.includes(selected.type)) { //se houver arquivo selecionado e o tipo adequado

            setFile(selected); //armazena o arquivo no estado.
            setError(""); // sem erro.

        } else {

            setFile(null); //caso não tenha sido selecionado o arquivo ou o arquivo tem o tipo não aceito
            setError("Selecione uma imagem (png ou jpeg)") // ataualiza a mensagem de erro

        }
    }


    return (
        <form>

            <input type="file" name="btn-upload" class="hide" id="btn-uploadID" onChange={changeHandler}/>
            <label for="btn-uploadID" class="btn-upload">Selecione a Imagem</label>

            <div className="output">
                {error && <div className="error">{error}</div>}          {/* caso acha erro, executa {error}*/}                       {/* caso acha arquivo, executa {file.name}*/}
                {file && <ProgressBar file={file} setFile={setFile} />}   {/* caso acha arquivo, executa o component de progresso, passando o arquivo ou seja (getFile, setFile)*/}
            </div>
        </form>
    )
}
