pipeline {

  agent any

  // tools {
  //   nodejs 'NodeJs' // Ensure NodeJS is installed and configured in Jenkins
  // }

  environment {
    // registry = "kimsonbui"
    // registryCredential = 'docker-hub-credential'
    // dockerImage = ''
    // repos = 'node-api'
    // DISCORD_WEB_HOOK="https://discord.com/api/webhooks/1267323812748460185/HonujRxjSUzUojI5PM7rANIT_uEh9v4WZGL6n3BWC9_8Xy3PH1DjJo_ggTw3h4S3TDue"
    SCANNER_HOME = tool 'SonarScanner' // Name of the SonarScanner installation
  }

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

    // stage('Install Dependencies') {
    //   steps {
    //       sh 'npm install -g sonar-scanner'
    //   }
    // }

    // stage('Clone Repository') {
    //   steps {
    //       git 'https://github.com/sonbkt303/node-library'
    //   }
    // }

    // stage('SCM') {
    //   steps {
    //     checkout scm
    //   }
    // }

    // stage('Install Dependencies') {
    //   steps {
    //       sh 'npm install'
    //   }
    // }
    
    stage('SonarQube Analysis') {
      steps {
        // withSonarQubeEnv('SonarQube') {
        //     sh 'sonar-scanner -Dsonar.projectKey=node-library -Dsonar.sources=. -Dsonar.host.url=http://172.76.10.185:9000 -Dsonar.login=sqp_4f6e914fb0f7a6cd57eea823e0e4406d7ab4b78b'
        // }
        // sh 'npm run sonar'
        withSonarQubeEnv('sq1') { // Name of the SonarQube server
          // sh "${SCANNER_HOME}/bin/sonar-scanner"
          // sh "${SCANNER_HOME}/bin/sonar-scanner -Dsonar.projectKey=node-library -Dsonar.sources=."
          sh "${SCANNER_HOME}/bin/sonar-scanner -Dsonar.projectKey=node-library -Dsonar.sources=."

        }
      }
    }

    // stage('Cleaning Up') {
    //   steps{
    //     sh "docker rmi --force $registry/$repos:$BUILD_NUMBER"
    //   }
    // }
    
    // stage('OK') {
    //   steps{
    //     sh "chmod +x -R ${env.WORKSPACE}"
    //     sh "./scripts/test.sh"
    //   }
    // }


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

      // DISCORD sent notification
      // discordSend (
      //   description: "* Project: $JOB_NAME \n* Build Number: $BUILD_NUMBER", 
      //   footer: "$currentBuild.currentResult", 
      //   link: env.BUILD_URL, 
      //   result: currentBuild.currentResult, 
      //   title: 'Clever Lab Jenkins Build', 
      //   webhookURL: "$DISCORD_WEB_HOOK"
      // )
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