output "vm_public_ip" {
  value = "20.196.138.196"
}

output "acr_login_server" {
  value = data.azurerm_container_registry.acr.login_server
}