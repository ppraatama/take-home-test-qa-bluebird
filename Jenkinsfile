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
                    sh 'npm test --ci'
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

        stage('Publish HTML Report') {
            steps {
                publishHTML([
                    allowMissing: false,
                    alwaysLinkToLastBuild: false,
                    keepAll: true,
                    reportDir: 'test-reports',
                    reportFiles: 'test-report.html',
                    reportName: 'Jest HTML Report'
                ])
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}