package com.renata.testcenter.service;

import java.util.List;

import com.renata.testcenter.model.HistoriaDeUsuario;

public interface HistoriaDeUsuarioService {
	 public abstract HistoriaDeUsuario getHistoriaDeUsuarioById(Long id);
	 public abstract void saveHistoriaDeUsuario(HistoriaDeUsuario historiaDeUsuario);
	 public abstract void updateHistoriaDeUsuario(HistoriaDeUsuario historiaDeUsuario);
	 public abstract void deleteHistoriaDeUsuario(Long id);
	 public abstract List<HistoriaDeUsuario> getAllHistoriaDeUsuarios();
}
