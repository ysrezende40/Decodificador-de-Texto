# Decodificador-de-Texto
Decodificador de texto usando javascript
Este é um decodificador de texto que segue os seguintes requisitos:
- Deve funcionar apenas com letras minúsculas
- Não devem ser utilizados letras com acentos nem caracteres especiais
- Deve ser possível converter uma palavra para a versão criptografada e também retornar uma palavra criptografada para a versão original.
Exemplo de uso:
"gato" => "gaitober"
"gaitober" => "gato"

O código consiste em uma página web com um formulário que contém um campo de texto, um botão de criptografar,
um botão de descriptografar e uma área para exibir o resultado.
Quando o usuário digita um texto no campo de texto e clica no botão de criptografar, a função criptografar() é acionada. 
Esta função verifica se o texto contém apenas letras minúsculas sem acento, caso contrário exibe um alerta e retorna. Se o texto estiver correto,
a função usa um loop for para percorrer cada letra do texto e, com base na letra, adiciona um valor criptografado à variável criptografado.
Por fim, o resultado criptografado é exibido na área de exibição.
Já a função descriptografar() verifica qual é o valor criptografado digitado pelo usuário e, a partir dele,
exibe a letra original correspondente na área de exibição.
A função sumir() simplesmente oculta dois elementos HTML do rodapé da página quando acionada pelo usuário.

Link para visualização: https://ysrezende40.github.io/Decodificador-de-Texto/


