  $("#P1").click(function() {
      $.getJSON('data.json',function(data){
        var output = '<ul>';  
        $.each(data, function(key,val){
          output += '<li><strong>Pedido: </strong>'+ val[0].num_ped +'</br>';
          output += '<li><strong>Cliente: </strong>'+ val[0].cliente +'</br>';        
          output += '<li><strong>CPF/CNPJ: </strong>'+ val[0].cpf_cnpj +'</br>'; 
          output += '<li><strong>Endereço de entrega: </strong>'+ val[0].endereco_de_entrega +'</br>';
            output += '</ul><strong>Itens</strong> <table class="itens">'; 
            output += '<th><tr><td><strong>Produto </strong></td>';
            output += ' <td><strong>Descrição</strong></td>';
            output += ' <td><strong>Quantidade</strong></td>';
            output += ' <td><strong>Unidade</strong></td>';
            output += ' <td><strong>Preço</strong></td>';
            output += ' <td><strong>Total</strong></td>';
            output += '<tr><th>'; 
        for (i in val[0].itens) {
              output += '<tr><td>'+ val[0].itens[i].produto +'</td>'; 
              output += '<td>'+ val[0].itens[i].descricao +'</td>'; 
              output += '<td>'+ val[0].itens[i].qtde +'</td>'; 
              output += '<td>'+ val[0].itens[i].unidade +'</td>'; 
              output += '<td>'+ val[0].itens[i].preco +'</td>'; 
              output += '<td>'+ val[0].itens[i].total +'</td></tr>'; 
          }
          output += '</br></br></table><strong>Preço Total:</strong> '+ val[0].preco_total; 
        });
        output += '';
        $('#update').html(output);
        });
  })




  $("#P2").click(function() {
      $.getJSON('data.json',function(data){
    var output = '<ul>';  
        $.each(data, function(key,val){
          output += '<strong>PEDIDO:</strong> '+ val[1].num_ped +'</br>';
          output += '<li><strong>Pedido: </strong>'+ val[1].num_ped +'</br>';
          output += '<li><strong>Cliente: </strong>'+ val[1].cliente +'</br>';        
          output += '<li><strong>CPF/CNPJ: </strong>'+ val[1].cpf_cnpj +'</br>'; 
          output += '<li><strong>Endereço de entrega: </strong>'+ val[1].endereco_de_entrega +'</br>';
            output += '</ul>  <strong>Itens</strong>    <table class="itens">'; 
            output += '<th><tr><td><strong>Produto </strong></td>';
            output += ' <td><strong>Descrição</strong></td>';
            output += ' <td><strong>Quantidade</strong></td>';
            output += ' <td><strong>Unidade</strong></td>';
            output += ' <td><strong>Preço</strong></td>';
            output += ' <td><strong>Total</strong></td>';
            output += '<tr> <th>'; 
        for (i in val[1].itens) {
              output += '<tr><td>'+ val[1].itens[i].produto +'</td>'; 
              output += '<td>'+ val[1].itens[i].descricao +'</td>'; 
              output += '<td>'+ val[1].itens[i].qtde +'</td>'; 
              output += '<td>'+ val[1].itens[i].unidade +'</td>'; 
              output += '<td>'+ val[1].itens[i].preco +'</td>'; 
              output += '<td>'+ val[1].itens[i].total +'</td></tr>'; 
          }
          output += '</br></br></table><strong>Preço Total:</strong> '+ val[1].preco_total; 
        });
        output += '';
        $('#update').html(output);
        });
  })

  $("#Limpar").click(function() {
      $('#update').html("");
  })