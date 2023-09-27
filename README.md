# Upload File To Server

## Descrição

Esta é uma extensão para o Visual Studio Code que permite copiar comandos de upload de arquivos para um servidor remoto. A extensão gera o comando necessário e preenche a área de transferência com ele, permitindo que você cole e execute o comando manualmente em seu terminal.

## Recursos

- Gere comandos de upload de arquivos para um servidor remoto.
- Configurações personalizadas para informações do servidor.

## Configurações da Extensão

Esta extensão contribui com as seguintes configurações:

- `uploadToServer.serverHost`: Host ou endereço IP do servidor.
- `uploadToServer.serverUsername`: Nome de usuário para autenticação no servidor.
- `uploadToServer.serverPath`: Caminho para onde os arquivos serão enviados no servidor.

## Como Configurar

Antes de usar a extensão, siga estas etapas para configurar as informações do servidor:

1. Abra as configurações do Visual Studio Code.
2. Digite "uploadToServer" na barra de pesquisa.
3. Preencha os campos `serverHost`, `serverUsername` e `serverPath` com as informações do seu servidor.

## Como Usar

1. Selecione o arquivo que deseja enviar para o servidor no Visual Studio Code.
2. Clique com o botão direito no arquivo selecionado para abrir o menu de contexto.
3. Selecione a opção "Copiar comando de upload" no menu.
4. O comando de upload será gerado e copiado para a área de transferência.
5. Cole o comando em seu terminal e execute-o manualmente.

## Problemas Conhecidos

Nenhum problema conhecido no momento.

## Notas de Lançamento

- **0.0.1**: Versão inicial da extensão.

## Suporte

Se você encontrar problemas ou tiver sugestões de melhoria, por favor, [abra um problema](https://github.com/MarioCMesquita/Upload_File_To_Server/issues) no repositório da extensão no GitHub.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para enviar pull requests ou relatar problemas no [repositório da extensão](https://github.com/MarioCMesquita/Upload_File_To_Server).

## Licença

Este projeto é disponibilizado sob a [Licença MIT](LICENSE).

---
