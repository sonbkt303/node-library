pipeline {
  agent any

  stages {
    // stage('build') {
    //   steps {
    //     sh 'node --version'
    //   }
    // }
    stage('Prerequisite') {
      steps {
        sh "echo Begin Prerequisite"
        sh "echo login to docker registry..."
      }
    }

    stage('Building Docker Image') {
      steps {
        script {
            dockerImage = docker.build registry + ":$BUILD_NUMBER"
        }
      }
    }

    stage('Build') {
      steps {
        // nodejs('Node:18.17.0') {
        //   echo 'Building Application ....'
        //   sh 'npm install'
        // }
        sh "docker build -t node-api:v1 ."
        sh "docker tag node-api:v1 kimsonbui/node-api:v1"
      }
    }

    stage('Build') {
      steps {
        sh "docker push kimsonbui/node-api:v1"
    }
  }
}

