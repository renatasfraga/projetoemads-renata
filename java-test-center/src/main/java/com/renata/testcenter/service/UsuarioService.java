package com.renata.testcenter.service;

import java.util.List;

import com.renata.testcenter.model.Usuario;

public interface UsuarioService {
	 public abstract Usuario getUsuarioById(String email);
	 public abstract void saveUsuario(Usuario usuario);
	 public abstract void updateUsuario(Usuario usuario);
	 public abstract void deleteUsuario(String email);
	 public abstract List<Usuario> getAllUsuarios();
}
