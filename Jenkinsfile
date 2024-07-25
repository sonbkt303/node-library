pipeline {
  agent any

  stages {
    stage('Prerequisite') {
      steps {
        sh "echo Begin Prerequisite"
        sh "echo login to docker registry..."
      }
    }

      // stage('Build') {
      //   steps {
      //     // nodejs('Node:18.17.0') {
      //     //   echo 'Building Application ....'
      //     //   sh 'npm install'
      //     // }
      //     sh "docker build -t node-api:v1 ."
      //     sh "docker tag node-api:v1 kimsonbui/node-api:v1"
      //   }
      // }

      // stage('Build') {
      //   steps {
      //     sh "docker push kimsonbui/node-api:v1"
      //   }
      // }
  }
}

