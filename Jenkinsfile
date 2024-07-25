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
        nodejs('Node:18.17.0') {
          echo 'Building Application ....'
          sh 'npm install'
        }
      }
    }
  }
}