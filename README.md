# Iniciando com o template:

1. Rodar no terminal `chmod 755 android/gradlew`

# Para renomear o projeto

npx react-native-rename "NOME DA SUA APLICACAO" -b PACOTE.DA.SUA.APLICACAO

- Buscar pelo nome: com.reactnativetemplate e substituir pelo pacote que voce colocou acima

- apos o precesso de renomeacao, abrir o arquivo android/app/src/main/res/values/strings.xml, e apagar a linha 2

# Criar contas no Firebase e AppCenter
- Colocar as chave em: android/app/build.gradle(Android codePush)

# Bugs conhecidos

# Dependencias do projeto

react-native 0.62.0

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
