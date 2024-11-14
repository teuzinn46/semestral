// Inicialize o EmailJS com sua chave de usuário
(function() {
    emailjs.init("rI2Ll_wfpPUtynsda"); // Substitua pela sua chave do EmailJS
  })();
  
  function sendMail(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
  
    const form = document.getElementById('contactForm');
    const formData = new FormData(form);
  
    // Obtém o arquivo do input
    const fileInput = document.getElementById('curriculo').files[0];
  
    // Carregar o arquivo usando base64 para enviá-lo pelo EmailJS
    const reader = new FileReader();
    reader.readAsDataURL(fileInput);
    reader.onload = function() {
      const fileData = reader.result.split(',')[1]; // Remove o prefixo data
  
      // Dados para enviar com o EmailJS
      const data = {
        nome: formData.get('nome'),
        email: formData.get('email'),
        telefone: formData.get('telefone'),
        importancia: formData.get('importancia'),
        curriculo: fileData,
        curriculo_nome: fileInput.name
      };
  
      // Envio do e-mail pelo EmailJS
      emailjs.send("healin", "healin_modelo", data)
        .then(response => {
          document.getElementById('result').innerText = "E-mail enviado com sucesso!";
          console.log("E-mail enviado", response);
        })
        .catch(error => {
          document.getElementById('result').innerText = "Erro ao enviar e-mail.";
          console.error("Erro", error);
        });
    };
  
    reader.onerror = function(error) {
      console.error("Erro ao ler o arquivo:", error);
      alert("Erro ao ler o arquivo.");
    };
  }
  