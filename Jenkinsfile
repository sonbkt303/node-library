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

    stage('Checkout') {
      steps {
        withCredentials([string(credentialsId: 'github-pat', variable: 'GITHUB_TOKEN')]) {
          bat '''
            git config --global credential.helper store
            echo https://%GITHUB_TOKEN%@github.com > %USERPROFILE%\\.git-credentials
            git clone https://github.com/mikebkt/evn-sonar-scanner.git
            cd evn-sonar-scanner
            git sparse-checkout init --cone
            git sparse-checkout set ry-scanner
          '''
        }
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
        deleteDirs: true
      )
    }
  }
}
