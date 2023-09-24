console.log("O script.js foi carregado!");

document.getElementById('formOptions').addEventListener('submit', function(event) {
  event.preventDefault();

  var radios = document.getElementsByName('opcao');
  var opcaoSelecionada;

  for (var i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
          opcaoSelecionada = radios[i].value;
          break;
      }
  }

  if (opcaoSelecionada) {
      localStorage.setItem('opcao', opcaoSelecionada);
      alert('Opção salva com sucesso!');
      mostrarResultado(); // Atualiza a exibição do resultado na página
  } else {
      alert('Por favor, selecione uma opção.');
  }
});

function mostrarResultado() {
  var opcaoSalva = localStorage.getItem('opcao');

  if (opcaoSalva) {
      var elementoResultado = document.getElementById('resultado');
      elementoResultado.innerHTML = "Você selecionou: " + opcaoSalva;
  }
}

mostrarResultado(); // Mostra o resultado ao carregar a página


window.onload = function() {
  var opcaoSalva = localStorage.getItem('opcao');

  if (opcaoSalva) {
      document.querySelector('input[name="opcao"][value="' + opcaoSalva + '"]').checked = true;
  }
}

document.getElementById('personalDataForm').addEventListener('submit', function(event) {
  event.preventDefault();

  var formData = {
      name: document.getElementById('name').value,
      cpf: document.getElementById('cpf').value,
      rg: document.getElementById('rg').value,
      email: document.getElementById('email').value,
      telefone: document.getElementById('telefone').value,
      cep: document.getElementById('cep').value,
      endereco: document.getElementById('endereco').value,
      numero: document.getElementById('numero').value,
      bairro: document.getElementById('bairro').value,
      cidade: document.getElementById('cidade').value,
      estado: document.getElementById('estado').value
  };

  localStorage.setItem('formData', JSON.stringify(formData));

  alert('Dados salvos com sucesso!');
});

function preencherFormComDadosSalvos() {
  var formDataString = localStorage.getItem('formData');

  if (formDataString) {
      var formData = JSON.parse(formDataString);

      document.getElementById('name').value = formData.name || '';
      document.getElementById('cpf').value = formData.cpf || '';
      document.getElementById('rg').value = formData.rg || '';
      document.getElementById('email').value = formData.email || '';
      document.getElementById('telefone').value = formData.telefone || '';
      document.getElementById('cep').value = formData.cep || '';
      document.getElementById('endereco').value = formData.endereco || '';
      document.getElementById('numero').value = formData.numero || '';
      document.getElementById('bairro').value = formData.bairro || '';
      document.getElementById('cidade').value = formData.cidade || '';
      document.getElementById('estado').value = formData.estado || '';
  }
}

// Preencha o formulário ao carregar a página
preencherFormComDadosSalvos();

function exibirpersonalDataFormulario() {
  // Coletar os dados
  var formData = {
      name: document.getElementById('name').value,
      cpf: document.getElementById('cpf').value,
      rg: document.getElementById('rg').value,
      email: document.getElementById('email').value,
      telefone: document.getElementById('telefone').value,
      cep: document.getElementById('cep').value,
      endereco: document.getElementById('endereco').value,
      numero: document.getElementById('numero').value,
      bairro: document.getElementById('bairro').value,
      cidade: document.getElementById('cidade').value,
      estado: document.getElementById('estado').value
  };

  // Formatar os dados
  var conteudoFormatado = `
      <h2>Dados do Formulário</h2>
      <p><strong>Nome Completo:</strong> ${formData.name}</p>
      <p><strong>CPF:</strong> ${formData.cpf}</p>
      <p><strong>RG:</strong> ${formData.rg}</p>
      <p><strong>E-mail:</strong> ${formData.email}</p>
      <p><strong>Telefone:</strong> ${formData.telefone}</p>
      <p><strong>CEP:</strong> ${formData.cep}</p>
      <p><strong>Endereço:</strong> ${formData.endereco}</p>
      <p><strong>Número:</strong> ${formData.numero}</p>
      <p><strong>Bairro:</strong> ${formData.bairro}</p>
      <p><strong>Cidade:</strong> ${formData.cidade}</p>
      <p><strong>Estado:</strong> ${formData.estado}</p>
  `;

  // Atualizar a <div> com o conteúdo formatado
  document.getElementById('dadosImpressos').innerHTML = conteudoFormatado;
}


document.getElementById('formOptions').addEventListener('submit', function(event) {
  event.preventDefault(); // Previne o envio real do formulário
  
  var sectionOptions = document.getElementById('sectionOptions');
  var sectionPersonalData = document.getElementById('sectionPersonalData');
  
  // Esconde a primeira seção e mostra a segunda
  sectionOptions.classList.add('hidden');
  sectionPersonalData.classList.remove('hidden');
});

