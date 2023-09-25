document.addEventListener('DOMContentLoaded', function () {
  const optionsSection = document.getElementById('options');

  if (optionsSection) {
    const saveBtn = document.querySelector('.saveBtn');
    const radioOptions = document.querySelectorAll('input[type="radio"][name="opcao"]');

    saveBtn.addEventListener('click', function (e) {
      e.preventDefault();

      let selectedOption = null;

      radioOptions.forEach(function (radio) {
        if (radio.checked) {
          selectedOption = radio.value;
        }
      });

      if (selectedOption) {
        localStorage.setItem('selectedOption', selectedOption);

        // Decida qual página carregar com base na opção selecionada
        switch (selectedOption) {
          case "ACIDENTE DE TRÂNSITO":
            window.location.href = './DadosAcidente.html';
            break;
          case "FURTO E ROUBO":
            window.location.href = './DadosRouboFurto.html';
            break;
          case "MAUS-TRATOS CONTRA ANIMAIS":
            window.location.href = './DadosAnimal.html';
            break;
          case "ABUSO":
            window.location.href = './DadosAbuso.html';
            break;
        }
        } else {
          alert('Por favor, selecione uma opção antes de continuar.');
        }
      });
  }
});


document.addEventListener('DOMContentLoaded', function () {
  const personalDataForm = document.getElementById('personalDataForm');
  const saveBtn = document.querySelector('.saveAndProceed');

  if (personalDataForm && saveBtn) {
    console.log("Formulário e botão encontrados!");

    saveBtn.addEventListener('click', function (e) {
      e.preventDefault();

      const formData = new FormData(personalDataForm);
      const dataObject = {};
      let hasEmptyField = false;

      for (const [key, value] of formData.entries()) {
        if (!value.trim()) {
          hasEmptyField = true;
          break;
        }
        dataObject[key] = value;
      }

      if (hasEmptyField) {
        alert("Por favor, preencha todos os campos antes de continuar.");
        return;
      }

      localStorage.setItem('personalData', JSON.stringify(dataObject));
      window.location.href = saveBtn.getAttribute('href');
    });
  }
});


document.addEventListener('DOMContentLoaded', function () {
  const caseFactsForm = document.getElementById('caseFactsforms');
  const saveBtnCase = document.querySelector('.saveAndProceedCase');

  if (caseFactsForm && saveBtnCase) {
    saveBtnCase.addEventListener('click', function (e) {
      e.preventDefault();

      const formData = new FormData(caseFactsForm);
      const dataObject = {};
      let hasEmptyField = false;  // Uma flag para verificar se há campos vazios

      for (const [key, value] of formData.entries()) {
        if (!value.trim()) {  // Verifica se o valor do campo é vazio ou apenas espaços
          hasEmptyField = true;
          break;  // Se encontrarmos um campo vazio, interrompemos a iteração
        }
        dataObject[key] = value;
      }

      if (hasEmptyField) {
        alert("Por favor, preencha todos os campos antes de continuar.");
        return;  // Encerra a função aqui
      }

      localStorage.setItem('caseFacts', JSON.stringify(dataObject));
      window.location.href = saveBtnCase.getAttribute('href');
    });
  }
});

// funcao animal
document.addEventListener('DOMContentLoaded', function () {
  const animalDataForm = document.getElementById('animalDataForm');
  const saveBtnAnimal = document.querySelector('.saveAndProceedAnimal');

  if (animalDataForm && saveBtnAnimal) {
    saveBtnAnimal.addEventListener('click', function (e) {
      e.preventDefault();

      const formData = new FormData(animalDataForm);
      const dataObject = {};
      let hasEmptyField = false;

      for (const [key, value] of formData.entries()) {
        if (!value.trim()) {
          hasEmptyField = true;
          break;
        }
        dataObject[key] = value;
      }

      if (hasEmptyField) {
        alert("Por favor, preencha todos os campos antes de continuar.");
        return;
      }

      localStorage.setItem('animalData', JSON.stringify(dataObject));
      window.location.href = saveBtnAnimal.getAttribute('href');
    });
  }
});





document.addEventListener('DOMContentLoaded', function () {
  const carAccidentForm = document.getElementById('carAccidentForm');
  const saveBtnAccident = document.querySelector('.saveAndProceedAccident');

  if (carAccidentForm && saveBtnAccident) {
    saveBtnAccident.addEventListener('click', function (e) {
      e.preventDefault();

      const formData = new FormData(carAccidentForm);
      const dataObject = {};
      let hasEmptyField = false;

      for (const [key, value] of formData.entries()) {
        if (!value.trim()) {
          hasEmptyField = true;
          break;
        }
        dataObject[key] = value;
      }

      if (hasEmptyField) {
        alert("Por favor, preencha todos os campos antes de continuar.");
        return;
      }

      localStorage.setItem('carAccidentData', JSON.stringify(dataObject));
      window.location.href = saveBtnAccident.getAttribute('href');
    });
  }
});


document.addEventListener('DOMContentLoaded', function () {
  const abuseForm = document.getElementById('abuseForm');
  const saveBtnAbuse = document.querySelector('.saveAndProceedAbuse');

  if (abuseForm && saveBtnAbuse) {
    saveBtnAbuse.addEventListener('click', function (e) {
      e.preventDefault();

      const formData = new FormData(abuseForm);
      const dataObject = {};
      let hasEmptyField = false;

      for (const [key, value] of formData.entries()) {
        if (!value.trim()) {
          hasEmptyField = true;
          break;
        }
        dataObject[key] = value;
      }

      if (hasEmptyField) {
        alert("Por favor, preencha todos os campos antes de continuar.");
        return;
      }

      localStorage.setItem('abuseData', JSON.stringify(dataObject));
      window.location.href = saveBtnAbuse.getAttribute('href');
    });
  }
});


document.addEventListener('DOMContentLoaded', function () {
  const theftForm = document.getElementById('theftForm');
  const saveBtnTheft = document.querySelector('.saveAndProceedTheft');

  if (theftForm && saveBtnTheft) {
    saveBtnTheft.addEventListener('click', function (e) {
      e.preventDefault();

      const formData = new FormData(theftForm);
      const dataObject = {};
      let hasEmptyField = false;

      for (const [key, value] of formData.entries()) {
        if (!value.trim()) {
          hasEmptyField = true;
          break;
        }
        dataObject[key] = value;
      }

      if (hasEmptyField) {
        alert("Por favor, preencha todos os campos antes de continuar.");
        return;
      }

      localStorage.setItem('theftData', JSON.stringify(dataObject));
      window.location.href = saveBtnTheft.getAttribute('href');
    });
  }
});



const personalDataStored = JSON.parse(localStorage.getItem('personalData'));
const selectedOption = localStorage.getItem('selectedOption');

console.log(personalDataStored);  // Mostra os dados pessoais
console.log(selectedOption);      // Mostra a opção selecionada anteriormente

















// window.onload = function () {
//   var opcaoSalva = localStorage.getItem('opcao');

//   if (opcaoSalva) {
//     document.querySelector('input[name="opcao"][value="' + opcaoSalva + '"]').checked = true;
//   }
// }

// document.getElementById('personalDataForm').addEventListener('submit', function (event) {
//   event.preventDefault();

//   var formData = {
//     name: document.getElementById('name').value,
//     cpf: document.getElementById('cpf').value,
//     rg: document.getElementById('rg').value,
//     email: document.getElementById('email').value,
//     telefone: document.getElementById('telefone').value,
//     cep: document.getElementById('cep').value,
//     endereco: document.getElementById('endereco').value,
//     numero: document.getElementById('numero').value,
//     bairro: document.getElementById('bairro').value,
//     cidade: document.getElementById('cidade').value,
//     estado: document.getElementById('estado').value
//   };

//   localStorage.setItem('formData', JSON.stringify(formData));

//   alert('Dados salvos com sucesso!');
// });

// function preencherFormComDadosSalvos() {
//   var formDataString = localStorage.getItem('formData');

//   if (formDataString) {
//     var formData = JSON.parse(formDataString);

//     document.getElementById('name').value = formData.name || '';
//     document.getElementById('cpf').value = formData.cpf || '';
//     document.getElementById('rg').value = formData.rg || '';
//     document.getElementById('email').value = formData.email || '';
//     document.getElementById('telefone').value = formData.telefone || '';
//     document.getElementById('cep').value = formData.cep || '';
//     document.getElementById('endereco').value = formData.endereco || '';
//     document.getElementById('numero').value = formData.numero || '';
//     document.getElementById('bairro').value = formData.bairro || '';
//     document.getElementById('cidade').value = formData.cidade || '';
//     document.getElementById('estado').value = formData.estado || '';
//   }
// }

// // Preencha o formulário ao carregar a página
// preencherFormComDadosSalvos();

// function exibirpersonalDataFormulario() {
//   // Coletar os dados
//   var formData = {
//     name: document.getElementById('name').value,
//     cpf: document.getElementById('cpf').value,
//     rg: document.getElementById('rg').value,
//     email: document.getElementById('email').value,
//     telefone: document.getElementById('telefone').value,
//     cep: document.getElementById('cep').value,
//     endereco: document.getElementById('endereco').value,
//     numero: document.getElementById('numero').value,
//     bairro: document.getElementById('bairro').value,
//     cidade: document.getElementById('cidade').value,
//     estado: document.getElementById('estado').value
//   };

//   // Formatar os dados
//   var conteudoFormatado = `
//       <h2>Dados do Formulário</h2>
//       <p><strong>Nome Completo:</strong> ${formData.name}</p>
//       <p><strong>CPF:</strong> ${formData.cpf}</p>
//       <p><strong>RG:</strong> ${formData.rg}</p>
//       <p><strong>E-mail:</strong> ${formData.email}</p>
//       <p><strong>Telefone:</strong> ${formData.telefone}</p>
//       <p><strong>CEP:</strong> ${formData.cep}</p>
//       <p><strong>Endereço:</strong> ${formData.endereco}</p>
//       <p><strong>Número:</strong> ${formData.numero}</p>
//       <p><strong>Bairro:</strong> ${formData.bairro}</p>
//       <p><strong>Cidade:</strong> ${formData.cidade}</p>
//       <p><strong>Estado:</strong> ${formData.estado}</p>
//   `;

//   // Atualizar a <div> com o conteúdo formatado
//   document.getElementById('dadosImpressos').innerHTML = conteudoFormatado;
// }


// document.getElementById('formOptions').addEventListener('submit', function (event) {
//   event.preventDefault(); // Previne o envio real do formulário

//   var sectionOptions = document.getElementById('sectionOptions');
//   var sectionPersonalData = document.getElementById('sectionPersonalData');

//   // Esconde a primeira seção e mostra a segunda
//   sectionOptions.classList.add('hidden');
//   sectionPersonalData.classList.remove('hidden');
// });

