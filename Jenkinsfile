pipeline {
  agent { docker { image 'node:16.17.0' } }
  stages {
    stage('build') {
      steps {
          sh 'node --version'
      }
    }

    stage('Build') {
      steps {
        nodejs('Node') Ơ
        echo 'Building Application ....'
        sh 'npm install'
      }
    }
  }
}