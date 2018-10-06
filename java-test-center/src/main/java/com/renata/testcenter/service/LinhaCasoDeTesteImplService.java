package com.renata.testcenter.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.renata.testcenter.model.LinhaCasoDeTeste;
import com.renata.testcenter.model.LinhaCasoDeTeste.LinhaCasoDeTestePK;
import com.renata.testcenter.repository.LinhaCasoDeTesteRepository;

@Service
public class LinhaCasoDeTesteImplService implements LinhaCasoDeTesteService {

	@Autowired
	private LinhaCasoDeTesteRepository repository;
	
	@Override
	public LinhaCasoDeTeste getLinhaCasoDeTesteById(LinhaCasoDeTestePK id) {
		return repository.findOne(id);
	}

	@Override
	public void saveLinhaCasoDeTeste(LinhaCasoDeTeste linhaCasoDeTeste) {
		repository.save(linhaCasoDeTeste);
	}

	@Override
	public void updateLinhaCasoDeTeste(LinhaCasoDeTeste linhaCasoDeTeste) {
		repository.save(linhaCasoDeTeste);
	}

	@Override
	public void deleteLinhaCasoDeTeste(LinhaCasoDeTestePK id) {
		repository.delete(id);
	}

	@Override
	public List<LinhaCasoDeTeste> getAllLinhaCasoDeTestes() {
		return repository.findAll();
	}
	
}
