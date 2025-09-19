// src/services.jsNH
function processUserData(user) {
  const userData = {
    name: user.name,
    cpf: user.cpf, // CPF de exemplo
  };

  // Violação intencional: Log de PII (CPF) sem mascaramento
  console.log('Processing user data for CPF:', userData.cpf);

  //... resto da lógica de negócio
  return { status: 'processed' };
}
