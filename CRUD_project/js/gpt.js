// URL da API
const apiUrl = "https://my.meteoblue.com/packages/sea-3h?apikey=9OKc5M2joNPv7Jit&lat=-23.9608&lon=-46.3336&asl=12&format=json";

// Função para buscar os dados da API e exibir a tabela
async function fetchWindData() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    // Acessando os dados do vento (ajuste conforme a estrutura retornada pela API)
    const windDirections = data.data.time.map((time, index) => {
      return {
        datetime: time,                   // Data e hora
        direction: data.data.winddirection_10m[index]  // Direção do vento a 10 metros
      };
    });

    // Gerando o HTML da tabela
    let tableHTML = "<table border='1'><tr><th>Data e Hora</th><th>Direção do Vento (10m)</th></tr>";
    
    windDirections.forEach(wind => {
      tableHTML += `<tr><td>${wind.datetime}</td><td>${wind.direction}°</td></tr>`;
    });

    tableHTML += "</table>";

    // Adicionando a tabela ao HTML
    document.getElementById("windTable").innerHTML = tableHTML;

  } catch (error) {
    console.error("Erro ao buscar os dados:", error);
  }
}

// Chamar a função para exibir a tabela
// fetchWindData();
