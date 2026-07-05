output "resource_group_name" {
  value = data.azurerm_resource_group.rg.name
}

output "acr_login_server" {
  value = data.azurerm_container_registry.acr.login_server
}

output "vm_public_ip" {
  value = azurerm_public_ip.publicip.ip_address
}