type cep = {  
  cep: string,
  logradouro: string,
  complemento: string,
  unidade: string,
  bairro: string,
  localidade: string,
  uf: string,
  estado: string,
  regiao: string,
  ibge: string,
  gia: string,
  ddd: string,
  siafi: string
}

async function getCep(): Promise<cep> {
    const response = await fetch(
        "https://viacep.com.br/ws/01001000/json/", {
            method: "get"
        }
    );

    return  response.json();
}

async function deleteCep(): Promise<string> {
    const response = await fetch(
        "https://viacep.com.br/ws/01001000/json/", {
            method: "delete"
        }
    );

    if(response.ok){
        return "Cep deletado com sucesso.";
    }

    return "Erro ao deletar Cep.";
}

async function showContent() {
    const cepExample = await getCep();
    console.log(cepExample.cep);
    console.log(await deleteCep());
}



showContent();


