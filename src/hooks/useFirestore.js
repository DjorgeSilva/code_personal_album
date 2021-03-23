import { useState, useEffect } from "react"
import { projectFirestore } from '../firebase/config'

 const useFirestore = (collection) => {
    const [docs, setDocs] = useState([]); //armazena os arquivos da coleção (tabela)

    useEffect(() => {

        const unsub = projectFirestore.collection(collection) 
            .orderBy('createdAt', 'desc') //ordena por timestamp 
            .onSnapshot((snap) => { //executa sempre quando houver uma mudança na coleção (atualizaçaõ em tempo real)
                let documents = []; // armazena os documentos
                snap.forEach(doc => { // verifica todos os documentos, separadamente (doc)
                    documents.push({...doc.data(), id: doc.id}) //armazena no array, todas as informações do documento + id
                });
                setDocs(documents) //armazena os arquivos da coleção (tabela)
            })
        return () => {
            unsub();
        };
    }, [collection]);

    return { docs };
}

export default useFirestore;