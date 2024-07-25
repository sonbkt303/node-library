pipeline {

  environment {
    registry = "kimsonbui"
    registryCredential = 'docker-hub-credential'
    dockerImage = ''
    repos = 'node-api'
  }
  agent any

  stages {
    stage('Building Docker Image') {
      steps {
        script {
          dockerImage = docker.build("$registry/$repos:$BUILD_NUMBER");

          sh "echo La la la $dockerImage";
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

    stage('Cleaning Up') {
      steps{
        sh "docker rmi --force $registry/$repos:$BUILD_NUMBER"
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

