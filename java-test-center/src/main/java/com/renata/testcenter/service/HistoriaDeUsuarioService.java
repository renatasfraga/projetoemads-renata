package com.renata.testcenter.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.renata.testcenter.model.HistoriaDeUsuario;
import com.renata.testcenter.repository.HistoriaDeUsuarioRepository;

@Service
public class HistoriaDeUsuarioService  {

	@Autowired
	private HistoriaDeUsuarioRepository repository;
	
	public HistoriaDeUsuario getHistoriaDeUsuarioById(Long id) {
		return repository.getOne(id);
	}

	public HistoriaDeUsuario saveHistoriaDeUsuario(HistoriaDeUsuario historiaDeUsuario) {
		return this.repository.save(historiaDeUsuario);
	}

	public void updateHistoriaDeUsuario(HistoriaDeUsuario historiaDeUsuario) {
		repository.save(historiaDeUsuario);
	}

	public void deleteHistoriaDeUsuario(Long id) {
		repository.deleteById(id);
	}

	public List<HistoriaDeUsuario> getAllHistoriaDeUsuarios() {
		return repository.findAll();
	}
	
	public List<HistoriaDeUsuario> getHistoriaDeUsuarioByProjeto(Long id) {
		return repository.historiaDeUsuarioByProjeto(id);
	}

}
