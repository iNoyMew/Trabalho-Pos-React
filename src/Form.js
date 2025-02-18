import React, { useState, useEffect } from "react";
import { Container, Form, FormGroup, Label, Input, Button, FormFeedback, Spinner } from "reactstrap";
import ModalConfirmacao from "./Resultado"; 

const Feedback = () => {
    const [formData, setFormData] = useState({ nome: "", email: "", feedback: "", option: "" });
    const [errors, setErrors] = useState({});
    const [options, setOptions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [modalOpen, setModalOpen] = useState(false); 

    useEffect(() => {
        fetch("https://api.npoint.io/f2ada66cea0f55e2c6ed")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Erro ao buscar os dados");
                }
                return response.json();
            })
            .then((data) => {
                setOptions(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    const atualizaFormulario = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: "" });
    };

    const validarDados = () => {
        let newErrors = {};
        if (!formData.nome) newErrors.nome = "Nome é obrigatório!";
        if (!formData.email.includes("@")) newErrors.email = "E-mail inválido!";
        if (!formData.feedback) newErrors.feedback = "Feedback não pode estar vazio!";
        if (!formData.option) newErrors.option = "Selecione uma opção!";
        return newErrors;
    };

    const enviaFormulario = (e) => {
        e.preventDefault();
        const validationErrors = validarDados();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setModalOpen(true); 
        }
    };

    const confirmarEnvio = () => {
        setModalOpen(false);
        alert("Formulário enviado com sucesso!");
        console.log(formData);
    };

    if (loading) return (
        <Container className="mt-4 text-center">
            <h1>Cadastro de usuário</h1>
            <Spinner style={{ width: "3rem", height: "3rem" }} />
        </Container>
    );

    if (error) return (
        <Container className="mt-4">
            <h1>Cadastro de usuário</h1>
            <p>Erro: {error}</p>
        </Container>
    );

    return (
        <Container className="mt-4">
            <h1>Cadastro de usuário</h1>
            <Form onSubmit={enviaFormulario}>
                <FormGroup>
                    <Label for="nome">Nome</Label>
                    <Input type="text" name="nome" id="nome" value={formData.nome} onChange={atualizaFormulario} invalid={!!errors.nome} />
                    <FormFeedback>{errors.nome}</FormFeedback>
                </FormGroup>

                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input type="email" name="email" id="email" value={formData.email} onChange={atualizaFormulario} invalid={!!errors.email} />
                    <FormFeedback>{errors.email}</FormFeedback>
                </FormGroup>

                <FormGroup>
                    <Label for="feedback">Sobre você</Label>
                    <Input type="textarea" name="feedback" id="feedback" value={formData.feedback} onChange={atualizaFormulario} invalid={!!errors.feedback} />
                    <FormFeedback>{errors.feedback}</FormFeedback>
                </FormGroup>

                <FormGroup>
                    <Label for="option">Estado</Label>
                    <Input type="select" name="option" id="option" value={formData.option} onChange={atualizaFormulario} invalid={!!errors.option}>
                        <option value="">Selecione...</option>
                        {options.map((opt, index) => (
                            <option key={index} value={opt.name}>{opt.name}</option>
                        ))}
                    </Input>
                    <FormFeedback>{errors.option}</FormFeedback>
                </FormGroup>

                <Button color="primary" type="submit">Enviar</Button>
            </Form>

            
            <ModalConfirmacao
                isOpen={modalOpen}
                toggle={() => setModalOpen(!modalOpen)}
                formData={formData}
                confirmarEnvio={confirmarEnvio}
                fadeIn={true}
            />
        </Container>
    );
};

export default Feedback;
