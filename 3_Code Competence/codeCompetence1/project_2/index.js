const form = document.getElementById("form1");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = form.elements["exampleInputName"].value;
  const email = form.elements["exampleInputEmail"].value;
  const message = form.elements["exampleInputTextArea"].value;

  const messageAlert = `Thank you ${name}! We will send message to ${email} as soon as possible.`;
  alert(messageAlert);
  location.reload();
});
