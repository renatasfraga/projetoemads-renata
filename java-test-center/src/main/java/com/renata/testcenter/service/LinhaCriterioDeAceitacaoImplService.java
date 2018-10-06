package com.renata.testcenter.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.renata.testcenter.model.LinhaCriterioDeAceitacao;
import com.renata.testcenter.model.LinhaCriterioDeAceitacao.LinhaCriterioDeAceitacaoPK;
import com.renata.testcenter.repository.LinhaCriterioDeAceitacaoRepository;

@Service
public class LinhaCriterioDeAceitacaoImplService implements LinhaCriterioDeAceitacaoService {

	@Autowired
	private LinhaCriterioDeAceitacaoRepository repository;
	@Override
	public LinhaCriterioDeAceitacao getLinhaCriterioDeAceitacaoById(LinhaCriterioDeAceitacaoPK id) {
		return repository.findOne(id);
	}

	@Override
	public void saveLinhaCriterioDeAceitacao(LinhaCriterioDeAceitacao linhaCriterioDeAceitacao) {
		repository.save(linhaCriterioDeAceitacao);
	}

	@Override
	public void updateLinhaCriterioDeAceitacao(LinhaCriterioDeAceitacao linhaCriterioDeAceitacao) {
		repository.save(linhaCriterioDeAceitacao);
	}

	@Override
	public void deleteLinhaCriterioDeAceitacao(LinhaCriterioDeAceitacaoPK id) {
		repository.delete(id);
	}

	@Override
	public List<LinhaCriterioDeAceitacao> getAllLinhaCriterioDeAceitacao() {
		return repository.findAll();
	}

}
