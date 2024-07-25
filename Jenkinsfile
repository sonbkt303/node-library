pipeline {
  agent any

  stages {
    // stage('Prerequisite') {
    //   steps {
    //     sh "echo Begin Prerequisite"
    //     sh "echo login to docker registry..."
    //   }
    // }
    stage('Prerequisite') {
      steps {
        sh "echo login to docker registry..."
        withCredentials([usernamePassword(credentialsId: 'docker-hub-credential', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
          sh 'docker login -u $DOCKER_USERNAME -p $DOCKER_PASSWORD'
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

    stage('Deploy') {
      steps {
        sh "docker push kimsonbui/node-api:v1"
      }
    }

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
  }
}

