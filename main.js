const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  handleSubmit();
});

const handleSubmit = () => {
  const form_name = document.getElementById("form_name").value;
  const form_email = document.getElementById("form_email").value;
  const form_password = document.getElementById("form_password").value;
  const form_password_repet = document.getElementById(
    "form_password_repet"
  ).value;

  const validation_name = document.getElementById("validation_name");
  const validation_email = document.getElementById("validation_email");
  const validation_password = document.getElementById("validation_password");
  const validation_password_repet = document.getElementById(
    "validation_password_repet"
  );

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  let name = form_name.trim();
  let email = form_email.trim();
  let password = form_password.trim();
  let password_repet = form_password_repet.trim();

  name = stripHTML(form_name);
  email = stripHTML(form_email);
  password = stripHTML(form_password);
  password_repet = stripHTML(form_password_repet);
  validation_name.innerText = "";
  validation_email.innerText = "";
  validation_password.innerText = "";
  validation_password_repet.innerText = "";

  if (name === "") validation_name.innerText = "Ingresa un nombre.";
  if (email === "")
    validation_email.innerText = "Ingresa un correo electrónico.";
  if (!emailRegex.test(email))
    validation_email.innerText =
      "Ingresa una dirección de correo electrónico válido.";
  if (password === "")
    validation_password.innerText = "Ingresa una contraseña.";
  if (password_repet === "")
    validation_password_repet.innerText = "Repite la contraseña.";
  if (password !== password_repet)
    validation_password_repet.innerText = "Las contraseñas no coinciden.";

  if (
    validation_name.innerText === "" &&
    validation_email.innerText === "" &&
    validation_password.innerText === "" &&
    validation_password_repet.innerText === ""
  ) {
    showMessage("El mensaje ha sido enviado");
    resetForm();
}
};
function resetForm() {
  form.reset();
}
function showMessage(text) {
  return alert(text);
}
function stripHTML(htmlString) {
  const doc = new DOMParser().parseFromString(htmlString, "text/html");
  return doc.body.textContent || "";
}
