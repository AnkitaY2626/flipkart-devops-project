pipeline {

    agent any

    stages {

        stage('Build Backend') {

            steps {

                dir('backend') {

                    sh 'docker build -t flipkart-backend .'

                }

            }

        }

        stage('Build Frontend') {

            steps {

                dir('frontend') {

                    sh 'docker build -t flipkart-frontend .'

                }

            }

        }

    }

}