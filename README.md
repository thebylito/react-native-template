# Iniciando com o template:

1. Rodar no terminal `chmod 755 android/gradlew`

# Para renomear o projeto

- use `npx react-native-rename "NOME DA SUA APLICACAO" -b PACOTE.DA.SUA.APLICACAO`

- Buscar pelo nome: com.reactnativetemplate e substituir pelo pacote que voce colocou acima

- apos o precesso de renomeacao, abrir o arquivo android/app/src/main/res/values/strings.xml, e apagar a linha 2

# Criar conta no Firebase

- Colocar arquivo json em `/android/app/`
- Colocar arquivo plist em `/ios/`

# Codepush

- Definir nas variaveis de ambiente em `.env`

# Onesignal

- Definir nas variaveis de ambiente em `.env`

# Atenção

Apos definir as variaveis de ambiente, é necessario rodar `npx rnuc .env` para que as alterações sejam propagadas.

# Bugs conhecidos

- Por hora não é suportado alterar nome da aplicacao(iOS) via `.env`
- Por hora não é suportado variante de staging(iOS) via `.env` mas é possivel, e está pronta a implementação no lado nativo da aplicação.
  - TODO: Documentar como definir variante staging, desde quem não use pelo `.env`

# Dependencias do projeto

react-native 0.63.0-rc.1

- react-native-codepush
  - Para atualizacoes remotas
- @react-native-firebase/app
  - Integracao com firebase
- @react-native-firebase/analytics
  - Integracao com o modulo de analise do firebase
- @react-native-firebase/remote-config
  - Modulo para configuracoes(variaveis) remotas

#Contas necessarias:

- Firebase: https://console.firebase.google.com/
- Codepush: https://appcenter.ms/apps
