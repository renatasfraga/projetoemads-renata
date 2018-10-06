package com.renata.testcenter.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.renata.testcenter.model.CasoDeTeste;
import com.renata.testcenter.repository.CasoDeTesteRepository;

@Service
public class CasoDeTesteImplService implements CasoDeTesteService {

	@Autowired
	private CasoDeTesteRepository repository;
	
	@Override
	public CasoDeTeste getCasoDeTesteById(Long id) {
		return repository.findOne(id);
	}

	@Override
	public void saveCasoDeTeste(CasoDeTeste casoDeTeste) {
    	repository.save(casoDeTeste);
	}

	@Override
	public void updateCasoDeTeste(CasoDeTeste casoDeTeste) {
    	repository.save(casoDeTeste);
	}

	@Override
	public void deleteCasoDeTeste(Long id) {
    	repository.delete(id);
	}

	@Override
	public List<CasoDeTeste> getAllCasoDeTestes() {
		return repository.findAll();
	}

}
