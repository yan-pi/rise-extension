import { SiteLayoutInteface } from '../interfaces/site-layout-interface';

export const siteLayouts: SiteLayoutInteface[] = [
	{
		name: 'Generic',
		selectors: {
			form: 'form.ant-form',
			username:
				"input[name='username'], input[placeholder*='usuário'], input[placeholder*='username'], input.ant-select-search__field, input[placeholder='Nome de Usuário'], input[placeholder='Por favor, insira Conta '], input[autocomplete='new-password'][placeholder='Por favor, insira Conta '], input[placeholder='Por favor, insira Conta / Número do Celular ']",
			password:
				"input[type='password'], input[placeholder*='senha'], input[placeholder*='password'], input[type='password'],input[type='password']",
			passwordConfirm:
				"input[placeholder*='confirme'], input[placeholder*='confirm password'], input[placeholder='Por favor, confirme sua senha novamente'], input[placeholder='Confirme a senha novamente, o mesmo que a senha!']",
			realName:
				"input[placeholder*='nome'], input[placeholder*='real name'] input[placeholder='Preencha o nome verdadeiro e torne -o conveniente para a retirada posterior!'], input[placeholder='Preencha o nome verdadeiro e torne -o conveniente para a retirada posterior!'], input[placeholder='Por favor, insira Conta']",
			email: "input[type='email'], input[placeholder*='email']",
			cpf: "input[placeholder*='cpf'], input[placeholder*='ssn']",
			phoneNumber:
				"input[type='tel'], input[placeholder*='telefone'], input[placeholder*='phone'], input[placeholder='Digite o Número do Celular']",
			firstName: "input[placeholder*='primeiro nome'], input[placeholder*='first name']",
			lastName: "input[placeholder*='sobrenome'], input[placeholder*='last name']",
			submit:
				"button[type='submit'], button[placeholder*='enviar'], button[placeholder='Registro'], button[placeholder*='submit'], button.ant-btn-primary, button.ant-btn, button.ant-btn.ant-btn-primary.ant-btn-block.GaL3XJonIwzK4ZeJyCyq, button.ant-btn.ant-btn-primary.ant-btn-block.GaL3XJonIwzK4ZeJyCyq",
			agreeCheckbox:
				"input[type='checkbox'], input[placeholder*='concordo'], input[placeholder*='agree'], input.ant-checkbox-input"
		},
		dataFields: [
			'username',
			'password',
			'passwordConfirm',
			'realName',
			'email',
			'cpf',
			'phoneNumber',
			'firstName',
			'lastName'
		]
	}
];

siteLayouts.forEach(layout => {
	console.log('Selectors:', layout.selectors);
	console.log('Data Fields:', layout.dataFields);
});
