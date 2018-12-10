package com.renata.testcenter.restcontroller;

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
		return this.service.getUsuarioById(email);
	}
	
	@PostMapping
	public Usuario saveUsuario(@RequestBody Usuario Usuario) {
		return this.service.saveUsuario(Usuario);
	}
	
	@DeleteMapping(path ={"/{email}"})
	public void deleteUsuario(@PathVariable("email") String email) {
		this.service.deleteUsuario(email);
	}
	
	@GetMapping
	public List<Usuario> getAllUsuarios() {
		return this.service.getAllUsuarios();
	}
	
	@GetMapping(path ={"/login/{email}/{senha}"})
	public Usuario getLogin(@PathVariable("email") String email,
			                @PathVariable("senha") String senha) {
		return this.service.getLogin(email, senha);
	}
	
	@GetMapping(path ={"/usuariosbyprojeto/{id}"})
	public List<Usuario> getUsuariosByProjeto(@PathVariable("id") Long id) {
		return this.service.getUsuariosByProjeto(id);
	}
	
	@PutMapping
	public Usuario updateUsuario(@RequestBody Usuario usuario) {
		return this.service.updateUsuario(usuario);
	}
	
}
