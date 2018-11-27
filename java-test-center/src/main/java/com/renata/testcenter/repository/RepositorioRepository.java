package com.renata.testcenter.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.renata.testcenter.model.Repositorio;

public interface RepositorioRepository extends JpaRepository<Repositorio, Long> {
	
	@Query("SELECT r FROM Repositorio r WHERE id_projeto = :id")
	public List<Repositorio> repositorioByProjeto(@Param("id") Long id); 
	
}
