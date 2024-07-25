pipeline {
  agent any

  stages {
    // stage('build') {
    //   steps {
    //     sh 'node --version'
    //   }
    // }

    stage('Build') {
      steps {
        nodejs('Node') {
          echo 'Building Application ....'
          sh 'npm install'
          sh 'npm start'
        }
      }
    }
  }
}