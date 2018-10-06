package com.renata.testcenter.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.renata.testcenter.enuns.Cargo;
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
	public List<Usuario> getUsuariosByCargo() {
		List<Usuario> usuarios = new ArrayList<Usuario>();
		
		for(Usuario usuario: getAllUsuarios()) {
			if(usuario.getFuncaoExercida().equals(Cargo.ANLTEST) 
				||	usuario.getFuncaoExercida().equals(Cargo.ANLQUAL)
				|| 	usuario.getFuncaoExercida().equals(Cargo.TEST)) {
					usuarios.add(usuario);
			}
		}
		
		return usuarios;
	}
	
}
