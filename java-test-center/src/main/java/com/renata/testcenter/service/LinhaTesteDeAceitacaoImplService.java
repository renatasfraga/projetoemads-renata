package com.renata.testcenter.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.renata.testcenter.model.LinhaTesteDeAceitacao;
import com.renata.testcenter.model.LinhaTesteDeAceitacao.LinhaTesteDeAceitacaoPK;
import com.renata.testcenter.repository.LinhaTesteDeAceitacaoRepository;

@Service
public class LinhaTesteDeAceitacaoImplService implements LinhaTesteDeAceitacaoService {
	
	@Autowired
	private LinhaTesteDeAceitacaoRepository repository;
	@Override
	public LinhaTesteDeAceitacao getLinhaTesteDeAceitacaoById(LinhaTesteDeAceitacaoPK id) {
		return repository.findOne(id);
	}

	@Override
	public void saveLinhaTesteDeAceitacao(LinhaTesteDeAceitacao linhaTesteDeAceitacao) {
		repository.save(linhaTesteDeAceitacao);
	}

	@Override
	public void updateLinhaTesteDeAceitacao(LinhaTesteDeAceitacao linhaTesteDeAceitacao) {
		repository.save(linhaTesteDeAceitacao);
	}

	@Override
	public void deleteLinhaTesteDeAceitacao(LinhaTesteDeAceitacaoPK id) {
		repository.delete(id);
	}

	@Override
	public List<LinhaTesteDeAceitacao> getAllLinhaTesteDeAceitacao() {
		return repository.findAll();
	}

}
