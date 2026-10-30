# Emagrecentro Blumenau — Uma nova fase

Site institucional em React, TypeScript e Vite, com cena procedural Three.js carregada sob demanda, React Three Fiber, Drei e narrativa de rolagem GSAP.

## Desenvolvimento

Requer Node.js 22.12+ (validado com 24.19) e npm. No diretório do projeto:

```sh
npm ci --no-audit --no-fund
npm run dev -- --port 5173
```

## Verificação e produção

```sh
npm run build
npx playwright test
npm run preview -- --port 4173
```

Os testes usam `/usr/bin/chromium`, disponível no ambiente na nuvem. Ajuste `executablePath` para outros ambientes. Os testes cobrem 360, 390, 768 e 1440 px, categorias, expansão, FAQ, menu móvel, mensagens e links, ausência de WebGL e movimento reduzido.

Publique a pasta `dist` em hospedagem estática. Não há backend, formulários ou necessidade de segredos. Fontes, fotos e código são locais. A rede é necessária apenas para instalar dependências e para o visitante abrir WhatsApp, Maps ou Instagram.

## Conteúdo

Contatos, catálogo, fases e perguntas estão centralizados em `src/data.ts`. As imagens editoriais em `public/editorial.png` foram geradas e não representam instalações, equipe ou pacientes da unidade. A marca é uma identificação tipográfica provisória até o fornecimento do logo oficial. As descrições técnicas devem ser revisadas pelos profissionais responsáveis antes da publicação. Horários, CNPJ, preços e depoimentos foram omitidos conforme o briefing.

O 3D é decorativo, pausa fora de tela e com a aba oculta, limita DPR e tem alternativa estática. A jornada facial EmagFace é apresentada separadamente do Método 4 Fases. Nenhum CTA envia mensagens automaticamente.
