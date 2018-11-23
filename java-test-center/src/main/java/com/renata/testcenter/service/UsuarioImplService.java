package com.renata.testcenter.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.renata.testcenter.model.Usuario;
import com.renata.testcenter.repository.UsuarioRepository;

@Service
public class UsuarioImplService implements UsuarioService {

	@Autowired
	private UsuarioRepository repository;
	
	@Override
	public Usuario getUsuarioById(String email) {
		return repository.findOne(email);
	}

	@Override
	public void saveUsuario(Usuario usuario) {
		repository.save(usuario);
	}

	@Override
	public void updateUsuario(Usuario usuario) {
		repository.save(usuario);
	}

	@Override
	public void deleteUsuario(String email) {
		repository.delete(email);
	}

	@Override
	public List<Usuario> getAllUsuarios() {
		return repository.findAll();
	}
	
	@Override
	public Usuario getLogin(String email, String senha) {
		return repository.getLogin(email, senha);
	}
	
	@Override
	public List<Usuario> getUsuarioByNome(String nome) {
		return repository.getUsuarioByNome(nome);
	}
}
