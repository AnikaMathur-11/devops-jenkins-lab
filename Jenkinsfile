pipeline {
    agent any

    stages {

        stage('Build') {
            steps {
                bat 'docker build -t myapp .'
            }
        }

        stage('Test') {
            steps {
                bat 'docker rm -f test-myapp 2>nul'
                bat 'docker run -d --name test-myapp -p 5001:5000 myapp'
                bat 'docker logs test-myapp'
                bat 'docker stop test-myapp'
                bat 'docker rm test-myapp'
            }
        }

        stage('Deploy') {
            steps {
                bat 'docker stop myapp 2>nul'
                bat 'docker rm myapp 2>nul'
                bat 'docker run -d --name myapp -p 5000:5000 myapp'
            }
        }
    }
}
