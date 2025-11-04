function insereTexto()
{let array = ['Mil cairão ao teu lado, e dez mil, à tua direita, mas tu não serás atingido. (Salmos 91:7)', 
    'Eu te louvarei, Senhor, de todo o meu coração; contarei todas as tuas maravilhas. (Salmos 9:1)',
    'Eu te amarei, ó Senhor, força minha. (Salmos 18:1)',
    'Os céus declaram a glória de Deus e o firmamento anuncia a obra das suas mãos. (Salmo 19:1)',
    'Uma coisa pedi ao Senhor e a buscarei: que eu possa morar na casa do Senhor todos os dias da minha vida. (Salmos 27:4)',
    'Dai ao Senhor a glória devida ao seu nome; adorai o Senhor na beleza da santidade. (Salmos 29:2)',
    'Porque a palavra do Senhor é reta, e todas as suas obras são fiéis. (Salmos 33:4)'];
    const randomarray = Math.floor(Math.random() * array.length);
    const randomelement = array[randomarray];
    document.getElementById('salmo').innerHTML = randomelement;

}