package com.renata.testcenter.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.renata.testcenter.model.LinhaCriterioDeAceitacao;
import com.renata.testcenter.model.LinhaCriterioDeAceitacao.LinhaCriterioDeAceitacaoPK;

public interface LinhaCriterioDeAceitacaoRepository extends JpaRepository<LinhaCriterioDeAceitacao, LinhaCriterioDeAceitacaoPK> {

}
