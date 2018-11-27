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
		return this.repository.save(testeDeAceitacao);
	}

	public void deleteTesteDeAceitacao(TesteDeAceitacaoPK id) {
		this.repository.deleteById(id);
	}

	public List<TesteDeAceitacao> getAllTesteDeAceitacao() {
		return this.repository.findAll();
	}

}
