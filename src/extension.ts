import * as vscode from 'vscode';

// Função para enviar o arquivo para o servidor
function sendFileToServer(fileUri: vscode.Uri | undefined) {
    // Verifica se um arquivo foi selecionado
    if (fileUri) {
        // Obtém o caminho do arquivo selecionado
        const filePath = fileUri.fsPath;

		// Obter as configurações do servidor do usuário
		const serverUsername = vscode.workspace.getConfiguration('uploadToServer').get('serverUsername', '');
		const serverHost = vscode.workspace.getConfiguration('uploadToServer').get('serverHost', '');
		const serverPath = vscode.workspace.getConfiguration('uploadToServer').get('serverPath', '');

		if (!serverUsername || !serverHost || !serverPath) {
			// Exibe uma mensagem de erro ao usuário se as configurações do servidor não estiverem completas
			vscode.window.showErrorMessage('Por favor, configure as informações do servidor nas configurações.');
			return;
		}

		// Comando para enviar o arquivo para o servidor
		const serverCommand = `pscp -r "${filePath}" "${serverUsername}@${serverHost}:${serverPath}"`;

        // Copy the file path to the clipboard
        vscode.env.clipboard.writeText(serverCommand).then(() => {
            vscode.window.showInformationMessage(`O comando de upload foi copiado para a área de transferência!`);
        });
    } else {
        // Exibe uma mensagem ao usuário quando nenhum arquivo é selecionado
        vscode.window.showErrorMessage('Nenhum arquivo selecionado.');
    }
}

// Função de ativação da extensão
export function activate(context: vscode.ExtensionContext) {
    // Registra o comando 'upload-filte-to-server.sendFileToServer'
    let disposable = vscode.commands.registerCommand('upload-filte-to-server.sendFileToServer', (fileUri) => {
        sendFileToServer(fileUri);
    });

    context.subscriptions.push(disposable);
}
