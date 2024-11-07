pipeline {
  agent {
    label 'windows' // Corrected syntax
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
        withCredentials([usernamePassword(credentialsId: 'evn-scanner-credential', usernameVariable: 'GIT_USERNAME', passwordVariable: 'GIT_PASSWORD')]) {
          checkout([$class: 'GitSCM', branches: [[name: '*/main']],
            doGenerateSubmoduleConfigurations: false,
            extensions: [[$class: 'SparseCheckoutPaths', sparseCheckoutPaths: [[path: 'ry-scanner']]]],
            userRemoteConfigs: [[url: 'https://github.com/mikebkt/evn-sonar-scanner', credentialsId: 'evn-scanner-credential', credentials: [[username: GIT_USERNAME, password: GIT_PASSWORD]]]]])
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
        cleanWhenUnstable: true,
        deleteDirs: true,
        notFailBuild: true,
        disableDeferredWipeout: true
      )
    }
  }
}

