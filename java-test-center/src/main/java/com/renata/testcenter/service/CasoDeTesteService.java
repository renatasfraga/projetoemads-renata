package com.renata.testcenter.service;

import java.util.List;

import com.renata.testcenter.model.CasoDeTeste;

public interface CasoDeTesteService {
	 public abstract CasoDeTeste getCasoDeTesteById(Long id);
	 public abstract void saveCasoDeTeste(CasoDeTeste casoDeTeste);
	 public abstract void updateCasoDeTeste(CasoDeTeste casoDeTeste);
	 public abstract void deleteCasoDeTeste(Long id);
	 public abstract List<CasoDeTeste> getAllCasoDeTestes();
}
