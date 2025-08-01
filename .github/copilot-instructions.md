# Copilot Instructions - Sistema de Gestão Comunitária Santa Maria DF

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

## Projeto Overview
Este é um sistema de gestão comunitária para Santa Maria DF, inspirado nos projetos sociais do MIT. O objetivo é conectar moradores, facilitar comunicação com autoridades locais e promover ações colaborativas.

## Stack Tecnológico
- **Frontend**: Next.js 15 com TypeScript e Tailwind CSS
- **Backend**: API Routes do Next.js
- **Database**: Planejado para MongoDB/PostgreSQL
- **Autenticação**: NextAuth.js
- **Maps**: Mapbox/Google Maps API
- **Real-time**: Socket.io ou WebSockets

## Funcionalidades Principais
1. **Mapa Colaborativo**: Moradores podem marcar problemas/melhorias na comunidade
2. **Sistema de Votação**: Priorização democrática de demandas comunitárias
3. **Chat Comunitário**: Comunicação em tempo real entre moradores
4. **Agenda de Eventos**: Calendário de atividades locais
5. **Marketplace Local**: Comércio entre vizinhos
6. **Sistema de Voluntariado**: Conexão para ações voluntárias

## Estrutura do Projeto
- `/src/app` - Páginas e layouts (App Router)
- `/src/components` - Componentes reutilizáveis
- `/src/lib` - Utilitários e configurações
- `/src/types` - Definições TypeScript
- `/src/api` - API routes

## Padrões de Código
- Use componentes funcionais com TypeScript
- Implemente responsividade mobile-first
- Utilize componentes shadcn/ui quando apropriado
- Mantenha acessibilidade (WCAG 2.1)
- Foque na experiência do usuário da comunidade

## Contexto Local
- Público-alvo: Moradores de Santa Maria DF
- Foco em funcionalidades que resolvam problemas reais da comunidade
- Interface amigável para todas as idades
- Considere limitações de conectividade local
