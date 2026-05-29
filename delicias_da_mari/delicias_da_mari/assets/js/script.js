const menuToggle = document.querySelector('.menu-toggle');
            const menuDesktop = document.querySelector('.menu-desktop');
            
            menuToggle.addEventListener('click', () => {
                menuDesktop.classList.toggle('mobile-open');
                const icon = menuToggle.querySelector('i');
                icon.className = menuDesktop.classList.contains('mobile-open') ? 'bi bi-x-lg' : 'bi bi-list';
            });

/* ==========================================================================
   LÓGICA DO FORMULÁRIO DE ORÇAMENTO
   ========================================================================== */

// Captura o formulário pelo ID único
const formOrcamento = document.getElementById('form-orcamento');

// Executa a lógica apenas se o formulário existir na página atual (evita erros no console)
if (formOrcamento) {
    
    formOrcamento.addEventListener('submit', function(event) {
        //Previne o recarregamento automático padrão da página
        event.preventDefault();

        //Captura os dados inseridos pelos inputs e higieniza com o trim()
        const dadosOrcamento = {
            nome: document.getElementById('nome').value.trim(),
            email: document.getElementById('email').value.trim(),
            whatsapp: document.getElementById('whatsapp').value.trim(),
            tipoDoce: document.getElementById('tipo-doce').value,
            dataEvento: document.getElementById('data-evento').value,
            detalhes: document.getElementById('detalhes').value.trim()
        };

        //Validação de segurança básica extra
        if (dadosOrcamento.nome === "" || dadosOrcamento.email === "" || dadosOrcamento.detalhes === "") {
            alert("Por favor, preencha todos os campos obrigatórios.");
            return;
        }

        //Formatação da Data para exibição amigável ao usuário (Padrão Pt-BR)
        const dataFormatada = new Date(dadosOrcamento.dataEvento).toLocaleDateString('pt-BR', {timeZone: 'UTC'});

        //Simulação de processamento assíncrono (Backend/API)
        console.log("Enviando dados para o servidor...", dadosOrcamento);

        // Mensagem visual de sucesso customizada para o cliente da confeitaria
        alert(
            `🧁 Pedido de Orçamento Recebido com Sucesso!\n\n` +
            `Olá ${dadosOrcamento.nome}, recebemos o seu pedido para a data ${dataFormatada}.\n\n` +
            `Nossa equipe analisará os detalhes e enviará uma proposta comercial completa para o e-mail: ${dadosOrcamento.email} dentro de até 24 horas úteis.\n\n` +
            `Obrigado por escolher as Delícias da Mari!`
        );

        //Limpa todos os campos do formulário após o sucesso
        formOrcamento.reset();
    });
}

/* ==========================================================================
   EFEITO EXTRA: HEADER ATIVO DINÂMICO
   ========================================================================== */
// Garante o funcionamento correto dos links de navegação da página interna
const linksMenu = document.querySelectorAll('header nav.menu-desktop a');

linksMenu.forEach(link => {
    link.addEventListener('click', function() {
        linksMenu.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
        
        // Se for mobile, fecha o menu ao clicar em um link
        const menuDesktop = document.querySelector('.menu-desktop');
        if (menuDesktop && menuDesktop.classList.contains('mobile-open')) {
            menuDesktop.classList.remove('mobile-open');
            const icon = document.querySelector('.menu-toggle i');
            if (icon) icon.className = 'bi bi-list';
        }
    });
});