# jBrix

Integre a sua plataforma tecnológica, ERP ou e-commerce com QR Codes estáticos e dinâmicos do Pix e se beneficie da maneira mais moderna de pagamentos no Brasil.

Acesse www.brix.dev.br e crie sua credencial para utilizar este plugin jQuery e comece a receber por Pix imediatamente.

## Principais Recursos 

Com o jBrix é possível:

* Criar QR Codes estáticos (que podem ser impressos e colocados em cardápios ou mostruários).
* Criar QR Codes dinâmicos que podem ser apresentados ao seu cliente em seu sistema de e-commerce ou frente de loja.
* Ser notificado (webhook) a cada Pix pago. O seu sistema fica sabendo instantes depois a cada pagamento. Crie experiências incríveis para seus clientes.
* Receber o dinheiro do pagamento imediatamente. O dinheiro não passa pela nossa conta. Vai diretamente para a sua conta, na instituição de sua preferência.
* Receber o dinheiro em sua conta no Banco do Brasil.

## Primeiros passos

O primeiro passo é baixar a biblioteca, colocar junto com o seu código e referenciá-lo.

```javascript
<script src="js/jquery.brix.js"></script>
```

Agora basta criar as DIV que receberão o QR Code dinâmico e o copia e cola:

```html
<div id="copiaecola"></div>
<div id="qrcode"></div>
```

### Gerando seu primeiro QR Code dinâmico

Para gerar o QR Code doinâmico basta chamar a função ```brix()``` passando os parâmetros conforme a seguir:

```javascript
<script>
$(document).ready(function(){
    $('#copiaecola').brix({
        credencial: 'zh9evIvbMxpV4VwMSBIvUxdsUz0EEkTs4rbyW6HU',
        chave: 'seu@email.com.br',
        valor: 1.12,
        decricao: "Restaurante"
    }, function(copiaecola) {
        $('#qrcode').brix('qrcode', copiaecola)
    });
});
</script>
```

#### Parâmetros


Parâmetro | Descrição
------------ | -------------
credencial | Chave de acesso à plataforma Brix.
chave | Chave Pix criada junto ao seu PSP (instituição financeira onde possui conta).
valor | Valor do QR Code a ser gerado no formato 999.99.
decricao | Pequena descrição da cobrança a ser recebida.
 
#### Veja o Brix em ação

Acesse https://marcioamr.github.io/jbrix/demo/ veja alguns exemplos reais de emissão do Pix.

## O que vem por aí

* Integreação com o boleto bancário.
* Integração com outras instituições financeiras.
