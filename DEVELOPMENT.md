# 🚀 Guia de Desenvolvimento - Comunidade Santa Maria DF

## Configuração do Ambiente de Desenvolvimento

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn
- Docker e Docker Compose (opcional)
- PostgreSQL (se não usar Docker)

### 1. Instalação

```bash
# Clone o repositório
git clone <url-do-repositorio>
cd projeto2

# Instale as dependências
npm install
```

### 2. Configuração do Banco de Dados

#### Opção A: Usando Docker (Recomendado)
```bash
# Inicie os serviços do banco
npm run docker:up

# Isso irá iniciar:
# - PostgreSQL na porta 5432
# - Redis na porta 6379  
# - pgAdmin na porta 5050 (admin@comunidade.com / admin123)
```

#### Opção B: PostgreSQL Local
1. Instale PostgreSQL localmente
2. Crie um banco chamado `comunidade_santa_maria`
3. Configure as credenciais no arquivo `.env`

### 3. Configuração das Variáveis de Ambiente

```bash
# Copie o arquivo de exemplo
cp .env.example .env.local

# Edite as variáveis conforme necessário
# DATABASE_URL é a mais importante para começar
```

### 4. Configuração do Prisma

```bash
# Gere o cliente Prisma
npm run db:generate

# Execute as migrações
npm run db:migrate

# (Opcional) Adicione dados de exemplo
npm run db:seed
```

### 5. Iniciando o Desenvolvimento

```bash
# Inicie o servidor de desenvolvimento
npm run dev

# Acesse http://localhost:3000
```

## 🛠️ Scripts Disponíveis

| Script | Descrição |
|--------|-----------|
| `npm run dev` | Inicia servidor de desenvolvimento |
| `npm run build` | Compila para produção |
| `npm run start` | Inicia servidor de produção |
| `npm run lint` | Executa linting |
| `npm run type-check` | Verifica tipos TypeScript |
| `npm run db:generate` | Gera cliente Prisma |
| `npm run db:push` | Aplica schema ao banco |
| `npm run db:migrate` | Executa migrações |
| `npm run db:studio` | Abre Prisma Studio |
| `npm run docker:up` | Inicia containers Docker |
| `npm run docker:down` | Para containers Docker |

## 📁 Estrutura do Projeto

```
src/
├── app/                    # App Router do Next.js
│   ├── page.tsx           # Página inicial
│   ├── mapa/              # Mapa colaborativo
│   ├── eventos/           # Agenda de eventos
│   ├── marketplace/       # Marketplace local
│   ├── voluntariado/      # Sistema de voluntariado
│   └── layout.tsx         # Layout principal
├── components/
│   ├── ui/                # Componentes de interface
│   └── navigation.tsx     # Componente de navegação
├── lib/
│   └── utils.ts           # Utilitários
└── types/
    └── community.ts       # Tipos TypeScript

prisma/
├── schema.prisma          # Schema do banco de dados
└── migrations/            # Migrações do banco

public/                    # Arquivos estáticos
```

## 🎨 Sistema de Design

### Cores Principais
- **Azul Primário**: `#2563eb` - Representa confiança e comunidade
- **Verde Secundário**: `#059669` - Representa sustentabilidade
- **Cinza Neutro**: `#6b7280` - Para textos e elementos secundários

### Componentes UI
- Baseados em Radix UI primitives
- Estilizados com Tailwind CSS
- Sistema de variantes consistente

## 🔗 Integrações Planejadas

### Mapas
- **Mapbox** ou **Google Maps API**
- Marcadores interativos
- Geocodificação de endereços

### Autenticação
- **NextAuth.js**
- Login com Google/email
- Gerenciamento de sessões

### Notificações
- **Firebase Cloud Messaging**
- Push notifications
- Emails via SMTP

### Upload de Imagens
- **Cloudinary**
- Redimensionamento automático
- CDN global

## 🚀 Deploy

### Vercel (Recomendado)
1. Conecte o repositório ao Vercel
2. Configure as variáveis de ambiente
3. Deploy automático

### Docker
```bash
# Build da imagem
docker build -t comunidade-santa-maria .

# Execute o container
docker run -p 3000:3000 comunidade-santa-maria
```

## 🐛 Debugging

### Logs do Banco
```bash
# Visualize logs do PostgreSQL
docker logs comunidade_santa_maria_db

# Acesse o pgAdmin
# http://localhost:5050
```

### Prisma Studio
```bash
# Interface visual do banco
npm run db:studio
# Acesse http://localhost:5555
```

## 🤝 Contribuição

1. Crie uma branch: `git checkout -b feature/nova-funcionalidade`
2. Desenvolva e teste localmente
3. Execute linting: `npm run lint`
4. Commit: `git commit -m "Adiciona nova funcionalidade"`
5. Push: `git push origin feature/nova-funcionalidade`
6. Abra um Pull Request

## 📝 Convenções

### Commits
- Use Conventional Commits
- Ex: `feat: adiciona sistema de votação`
- Ex: `fix: corrige erro no mapa`

### Código
- Use TypeScript estrito
- Componentes funcionais com hooks
- Nomes descritivos em português/inglês
- Comente código complexo

## 🆘 Problemas Comuns

### Erro de Conexão com Banco
```bash
# Verifique se o Docker está rodando
docker ps

# Reinicie os containers
npm run docker:down && npm run docker:up
```

### Erro de Build
```bash
# Limpe cache e reinstale
rm -rf .next node_modules
npm install
npm run build
```

### Erro do Prisma
```bash
# Regenere o cliente
npm run db:generate
```

---

💡 **Dica**: Mantenha sempre os containers Docker rodando durante o desenvolvimento para evitar problemas de conexão.
