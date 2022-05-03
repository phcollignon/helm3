# PluralSight Packaging applications with Helm for Kubernetes
 
Please follow instruction in module : Installing  Kubernetes and Helm

Here bellow are the commands to be launched :

## Helm installation
```
curl -LO https://get.helm.sh/helm-v3.1.1-linux-amd64.tar.gz
tar -zxvf helm-v3.1.1-linux-amd64.tar.gz
sudo mv linux-amd64/helm /usr/local/bin/helm

helm version --short
kubectl config view

helm repo add "stable" "https://charts.helm.sh/stable"

```
## Helm MySql installation demo
helm install demo-mysql stable/mysql
kubectl get all | grep mysql

## Helm cleaning
```
kubectl get all | grep demo-mysql
kubectl get secret | grep demo-mysql
helm uninstall demo-mysql
kubectl get all | grep demo-mysql
kubectl get secret | grep demo-mysql
helm env
```
