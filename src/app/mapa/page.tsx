"use client";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Search, Plus, Filter, Navigation } from "lucide-react";
import { useState } from "react";

export default function MapaPage() {
  const [searchTerm, setSearchTerm] = useState("");
  
  // Dados simulados de problemas da comunidade
  const problemas = [
    {
      id: 1,
      titulo: "Buraco na via principal",
      categoria: "infraestrutura",
      votos: 45,
      status: "aberto",
      endereco: "Quadra 101, próximo ao mercado",
      urgencia: "alta"
    },
    {
      id: 2,
      titulo: "Iluminação pública queimada",
      categoria: "seguranca",
      votos: 32,
      status: "em-andamento",
      endereco: "Quadra 205, entre as casas 10 e 12",
      urgencia: "media"
    },
    {
      id: 3,
      titulo: "Lixo acumulado na praça",
      categoria: "meio-ambiente",
      votos: 28,
      status: "aberto",
      endereco: "Praça Central, próximo ao playground",
      urgencia: "media"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "aberto": return "bg-red-100 text-red-800";
      case "em-andamento": return "bg-yellow-100 text-yellow-800";
      case "resolvido": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getUrgenciaColor = (urgencia: string) => {
    switch (urgencia) {
      case "alta": return "border-l-red-500";
      case "media": return "border-l-yellow-500";
      case "baixa": return "border-l-green-500";
      default: return "border-l-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header da Página */}
        <div className="mb-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <MapPin className="w-6 h-6 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">Mapa Colaborativo</h1>
            </div>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Reportar Problema
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar com filtros e lista */}
          <div className="lg:col-span-1 space-y-6">
            {/* Busca */}
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Buscar problemas..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Filtros */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Filter className="w-5 h-5 mr-2" />
                  Filtros
                </CardTitle>
              </CardHeader>
              <div className="p-6 pt-0 space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">Categoria</label>
                  <select className="mt-1 w-full p-2 border border-gray-300 rounded-md">
                    <option>Todas</option>
                    <option>Infraestrutura</option>
                    <option>Segurança</option>
                    <option>Meio Ambiente</option>
                    <option>Transporte</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Status</label>
                  <select className="mt-1 w-full p-2 border border-gray-300 rounded-md">
                    <option>Todos</option>
                    <option>Aberto</option>
                    <option>Em Andamento</option>
                    <option>Resolvido</option>
                  </select>
                </div>
              </div>
            </Card>

            {/* Lista de Problemas */}
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900">Problemas Reportados ({problemas.length})</h3>
              {problemas.map((problema) => (
                <Card key={problema.id} className={`cursor-pointer hover:shadow-md border-l-4 ${getUrgenciaColor(problema.urgencia)}`}>
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-base">{problema.titulo}</CardTitle>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(problema.status)}`}>
                        {problema.status}
                      </span>
                    </div>
                    <CardDescription className="text-sm text-gray-600">
                      📍 {problema.endereco}
                    </CardDescription>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-sm text-gray-500">
                        {problema.votos} votos
                      </span>
                      <Button variant="ghost" size="sm">
                        👍 Votar
                      </Button>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          {/* Área do Mapa */}
          <div className="lg:col-span-2">
            <Card className="h-[600px]">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Navigation className="w-5 h-5 mr-2" />
                  Mapa de Santa Maria DF
                </CardTitle>
                <CardDescription>
                  Clique nos marcadores para ver detalhes dos problemas reportados
                </CardDescription>
              </CardHeader>
              <div className="h-full p-6 pt-0">
                <div className="w-full h-full bg-gradient-to-br from-green-100 to-blue-100 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-blue-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">Mapa Interativo</h3>
                    <p className="text-gray-500 mb-4">
                      Aqui será integrado o mapa interativo do Google Maps ou Mapbox
                    </p>
                    <p className="text-sm text-gray-400">
                      Funcionalidade será implementada na próxima fase
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Estatísticas */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-red-600">12</CardTitle>
              <CardDescription>Problemas Abertos</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-yellow-600">5</CardTitle>
              <CardDescription>Em Andamento</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-green-600">23</CardTitle>
              <CardDescription>Resolvidos este mês</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-blue-600">156</CardTitle>
              <CardDescription>Total de Votos</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
}
