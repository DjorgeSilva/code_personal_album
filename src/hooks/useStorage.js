import { useState, useEffect } from 'react'
import { projectStorage, projectFirestore, timeStamp } from '../firebase/config' // armazena as imagens

const useStorage = (file) => { // recebendo o arquivo, quando selecionado no input

    const [progress, setProgress] = useState(0); // salva o progresso do upload
    const [error, setError] = useState(null); // armazena o erro
    const [url, setUrl] = useState(null); // armazena a url da imagem quando feita o upload

    useEffect(() => { // sempre que houve um novo arquivo (file - change) executa useEffect

        //referencia (url) onde as imagens serão salvas

        const storageRef = projectStorage.ref(file.name); // criando a localizacao (referencia) especifica do arquivo
        const collectionRef = projectFirestore.collection('images')

        storageRef.put(file).on('state_changed', (snap) => { // inicia o upload do arquivo referenciado, passando o (snap) no caso as informações do que está acontecendo naquele exato momento do upload

            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100; // cálculo para porcentagem do progresso do upload
            setProgress(percentage); // armazena o progresso

        }, (err) => { // caso acha erro

            setError(err) // armazena o erro

        }, async()=>{ // caso não acha (upload completo)

            const url = await storageRef.getDownloadURL(); // faz o download do arquivo referenciado
            const createdAt = timeStamp(); // armazena o tempo - (horário do upload)
            collectionRef.add({url, createdAt}); // cria um novo documento para essa coleção (tabela) relaciona todo arquivo a uma "tabela", armazenando o url e o tempo que foi feito o upload (createdAt)
            setUrl(url); // armazena no estado (url)
        })

    }, [file]); // sempre que o input mudar - executa

    return {progress, url, error} // retorna o progresso do upload, a url - (arquivo baixado), e o erro caso acha

}

export default useStorage; // exporta