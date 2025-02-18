import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";

const ModalConfirmacao = ({ isOpen, toggle, formData, confirmarEnvio, fadeIn }) => {
    return (
        <Modal isOpen={isOpen} toggle={toggle} fade={fadeIn}>
            <ModalHeader toggle={toggle}>Confirme seus dados</ModalHeader>
            <ModalBody>
                <p><strong>Nome:</strong> {formData.nome}</p>
                <p><strong>Email:</strong> {formData.email}</p>
                <p><strong>Sobre você:</strong> {formData.feedback}</p>
                <p><strong>Estado:</strong> {formData.option}</p>
            </ModalBody>
            <ModalFooter>
                <Button color="success" onClick={confirmarEnvio}>Confirmar</Button>{' '}
                <Button color="secondary" onClick={toggle}>Editar</Button>
            </ModalFooter>
            
        </Modal>
    );
};

export default ModalConfirmacao;
