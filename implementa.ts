namespace empresa{
   let banco = new Banco();
   banco.setNome("Bradesco");
   banco.setCodBanco(33);

   let cliente = new Cliente();
   cliente.setNome("João");
   cliente.setCodCliente(1);
   cliente.setCpf("000.000.000-00");
   cliente.setIdade(30);
   cliente.setCredito(2000);
   cliente.setBanco(banco);

   let cliente2 = new Cliente();
   cliente2.setNome("Lúcia");
   cliente2.setCodCliente(2);
   cliente2.setCpf("111.000.000-11");
   cliente2.setIdade(50);
   cliente2.setCredito(4000);
   cliente2.setBanco(banco);

   document.getElementById("Nome").textContent = cliente.getNome();
   document.getElementById("Idade").textContent = cliente.getIdade().toString();
   document.getElementById("CPF").textContent = cliente.getCpf();
   document.getElementById("Codigo").textContent = cliente.getCodCliente().toString();
   document.getElementById("Credito").textContent = cliente.getCredito().toString();
   document.getElementById("Banco").textContent = cliente.getBanco().getNome();

   banco.addCliente(cliente);
   banco.addCliente(cliente2);

   //trecho para exemplificar a implementação das tabelas

   let tabela = document.getElementById("tabela");

   let conteudo = " <tr> <th>Cliente</th> <th> Banco</th> </tr>";
   banco.getClientes().forEach(element => {
       conteudo += "<tr> <td>" +element.getNome()+"</td><td>"+element.getBanco().getNome()+"</td></tr>";

   });
   tabela.innerHTML = conteudo;
}