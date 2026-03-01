
pipeline {
    agent any

    environment {
        HOME = '/home/user'
    }

    stages {

        stage('Start Minikube') {
            steps {
                sh 'minikube start'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh '''
                eval $(minikube docker-env)
                docker build -t notes-app .
                '''
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                sh '''
                kubectl apply -f deployment.yaml
                kubectl apply -f service.yaml
                '''
            }
        }

        stage('Verify') {
            steps {
                sh 'kubectl get pods'
                sh 'kubectl get svc'
            }
        }
    }
}
