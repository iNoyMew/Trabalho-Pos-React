import React, { useState, useEffect } from "react";
import { Container, Form, FormGroup, Label, Input, Button, FormFeedback, Spinner } from "reactstrap";
import ModalConfirmacao from "./Resultado";
import { atualizaFormulario, enviaFormulario, confirmarEnvio } from "./Validação";

const Feedback = () => {
    const [formData, setFormData] = useState({ nome: "", email: "", feedback: "", option: "" });
    const [errors, setErrors] = useState([]);
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
            <Form onSubmit={(e) => enviaFormulario(e, formData, setErrors, setModalOpen)}>
                <FormGroup>
                    <Label for="nome">Nome</Label>
                    <Input
                        type="text"
                        name="nome"
                        id="nome"
                        value={formData.nome}
                        onChange={(e) => atualizaFormulario(e, formData, setFormData, setErrors)}
                        invalid={!!errors.nome}
                    />
                    <FormFeedback>{errors.nome}</FormFeedback>
                </FormGroup>

                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => atualizaFormulario(e, formData, setFormData, setErrors)}
                        invalid={!!errors.email}
                    />
                    <FormFeedback>{errors.email}</FormFeedback>
                </FormGroup>

                <FormGroup>
                    <Label for="feedback">Sobre você</Label>
                    <Input
                        type="textarea"
                        name="feedback"
                        id="feedback"
                        value={formData.feedback}
                        onChange={(e) => atualizaFormulario(e, formData, setFormData, setErrors)}
                        invalid={!!errors.feedback}
                    />
                    <FormFeedback>{errors.feedback}</FormFeedback>
                </FormGroup>

                <FormGroup>
                    <Label for="option">Estado</Label>
                    <Input
                        type="select"
                        name="option"
                        id="option"
                        value={formData.option}
                        onChange={(e) => atualizaFormulario(e, formData, setFormData, setErrors)}
                        invalid={!!errors.option}
                    >
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
                confirmarEnvio={() => confirmarEnvio(setModalOpen, formData)}
                fadeIn={true}
            />
        </Container>
    );
};

export default Feedback;
