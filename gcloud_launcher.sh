#!/usr/bin/env bash

gcloud config set project $PROJECT_ID
gcloud auth activate-service-account $GOOGLE_ACCOUNT --key-file client-secret.json
gcloud container clusters get-credentials \"pingercluster\" --zone=us-central1-a