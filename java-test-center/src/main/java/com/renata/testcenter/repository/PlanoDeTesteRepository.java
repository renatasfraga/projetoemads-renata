package com.renata.testcenter.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.renata.testcenter.model.PlanoDeTeste;

public interface PlanoDeTesteRepository extends JpaRepository<PlanoDeTeste, Long> {

	@Query("SELECT p FROM PlanoDeTeste p WHERE id_projeto = :id")
	public List<PlanoDeTeste> planoDeTesteByProjeto(@Param("id") Long id);
}
