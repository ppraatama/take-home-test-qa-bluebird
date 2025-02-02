pipeline {
    agent any

    tools {
        // Menyebutkan NodeJS yang telah dikonfigurasi
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
                    // Menjalankan npm install untuk menginstal dependensi
                    sh 'npm install'
                }
            }
        }

        stage('Run Jest Tests') {
            steps {
                script {
                    // Menjalankan npm test untuk menjalankan Jest
                    sh 'npm test'
                }
            }
        }
        
        stage('Archive Test Results') {
            steps {
                junit 'test-reports/test-report.xml'  // Menyimpan hasil tes jika ada
            }
        }
    }

    post {
        always {
            cleanWs()  // Membersihkan workspace setelah pipeline selesai
        }
    }
}
