package com.renata.testcenter.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.renata.testcenter.model.HistoriaDeUsuario;
import com.renata.testcenter.repository.HistoriaDeUsuarioRepository;

@Service
public class HistoriaDeUsuarioImplService implements HistoriaDeUsuarioService {

	@Autowired
	private HistoriaDeUsuarioRepository repository;
	
	@Override
	public HistoriaDeUsuario getHistoriaDeUsuarioById(Long id) {
		return repository.findOne(id);
	}

	@Override
	public void saveHistoriaDeUsuario(HistoriaDeUsuario historiaDeUsuario) {
		repository.save(historiaDeUsuario);
	}

	@Override
	public void updateHistoriaDeUsuario(HistoriaDeUsuario historiaDeUsuario) {
		repository.save(historiaDeUsuario);
	}

	@Override
	public void deleteHistoriaDeUsuario(Long id) {
		repository.delete(id);
	}

	@Override
	public List<HistoriaDeUsuario> getAllHistoriaDeUsuarios() {
		return repository.findAll();
	}

}
