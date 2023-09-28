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

        switch (selectedOption) {
          case "Acidente de Trânsito":
            window.location.href = './DadosAcidente.html';
            break;
          case "Furto e Roubo":
            window.location.href = './DadosRouboFurto.html';
            break;
          case "Maus-Tratos contra Animais":
            window.location.href = './DadosAnimal.html';
            break;
          case "Abuso":
            window.location.href = './DadosAbuso.html';
            break;
        }
      } else {
        alert('Por favor, selecione uma opção antes de continuar.');
      }
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

// acidente de transito
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

// abuso
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

// furto e roubo
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

// dados pessoais
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

// relato terceiros
document.addEventListener('DOMContentLoaded', function () {
  const caseFactsForm = document.getElementById('caseFactsforms');
  const saveBtnCase = document.querySelector('.saveAndProceedCase');

  if (caseFactsForm && saveBtnCase) {
    saveBtnCase.addEventListener('click', function (e) {
      e.preventDefault();

      const formData = new FormData(caseFactsForm);
      const dataObject = {};
      let hasEmptyField = false;

      for (const [key, value] of formData.entries()) {
        if (!value.trim()) {
          hasEmptyField = true;
          break;
        }
        dataObject[key] = value;
      }

      localStorage.setItem('caseFacts', JSON.stringify(dataObject));
      window.location.href = saveBtnCase.getAttribute('href');
    });
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const userData = getConsolidatedData();

  displayValuesInHTML(userData);
});

function getConsolidatedData() {
  const dataKeys = ['selectedOption', 'animalData', 'carAccidentData', 'abuseData', 'theftData', 'personalData', 'caseFacts'];
  let consolidatedData = {};

  dataKeys.forEach(key => {
    const data = localStorage.getItem(key);
    if (data) {
      if (typeof data === 'string' && !data.startsWith('{')) {
        consolidatedData[key] = data;
      } else {
        const parsedData = JSON.parse(data);
        consolidatedData = { ...consolidatedData, ...parsedData };
      }
    }
  });

  return consolidatedData;
}

function displayValuesInHTML(userData) {
  for (const [key, value] of Object.entries(userData)) {
    const element = document.getElementById(`display_${key}`);
    if (element) {
      element.textContent = value;
    }
  }
}
console.log('Displaying consolidated data: ', getConsolidatedData());