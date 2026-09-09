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
                bat 'docker run --rm myapp'
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
