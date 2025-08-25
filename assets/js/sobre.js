const usuario = localStorage.getItem('usuarioNome');
const id_user = localStorage.getItem('usuarioId');

const menuInicio = document.querySelector('a[href="/inicio"]');
const menuLogin = document.querySelector('a[href="/login"]');
const menuCadastro = document.querySelector('a[href="/cadastro"]');

if (id_user && usuario) {
  if (menuInicio) {
    menuInicio.href = '/home';
    menuInicio.textContent = 'Home';
  }

  if (menuLogin) {
    menuLogin.href = '/perfil';
    menuLogin.textContent = 'Perfil';
  }

  if (menuCadastro) {
    menuCadastro.href = '/curiosidades';
    menuCadastro.textContent = 'Curiosidades';
  }
}
