const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;

  fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password: senha })
  })
  .then(res => res.json())
  .then(data => {
    if (data.success) {
        localStorage.setItem('usuarioNome', data.usuario.nome);
        localStorage.setItem('usuarioId', data.usuario.id);
        localStorage.setItem('usuarioEmail', data.usuario.email);
        localStorage.setItem('usuarioSenha', data.usuario.senha);
        alert('Login realizado com sucesso!');
        // Redireciona para a página home
        window.location.href = '/home';
    } else {
      alert('Erro ao fazer login');
    }
  })
  .catch(err => {
    alert('Erro ao conectar com o servidor');
    console.error(err);
  });
});
