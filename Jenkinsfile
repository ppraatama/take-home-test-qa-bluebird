pipeline {
    agent any

    tools {
        nodejs 'NodeJS'
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'master', url: 'https://github.com/ppraatama/take-home-test-qa-bluebird.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    sh 'npm install'
                }
            }
        }

        stage('Update Dependencies') {
            steps {
                script {
                    sh 'npm update'
                }
            }
        }

        stage('Run Jest Tests') {
            steps {
                script {
                    sh 'npm test'
                }
            }
        }

        stage('Archive Test Results') {
            steps {
                script{
                    junit '**/test-reports/*.xml'
                } 
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}