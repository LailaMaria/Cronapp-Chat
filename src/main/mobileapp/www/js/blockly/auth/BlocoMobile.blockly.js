window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.auth = window.blockly.js.blockly.auth || {};
window.blockly.js.blockly.auth.BlocoMobile = window.blockly.js.blockly.auth.BlocoMobile || {};

/**
 * @function iniciarChat
 *
 * BlocoMobile
 *
 *
 * @author Laila Maria Vieira Souza
 * @since 26/01/2023 13:54:22
 *
 */
window.blockly.js.blockly.auth.BlocoMobile.iniciarChatArgs = [];
window.blockly.js.blockly.auth.BlocoMobile.iniciarChat = async function() {
 var item;
  //
  this.cronapi.chat.renderChatMessage("chat1", 'Bem-vindo ao Cronapp Chat!', this.cronapi.chat.chatUserObj('cronapp', 'Cronapp', 'assets/icon.png'), async function(sender_item) {
      item = sender_item;
    //
    console.log(item);
  }.bind(this), async function(sender_item) {
      item = sender_item;
  }.bind(this));
}

/**
 * @function obterUsuario
 *
 * BlocoMobile
 *
 *
 * @author Laila Maria Vieira Souza
 * @since 26/01/2023 13:54:22
 *
 */
window.blockly.js.blockly.auth.BlocoMobile.obterUsuarioArgs = [];
window.blockly.js.blockly.auth.BlocoMobile.obterUsuario = async function() {
 var item;
  // Obtém as informações do usuário associadas à instância
  // do Chat. Retorna um objeto com as informações
  // do usuário: identificador, nome e url do ícone.
  (await this.cronapi.chat.getChatUser("chat1", async function(sender_item) {
      item = sender_item;
    //
    console.log(item);
  }.bind(this), async function(sender_item) {
      item = sender_item;
    //
    console.log('Erro ao obter informações do usuário!');
  }.bind(this)));
}

/**
 * @function renderizarIndicadorDeDigitacao
 *
 * BlocoMobile
 *
 *
 * @author Laila Maria Vieira Souza
 * @since 26/01/2023 13:54:22
 *
 */
window.blockly.js.blockly.auth.BlocoMobile.renderizarIndicadorDeDigitacaoArgs = [];
window.blockly.js.blockly.auth.BlocoMobile.renderizarIndicadorDeDigitacao = async function() {
 var item;
  //
  this.cronapi.chat.renderChatUserTypingIndicator("chat1", this.cronapi.chat.chatUserObj('user', 'Usuário', 'assets/user1.png'), async function(sender_item) {
      item = sender_item;
  }.bind(this), async function(sender_item) {
      item = sender_item;
  }.bind(this));
}

/**
 * @function limparIndicadorDeDigitacao
 *
 * BlocoMobile
 *
 *
 * @author Laila Maria Vieira Souza
 * @since 26/01/2023 13:54:22
 *
 */
window.blockly.js.blockly.auth.BlocoMobile.limparIndicadorDeDigitacaoArgs = [];
window.blockly.js.blockly.auth.BlocoMobile.limparIndicadorDeDigitacao = async function() {
 var item;
  //
  this.cronapi.chat.clearChatUserTypingIndicator("chat1", this.cronapi.chat.chatUserObj('user', 'Usuário', 'assets/user1.png'), async function(sender_item) {
      item = sender_item;
  }.bind(this), async function(sender_item) {
      item = sender_item;
  }.bind(this));
}

/**
 * @function renderizarAcoesSugeridas
 *
 * BlocoMobile
 *
 *
 * @author Laila Maria Vieira Souza
 * @since 26/01/2023 13:54:22
 *
 */
window.blockly.js.blockly.auth.BlocoMobile.renderizarAcoesSugeridasArgs = [];
window.blockly.js.blockly.auth.BlocoMobile.renderizarAcoesSugeridas = async function() {
 var item;
  //
  this.cronapi.chat.renderChatSuggestedActions("chat1", [this.cronapi.chat.chatSuggestedActionObj('Clique aqui para receber ajuda', 'Quero ajuda'), this.cronapi.chat.chatSuggestedActionObj('Clique aqui para finalizar chat', 'Finalizar chat')], async function(sender_item) {
      item = sender_item;
    //
    console.log(item);
  }.bind(this), async function(sender_item) {
      item = sender_item;
    //
    console.log(item);
  }.bind(this));
}

/**
 * @function renderizarAnexo
 *
 * Descreva esta função...
 *
 *
 * @author Laila Maria Vieira Souza
 * @since 26/01/2023 13:54:22
 *
 */
window.blockly.js.blockly.auth.BlocoMobile.renderizarAnexoArgs = [];
window.blockly.js.blockly.auth.BlocoMobile.renderizarAnexo = async function() {
 var item;
  //
  this.cronapi.chat.renderChatAttachments("chat1", this.cronapi.chat.chatUserObj('cronapp', 'Cronapp', 'assets/icon.png'), this.cronapi.chat.chatAttachmentObj('Cronapp Back-End', 'Cronapp Academy', 'Torne-se um desenvolvedor back-end com o Cronapp', 'assets/card.png', 'Nesse curso você aprende..', this.cronapi.chat.chatSuggestedActionObj('Clique aqui para se inscrever', 'Quero participar')), 'list', async function(sender_item) {
      item = sender_item;
    //
    console.log('Anexo renderizado');
  }.bind(this), async function(sender_item) {
      item = sender_item;
    //
    this.cronapi.screen.notify('error','Erro ao renderizar anexo');
  }.bind(this));
}

/**
 * @function responderUsuario
 *
 * Descreva esta função...
 *
 * @param mensagem
 *
 * @author Laila Maria Vieira Souza
 * @since 26/01/2023 13:54:22
 *
 */
window.blockly.js.blockly.auth.BlocoMobile.responderUsuarioArgs = [{ description: 'mensagem', id: 'effd9841' }];
window.blockly.js.blockly.auth.BlocoMobile.responderUsuario = async function(mensagem) {

  //
  this.cronapi.chat.renderChatUserTypingIndicator("chat1", this.cronapi.chat.chatUserObj('cronapp', 'Cronapp', 'assets/user.png'), async function(sender_item) {
      item = sender_item;
    //
    console.log(item);
  }.bind(this), async function(sender_item) {
      item = sender_item;
  }.bind(this));
  //
  (await this.cronapi.util.sleep(1000));
  //
  if (this.cronapi.object.getProperty(mensagem, 'text') == 1) {
    //
    this.cronapi.chat.renderChatMessage("chat1", 'Resposta1', this.cronapi.chat.chatUserObj('cronapp', 'cronapp', 'assets/user.png'), async function(sender_item) {
        item = sender_item;
    }.bind(this), async function(sender_item) {
        item = sender_item;
    }.bind(this));
  }
  //
  if (this.cronapi.object.getProperty(mensagem, 'text') == 2) {
    //
    this.cronapi.chat.renderChatMessage("chat1", 'Resposta2', this.cronapi.chat.chatUserObj('cronapp', 'cronapp', 'assets/user.png'), async function(sender_item) {
        item = sender_item;
    }.bind(this), async function(sender_item) {
        item = sender_item;
    }.bind(this));
  }
}

/**
 * @function responderAcao
 *
 * BlocoMobile
 *
 * @param mensagem
 *
 * @author Laila Maria Vieira Souza
 * @since 26/01/2023 13:54:22
 *
 */
window.blockly.js.blockly.auth.BlocoMobile.responderAcaoArgs = [{ description: 'mensagem', id: '9a9f951e' }];
window.blockly.js.blockly.auth.BlocoMobile.responderAcao = async function(mensagem) {

  //
  if (this.cronapi.object.getProperty(mensagem, 'text') == 'Quero ajuda') {
    //
    this.cronapi.chat.renderChatMessage("chat1", 'Como posso ajudar?', this.cronapi.chat.chatUserObj('cronapp', 'Cronapp', 'assets/icon.png'), async function(sender_item) {
        item = sender_item;
      //
      console.log(item);
    }.bind(this), async function(sender_item) {
        item = sender_item;
    }.bind(this));
  }
}

/**
 * @function renderizarHtml
 *
 * BlocoMobile
 *
 *
 * @author Laila Maria Vieira Souza
 * @since 26/01/2023 13:54:22
 *
 */
window.blockly.js.blockly.auth.BlocoMobile.renderizarHtmlArgs = [];
window.blockly.js.blockly.auth.BlocoMobile.renderizarHtml = async function() {
 var item;
  //
  this.cronapi.chat.renderChatHtml("chat1", this.cronapi.chat.chatUserObj('cronapp', 'Cronapp', 'assets/icon.png'), '<!DOCTYPE html>\n<html>\n<head>\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<style>\n.card {\n  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\n  transition: 0.3s;\n  width: 1' +
   '00%;\n}\n\n.card:hover {\n  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);\n}\n\n.container {\n  padding: 2px 16px;\n}\n</style>\n</head>\n<body>\n\n<h2>Card</h2>\n\n<div class=\"card\">\n  <img src=\"http' +
   's://blog.cronapp.io/wp-content/uploads/2022/02/banner-academy-01.png\" alt=\"Cronapp\" style=\"height:100%\">\n  <div class=\"container\">\n    <center><h4><b>Cronapp</b></h4></center> \n  </div>\n</d' +
   'iv>\n\n</body>\n</html> \n', 'list', async function(sender_item) {
      item = sender_item;
    //
    console.log(item);
  }.bind(this), async function(sender_item) {
      item = sender_item;
    //
    console.log(item);
  }.bind(this));
}

/**
 * @function postarMensagem
 *
 * BlocoMobile
 *
 *
 * @author Laila Maria Vieira Souza
 * @since 26/01/2023 13:54:22
 *
 */
window.blockly.js.blockly.auth.BlocoMobile.postarMensagemArgs = [];
window.blockly.js.blockly.auth.BlocoMobile.postarMensagem = async function() {
 var item;
  //
  this.cronapi.chat.postChatMessage("chat1", 'Olá!', async function(sender_item) {
      item = sender_item;
    //
    console.log(item);
  }.bind(this), async function(sender_item) {
      item = sender_item;
    //
    console.log(item);
  }.bind(this));
}

/**
 * @function sugestaoDeAcao
 *
 * Descreva esta função...
 *
 *
 * @author Laila Maria Vieira Souza
 * @since 26/01/2023 13:54:22
 *
 */
window.blockly.js.blockly.auth.BlocoMobile.sugestaoDeAcaoArgs = [];
window.blockly.js.blockly.auth.BlocoMobile.sugestaoDeAcao = async function() {
 var item;
  //
  item = this.cronapi.chat.chatSuggestedActionObj('Clique 1', '1');
  //
  console.log(item);
}
