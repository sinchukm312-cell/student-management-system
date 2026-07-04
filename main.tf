resource "azurerm_resource_group" "rg" {
  name     = "my-rg-1"
  location = "centralindia"
}

resource "azurerm_container_registry" "acr" {
  name                = "myacr19devops123"
  resource_group_name = azurerm_resource_group.rg.name
  location            = azurerm_resource_group.rg.location
  sku                 = "Basic"
  admin_enabled       = true
}