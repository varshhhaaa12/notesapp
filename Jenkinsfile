pipeline {
    agent any

    stages {

        stage('Build Docker Image') {
            steps {
                sh '''
                echo "Setting Docker to Minikube..."
                eval $(minikube docker-env)

                echo "Building Docker Image..."
                docker build -t notes-app .
                '''
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                sh '''
                echo "Deploying to Kubernetes..."

                kubectl apply -f deployment.yaml
                kubectl apply -f service.yaml
                '''
            }
        }

        stage('Verify Deployment') {
            steps {
                sh '''
                echo "Checking Pods..."
                kubectl get pods

                echo "Checking Services..."
                kubectl get svc
                '''
            }
        }
    }
}
