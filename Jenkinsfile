pipeline {
  agent any
  stages {
    stage('Checkout branch') {
      steps {
        sh 'echo \'hello world\''
        git(url: 'https://github.com/sonbkt303/node-library', branch: 'main', credentialsId: 'github-account-credential')
      }
    }

  }
  environment {
    dev = 'dev'
  }
}