// Inicialize o EmailJS com sua chave de usuário
(function() {
    emailjs.init(rI2Ll_wfpPUtynsda); // chave de usuário fornecida
  })();
  
  // Inicialize o FileStack com sua chave de API
  const filestackClient = filestack.init(ACwduUjnITP2K7XUmTau6z);
  
  function sendMail(event) {
    event.preventDefault(); // Evita o envio padrão do formulário
  
    // Obter o formulário e os dados do usuário
    const form = document.getElementById('contactForm');
    const formData = new FormData(form);
  
    // Obter o arquivo selecionado
    const fileInput = document.getElementById('arquivo').files[0];
  
    // Verificar se um arquivo foi selecionado
    if (!fileInput) {
      alert("Por favor, selecione um arquivo para enviar.");
      return;
    }
  
    // Fazer o upload do arquivo para o FileStack
    filestackClient.upload(fileInput)
      .then(response => {
        const fileUrl = response.url; // URL do arquivo hospedado no FileStack
  
        // Dados para envio com o EmailJS
        const data = {
          nome: formData.get('nome'),
          email: formData.get('email'),
          telefone: formData.get('telefone'),
          importancia: formData.get('importancia'),
          arquivo_url: fileUrl // URL do arquivo enviado
        };
  
        // Enviar o formulário via EmailJS
        return emailjs.send(healin, template_healin, data);
      })
      .then(response => {
        alert("E-mail enviado com sucesso!");
        console.log("E-mail enviado", response);
      })
      .catch(error => {
        alert("Erro ao enviar e-mail ou fazer upload do arquivo!");
        console.log("Erro", error);
      });
  }
  