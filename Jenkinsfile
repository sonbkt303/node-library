pipeline {
  agent { docker { image 'node:16.17.0' } }
  stages {
    stage('build') {
      steps {
          sh 'node --version'
      }
    }

    stage('Ok') {
      steps {
          echo "Ok"
      }
    }
  }
}