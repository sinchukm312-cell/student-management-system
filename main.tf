# ✅ Existing Resource Group
data "azurerm_resource_group" "rg" {
  name = "student-devops-rg"
}

# ✅ Existing ACR
data "azurerm_container_registry" "acr" {
  name                = "myacr19"
  resource_group_name = "my-rg"
}

