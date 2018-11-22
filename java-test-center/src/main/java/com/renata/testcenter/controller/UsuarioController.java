package com.renata.testcenter.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.renata.testcenter.model.Usuario;
import com.renata.testcenter.service.UsuarioService;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping({"/usuario"})
public class UsuarioController {

	@Autowired
	private UsuarioService service;
	
	@GetMapping(path ={"/{email}"})
	public Usuario getUsuarioById(@PathVariable("email") String email) {
		return service.getUsuarioById(email);
	}
	
	@PostMapping
	public void saveUsuario(@RequestBody Usuario usuario) {
		 this.service.saveUsuario(usuario);
	}
	
	@PutMapping
	public void updateUsuario(@RequestBody Usuario usuario) {
		this.service.updateUsuario(usuario);
	}
			
	@DeleteMapping
	public void deleteUsuario(@PathVariable("email") String email) {
		this.service.deleteUsuario(email);
	}
	
	@GetMapping
	public List<Usuario> getAllUsuarios() {
		return service.getAllUsuarios();
	}
	
	@GetMapping(path = {"/login/{email}/{senha}"})
	public Usuario getLogin(@PathVariable("email") String email,
							@PathVariable("senha") String senha) {
		return service.getLogin(email, senha);
	}
}
