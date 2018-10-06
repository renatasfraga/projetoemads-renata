package com.renata.testcenter.service;

import java.util.List;

import com.renata.testcenter.model.LinhaCasoDeTeste;
import com.renata.testcenter.model.LinhaCasoDeTeste.LinhaCasoDeTestePK;

public interface LinhaCasoDeTesteService {

     public abstract LinhaCasoDeTeste getLinhaCasoDeTesteById(LinhaCasoDeTestePK id);
	 public abstract void saveLinhaCasoDeTeste(LinhaCasoDeTeste linhaCasoDeTeste);
	 public abstract void updateLinhaCasoDeTeste(LinhaCasoDeTeste linhaCasoDeTeste);
	 public abstract void deleteLinhaCasoDeTeste(LinhaCasoDeTestePK id);
	 public abstract List<LinhaCasoDeTeste> getAllLinhaCasoDeTestes();
}
