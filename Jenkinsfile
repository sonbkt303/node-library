pipeline {

  environment {
    registry = "kimsonbui"
    registryCredential = 'docker-hub-credential'
    dockerImage = ''
  }
  agent any

  stages {
    stage('Building Docker Image') {
      steps {
        script {
            dockerImage = docker.build registry + ":$BUILD_NUMBER"
        }
      }
    }
    
    stage('Deploying Docker Image to Dockerhub') {
      steps {
        script {
          docker.withRegistry('', registryCredential) {
            dockerImage.push()
          }
        }
      }
    }

    // stage('Prerequisite') {
    //   steps {
    //     sh "echo login to docker registry..."
    //     withCredentials([usernamePassword(credentialsId: 'docker-hub-credential', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
    //       sh 'docker login -u $DOCKER_USERNAME -p $DOCKER_PASSWORD'
    //     }
    //   }
    // }

    // stage('Build') {
    //   steps {
    //     sh "docker build -t node-api:v1 ."
    //     sh "docker tag node-api:v1 kimsonbui/node-api:v1"
    //   }
    // }

    // stage('Deploy') {
    //   steps {
    //     sh "docker push kimsonbui/node-api:v1"
    //   }
    // }

  }
}

