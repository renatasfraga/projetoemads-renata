package com.renata.testcenter.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.renata.testcenter.model.TesteDeAceitacao;
import com.renata.testcenter.model.TesteDeAceitacao.TesteDeAceitacaoPK;

public interface TesteDeAceitacaoRepository extends JpaRepository<TesteDeAceitacao, TesteDeAceitacaoPK> {

}
