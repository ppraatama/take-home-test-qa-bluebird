pipeline {
    agent any
    
    environment {
        // Mendefinisikan Node.js dan npm yang diperlukan
        NODEJS_HOME = tool name: 'NodeJS', type: 'NodeJSInstallation'
    }

    stages {
        stage('Checkout Code') {
            steps {
                // Menarik kode dari repositori
                git branch: 'master', url: 'https://github.com/ppraatama/take-home-test-qa-bluebird.git'
            }
        }
        
        stage('Install Dependencies') {
            steps {
                // Menginstal dependencies menggunakan npm
                script {
                    sh 'npm install'
                }
            }
        }

        stage('Run Jest Tests') {
            steps {
                // Menjalankan Jest untuk melakukan pengujian
                script {
                    sh 'npm test'  // Ini akan menjalankan jest sesuai dengan script di package.json
                }
            }
        }

        stage('Archive Test Results') {
            steps {
                // Menyimpan hasil tes Jest ke Jenkins
                junit '**/test-*.xml'  // Pastikan Jest dikonfigurasi untuk menghasilkan XML results
            }
        }
    }
    
    post {
        always {
            // Hapus file build jika perlu
            cleanWs()
        }
    }
}
