// Armazenar as mensagens de cada contato
const chatHistory = {
  "Ricardo Alves": [],
  "Fernanda da Silva": [],
  "Roberta Amarantos": []
};

// Seleciona todos os contatos da barra lateral
const contacts = document.querySelectorAll('.contact');
const chatHeaderImg = document.querySelector('.chat-header img');
const chatHeaderName = document.querySelector('.chat-header .contact-name');
const messagesContainer = document.querySelector('.messages');
const inputField = document.querySelector('.chat-input input');
const sendButton = document.querySelector('.chat-input button');

let activeContact = 'Ricardo Alves'; // Contato inicial

// Função para exibir mensagens de um contato específico
function loadMessages(contactName) {
  messagesContainer.innerHTML = ''; // Limpa as mensagens atuais

  const messages = chatHistory[contactName] || []; // Recupera as mensagens do contato
  messages.forEach(msg => {
      const newMessage = document.createElement('div');
      newMessage.classList.add('message', msg.type);
      newMessage.innerHTML = `<p>${msg.text}</p>`;
      messagesContainer.appendChild(newMessage);
  });

  // Rola a área de mensagens para a última mensagem
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Função para atualizar a última mensagem na barra lateral
function updateLastMessage(contactName, messageText) {
  contacts.forEach(contact => {
    if (contact.getAttribute('data-contact') === contactName) {
      const lastMessageSpan = document.createElement('span');
      lastMessageSpan.classList.add('last-message');
      lastMessageSpan.innerText = messageText;
      
      // Se já existir uma mensagem, atualize-a
      const existingLastMessage = contact.querySelector('.last-message');
      if (existingLastMessage) {
        existingLastMessage.innerText = messageText;
      } else {
        // Senão, adicione a mensagem na estrutura
        contact.querySelector('.contact-info').appendChild(lastMessageSpan);
      }
    }
  });
}

// Carrega as mensagens do contato ativo inicial
loadMessages(activeContact);

// Função para trocar de chat quando um contato for clicado
contacts.forEach(contact => {
  contact.addEventListener('click', function () {
      // Remove a classe 'active' de todos os contatos
      contacts.forEach(c => c.classList.remove('active'));
      
      // Adiciona a classe 'active' ao contato clicado
      this.classList.add('active');

      // Troca a imagem e o nome do cabeçalho do chat
      const contactImgSrc = this.querySelector('img').getAttribute('src');
      const contactName = this.getAttribute('data-contact');

      chatHeaderImg.setAttribute('src', contactImgSrc);
      chatHeaderName.innerText = contactName;

      // Atualiza o contato ativo
      activeContact = contactName;

      // Carrega as mensagens do contato selecionado
      loadMessages(contactName);
  });
});

// Função para enviar mensagens
sendButton.addEventListener('click', function () {
  const messageText = inputField.value.trim();

  if (messageText !== '') {
      // Armazena a nova mensagem no histórico do contato ativo
      chatHistory[activeContact].push({ text: messageText, type: 'sent' });

      // Cria um novo elemento de mensagem
      const newMessage = document.createElement('div');
      newMessage.classList.add('message', 'sent');
      newMessage.innerHTML = `<p>${messageText}</p>`;

      // Adiciona a nova mensagem ao container de mensagens
      messagesContainer.appendChild(newMessage);

      // Atualiza a última mensagem na barra lateral
      updateLastMessage(activeContact, messageText);

      // Rola a área de mensagens para a última mensagem
      messagesContainer.scrollTop = messagesContainer.scrollHeight;

      // Limpa o campo de entrada
      inputField.value = '';
  }
});

// Enviar mensagem ao pressionar Enter
inputField.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
      sendButton.click();
  }
});

// Função para receber mensagens (simuladas)
function receiveMessage(contactName, messageText) {
  // Armazena a nova mensagem no histórico do contato
  chatHistory[contactName].push({ text: messageText, type: 'received' });

  // Se o contato ativo for o mesmo que recebeu a mensagem, exiba-a no chat
  if (contactName === activeContact) {
      const newMessage = document.createElement('div');
      newMessage.classList.add('message', 'received');
      newMessage.innerHTML = `<p>${messageText}</p>`;
      messagesContainer.appendChild(newMessage);

      // Rola a área de mensagens para a última mensagem
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  // Atualiza a última mensagem na barra lateral
  updateLastMessage(contactName, messageText);
}

// Simulação de uma mensagem recebida do "pastor"
setTimeout(() => {
  receiveMessage('Ricardo Alves', 'Gostei do trabalho! Posso te adicionar no WhatsApp?');
}, 1000); // Mensagem recebida após 1 segundos

setTimeout(() => {
  receiveMessage('Fernanda da Silva', 'Boa noite! Está disponível para essa quarta-feira?');
}, 3000); // Mensagem recebida após 1 segundos

setTimeout(() => {
  receiveMessage('Roberta Amarantos', 'Já enviei o dinheiro adiantado!');
}, 4000); // Mensagem recebida após 1 segundos
