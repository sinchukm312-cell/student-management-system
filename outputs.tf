output "resource_group_name" {
  value = data.azurerm_resource_group.rg.name
}

output "acr_login_server" {
  value = data.azurerm_container_registry.acr.login_server
}

output "vm_public_ip" {
  value = data.azurerm_linux_virtual_machine.vm.public_ip_address
}