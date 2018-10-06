package com.renata.testcenter.service;

import java.util.List;

import com.renata.testcenter.model.LinhaCriterioDeAceitacao;
import com.renata.testcenter.model.LinhaCriterioDeAceitacao.LinhaCriterioDeAceitacaoPK;

public interface LinhaCriterioDeAceitacaoService {
	 public abstract LinhaCriterioDeAceitacao getLinhaCriterioDeAceitacaoById(LinhaCriterioDeAceitacaoPK id);
	 public abstract void saveLinhaCriterioDeAceitacao(LinhaCriterioDeAceitacao linhaCriterioDeAceitacao);
	 public abstract void updateLinhaCriterioDeAceitacao(LinhaCriterioDeAceitacao linhaCriterioDeAceitacao);
	 public abstract void deleteLinhaCriterioDeAceitacao(LinhaCriterioDeAceitacaoPK id);
	 public abstract List<LinhaCriterioDeAceitacao> getAllLinhaCriterioDeAceitacao();
}
