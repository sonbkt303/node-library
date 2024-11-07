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
    //     withCredentials([string(credentialsId: 'github-pat', variable: 'GITHUB_TOKEN')]) {
    //       bat '''
    //         git config --global credential.helper store
    //         echo https://%GITHUB_TOKEN%@github.com > %USERPROFILE%\\.git-credentials
    //         git clone https://%GITHUB_TOKEN%@github.com/mikebkt/evn-sonar-scanner.git
    //         cd evn-sonar-scanner
    //         git sparse-checkout init --cone
    //         git sparse-checkout set ry-scanner
    //       '''
    //     }
    //   }
    // }

    stage('Checkout') {
      steps {
        withCredentials([string(credentialsId: 'github-pat', variable: 'GITHUB_TOKEN')]) {
          // sh 'git config --global credential.helper store'
          // bat 'echo "https://$GITHUB_TOKEN:@github.com" > ~/.git-credentials'
          checkout([$class: 'GitSCM', branches: [[name: '*/main']],
            doGenerateSubmoduleConfigurations: false,
            extensions: [[$class: 'SparseCheckoutPaths', sparseCheckoutPaths: [[path: 'ry-scanner']]]],
            userRemoteConfigs: [[url: 'https://%GITHUB_TOKEN%@github.com/mikebkt/evn-sonar-scanner.git', credentialsId: 'github-pat']]])
        }
      }
    }
  }

  // post {
  //   always {
  //     cleanWs(
  //       cleanWhenAborted: true,
  //       cleanWhenFailure: true,
  //       cleanWhenNotBuilt: false,
  //       cleanWhenSuccess: true,
  //       deleteDirs: true
  //     )
  //   }
  // }
}
