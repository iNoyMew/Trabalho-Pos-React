export const atualizaFormulario = (e, formData, setFormData, setErrors) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
};

export const validarDados = (formData) => {
    let newErrors = {};
    if (!formData.nome) newErrors.nome = "Nome é obrigatório!";
    if (!formData.email.includes("@")) newErrors.email = "E-mail inválido!";
    if (!formData.feedback) newErrors.feedback = "Feedback não pode estar vazio!";
    if (!formData.option) newErrors.option = "Selecione uma opção!";
    return newErrors;
};

export const enviaFormulario = (e, formData, setErrors, setModalOpen) => {
    e.preventDefault();
    const validationErrors = validarDados(formData);
    if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
    } else {
        setModalOpen(true);
    }
};

export const confirmarEnvio = (setModalOpen, formData) => {
    setModalOpen(false);
    alert("Formulário enviado com sucesso!");
    console.log(formData);
};