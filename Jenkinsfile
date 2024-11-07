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
        checkout([$class: 'GitSCM', branches: [[name: '*/main']],
          doGenerateSubmoduleConfigurations: false,
          // extensions: [[$class: 'SubmoduleOption', disableSubmodules: false,
          //               parentCredentials: true, recursiveSubmodules: true]],
          extensions: [[$class: 'SparseCheckoutPaths', sparseCheckoutPaths: [[path: 'ry-scanner']]]],
          userRemoteConfigs: [[url: 'https://github.com/mikebkt/evn-sonar-scanner', credentialsId: 'evn-scanner-credential']]])
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

