pipeline {

    agent any

    stages {

        stage('Build Backend') {
            steps {
                dir('backend') {
                    sh 'docker build -t ankita2626/flipkart-backend:v1 .'
                }
            }
        }

        stage('Build Frontend') {
            steps {
                dir('frontend') {
                    sh 'docker build -t ankita2626/flipkart-frontend:v1 .'
                }
            }
        }

        stage('Push Backend Image') {
            steps {
                sh 'docker push ankita2626/flipkart-backend:v1'
            }
        }

        stage('Push Frontend Image') {
            steps {
                sh 'docker push ankita2626/flipkart-frontend:v1'
            }
        }

    }
}