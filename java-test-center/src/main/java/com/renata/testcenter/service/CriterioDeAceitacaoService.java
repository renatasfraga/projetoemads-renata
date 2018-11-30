package com.renata.testcenter.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.renata.testcenter.model.CriterioDeAceitacao;
import com.renata.testcenter.model.CriterioDeAceitacao.CriterioDeAceitacaoPK;
import com.renata.testcenter.repository.CriterioDeAceitacaoRepository;

@Service
public class CriterioDeAceitacaoService {

	@Autowired
	private CriterioDeAceitacaoRepository repository;
	
	public CriterioDeAceitacao getCriterioDeAceitacaoById(CriterioDeAceitacaoPK id) {
		return repository.getOne(id);
	}

	public CriterioDeAceitacao saveCriterioDeAceitacao(CriterioDeAceitacao criterioDeAceitacao) {
		return this.repository.save(criterioDeAceitacao);
	}

	public void deleteCriterioDeAceitacao(CriterioDeAceitacaoPK id) {
		this.repository.deleteById(id);
	}

	public List<CriterioDeAceitacao> getAllCriterioDeAceitacao() {
		return this.repository.findAll();
	}
	
	public List<CriterioDeAceitacao> getCriterioByProjetoHistoria(Long idHistoria,
			                                                      Long idProjeto) {
		return this.repository.getCriterioByProjetoHistoria(idHistoria, idProjeto);
	}
	
	public List<CriterioDeAceitacao> getCriterioByProjeto(Long idProjeto) {
		return this.repository.getCriterioByProjeto(idProjeto);
	}
	
}
