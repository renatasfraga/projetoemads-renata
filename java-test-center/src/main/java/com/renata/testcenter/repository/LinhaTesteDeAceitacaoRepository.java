package com.renata.testcenter.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.renata.testcenter.model.LinhaTesteDeAceitacao;
import com.renata.testcenter.model.LinhaTesteDeAceitacao.LinhaTesteDeAceitacaoPK;

public interface LinhaTesteDeAceitacaoRepository extends JpaRepository<LinhaTesteDeAceitacao, LinhaTesteDeAceitacaoPK> {

}
