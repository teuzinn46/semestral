
emailjs.init("rI2Ll_wfpPUtynsda"); 


function sendMail(event) {
  event.preventDefault(); 

 
  const params = {
    nome: document.getElementById("nome").value,
    email: document.getElementById("email").value,
    telefone: document.getElementById("telefone").value,
    importancia: document.getElementById("importancia").value,
  };
  

 
  emailjs.send("healin", "healin_modelo", params) 
    .then(function(response) {
      alert("E-mail enviado com sucesso!");
      document.getElementById("ContactForm").reset(); 
    }, function(error) {
      alert("Erro ao enviar e-mail. Tente novamente.");
    });

    reader.readAsDataURL(arquivoFile);
}