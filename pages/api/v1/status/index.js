function status(request, response) {
  response.status(200).json({ mensagem: "Deu tudo certo" });
}

export default status;
