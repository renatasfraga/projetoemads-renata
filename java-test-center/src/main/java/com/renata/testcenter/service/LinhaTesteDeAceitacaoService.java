package com.renata.testcenter.service;

import java.util.List;

import com.renata.testcenter.model.LinhaTesteDeAceitacao;
import com.renata.testcenter.model.LinhaTesteDeAceitacao.LinhaTesteDeAceitacaoPK;

public interface LinhaTesteDeAceitacaoService {
	 public abstract LinhaTesteDeAceitacao getLinhaTesteDeAceitacaoById(LinhaTesteDeAceitacaoPK id);
	 public abstract void saveLinhaTesteDeAceitacao(LinhaTesteDeAceitacao linhaTesteDeAceitacao);
	 public abstract void updateLinhaTesteDeAceitacao(LinhaTesteDeAceitacao linhaTesteDeAceitacao);
	 public abstract void deleteLinhaTesteDeAceitacao(LinhaTesteDeAceitacaoPK id);
	 public abstract List<LinhaTesteDeAceitacao> getAllLinhaTesteDeAceitacao();
}
