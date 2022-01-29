terraform {
  required_providers {
    google = {
      source = "hashicorp/google"
      version = ">= 3.3"
    }
  }
}

provider "google" {
  # Replace `<PROJECT_ID>` with your gcp project id
  project = "<PROJECT_ID>"
  region  = "us-central1"
}

# Enables the Cloud Run API
resource "google_project_service" "run_api" {
  service = "run.googleapis.com"

  disable_on_destroy = true
}

# Create the Cloud Run service
resource "google_cloud_run_service" "default" {
  name     = "wechatter-api"
  location = "us-central1"

  template {
    spec {
      containers {
            # Replace `<PROJECT_ID>` with your gcp project id
        image = "gcr.io/<PROJECT_ID>/wechatter-api:1.0.0-prod"
      }
    }
  }

  traffic {
    percent         = 100
    latest_revision = true
  }
  # Waits for the Cloud Run API to be enabled
  depends_on = [google_project_service.run_api]
}

# Allow unauthenticated users to invoke the service
data "google_iam_policy" "noauth" {
  binding {
    role = "roles/run.invoker"
    members = [
      "allUsers",
    ]
  }
}

# Allow unauthenticated users to invoke the service
resource "google_cloud_run_service_iam_policy" "noauth" {
  location    = google_cloud_run_service.default.location
  project     = google_cloud_run_service.default.project
  service     = google_cloud_run_service.default.name

  policy_data = data.google_iam_policy.noauth.policy_data
}

# Display the service URL
output "service_url" {
  value = google_cloud_run_service.run_service.status[0].url
}