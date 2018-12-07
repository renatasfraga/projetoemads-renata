package com.renata.testcenter.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.renata.testcenter.model.HistoriaDeUsuario;

public interface HistoriaDeUsuarioRepository extends JpaRepository<HistoriaDeUsuario, Long> {

	@Query("SELECT h FROM HistoriaDeUsuario h WHERE h.projeto.id = :id order by h.id asc")
	public List<HistoriaDeUsuario> historiaDeUsuarioByProjeto(@Param("id") Long id); 
	
	@Query("SELECT h FROM HistoriaDeUsuario h where h.projeto.id = :id and h.titulo LIKE concat(:titulo, '%') order by h.id asc")
	public List<HistoriaDeUsuario> historiaDeUsuarioPorNome(@Param("id") Long id,
															@Param("titulo") String nome); 
}
