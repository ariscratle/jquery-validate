# jquery.gvalidate #
A simple jquery form validator

Inclua as dependencias:
```html
<script src="/path/to/jquery.js"></script>
<script src="/path/to/jquery.gvalidate.js"></script>
```


Seu html:
```html
<form id="myForm" action="#" >
	<input type="text" name="userName" >
	<input type="text" name="userEmail" >
	<input type="password" name="userPass" >
	<button type="submit">Send</button>
</form>
```

Adicione e configure o seu formulario com o plugin:
```javascript
$('form#myForm').gvalidate({
  "userName" : { required : true },
  "userEmail" : { inputType : "email" },
  "userPass" : { required : true, minlength : 6 }
// options
// { "inputName" : { 
//    required : true, // Boolean
//    inputType : "email", // email
//    minLength : 10, // Number
//  }  
});
```
Inputs que não passarem na validação, recebem class="is-err" e o formulário não é submetido.
