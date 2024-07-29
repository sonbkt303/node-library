pipeline {

  environment {
    registry = "kimsonbui"
    registryCredential = 'docker-hub-credential'
    dockerImage = ''
    repos = 'node-api'
    DISCORD_WEB_HOOK="https://discord.com/api/webhooks/1267323812748460185/HonujRxjSUzUojI5PM7rANIT_uEh9v4WZGL6n3BWC9_8Xy3PH1DjJo_ggTw3h4S3TDue"
  }

  agent any

  stages {
    // stage('Building Docker Image') {
    //   steps {
    //     script {
    //       dockerImage = docker.build("$registry/$repos:$BUILD_NUMBER");

    //       sh "echo La la la $dockerImage";
    //     }
    //   }
    // }
    
    // stage('Deploying Docker Image to Dockerhub') {
    //   steps {
    //     script {
    //       docker.withRegistry('', registryCredential) {
    //         dockerImage.push()
    //       }
    //     }
    //   }
    // }

    // stage('Cleaning Up') {
    //   steps{
    //     sh "docker rmi --force $registry/$repos:$BUILD_NUMBER"
    //   }
    // }
    
    stage('OK') {
      steps{
        sh "echo Ok"
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

      discordSend (
        description: "Jenkins Pipeline Current Build", 
        footer: "$currentBuild.currentResult", 
        link: env.BUILD_URL, 
        result: currentBuild.currentResult, 
        title: 'Clever Lab Jenkins Build', 
        webhookURL: "$DISCORD_WEB_HOOK"
      )
    }

    // failure {
    //   mail to: 'thansung1994@gmail.com',
    //   cc : 'thansung1994@gmail.com',
    //   subject: "FAILED: Build ${env.JOB_NAME}", 
    //   body: "Build failed ${env.JOB_NAME} build no: ${env.BUILD_NUMBER}.\n\nView the log at:\n ${env.BUILD_URL}\n\nBlue Ocean:\n${env.RUN_DISPLAY_URL}"
    // }
 
    // success {
      // mail to: 'kimsonbui303@gmail.com',
      // cc : 'kimsonbui303@gmail.com',
      // subject: "SUCCESSFUL: Clever Lab build success Build ${env.JOB_NAME}", 
      // body: "Build Successful ${env.JOB_NAME} build no: ${env.BUILD_NUMBER}\n\nView the log at:\n ${env.BUILD_URL}\n\nBlue Ocean:\n${env.RUN_DISPLAY_URL}"
      // discordSend(
      //   webhookURL: "https://discord.com/api/webhooks/1267323812748460185/HonujRxjSUzUojI5PM7rANIT_uEh9v4WZGL6n3BWC9_8Xy3PH1DjJo_ggTw3h4S3TDue",
      //   discordSend description: 'Status of my Project',
      //   footer: '',
      //   image: '',
      //   link: env.BUILD_URL,
      //   result: currentBuild.currentResult,
      //   scmWebUrl: '',
      //   thumbnail: '',
      //   title: JOB_NAME
      //   discordSend description: "Jenkins Pipeline Build", footer: "Footer Text", link: env.BUILD_URL, result: currentBuild.currentResult, title: JOB_NAME, webhookURL: "Webhook URL"
      // )
    // }

  }
}

