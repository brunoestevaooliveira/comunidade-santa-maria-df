import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Users, Calendar, ShoppingBag, Heart, MessageCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Conectando Nossa <span className="text-blue-600">Comunidade</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Uma plataforma digital que une moradores de Santa Maria DF para resolver problemas, 
            compartilhar recursos e fortalecer nossa comunidade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8 py-4 text-lg">
              Começar Agora
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
              Saiba Mais
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Funcionalidades da Plataforma
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ferramentas desenvolvidas para fortalecer nossa comunidade e resolver problemas juntos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Mapa Colaborativo */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Mapa Colaborativo</CardTitle>
                <CardDescription>
                  Marque problemas e melhorias na nossa região, vote em prioridades e acompanhe soluções.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Chat Comunitário */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <MessageCircle className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle>Chat Comunitário</CardTitle>
                <CardDescription>
                  Converse com seus vizinhos, organize grupos e mantenha-se conectado com a comunidade.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Agenda de Eventos */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle>Agenda de Eventos</CardTitle>
                <CardDescription>
                  Descubra e participe de eventos locais, organize reuniões e atividades comunitárias.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Marketplace Local */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <ShoppingBag className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle>Marketplace Local</CardTitle>
                <CardDescription>
                  Compre, venda e troque produtos e serviços entre vizinhos de forma segura.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Sistema de Voluntariado */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle>Voluntariado</CardTitle>
                <CardDescription>
                  Encontre oportunidades de ajudar a comunidade e organize ações voluntárias.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Gestão Comunitária */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-indigo-600" />
                </div>
                <CardTitle>Gestão Comunitária</CardTitle>
                <CardDescription>
                  Participe de decisões coletivas e tenha voz ativa no desenvolvimento local.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Junte-se à Nossa Comunidade Digital
          </h3>
          <p className="text-xl text-blue-100 mb-8">
            Faça parte da transformação digital de Santa Maria DF. Juntos, podemos construir uma comunidade mais forte e conectada.
          </p>
          <Button size="lg" variant="outline" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg">
            Cadastre-se Gratuitamente
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-lg font-bold">Comunidade Santa Maria DF</h4>
              </div>
              <p className="text-gray-400">
                Conectando moradores para construir uma comunidade mais forte e unida.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Contato</h5>
              <p className="text-gray-400">Santa Maria, DF</p>
              <p className="text-gray-400">contato@comunidadesantamaria.com</p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Sobre</h5>
              <p className="text-gray-400 text-sm">
                Projeto inspirado nas iniciativas sociais do MIT, desenvolvido para fortalecer os laços comunitários em Santa Maria DF.
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Comunidade Santa Maria DF. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
