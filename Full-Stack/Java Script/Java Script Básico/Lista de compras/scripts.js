const localStorageKey = 'shopping-list'

function validateIfExistsNewTask() {
    let values = JSON.parse(localStorage.getItem(localStorageKey)) || []
    let input = document.getElementById('item-input')
    let exists = values.find(x => x.name.toLowerCase() === input.value.toLowerCase())
    
    return !!exists
}

function newItem() {
    let input = document.getElementById('item-input')

    if (!input.value.trim()) {
        alert('Digite algo para inserir em sua lista.')
    }
   
    else if (validateIfExistsNewTask()) {
        alert('Já existe um item com essa descrição')
    }
    else {
        let values = JSON.parse(localStorage.getItem(localStorageKey)) || []
        values.push({
            name: input.value.trim()
        })
        localStorage.setItem(localStorageKey, JSON.stringify(values))
        showValues()
        input.value = '' 
    }
}

function showValues() {
    let values = JSON.parse(localStorage.getItem(localStorageKey)) || []
    let list = document.getElementById('items-list')
    list.innerHTML = ''

    for (let i = 0; i < values.length; i++) {
        list.innerHTML += 
            `
                <li class="flex items-center p-4 bg-back-secundary text-content-secundary font-medium text-label gap-3 rounded-xl justify-between">
                    <div class="flex items-center gap-2">
                        <label class="checkbox-container">
                            <!-- Adicionada a classe checkbox-input para conectar com o CSS -->
                            <input type="checkbox" class="checkbox-input">
                            <div class="check-box"></div>
                        </label>
                        ${values[i]['name']}
                    </div>
                    <div>
                        <!-- Removido o id="btn-svg" duplicado e mantido o onclick -->
                        <svg width="32" height="32" onclick="removeItem('${values[i]['name']}')" class="cursor-pointer" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 11.6667L20.5869 18.3501C20.4813 20.0576 20.4285 20.9114 20.0005 21.5253C19.7889 21.8288 19.5165 22.0849 19.2005 22.2774C18.5614 22.6667 17.706 22.6667 15.9951 22.6667C14.2821 22.6667 13.4255 22.6667 12.786 22.2766C12.4699 22.0838 12.1973 21.8272 11.9858 21.5232C11.5579 20.9084 11.5063 20.0534 11.4031 18.3435L11 11.6667" stroke="#6B6671" stroke-linecap="round"/>
                            <path d="M10 11.6666H22M18.7038 11.6666L18.2487 10.7278C17.9464 10.1042 17.7952 9.79233 17.5345 9.59785C17.4767 9.55471 17.4154 9.51634 17.3513 9.48311C17.0626 9.33331 16.7161 9.33331 16.023 9.33331C15.3125 9.33331 14.9573 9.33331 14.6638 9.48939C14.5987 9.52399 14.5367 9.56391 14.4782 9.60876C14.2144 9.81111 14.0671 10.1343 13.7724 10.7808L13.3686 11.6666" stroke="#6B6671" stroke-linecap="round"/>
                            <path d="M14.3334 19V15" stroke="#6B6671" stroke-linecap="round"/>
                            <path d="M17.6666 19V15" stroke="#6B6671" stroke-linecap="round"/>
                        </svg>
                    </div>
                </li>
            `
    }   
}

// Variável para armazenar o tempo do alerta e evitar acúmulo de timeouts
let alertTimeout;

function showRemoveAlert() {
    const alertElement = document.getElementById('remove-alert');
    
    if (!alertElement) return;

    // 1. Remove a classe 'hidden' para mostrar o alerta
    alertElement.classList.remove('hidden');

    // 2. Limpa qualquer temporizador anterior (caso o usuário exclua vários itens rapidamente)
    clearTimeout(alertTimeout);

    // 3. Define para esconder automaticamente após 3 segundos (3000ms)
    alertTimeout = setTimeout(() => {
        hideRemoveAlert();
    }, 3000);
}

function hideRemoveAlert() {
    const alertElement = document.getElementById('remove-alert');
    if (alertElement) {
        alertElement.classList.add('hidden');
    }
    // Limpa o timer se a pessoa fechar manualmente
    clearTimeout(alertTimeout);
}

// Configura o evento do botão de fechar (X) no alerta
document.addEventListener('DOMContentLoaded', () => {
    const closeBtn = document.getElementById('close-alert-btn');
    if (closeBtn) {
        closeBtn.addEventListener('click', hideRemoveAlert);
    }
});

function removeItem(data) {
    let values = JSON.parse(localStorage.getItem(localStorageKey)) || [];
    let index = values.findIndex(x => x.name === data);
    
    if (index !== -1) {
        values.splice(index, 1);
        localStorage.setItem(localStorageKey, JSON.stringify(values));
        
        // Atualiza a lista na tela
        showValues();
        
        // Exibe o alerta de remoção
        showRemoveAlert();
    }
}

showValues()