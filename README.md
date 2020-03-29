# Iniciando com o template:

1. Rodar no terminal `chmod 755 android/gradlew`

# Para renomear o projeto
npx react-native-rename "NOME DA SUA APLICACAO" -b PACOTE.DA.SUA.APLICACAO
- apos abrir o arquivo android/app/src/main/res/values/strings.xml, e apagar a linha 2

# Bugs conhecidos

### Codepush:

- Devido ao ultimo release do react native, precisamos corrigir...
    - node_modules/react-native-code-push/android/app/src/main/java/com/microsoft/codepush/react/CodePush.java:157
    - de: isLiveReloadEnabled = devInternalSettings.isReloadOnJSChangeEnabled();
    - para: isLiveReloadEnabled = devInternalSettings.isHotModuleReplacementEnabled();

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

