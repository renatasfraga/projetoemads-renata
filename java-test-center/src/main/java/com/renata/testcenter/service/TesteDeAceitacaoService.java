package com.renata.testcenter.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.renata.testcenter.model.TesteDeAceitacao;
import com.renata.testcenter.model.TesteDeAceitacao.TesteDeAceitacaoPK;
import com.renata.testcenter.repository.TesteDeAceitacaoRepository;

@Service
public class TesteDeAceitacaoService {
	
	@Autowired
	private TesteDeAceitacaoRepository repository;

	public TesteDeAceitacao getTesteDeAceitacaoById(TesteDeAceitacaoPK id) {
		return this.repository.getOne(id);
	}

	public TesteDeAceitacao saveTesteDeAceitacao(TesteDeAceitacao testeDeAceitacao) {
		if(this.gerarIdLinhaTeste() == null) {
			testeDeAceitacao.getId().setIdLinhaTeste(Long.valueOf(1));
		} else {
			testeDeAceitacao.getId().setIdLinhaTeste(this.repository.gerarIdLinhaTeste());
		}	
		return this.repository.save(testeDeAceitacao);
	}

	public void deleteTesteDeAceitacao(TesteDeAceitacaoPK id) {
		this.repository.deleteById(id);
	}

	public List<TesteDeAceitacao> getAllTesteDeAceitacao() {
		return this.repository.findAll();
	}

	public Long gerarIdLinhaTeste() {
		return this.repository.gerarIdLinhaTeste();
	}
	
	public List<TesteDeAceitacao> getTesteDeAceitacaoByProjeto(Long idProjeto) {
		return this.repository.getTesteDeAceitacaoByProjeto(idProjeto);
	}
	
	public List<TesteDeAceitacao> getTesteByProjetoCriterioHistoria(Long idHistoria, 
			                                                        Long idLinhaCriterio,
			                                                        Long idProjeto) {
		return this.repository.getTesteByProjetoCriterioHistoria(idHistoria, idLinhaCriterio, idProjeto);
	}
	
	public List<TesteDeAceitacao> getTesteByHistoria(Long idHistoria) {
		return this.repository.getTesteByHistoria(idHistoria);
	}
	
	public List<TesteDeAceitacao> getTesteByCriterio(Long idLinhaCriterio) {
		return this.repository.getTesteByCriterio(idLinhaCriterio);
	}
	
	public TesteDeAceitacao updateTesteDeAceitacao(TesteDeAceitacao testeDeAceitacao) {
		if(testeDeAceitacao.getId().getCriterioDeAceitacao() != null &&
		   testeDeAceitacao.getId().getCriterioDeAceitacao().getHistoriaDeUsuario() != null &&
		   testeDeAceitacao.getId().getCriterioDeAceitacao().getIdLinhaCriterio() != null) {
			return this.repository.saveAndFlush(testeDeAceitacao);
		}
		return null;
	}
	
} 

