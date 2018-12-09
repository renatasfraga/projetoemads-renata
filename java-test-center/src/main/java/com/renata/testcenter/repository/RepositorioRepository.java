package com.renata.testcenter.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.renata.testcenter.model.Repositorio;

public interface RepositorioRepository extends JpaRepository<Repositorio, Long> {
	
	@Query("SELECT r FROM Repositorio r WHERE r.projeto.id = :id order by r.id asc")
	public List<Repositorio> repositorioByProjeto(@Param("id") Long id); 
	
	@Query("Select r FROM Repositorio r WHERE r.projeto.id = :id and r.titulo LIKE concat(:titulo, '%')")
	public List<Repositorio> repositorioByTitulo(@Param("id") Long id, @Param("titulo") String titulo);
}
 