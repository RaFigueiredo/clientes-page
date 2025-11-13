import React from 'react';
import { MessageCircle, Clock, CheckCircle, Shield, Zap, Brain, Image, Mic, Database, Calendar } from 'lucide-react';

const ApresentacaoCliente = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full mb-3 shadow-lg">
            <span className="font-bold">🤖 Agente de IA para WhatsApp</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Seu Assistente Virtual 24/7
          </h1>
          <p className="text-lg text-gray-600">
            Atenda seus clientes automaticamente e nunca mais perca uma venda
          </p>
        </div>

        {/* Conteúdo Principal */}
        <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 mb-6">
          {/* O que é e como funciona - PRIMEIRO */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-5 rounded-xl border-2 border-green-300 mb-6">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="text-4xl">📱</div>
              <h3 className="text-2xl font-bold text-green-800">Funciona direto no seu WhatsApp!</h3>
              <div className="text-4xl">💬</div>
            </div>
            <p className="text-center text-gray-700 mb-4 text-sm">
              <strong>Importante:</strong> O agente atende seus clientes através do <strong className="text-green-700">WhatsApp Business</strong> ou <strong className="text-green-700">WhatsApp normal</strong>. 
              Seus clientes conversam pelo WhatsApp normalmente, como já fazem hoje!
            </p>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-bold text-gray-800 mb-3 text-center">🤖 O que o Agente faz no WhatsApp:</h4>
              <div className="grid md:grid-cols-2 gap-3 text-sm">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Responde mensagens de texto</strong> automaticamente, de forma natural e humanizada</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Escuta e entende áudios</strong> enviados pelos clientes (sim, ele ouve áudio!)</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Vê e analisa fotos</strong> (comprovantes PIX, problemas, antes/depois)</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Agenda horários</strong> automaticamente e confirma com o cliente</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Envia lembretes</strong> antes dos horários marcados</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Responde sobre preços e serviços</strong> consultando sua base de dados</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Lembra do histórico</strong> de cada cliente (preferências, agendamentos)</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Trabalha 24 horas por dia</strong>, todos os dias, sem parar</span>
                </div>
              </div>
            </div>
            <div className="mt-4 bg-green-600 text-white p-3 rounded-lg text-center">
              <p className="font-bold">✨ Seus clientes conversam normalmente pelo WhatsApp deles, sem instalar nada!</p>
            </div>
          </div>

          {/* Problema e Solução */}
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-red-50 p-4 rounded-xl border-2 border-red-200 text-center">
              <div className="text-2xl mb-2">😴</div>
              <h3 className="font-bold text-red-700 text-sm mb-1">Cliente às 23h?</h3>
              <p className="text-xs text-gray-700">Perdeu a venda!</p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-xl border-2 border-yellow-200 text-center">
              <div className="text-2xl mb-2">😰</div>
              <h3 className="font-bold text-yellow-700 text-sm mb-1">Agendamentos?</h3>
              <p className="text-xs text-gray-700">Caos total!</p>
            </div>
            <div className="bg-green-50 p-4 rounded-xl border-2 border-green-200 text-center">
              <div className="text-2xl mb-2">✨</div>
              <h3 className="font-bold text-green-700 text-sm mb-1">Agente IA!</h3>
              <p className="text-xs text-gray-700">Tudo resolvido!</p>
            </div>
          </div>

          {/* Planos */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-center mb-4 text-gray-800">Planos</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {/* Plano Básico */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-5 rounded-xl border-2 border-blue-300">
                <div className="text-center mb-3">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold">BÁSICO</span>
                  <div className="mt-2">
                    <span className="text-3xl font-bold text-blue-600">R$ 500</span>
                    <span className="text-gray-600">/mês</span>
                  </div>
                </div>
                <div className="space-y-1 text-xs">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 text-green-600" />
                    <span>Atendimento 24/7</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 text-green-600" />
                    <span>Agendamentos automáticos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 text-green-600" />
                    <span>Lê áudios e imagens</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 text-green-600" />
                    <span>Banco de dados inteligente</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 text-green-600" />
                    <span>Lembretes automáticos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 text-green-600" />
                    <span>Tabela editável (preços/horários)</span>
                  </div>
                </div>
              </div>

              {/* Plano Avançado */}
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-5 rounded-xl border-2 border-purple-300">
                <div className="text-center mb-3">
                  <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold">AVANÇADO</span>
                  <div className="mt-2">
                    <span className="text-3xl font-bold text-purple-600">R$ 800</span>
                    <span className="text-gray-600">/mês</span>
                  </div>
                </div>
                <div className="space-y-1 text-xs">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 text-green-600" />
                    <span><strong>Tudo do Básico +</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 text-green-600" />
                    <span>Envio de emails automático</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 text-green-600" />
                    <span>Integração Google Meet</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 text-green-600" />
                    <span>Atendimento personalizado (+R$500)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 text-green-600" />
                    <span>Follow-up automático</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 text-green-600" />
                    <span>Funcionalidades customizadas</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Como Funciona - Detalhado */}
          <div className="bg-blue-50 p-5 rounded-xl mb-6 border-2 border-blue-200">
            <h3 className="text-xl font-bold text-center mb-4 text-blue-800">📋 Como funciona o processo?</h3>
            <p className="text-center text-sm text-gray-600 mb-5">Simples e rápido! Em 5 passos seu agente estará funcionando</p>
            
            <div className="space-y-4">
              {/* Passo 1 */}
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
                  <div className="flex-1">
                    <h4 className="font-bold text-blue-700 mb-1">Você preenche um formulário personalizado</h4>
                    <p className="text-xs text-gray-600 mb-2">Conte-nos como quer que seu agente funcione</p>
                    <div className="text-xs text-gray-500 space-y-1">
                      <div>• Qual o objetivo do agente (agendar, vender, informar)?</div>
                      <div>• Tom de voz (formal, descontraído, técnico)</div>
                      <div>• Fluxo de atendimento desejado</div>
                      <div>• Regras específicas do seu negócio</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Passo 2 */}
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
                  <div className="flex-1">
                    <h4 className="font-bold text-purple-700 mb-1">Configuramos seu banco de dados</h4>
                    <p className="text-xs text-gray-600 mb-2">Criamos sua conta no banco de dados (pode usar seu email)</p>
                    <div className="text-xs text-gray-500 space-y-1">
                      <div>• Você terá acesso total aos dados</div>
                      <div>• Precisamos da senha inicial para configurar</div>
                      <div>• Depois você pode trocar a senha</div>
                      <div>• Totalmente seguro e profissional</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Passo 3 */}
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">3</div>
                  <div className="flex-1">
                    <h4 className="font-bold text-green-700 mb-1">Você realiza o pagamento</h4>
                    <p className="text-xs text-gray-600 mb-2">Escolha a forma que preferir</p>
                    <div className="text-xs text-gray-500 space-y-1">
                      <div>💳 Cartão de crédito (aprovação imediata)</div>
                      <div>📱 PIX (confirmação mais rápida)</div>
                      <div>🧾 Boleto bancário (1-3 dias úteis)</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Passo 4 */}
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">4</div>
                  <div className="flex-1">
                    <h4 className="font-bold text-orange-700 mb-1">Nossa equipe configura e treina seu agente</h4>
                    <p className="text-xs text-gray-600 mb-2">Fazemos toda a parte técnica</p>
                    <div className="text-xs text-gray-500 space-y-1">
                      <div>• Personalização completa do agente</div>
                      <div>• Testes de qualidade e funcionamento</div>
                      <div>• Ajustes finos baseados no seu negócio</div>
                      <div>• Garantia de que tudo está perfeito</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Passo 5 */}
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-4 rounded-lg shadow-sm text-white">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-green-600 font-bold flex-shrink-0">✓</div>
                  <div className="flex-1">
                    <h4 className="font-bold mb-1">Pronto! Seu agente entra em operação</h4>
                    <p className="text-xs mb-2">Em até 24 horas após o pagamento confirmado</p>
                    <div className="text-xs space-y-1">
                      <div>✓ Agente trabalhando 24/7 no seu WhatsApp</div>
                      <div>✓ Você recebe treinamento completo de uso</div>
                      <div>✓ Suporte técnico sempre disponível</div>
                      <div>✓ Acompanhamento nos primeiros dias</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 bg-blue-100 p-3 rounded-lg text-center">
              <p className="text-sm font-bold text-blue-800">⚡ Tempo médio de ativação: 24 horas</p>
              <p className="text-xs text-gray-600 mt-1">(Casos complexos podem levar um pouco mais, sempre com transparência)</p>
            </div>
          </div>

          {/* Para Quem */}
          <div className="bg-purple-50 p-4 rounded-xl mb-6">
            <h3 className="text-lg font-bold text-center mb-3 text-purple-800">Para quem é?</h3>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-2 text-xs text-center">
              <div>
                <div className="text-2xl mb-1">💅</div>
                <p className="font-semibold">Beleza</p>
              </div>
              <div>
                <div className="text-2xl mb-1">🧘</div>
                <p className="font-semibold">Saúde</p>
              </div>
              <div>
                <div className="text-2xl mb-1">⚕️</div>
                <p className="font-semibold">Médicos</p>
              </div>
              <div>
                <div className="text-2xl mb-1">💪</div>
                <p className="font-semibold">Fitness</p>
              </div>
              <div>
                <div className="text-2xl mb-1">🔧</div>
                <p className="font-semibold">Técnicos</p>
              </div>
              <div>
                <div className="text-2xl mb-1">🏪</div>
                <p className="font-semibold">Comércio</p>
              </div>
            </div>
          </div>

          {/* Garantias */}
          <div className="grid md:grid-cols-4 gap-3 mb-6">
            <div className="text-center p-3 bg-green-50 rounded-lg border border-green-200">
              <Clock className="w-6 h-6 mx-auto mb-1 text-green-600" />
              <p className="text-xs font-semibold">Sistema 24/7</p>
            </div>
            <div className="text-center p-3 bg-blue-50 rounded-lg border border-blue-200">
              <Shield className="w-6 h-6 mx-auto mb-1 text-blue-600" />
              <p className="text-xs font-semibold">Suporte 24h</p>
            </div>
            <div className="text-center p-3 bg-purple-50 rounded-lg border border-purple-200">
              <Zap className="w-6 h-6 mx-auto mb-1 text-purple-600" />
              <p className="text-xs font-semibold">Manutenção Inclusa</p>
            </div>
            <div className="text-center p-3 bg-orange-50 rounded-lg border border-orange-200">
              <Brain className="w-6 h-6 mx-auto mb-1 text-orange-600" />
              <p className="text-xs font-semibold">Adequação à LGPD</p>
            </div>
          </div>

          {/* Comparação */}
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-4 rounded-xl text-center">
            <h4 className="font-bold mb-2">💰 Compare:</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-semibold">Secretária CLT</p>
                <p className="text-2xl font-bold">R$ 2.000+</p>
              </div>
              <div>
                <p className="font-semibold">Agente de IA</p>
                <p className="text-2xl font-bold text-yellow-300">R$ 500</p>
              </div>
            </div>
            <p className="mt-2 text-lg font-bold">Economia: R$ 1.500/mês! 🎯</p>
          </div>
        </div>

        {/* CTA Final */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-xl shadow-xl text-center">
          <h3 className="text-2xl font-bold mb-3">
            🚀 Transforme seu atendimento hoje!
          </h3>
          <p className="mb-4">
            Entre em contato e garanta seu agente personalizado
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button 
            onClick={() =>
              window.open(
                "https://wa.me/5541995797960?text=Gostaria%20de%20mais%20informações%20sobre%20o%20Agente%20IA!",
                "_blank"
              )
            }
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-md">
              📱 WhatsApp
            </button>
            <button 
            onClick={() =>
              window.location.href = "mailto:rdmfigueiredo95@gmail.com?subject=Contato&body=Olá,%20gostaria%20de%20mais%20informações%20sobre%20o%20Agente%20IA!"
            }
            className="bg-blue-700 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-800 transition-colors shadow-md">
              📧 E-mail
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApresentacaoCliente;