pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        build(wait: true, job: 'Build', propagate: true, waitForStart: true, quietPeriod: 2)
        sh 'echo "Hello world"'
        waitUntil(initialRecurrencePeriod: 3, quiet: true) {
          sh 'echo \'waiting\''
        }

      }
    }

  }
  environment {
    dev = 'dev'
  }
}