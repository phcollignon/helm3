# PluralSight Packaging applications with Helm for Kubernetes
 
Please follow instruction in module : Installing  Kubernetes and Helm

Here bellow are the commands to be launched :

## Minikube installation
```
curl -o minikube https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
chmod +x minikube
sudo mv minikube /usr/local/bin/minikube
minikube version
minikube start
```

## Minikube configuration
```
minikube addons enable ingress
minikube ip
sudo vi /etc/hosts
```

## Kubectl installation
curl -LO https://storage.googleapis.com/kubernetes-release/release/
v1.17.0/bin/linux/amd64/kubectl
chmod +x kubectl
sudo mv kubectl /usr/local/bin/
kubectl version --short
minikube status




