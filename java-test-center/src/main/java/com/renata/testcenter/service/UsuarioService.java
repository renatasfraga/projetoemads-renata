package com.renata.testcenter.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.renata.testcenter.model.Usuario;
import com.renata.testcenter.repository.UsuarioRepository;

@Service
public class UsuarioService {

	@Autowired
	private UsuarioRepository repository;
	
	public Usuario getUsuarioById(String email) {
		return this.repository.getOne(email);
	}

	public Usuario saveUsuario(Usuario usuario) {
		return this.repository.save(usuario);
	}
	
	public void deleteUsuario(String email) {
		this.repository.deleteById(email);
	}

	public List<Usuario> getAllUsuarios() {
		return this.repository.findAll();
	}
	
	public Usuario getLogin(String email, String senha) {
		return this.repository.getLogin(email, senha);
	}
	
	public List<Usuario> getUsuariosByProjeto(Long id){ 
		return this.repository.getUsuariosByProjeto(id);
	}
	
}
