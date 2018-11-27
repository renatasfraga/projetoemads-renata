package com.renata.testcenter.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.renata.testcenter.model.CriterioDeAceitacao;
import com.renata.testcenter.model.CriterioDeAceitacao.CriterioDeAceitacaoPK;

public interface CriterioDeAceitacaoRepository extends JpaRepository<CriterioDeAceitacao, CriterioDeAceitacaoPK> {

}
