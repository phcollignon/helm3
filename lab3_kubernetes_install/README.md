# PluralSight Packaging applications with Helm for Kubernetes
 
Please follow instructions in module : Installing a Local Kubernetes Cluster with Helm

Here bellow are the commands to be launched :

## Docker installation check
docker version

## Minikube installation
```
curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
sudo install minikube-linux-amd64 /usr/local/bin/minikube
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
```
curl -o kubectl https://storage.googleapis.com/kubernetes-release/release/v1.20.2/bin/linux/amd64/kubectl
chmod +x kubectl
sudo mv kubectl /usr/local/bin/
kubectl version --short
minikube status
```


