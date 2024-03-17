function ValidarFormulario() {

    // Validação Nome
    if (document.form.nome.value == '') {
        alert("Preencher o campo obrigatório Nome!");
        document.form.nome.focus();

        return false;
    }

    // Validação E-mail
    if (document.form.email.value == '') {
        alert("Preencher o campo obrigatório E-mail!");
        document.form.email.focus();

        return false;
    }

    // // Validação Assunto
    if (document.form.ass.value == '') {
        alert("Preencher o campo obrigatório Assunto!");
        document.form.ass.focus();

        return false;
    }

    // // Validação Mensagem
    if (document.form.msg.value == '') {
        alert("Preencher o campo obrigatório Mensagem!");
        document.form.msg.focus();

        return false;
    }

}