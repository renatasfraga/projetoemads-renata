package com.renata.testcenter.service;

import java.util.List;

import com.renata.testcenter.model.Usuario;

public interface UsuarioService {
	 public abstract Usuario getUsuarioById(String email);
	 public abstract Usuario saveUsuario(Usuario usuario);
	 public abstract Usuario updateUsuario(Usuario usuario);
	 public abstract Usuario deleteUsuario(String email);
	 public abstract List<Usuario> getAllUsuarios();
}
