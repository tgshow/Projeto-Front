document.addEventListener('DOMContentLoaded', function() {
    const schedule = [
        { day: 'Dia 1', task: 'Revisão de HTML' },
        { day: 'Dia 2', task: 'Revisão de CSS' },
        { day: 'Dia 3', task: 'Introdução ao Bootstrap' },
        { day: 'Dia 4', task: 'Componentes Básicos do Bootstrap' },
        { day: 'Dia 5', task: 'Layout com Bootstrap' },
        { day: 'Dia 6', task: 'Componentes Interativos' },
        { day: 'Dia 7', task: 'Exercícios Práticos' },
        { day: 'Dia 8', task: 'Componentes Avançados do Bootstrap' },
        { day: 'Dia 9', task: 'Customizando Bootstrap' },
        { day: 'Dia 10', task: 'Introdução ao JavaScript' },
        { day: 'Dia 11', task: 'Estruturas de Controle' },
        { day: 'Dia 12', task: 'Funções em JavaScript' },
        { day: 'Dia 13', task: 'Manipulação do DOM com JS' },
        { day: 'Dia 14', task: 'Exercícios Práticos' },
        { day: 'Dia 15', task: 'Eventos em JavaScript' },
        { day: 'Dia 16', task: 'Ajax e Fetch API' },
        { day: 'Dia 17', task: 'Plugins e JS no Bootstrap' },
        { day: 'Dia 18', task: 'Trabalhando com JSON' },
        { day: 'Dia 19', task: 'Armazenamento Local' },
        { day: 'Dia 20', task: 'Projeto Prático' },
        { day: 'Dia 21', task: 'Projeto Prático (Continuação)' },
        { day: 'Dia 22', task: 'Revisão de Bootstrap' },
        { day: 'Dia 23', task: 'Revisão de JavaScript' },
        { day: 'Dia 24', task: 'Testes e Debugging' },
        { day: 'Dia 25', task: 'Melhorias e Performance' },
        { day: 'Dia 26', task: 'Projeto Final' },
        { day: 'Dia 27', task: 'Projeto Final (Continuação)' },
        { day: 'Dia 28', task: 'Revisão Geral e Preparação para o Futuro' }
    ];

    const scheduleList = document.getElementById('scheduleList');

    function populateSchedule() {
        scheduleList.innerHTML = '';
        schedule.forEach(item => {
            const listItem = document.createElement('li');
            listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
            
            const taskText = document.createElement('span');
            taskText.textContent = `${item.day}: ${item.task}`;

            const checkBox = document.createElement('input');
            checkBox.type = 'checkbox';
            checkBox.className = 'mr-2';

            const icon = document.createElement('i');
            icon.className = 'ml-2 text-success d-none';

            checkBox.addEventListener('change', function() {
                if (checkBox.checked) {
                    taskText.classList.add('completed-task');
                    icon.className = 'ml-2 text-success fas fa-check-circle';
                } else {
                    taskText.classList.remove('completed-task');
                    icon.className = 'ml-2 text-success d-none';
                }
            });

            listItem.appendChild(checkBox);
            listItem.appendChild(taskText);
            listItem.appendChild(icon);

            scheduleList.appendChild(listItem);
        });
    }

    populateSchedule();

    function resetSchedule() {
        populateSchedule();
    }

    const resetButton = document.getElementById('reset-button');
    resetButton.addEventListener('click', resetSchedule);
});
window.onscroll = function() {scrollFunction()};
    
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("btnVoltarAoTopo").style.display = "block";
  } else {
    document.getElementById("btnVoltarAoTopo").style.display = "none";
  }
}

document.getElementById("btnVoltarAoTopo").addEventListener("click", function() {
  window.scrollTo(0, 0); 
});