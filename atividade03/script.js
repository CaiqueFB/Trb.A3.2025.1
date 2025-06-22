document.addEventListener('DOMContentLoaded', () => {
    const addUcBtn = document.getElementById('add-uc-btn');
    const ucCursandoList = document.getElementById('uc-cursando');

    if (addUcBtn && ucCursandoList) {
        addUcBtn.addEventListener('click', () => {
            let ucName;
            while (true) {
                ucName = prompt(`Digite o nome da UC (ou clique em Cancelar/Deixe vazio para finalizar):`);
                if (ucName === null || ucName.trim() === '') {
                    break;
                }
                let listItem = document.createElement('li');
                listItem.textContent = ucName;
                listItem.innerHTML += ' <button class="move-up">↑</button><button class="move-down">↓</button>';
                ucCursandoList.appendChild(listItem);
            }
        });
    }

    if (ucCursandoList) {
        ucCursandoList.addEventListener('click', (event) => {
            const target = event.target;
            if (target.classList.contains('move-up')) {
                const listItem = target.closest('li');
                const prevSibling = listItem.previousElementSibling;
                if (prevSibling) {
                    ucCursandoList.insertBefore(listItem, prevSibling);
                }
            } else if (target.classList.contains('move-down')) {
                const listItem = target.closest('li');
                const nextSibling = listItem.nextElementSibling;
                if (nextSibling && nextSibling.tagName === 'LI') {
                    ucCursandoList.insertBefore(nextSibling, listItem);
                }
            }
        });
    }

    function validateCpf() {
        const cpfValue = cpfInput.value;
        const cpfRegex = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;

        if (cpfValue === "") {
            cpfError.style.display = 'none';
            cpfInput.style.borderColor = '';
        } else if (!cpfRegex.test(cpfValue)) {
            cpfError.style.display = 'block';
            cpfInput.style.borderColor = 'red';
        } else {
            cpfError.style.display = 'none';
            cpfInput.style.borderColor = 'green';
        }
    }

    function validateEmail() {
        const emailValue = emailInput.value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailValue === "") {
            emailError.style.display = 'none';
            emailInput.style.borderColor = '';
        } else if (!emailRegex.test(emailValue)) {
            emailError.style.display = 'block';
            emailInput.style.borderColor = 'red';
        } else {
            emailError.style.display = 'none';
            emailInput.style.borderColor = 'green';
        }
    }

    const cpfInput = document.getElementById('cpf-input');
    const cpfError = document.getElementById('cpf-error');

    if (cpfInput && cpfError) {
        cpfInput.addEventListener('blur', validateCpf); // 
        cpfInput.addEventListener('keyup', (event) => {
            if (event.key === 'Enter') {
                validateCpf(); 
            }
        });
    }
    const emailInput = document.getElementById('email-input');
    const emailError = document.getElementById('email-error');

    if (emailInput && emailError) {
        emailInput.addEventListener('blur', validateEmail); 
        emailInput.addEventListener('keyup', (event) => {
            if (event.key === 'Enter') {
                validateEmail();
            }
        });
    }
    const perfilPessoalAdicional = document.getElementById('perfil-pessoal-adicional');
    if (perfilPessoalAdicional) {
    }
});