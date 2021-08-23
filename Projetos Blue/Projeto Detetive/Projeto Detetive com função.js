function conv(variavel){
    if (variavel[0] == 'S'){
      return 1;
    }else if(variavel[0] == 'N'){
      return 0;
    }else if(variavel !== 'S' && variavel !== 'N'){
      console.log(`\nDIGITE SIM OU NÃO,\nTODA VEZ QUE VOCÊ MENTIR NESTA INVESTIGAÇÃO,\nIREMOS CONTABILIZAR COMO "SIM"\n`)
      return 1;
    }
  }
  
  let nome = prompt("Boa noite, estamos fazendo uma investigação sobre um assassinato,\npor gentileza, poderia nos informar o seu nome?\nDigite o seu nome:");
  console.log(`\nAgora iremos fazer algumas perguntas`);
  
  console.log(`\n${nome}\né IMPORTANTE que você digite SIM ou NÃO para as perguntas\n`);
  
  let a = conv(String(prompt(`Você telefonou para a vitima?
  SIM
  NÃO\n`)).toUpperCase());
  
  let b = conv(String(prompt(`Esteve no local do crime?
  SIM
  NÃO\n`)).toUpperCase());
  
  let c = conv(String(prompt(`Mora perto da vitima?
  SIM
  NÃO\n`)).toUpperCase());
  
  let d = conv(String(prompt(`Devia para a vitima?
  SIM
  NÃO\n`)).toUpperCase());
  
  let e = conv(String(prompt(`Já trabalhou com a vitima?
  SIM
  NÃO\n`)).toUpperCase());
  
  f = a+b+c+d+e
  
  if (f<2){console.log(`Parabens sr(a) ${nome}, você é inocente!!!`);}else  
  if(f === 2){console.log(`Infelizmente o sr(a) é suspeito(a)`);}else 
  if(f === 5){console.log(`${nome}, venha conosco, você esta preso(a) pois é o assassino!!!`);}else
  if(f === 3 || 4){console.log(`Constatamos que o sr(a) é cumplice do assassino!`);}