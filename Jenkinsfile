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

  post {
    always {
      cleanWs(
        cleanWhenAborted: true,
        cleanWhenFailure: true,
        cleanWhenNotBuilt: false,
        cleanWhenSuccess: true,
        cleanWhenUnstable: true,
        deleteDirs: true,
        notFailBuild: true,
        disableDeferredWipeout: true
      )
    }

    failure {
      mail to: 'thansung1994@gmail.com',
      cc : 'thansung1994@gmail.com',
      subject: "FAILED: Build ${env.JOB_NAME}", 
      body: "Build failed ${env.JOB_NAME} build no: ${env.BUILD_NUMBER}.\n\nView the log at:\n ${env.BUILD_URL}\n\nBlue Ocean:\n${env.RUN_DISPLAY_URL}"
    }
    
    success {
      mail to: 'kimsonbui303@gmail.com',
      cc : 'kimsonbui303@gmail.com',
      subject: "SUCCESSFUL: Clever Lab build success Build ${env.JOB_NAME}", 
      body: "Build Successful ${env.JOB_NAME} build no: ${env.BUILD_NUMBER}\n\nView the log at:\n ${env.BUILD_URL}\n\nBlue Ocean:\n${env.RUN_DISPLAY_URL}"
    }
  }
}

