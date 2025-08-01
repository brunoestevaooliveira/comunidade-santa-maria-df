# 🤝 Contribuindo para o Sistema de Gestão Comunitária Santa Maria DF

Ficamos felizes que você queira contribuir! Este projeto visa fortalecer nossa comunidade através da tecnologia.

## 🌟 Como Contribuir

### 🐛 Reportando Bugs
1. Verifique se o bug já foi reportado nos [Issues](https://github.com/brunoestevaooliveira/comunidade-santa-maria-df/issues)
2. Se não foi, crie um novo issue usando o template de bug report
3. Inclua o máximo de detalhes possível

### ✨ Sugerindo Funcionalidades
1. Verifique se a funcionalidade já foi sugerida
2. Crie um novo issue usando o template de feature request
3. Explique como a funcionalidade beneficiaria a comunidade

### 💻 Contribuindo com Código

#### 1. Fork e Clone
```bash
# Fork este repositório no GitHub
# Clone seu fork
git clone https://github.com/SEU-USUARIO/comunidade-santa-maria-df.git
cd comunidade-santa-maria-df
```

#### 2. Configuração do Ambiente
```bash
# Instale dependências
npm install

# Configure o banco (opcional)
npm run docker:up

# Inicie o desenvolvimento
npm run dev
```

#### 3. Crie uma Branch
```bash
# Para nova funcionalidade
git checkout -b feature/nome-da-funcionalidade

# Para correção de bug
git checkout -b fix/nome-do-bug
```

#### 4. Desenvolva
- Siga as convenções de código existentes
- Escreva código limpo e bem documentado
- Teste suas mudanças localmente

#### 5. Commit
```bash
# Use Conventional Commits
git commit -m "feat: adiciona sistema de notificações"
git commit -m "fix: corrige erro no mapa"
git commit -m "docs: atualiza README"
```

#### 6. Push e Pull Request
```bash
git push origin sua-branch
```
- Abra um Pull Request no GitHub
- Descreva suas mudanças
- Referencie issues relacionados

## 📋 Convenções

### Commits
Usamos [Conventional Commits](https://www.conventionalcommits.org/):
- `feat:` nova funcionalidade
- `fix:` correção de bug
- `docs:` documentação
- `style:` formatação
- `refactor:` refatoração
- `test:` testes
- `chore:` tarefas de manutenção

### Código
- **TypeScript**: Use tipagem estrita
- **Componentes**: Funcionais com hooks
- **Estilo**: Tailwind CSS + componentes shadcn/ui
- **Nomes**: Descritivos em português/inglês
- **Comentários**: Para lógica complexa

### Estrutura de Arquivos
```
src/
├── app/                    # Páginas (App Router)
├── components/
│   ├── ui/                # Componentes base
│   └── ...                # Componentes específicos
├── lib/                   # Utilitários
└── types/                 # Tipos TypeScript
```

## 🎯 Prioridades Atuais

### 🚀 Alta Prioridade
- [ ] Sistema de autenticação
- [ ] Integração com mapas
- [ ] Chat em tempo real
- [ ] Sistema de notificações

### 📈 Média Prioridade
- [ ] Testes automatizados
- [ ] App mobile
- [ ] Dashboard administrativo
- [ ] Analytics

### 🔮 Baixa Prioridade
- [ ] Integrações avançadas
- [ ] Machine learning
- [ ] Gamificação

## 🏘️ Foco na Comunidade

Lembre-se sempre:
- **Usuários reais**: Moradores de Santa Maria DF
- **Problemas reais**: Infraestrutura, segurança, eventos
- **Simplicidade**: Interface acessível para todas as idades
- **Impacto social**: Cada funcionalidade deve fortalecer a comunidade

## 📞 Contato

- **Issues**: Para bugs e sugestões
- **Discussions**: Para ideias e perguntas gerais
- **Email**: ylhito0307@gmail.com

## 📄 Código de Conduta

- Seja respeitoso e inclusivo
- Foque no que é melhor para a comunidade
- Aceite feedback construtivo
- Seja paciente com iniciantes

## 🎉 Reconhecimento

Todos os contribuidores serão reconhecidos no README e releases.

---

**Obrigado por contribuir para uma Santa Maria DF mais conectada! 🏘️💙**
