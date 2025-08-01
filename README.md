# 🏘️ Sistema de Gestão Comunitária - Santa Maria DF

Uma plataforma digital inspirada nos projetos sociais do MIT que conecta moradores de Santa Maria DF para resolver problemas comunitários, compartilhar recursos e fortalecer os laços sociais.

## 🎯 Objetivo

Criar uma ferramenta tecnológica que empodere a comunidade de Santa Maria DF, facilitando:
- Comunicação entre moradores
- Identificação e resolução de problemas locais
- Organização de eventos e atividades comunitárias
- Compartilhamento de recursos e serviços
- Fortalecimento da participação cívica

## ✨ Funcionalidades

### 🗺️ Mapa Colaborativo
- Marcação de problemas na comunidade (buracos, iluminação, limpeza)
- Sistema de votação para priorização de demandas
- Acompanhamento do status de resolução
- Integração com autoridades locais

### 💬 Chat Comunitário
- Grupos por quadras/setores
- Chat geral da comunidade
- Canais temáticos (segurança, eventos, vendas)
- Moderação comunitária

### 📅 Agenda de Eventos
- Calendário de atividades locais
- Sistema de inscrições
- Organização de reuniões comunitárias
- Notificações de eventos próximos

### 🛒 Marketplace Local
- Compra e venda entre vizinhos
- Oferta de serviços locais
- Sistema de avaliações
- Categorias: produtos, serviços, doações, trocas

### ❤️ Sistema de Voluntariado
- Cadastro de oportunidades de voluntariado
- Conexão entre voluntários e organizadores
- Histórico de participação
- Reconhecimento de contribuições

### 🏛️ Gestão Comunitária
- Votações e enquetes
- Propostas de melhorias
- Transparência em decisões
- Comunicação com lideranças locais

## 🚀 Como Executar

Primeiro, instale as dependências:

```bash
npm install
```

Em seguida, execute o servidor de desenvolvimento:

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

## 🛠️ Tecnologias Utilizadas

- **Frontend**: Next.js 15 com TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **Autenticação**: NextAuth.js (planejado)
- **Banco de Dados**: Prisma + PostgreSQL (planejado)
- **Mapas**: Mapbox/Google Maps API (planejado)
- **Real-time**: Socket.io (planejado)

## 📁 Estrutura do Projeto

```
src/
├── app/                    # Páginas do App Router
├── components/
│   └── ui/                # Componentes de interface
├── lib/                   # Utilitários e configurações
└── types/                 # Definições TypeScript
```

## 🎨 Design System

O projeto utiliza um design system consistente baseado em:
- **Cores**: Paleta centrada em azul (comunidade) e verde (sustentabilidade)
- **Tipografia**: Sistema hierárquico claro
- **Espaçamento**: Grid consistente
- **Componentes**: Reutilizáveis e acessíveis

## 🔮 Próximos Passos

### Fase 1 - MVP (Produto Mínimo Viável)
- [ ] Sistema de autenticação
- [ ] Cadastro de usuários
- [ ] Mapa básico com marcadores
- [ ] Sistema de chat simples

### Fase 2 - Funcionalidades Avançadas
- [ ] Sistema de votação
- [ ] Marketplace local
- [ ] Agenda de eventos
- [ ] Notificações push

### Fase 3 - Integração e Escalabilidade
- [ ] API para autoridades locais
- [ ] App mobile (React Native)
- [ ] Dashboard administrativo
- [ ] Analytics e relatórios

## 🤝 Como Contribuir

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🌟 Inspiração

Este projeto foi inspirado nas iniciativas de tecnologia social do MIT, como:
- MIT OpenCourseWare
- MIT D-Lab (Development Lab)
- Projetos de participação cívica digital
- Iniciativas de smart cities

## 📞 Contato

Para mais informações sobre o projeto:
- Email: contato@comunidadesantamaria.com
- Comunidade: Santa Maria, Distrito Federal

---

**Construído com ❤️ para a comunidade de Santa Maria DF**
