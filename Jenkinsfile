pipeline {

    agent any

    stages {

        stage('Build Backend') {

            steps {

                dir('backend') {

                    bat 'docker build -t flipkart-backend .'

                }

            }

        }

        stage('Build Frontend') {

            steps {

                dir('frontend') {

                    bat 'docker build -t flipkart-frontend .'

                }

            }

        }

    }

}