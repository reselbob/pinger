#!/usr/bin/env bash

kubectl apply -f ./manifests/deployment.yaml
kubectl apply -f ./manifests/service.yaml

kubectl patch deployment pinger -p '{"spec":{"template":{"spec":{"containers":[{"image":"reselbob/pinger","name":"pinger","env":[{"name":"CURRENT_VERSION","value":"v2"},{"name":"SECRET_MESSAGE","value":"Kube is Cool"}]}]}}}}'

#rollback the deployment to version 1
kubectl rollout undo deployment/pinger