pipeline {
  agent {
    label 'windows'
  }

  environment {
    registry = 'kimsonbui'
  }

  stages {
    stage('Say hi') {
      steps {
        script {
          echo 'Hello, Jenkins!'
        }  
      } 
    }
    // stage('Checkout') {
    //   steps {
    //     withCredentials([string(credentialsId: 'evn-scanner-credential', variable: 'GIT_TOKEN')]) {
    //       checkout([$class: 'GitSCM', branches: [[name: '*/main']],
    //         doGenerateSubmoduleConfigurations: false,
    //         extensions: [[$class: 'SparseCheckoutPaths', sparseCheckoutPaths: [[path: 'ry-scanner']]]],
    //         userRemoteConfigs: [[url: 'https://github.com/mikebkt/evn-sonar-scanner', credentialsId: 'evn-scanner-token', credentials: [[username: 'your-github-username', password: GIT_TOKEN]]]]])
    //     }
    //   }
    // }
    stage('Checkout') {
      checkout([
          $class: 'GitSCM',
          branches: [[name: '*/main']],
          doGenerateSubmoduleConfigurations: false,
          extensions: [
              [$class: 'SparseCheckoutPaths', sparseCheckoutPaths: [[path: 'ry-scanner']]],
              [$class: 'SubmoduleOption', recursiveSubmodules: true, parentCredentials: true]
          ],
          userRemoteConfigs: [[url: 'https://github.com/mikebkt/evn-sonar-scanner', credentialsId: 'evn-scanner-credential']]
      ])
    }
      
  }

  post {
    always {
      cleanWs(
        cleanWhenAborted: true,
        cleanWhenFailure: true,
        cleanWhenNotBuilt: false,
        cleanWhenSuccess: true,
        deleteDirs: true
      )
    }
  }
}