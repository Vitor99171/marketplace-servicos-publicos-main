// Importe axios para fazer requisições HTTP
import axios from 'axios';

// URL da API de serviços públicos
const API_URL = 'https://exemplo.com/api/servicos';

// Função para obter a lista de serviços públicos
const getServicos = async () => {
  try {
    // Faz uma requisição GET para a API
    const response = await axios.get(API_URL + '/servicos');
    // Retorna os dados da resposta da API
    return response.data;
  } catch (error) {
    // Em caso de erro, lança uma exceção
    throw new Error('Erro ao buscar serviços: ' + error.message);
  }
};

// Função para agendar um serviço público
const agendarServico = async (servicoId, dataAgendamento) => {
  try {
    // Faz uma requisição POST para a API com os dados de agendamento
    const response = await axios.post(API_URL + '/agendar', { servicoId, dataAgendamento });
    // Retorna os dados da resposta da API
    return response.data;
  } catch (error) {
    // Em caso de erro, lança uma exceção
    throw new Error('Erro ao agendar serviço: ' + error.message);
  }
};

// Função para efetuar o pagamento de um serviço público
const efetuarPagamento = async (servicoId, valor) => {
  try {
    // Faz uma requisição POST para a API com os dados de pagamento
    const response = await axios.post(API_URL + '/pagamento', { servicoId, valor });
    // Retorna os dados da resposta da API
    return response.data;
  } catch (error) {
    // Em caso de erro, lança uma exceção
    throw new Error('Erro ao efetuar pagamento: ' + error.message);
  }
};

// Exporta as funções para que possam ser utilizadas em outros arquivos
export { getServicos, agendarServico, efetuarPagamento };