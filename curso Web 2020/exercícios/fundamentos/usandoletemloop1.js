for (let i = 0; i < 10; i++){
  console.log(`i = ${i}`)
}
//i não está acessível, porque foi declarado com let, e se limita ao escopo do loop
//console.log(`i = ${i}`) gera erro