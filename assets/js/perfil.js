document.addEventListener("DOMContentLoaded", () => {
  const btnChange = document.querySelector(".change");
  const inputFoto = document.getElementById("inputFoto");
  const imgPerfil = document.querySelector(".img img");

  const id = localStorage.getItem("usuarioId");
  const nome = localStorage.getItem("usuarioNome");
  const email = localStorage.getItem("usuarioEmail");
  const senha = localStorage.getItem("usuarioSenha");

  document.querySelector(".username").textContent = nome;
  document.querySelector(".mail").textContent = email;
  document.querySelector(".pass").textContent = senha;

  // PUXAR A FOTO DO BD
  fetch(`/usuario/${id}`)
    .then(res => res.json())
    .then(data => {
      if (data.foto) {
        imgPerfil.src = data.foto;
      }
    });

  // AÇÃO DO BOTÃO
  btnChange.addEventListener("click", () => inputFoto.click());

  // UPLOAD DE NOVA IMAGEM
  inputFoto.addEventListener("change", async () => {
    const file = inputFoto.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("foto", file);

    try {
      const res = await fetch(`/uploadFoto/${id}`, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        imgPerfil.src = data.foto;
        alert("Foto atualizada com sucesso!");
      } else {
        alert("Erro ao atualizar imagem: " + data.message);
      }
    } catch (err) {
      console.error(err);
      alert("Erro ao enviar a imagem.");
    }
  });
});

document.getElementById("logoutBtn").addEventListener("click", () => {
  localStorage.clear();
  window.location.href = "/inicio"; // Redireciona manualmente
});