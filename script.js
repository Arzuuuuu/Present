const messages = [
    'Ops! Sembra che tu abbia bisogno di un po’ di pratica o un po di memoria. Riprova!',
    'Hmm, non è proprio giusto. Prova un’altra volta!',
    'Quasi, ma non proprio. Forse prova un’altra combinazione?',
    'Nope, non è quello giusto. Forse il tuo cane ha camminato sulla tastiera?',
    'Oopsie! Password non trovata. Prova qualcosa con “Banana”?'
  ];
  
  let attemptCount = 0; // Contatore per il numero di tentativi errati
  
  function checkPassword() {
    const correctPassword = 'Banana2000';  // Imposta la password corretta
    const passwordInput = document.getElementById('passwordInput').value;
    const errorMessage = document.getElementById('errorMessage');
    
    if (passwordInput === correctPassword) {
      // Ripristina il contatore dei tentativi
      attemptCount = 0;
      // Naviga alla pagina successiva se la password è corretta
      window.location.href = './lettera/lettera.html';  // Sostituisci con la tua pagina successiva
    } else {
      // Mostra un messaggio divertente basato sul numero di tentativi
      errorMessage.textContent = messages[attemptCount % messages.length];
      errorMessage.style.display = 'block';
      // Pulisci il campo di input della password
      document.getElementById('passwordInput').value = '';
      attemptCount++;
    }
  }
  
  // Opzionale: Nascondi il messaggio di errore quando l'utente inizia a digitare di nuovo
  document.getElementById('passwordInput').addEventListener('input', function() {
    document.getElementById('errorMessage').style.display = 'none';
  });
  