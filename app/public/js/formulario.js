function __exibeMensagem(p, classe, span = 'Campos Obrigatórios') {
	$('#report').append(`
			<div class="${classe}">
				<span>
					${span}
				</span>
				<p>
					${p} 
				</p>
			</div>
		`).hide().fadeIn(1000, () => $('.form-erro'));
}

function __validaCampos() {
	let nome = $('#nome').val().trim();
	let email = $('#email').val().trim();
	let assunto = $('#assunto').val().trim();
	let mensagem = $('#mensagem').val().trim();

	$('div.form-erro').remove();
	$('div.form-send').remove();

	if(nome == '') {
		__exibeMensagem('Campo "NOME" é requerido !!!', 'form-erro');
		return false;
	}

	if(email == '') {
		__exibeMensagem('Campo "E-MAIL" é requerido !!!', 'form-erro');
		return false;
	}

	if(assunto == '') {
		__exibeMensagem('Campo "ASSUNTO" é requerido !!!', 'form-erro');
		return false;
	}

	if(mensagem == '') {
		__exibeMensagem('Campo "MENSAGEM" é requerido !!!', 'form-erro');
		return false;
	}

	return true;
	
}

// Formulario
function enviarForm(){
	if(!__validaCampos())
		return false;

	var emailContato = "viniciussouzav@gmail.com"; // Escreva aqui o seu e-mail

	let frm = $(this);
	let url = '../../enviar.php';
	let type = frm.attr('method');
	let data = {};
	
	frm.find('[name]').each(function() {
		let inp = $(this);
		let name = inp.attr('name');
		let value = inp.val();
				
		data[name] = value;
	});
	
	$.ajax({
		url,
		type,
		data,
		success: respText => {
			if( $('[name="em-branco"]').val().length != 0 )
				__exibeMensagem(`Você pode tentar novamente, ou enviar direto para o e-mail ${emailContato} `, 'form-erro', 'Falha no envio!');
			else
				__exibeMensagem('Em breve eu entro em contato com você. Abraços.', 'form-send', 'Mensagem enviada!');
		},
		error: respErr => {__exibeMensagem(`Você pode tentar novamente, ou enviar direto para o e-mail ${emailContato} `, 'form-erro', 'Falha no envio!'), console.log(JSON.stringify(respErr))}
	});
	
}