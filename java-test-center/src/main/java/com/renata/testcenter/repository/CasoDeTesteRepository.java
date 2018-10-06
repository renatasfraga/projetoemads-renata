package com.renata.testcenter.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.renata.testcenter.model.CasoDeTeste;

public interface CasoDeTesteRepository extends JpaRepository<CasoDeTeste, Long> {

}
