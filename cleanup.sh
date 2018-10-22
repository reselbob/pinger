#!/usr/bin/env bash

kubectl delete service pinger
kubectl delete deployment pinger

kubectl config unset users.user_name

kubectl config unset contexts.context_name

kubectl config unset clusters.cluster_name