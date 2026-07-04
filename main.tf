resource "azurerm_resource_group" "rg" {
  name     = "student-devops-rg"   # ✅ MUST match existing state
  location = var.location
}

resource "azurerm_container_registry" "acr" {
  name                = "myacr19devops123"   # ✅ globally unique
  resource_group_name = azurerm_resource_group.rg.name
  location            = var.location
  sku                 = "Basic"
  admin_enabled       = true
}