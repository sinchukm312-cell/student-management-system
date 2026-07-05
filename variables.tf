variable "location" {
  description = "Azure region"
  type        = string
  default     = "westus2"
}

variable "resource_group_name" {
  description = "Resource Group Name"
  type        = string
  default     = "student-devops-rg"
}

variable "acr_name" {
  description = "Azure Container Registry Name"
  type        = string
  default     = "myacrdevops12345"
}