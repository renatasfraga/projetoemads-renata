package com.renata.testcenter.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.renata.testcenter.model.PlanoDeTeste;

public interface PlanoDeTesteRepository extends JpaRepository<PlanoDeTeste, Long> {

	@Query("SELECT p FROM PlanoDeTeste p WHERE p.projeto.id = :id")
	public List<PlanoDeTeste> planoDeTesteByProjeto(@Param("id") Long id);
	
	@Query("SELECT p FROM PlanoDeTeste p where p.projeto.id = :id and p.titulo LIKE lower(concat('%', :titulo, '%'))")
	public List<PlanoDeTeste> getPlanoByTitulo(@Param("id") Long id,
			                                   @Param("titulo") String titulo);  
}
