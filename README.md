**Usando json-server para criar 3 apis fake para teste do roteamento com proxy.**  
Passos para teste e ver o roteamento com o http-proxy-middleware:  
**Abra 3 janelas no terminal e digite em cada uma:**  
npm run clientes  
npm run produtos  
npm run servicos  
npm run proxy  
**Digite no navegador o endereço fornecido pelo proxy reverso:**  
http://localhost:3300/api/clientes  
http://localhost:3300/api/produtos  
http://localhost:3300/api/servicos

**Adicionando helmet para controle**  
Teste com o comando:  
npm run helmet  

**Adicionando express-rate-limit para controle de requests**  
**Nota:** cada usuário poderá acessar 10 vezes a cada minuto.  
Os dados de controle nesse exemplo são guardados na memória.  
Para um controle melhor você pode usar a biblioteca rate-limit-mongo e
salvar a lista de ips no banco de dados mongoDB.  
Teste com o comando:  
npm run limit  

Acesse a rota limitada  
http://localhost:3300/limit/servicos  
Aperte a tecla f5 11 vezes e confira o bloqueio de request.  
Acesse a rota liberada:  
http://localhost:3300/api/servicos  
O bloqueio restringe apenas a rota definida.  
