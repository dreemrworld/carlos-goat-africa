# Portfólio Carlos Araújo

Um website de portfólio de programador moderno e minimalista de página única que apresenta projetos, experiência e competências. Construído com Next.js, com animações suaves e um design limpo.

## 🚀 Demonstração ao Vivo

Visite a versão ao vivo em: [https://carlos.goat.africa](https://carlos.goat.africa)

![og-image](public/images/og-image.png)

## ✨ Funcionalidades

- **Design Responsivo**: Otimizado para todos os dispositivos e tamanhos de ecrã
- **Modo Escuro/Claro**: Alternância de tema com transições suaves
- **Animações Suaves**: Alimentadas por Framer Motion
- **SEO Otimizado**: Inclui geração de sitemap e meta tags
- **Type-Safe**: Construído com TypeScript para melhor experiência de desenvolvimento
- **Performance Rápida**: Otimizado com Next.js e Tailwind CSS
- **Contacto WhatsApp**: Link direto para mensagens instantâneas
- **Imagens Open Graph**: Configuradas para partilha melhorada nas redes sociais
- **Imagens Twitter Card**: Imagens otimizadas para pré-visualizações do Twitter

## 🛠️ Stack Tecnológico

- **Framework**: Next.js 15
- **Linguagem**: TypeScript
- **Estilização**: Tailwind CSS
- **Animações**: Framer Motion
- **Formulários**: React Hook Form com validação Zod
- **Componentes UI**: Radix UI
- **Ícones**: Lucide React & React Icons
- **Tema**: next-themes

## 📋 Pré-requisitos

- Node.js 18.x ou superior
- Gestor de pacotes npm ou yarn
- Git

## 🚀 Início Rápido

### 1. Clonar o Repositório

```bash
git clone <repository-url>
cd dev.goat.africa
```

### 2. Instalar Dependências

```bash
npm install
```

### 3. Configuração do Ambiente

Crie um ficheiro `.env.local` no diretório raiz e adicione as seguintes variáveis:

```env
SITE_URL=https://dev.goat.africa
```

> **Nota**: O SITE_URL é necessário para a geração do sitemap. Substitua pelo seu domínio real se implementar noutro local.

### 4. Desenvolvimento

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver a aplicação.

## 📜 Scripts Disponíveis

- `npm run dev` - Iniciar servidor de desenvolvimento com Turbo
- `npm run build` - Construir para produção
- `npm run start` - Iniciar servidor de produção
- `npm run preview` - Construir e pré-visualizar produção localmente
- `npm run lint` - Executar ESLint
- `npm run lint:fix` - Corrigir problemas do ESLint
- `npm run format:check` - Verificar formatação do código
- `npm run format:write` - Formatar código
- `npm run typecheck` - Executar verificação de tipos TypeScript

## 🚀 Implementação

### Cloudflare Pages

1. **Construir o projecto**:
   ```bash
   npm run build
   ```

2. **Implementar**:
   - Ligue o seu repositório GitHub ao Cloudflare Pages
   - Defina o comando de construção como `npm run build`
   - Defina o diretório de saída de construção como `out` (Next.js static export)

## 📁 Estrutura do Projecto

```
src/
├── app/
│   ├── layout.tsx          # Layout raiz
│   └── page.tsx            # Página inicial
├── components/
│   ├── about.tsx           # Secção sobre
│   ├── contact.tsx         # Formulário de contacto
│   ├── experience.tsx      # Experiência profissional
│   ├── header.tsx          # Cabeçalho de navegação
│   ├── intro.tsx           # Secção hero/intro
│   ├── projects.tsx        # Apresentação de projetos
│   └── ...                 # Outros componentes UI
├── hooks/
│   └── use-section-in-view.ts  # Hook de observador de intersecção
├── lib/
│   ├── data.tsx            # Dados estáticos
│   ├── utils.ts            # Funções utilitárias
│   └── ...                 # Ficheiros de configuração
└── styles/
    └── globals.css         # Estilos globais
```

## 🤝 Contribuição

1. Faça fork do repositório
2. Crie uma branch de funcionalidade: `git checkout -b feature/sua-funcionalidade`
3. Faça commit das alterações: `git commit -m 'Adicionar alguma funcionalidade'`
4. Faça push para a branch: `git push origin feature/sua-funcionalidade`
5. Abra um Pull Request

## 📧 Contacto

Para questões ou problemas, contacte: [carlos@goat.africa](mailto:carlos@goat.africa)

## 🙏 Agradecimentos

Obrigado a [michael scholak](https://github.com/michaelscholak) por permitir este fork e fornecer a inspiração original.
