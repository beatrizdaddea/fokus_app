# Fokus - Pomodoro Timer / Timer Pomodoro

Fokus is an intelligent mobile time management app that implements the productivity technique based on timed intervals. The tool helps users maximize their focus and prevent mental fatigue through balanced work and rest cycles.

Fokus é um aplicativo mobile inteligente para gestão do tempo que implementa a técnica de produtividade baseada em intervalos cronometrados. A ferramenta ajuda usuários a maximizar seu foco e prevenir a fadiga mental através de ciclos balanceados de trabalho e descanso.

<img width="792" height="1465" alt="Screenshot_20251019_154945" src="https://github.com/user-attachments/assets/57fa9129-2aa1-43c2-9c5c-32acc0e42033" />

## 🎯 Features / Funcionalidades

- ⏱️ **Pomodoro Timer**: 25 minutes focus, 5 minutes short break, 15 minutes long break
- 🎨 **Intuitive interface**: Modern and easy-to-use design
- ⏯️ **Timer control**: Play, pause and reset
- 📱 **Cross-platform**: Works on iOS and Android
- 🔄 **Mode switching**: Easy toggle between focus and breaks

---
- ⏱️ **Timer Pomodoro**: 25 minutos de foco, 5 minutos de pausa curta e 15 minutos de pausa longa
- 🎨 **Interface intuitiva**: Design moderno e fácil de usar
- ⏯️ **Controle de timer**: Play, pause e reset
- 📱 **Multiplataforma**: Funciona em iOS e Android
- 🔄 **Troca de modos**: Alternância fácil entre foco e pausas

## 🚀 Technologies Used / Tecnologias Utilizadas

- **React Native** - Mobile development framework
- **Expo** - React Native development platform
- **JavaScript** - Programming language
- **React Hooks** - useState, useRef, useEffect
- **StyleSheet** - Component styling

--- 
- **React Native** - Framework para desenvolvimento mobile
- **Expo** - Plataforma para desenvolvimento React Native
- **JavaScript** - Linguagem de programação
- **React Hooks** - useState, useRef, useEffect
- **StyleSheet** - Estilização dos componentes

## 📋 Prerequisites / Pré-requisitos

Before you begin, make sure you have met the following requirements:

- You have installed the latest version of **Node.js** (version 14 or higher)
- You have installed **Expo CLI** globally
- You have a **Windows / Linux / Mac** machine
- You have **Git** installed
- For physical device testing: **Expo Go** installed on your smartphone

Antes de começar, verifique se você atendeu aos seguintes requisitos:

- Você instalou a versão mais recente do **Node.js** (versão 14 ou superior)
- Você instalou o **Expo CLI** globalmente
- Você tem uma máquina **Windows / Linux / Mac**
- Você tem o **Git** instalado
- Para testar no dispositivo físico: **Expo Go** instalado no smartphone

## 🛠️ Installing Fokus / Instalando o Fokus

To install Fokus on your machine, follow these steps:

Para instalar o Fokus em sua máquina, siga estas etapas:

### Clone the repository / Clone o repositório
```bash
git clone https://github.com/beatrizdaddea/fokus_app.git
cd fokus_app
```

### Install dependencies / Instale as dependências
```bash
npm install
```

### Run the project / Execute o projeto
```bash
npx expo start
# or / ou
npm start
```

## 📱 Using Fokus / Usando o Fokus

To use Fokus, follow these steps:

Para usar o Fokus, siga estas etapas:

1. **Choose mode**: Select between "Focus", "Short break" or "Long break"
2. **Start timer**: Click the "Start" button to begin countdown
3. **Control timer**: Use the "Pause" button to temporarily stop
4. **Switch modes**: Change between modes at any time

---
1. **Escolha o modo**: Selecione entre "Foco", "Pausa curta" ou "Pausa longa"
2. **Inicie o timer**: Clique no botão "Começar" para iniciar a contagem regressiva
3. **Controle o timer**: Use o botão "Pausar" para interromper temporariamente
4. **Troque de modo**: Mude entre os modos a qualquer momento

### Usage example / Exemplo de uso:
```
1. Select "Focus" (25 minutes)
2. Click "Start"
3. Work focused until timer ends
4. Take a short break (5 minutes)
5. Repeat the cycle

1. Selecione "Foco" (25 minutos)
2. Clique em "Começar" 
3. Trabalhe focado até o timer zerar
4. Faça uma pausa curta (5 minutos)
5. Repita o ciclo
```

## 🏗️ Project Structure / Estrutura do Projeto

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

---

**Note**: Project developed for educational purposes as part of Alura's React Native course.

**Nota**: Projeto desenvolvido para fins educacionais como parte do curso de React Native da Alura.
