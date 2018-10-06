package com.renata.testcenter.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.renata.testcenter.model.LinhaCasoDeTeste;
import com.renata.testcenter.model.LinhaCasoDeTeste.LinhaCasoDeTestePK;

public interface LinhaCasoDeTesteRepository extends JpaRepository<LinhaCasoDeTeste, LinhaCasoDeTestePK> {

}
