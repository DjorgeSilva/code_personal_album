import React from 'react'
import useFirestore from "../hooks/useFirestore"
import { Layout } from "./Layout"
import { Row, Col } from "react-bootstrap"
import { Modal } from 'bootstrap'

export const GridImage = ({ SetSelectedImage }) => {
    const { docs } = useFirestore('images') //passa o nome da coleção (tabela) e recebe o que está sendo retornado, no caso os documentos

    return (
        <Layout>
            <div className="img-grid">
                <Row>
                    {docs && docs.map(doc => (
                        <Col xs={12} md={4}>
                            <div className="img-wrap" key={doc.id}
                                onClick={()=>{
                                    SetSelectedImage(doc.url)}
                                }>

                                <img src={doc.url} alt="uploaded imagem" />
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>
        </Layout>
    )
}
