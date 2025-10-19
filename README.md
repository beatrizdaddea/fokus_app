# Fokus - Timer Pomodoro

Fokus é um aplicativo mobile inteligente para gestão do tempo que implementa a técnica de produtividade baseada em intervalos cronometrados. A ferramenta ajuda usuários a maximizar seu foco e prevenir a fadiga mental através de ciclos balanceados de trabalho e descanso.

<img width="792" height="1465" alt="Screenshot_20251019_154945" src="https://github.com/user-attachments/assets/57fa9129-2aa1-43c2-9c5c-32acc0e42033" />


## 🎯 Funcionalidades

- ⏱️ **Timer Pomodoro**: 25 minutos de foco, 5 minutos de pausa curta e 15 minutos de pausa longa
- 🎨 **Interface intuitiva**: Design moderno e fácil de usar
- ⏯️ **Controle de timer**: Play, pause e reset
- 📱 **Multiplataforma**: Funciona em iOS e Android
- 🔄 **Troca de modos**: Alternância fácil entre foco e pausas

## 🚀 Tecnologias Utilizadas

- **React Native** - Framework para desenvolvimento mobile
- **Expo** - Plataforma para desenvolvimento React Native
- **JavaScript** - Linguagem de programação
- **React Hooks** - useState, useRef, useEffect
- **StyleSheet** - Estilização dos componentes

## 📋 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:

- Você instalou a versão mais recente do **Node.js** (versão 14 ou superior)
- Você instalou o **Expo CLI** globalmente
- Você tem uma máquina **Windows / Linux / Mac**
- Você tem o **Git** instalado
- Para testar no dispositivo físico: **Expo Go** instalado no smartphone

## 🛠️ Instalando o Fokus

Para instalar o Fokus em sua máquina, siga estas etapas:

### Clone o repositório
```bash
git clone https://github.com/beatrizdaddea/fokus_app.git
cd fokus_app
```

### Instale as dependências
```bash
npm install
```

### Execute o projeto
```bash
npx expo start
# ou
npm start
```

## 📱 Usando o Fokus

Para usar o Fokus, siga estas etapas:

1. **Escolha o modo**: Selecione entre "Foco", "Pausa curta" ou "Pausa longa"
2. **Inicie o timer**: Clique no botão "Começar" para iniciar a contagem regressiva
3. **Controle o timer**: Use o botão "Pausar" para interromper temporariamente
4. **Troque de modo**: Mude entre os modos a qualquer momento

### Exemplo de uso:
```
1. Selecione "Foco" (25 minutos)
2. Clique em "Começar" 
3. Trabalhe focado até o timer zerar
4. Faça uma pausa curta (5 minutos)
5. Repita o ciclo
```

## 🏗️ Estrutura do Projeto

```
fokus/
├── assets/
│   ├── images/
│   │   ├── focus.png
│   │   ├── short_break.png
│   │   └── long_break.png
├── components/
│   ├── buttons/
│   │   ├── ActionButton/
│   │   └── FokusButton/
│   └── timers/
│       └── Timer/
├── App.js
└── package.json
```


## 🤝 Contribuindo para o Fokus

Para contribuir com o Fokus, siga estas etapas:

1. Bifurque este repositório.
2. Crie um branch: `git checkout -b <nome_branch>`.
3. Faça suas alterações e confirme-as: `git commit -m '<mensagem_commit>'`
4. Envie para o branch original: `git push origin <nome_do_projeto>/<local>`
5. Crie a solicitação de pull.

Como alternativa, consulte a documentação do GitHub em [como criar uma solicitação pull](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).


## 📝 Licença

Esse projeto está sob licença MIT. Veja o arquivo [LICENÇA](LICENSE) para mais detalhes.

---

**Nota**: Projeto desenvolvido para fins educacionais como parte do curso de React Native da Alura.
