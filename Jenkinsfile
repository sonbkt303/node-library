pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        build(wait: true, job: 'Build', propagate: true, waitForStart: true, quietPeriod: 2)
        sh 'echo "Hello world"'
      }
    }

  }
  environment {
    dev = 'dev'
  }
}