function validationForm() {
    let validationCod = document.forms['register']["cod"].value; 
    //Diferente do getById o formulário possui uma função para selecionar um formulário já utilizado no HTML 
    //1°Conchets - nome do formulário
    //2° Conchets - nome do input que queremos acessar
    //value acessa o valor do input cod
    let validationTitle = document.forms['register']["title"].value; 
    let validationDirector = document.forms['register']["director"].value; 
    let validationDate = document.forms['register']["date"].value; 
    let validationRadio = document.forms['register']["radio"].value; 
    let validationAt = document.forms['register']["at"].value; 
    let validationNota = document.forms['register']["nota"].value; 
    
    if (validationCod == "") {
    alert ("O código deve ser preenchido");
    return false;
    }
    if (validationTitle == "") {
        alert ("O titulo deve ser preenchido");
        return false;
    }
    if (validationDirector == "") {
        alert ("O diretor deve ser preenchido");
        return false;
    }
    if (validationDate == "") {
        alert ("a data deve ser preenchida");
        return false;
    }
    if (validationRadio == "") {
        alert ("O gênero deve ser preenchido");
        return false;
    }
    if (validationAt == "") {
        alert ("O ator/triz deve ser preenchido");
        return false;
    }
    if (validationNota == "") {
        alert ("a nota deve ser preenchida");
        return false;
    }
    alert("A validação ocorreu de forma correta");
}

function insert() {
    let cod = document.forms['register']["cod"].value; 
    let title = document.forms['register']["title"].value; 
    let director = document.forms['register']["director"].value; 
    let date = document.forms['register']["date"].value; 
    let radio = document.forms['register']["radio"].value;
    let at = document.forms['register']["at"].value;
    let nota = document.forms['register']["nota"].value;

    let insert = window.document.getElementById("insertRow");

    insert.innerHTML = `
    <th scope="row">${cod}</th>
    <td>${title}</td>
    <td>${director}</td>
    <td>${date}</td>
    <td>${radio}</td>
    <td>${at}</td>
    <td>${nota}</td>
    `;
}