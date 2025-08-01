"use client";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Users, Plus } from "lucide-react";

export default function EventosPage() {
  const eventos = [
    {
      id: 1,
      titulo: "Reunião da Associação de Moradores",
      descricao: "Discussão sobre melhorias no transporte público e segurança",
      data: "2025-02-15",
      hora: "19:00",
      local: "Centro Comunitário - Quadra 101",
      organizador: "Associação de Moradores",
      participantes: 23,
      maxParticipantes: 50,
      categoria: "reuniao"
    },
    {
      id: 2,
      titulo: "Mutirão de Limpeza da Praça Central",
      descricao: "Vamos juntos cuidar do nosso espaço de convivência",
      data: "2025-02-08",
      hora: "08:00",
      local: "Praça Central",
      organizador: "Grupo Ecológico SM",
      participantes: 12,
      maxParticipantes: 30,
      categoria: "limpeza"
    },
    {
      id: 3,
      titulo: "Festa Junina Comunitária",
      descricao: "Celebração tradicional com quadrilha, comidas típicas e música",
      data: "2025-06-20",
      hora: "18:00",
      local: "Quadra Poliesportiva",
      organizador: "Comissão de Festas",
      participantes: 67,
      maxParticipantes: 200,
      categoria: "festa"
    },
    {
      id: 4,
      titulo: "Aulas de Reforço Escolar",
      descricao: "Aulas gratuitas de matemática e português para crianças",
      data: "2025-02-01",
      hora: "14:00",
      local: "Biblioteca Comunitária",
      organizador: "Projeto Educação",
      participantes: 8,
      maxParticipantes: 15,
      categoria: "educacao"
    }
  ];

  const getCategoriaIcon = (categoria: string) => {
    switch (categoria) {
      case "reuniao": return "🏛️";
      case "limpeza": return "🌱";
      case "festa": return "🎉";
      case "educacao": return "📚";
      case "esporte": return "⚽";
      default: return "📅";
    }
  };

  const getCategoriaColor = (categoria: string) => {
    switch (categoria) {
      case "reuniao": return "bg-blue-100 text-blue-800";
      case "limpeza": return "bg-green-100 text-green-800";
      case "festa": return "bg-purple-100 text-purple-800";
      case "educacao": return "bg-orange-100 text-orange-800";
      case "esporte": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const formatarData = (data: string) => {
    return new Date(data).toLocaleDateString('pt-BR', {
      weekday: 'long',
      day: 'numeric',
      month: 'long'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header da Página */}
        <div className="mb-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Calendar className="w-6 h-6 text-purple-600" />
              <h1 className="text-2xl font-bold text-gray-900">Agenda de Eventos</h1>
            </div>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Criar Evento
            </Button>
          </div>
        </div>
        {/* Filtros */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Filtrar por categoria</h2>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm">Todos</Button>
            <Button variant="outline" size="sm">🏛️ Reuniões</Button>
            <Button variant="outline" size="sm">🌱 Limpeza</Button>
            <Button variant="outline" size="sm">🎉 Festas</Button>
            <Button variant="outline" size="sm">📚 Educação</Button>
            <Button variant="outline" size="sm">⚽ Esporte</Button>
          </div>
        </div>

        {/* Lista de Eventos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {eventos.map((evento) => (
            <Card key={evento.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">{getCategoriaIcon(evento.categoria)}</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoriaColor(evento.categoria)}`}>
                      {evento.categoria}
                    </span>
                  </div>
                  <div className="text-right text-sm text-gray-500">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {evento.participantes}/{evento.maxParticipantes}
                    </div>
                  </div>
                </div>

                <CardTitle className="text-xl mb-2">{evento.titulo}</CardTitle>
                <CardDescription className="text-gray-600 mb-4">
                  {evento.descricao}
                </CardDescription>

                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-blue-500" />
                    {formatarData(evento.data)}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-green-500" />
                    {evento.hora}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-red-500" />
                    {evento.local}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2 text-purple-500" />
                    Organizado por: {evento.organizador}
                  </div>
                </div>

                <div className="flex justify-between items-center mt-6">
                  <div className="flex-1 bg-gray-200 rounded-full h-2 mr-4">
                    <div 
                      className="bg-blue-600 h-2 rounded-full" 
                      style={{ width: `${(evento.participantes / evento.maxParticipantes) * 100}%` }}
                    ></div>
                  </div>
                  <Button size="sm">
                    Participar
                  </Button>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Eventos Próximos - Seção Destacada */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">📅 Próximos Eventos</h2>
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-6 text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">🌱 Mutirão de Limpeza</h3>
                <p className="text-blue-100 mb-3">
                  Sábado, 8 de fevereiro às 08:00
                </p>
                <p className="text-sm text-blue-100">
                  Junte-se a nós para manter nossa praça limpa e bonita!
                </p>
              </div>
              <div className="flex items-center justify-center">
                <Button variant="outline" className="bg-white text-blue-600 hover:bg-gray-100">
                  Participar Agora
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Criar Evento */}
        <div className="mt-12 text-center">
          <Card className="max-w-md mx-auto">
            <CardHeader>
              <CardTitle>Organize um Evento</CardTitle>
              <CardDescription>
                Ajude a fortalecer nossa comunidade organizando atividades e encontros
              </CardDescription>
              <Button className="mt-4">
                <Plus className="w-4 h-4 mr-2" />
                Criar Novo Evento
              </Button>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
}
