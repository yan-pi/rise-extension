# ryse-extension
chinese autoform extension bot - front end

```
extension/
├── manifest.json
├── popup/
│   ├── popup.html
│   ├── popup.css
│   └── popup.js
├── background/
│   └── background.js
├── content/
│   └── content.js
├── models/
│   ├── UserModel.js
│   └── RegistrationModel.js
├── views/
│   └── RegistrationView.js
├── controllers/
│   └── RegistrationController.js
├── services/
│   ├── FormFiller.js
│   └── AdBlocker.js
└── utils/
    └── PasswordGenerator.js
```


normalmente os sites tem layouts parecidos, então precisamos criar um campo enum que pode ser layout1 e ele vai ser referente a esse layout, quando o usuario for rodar a extenção, ele primeiro precisa alterar as propriedades de configurações:

senha personalizada, se deixado em branco a senha deve ser aleatoria
e qual layout do site que vamos rodar

vou fornecer novamente o arquivo html do form de login ele é do site: https://bra.com

```html