package com.renata.testcenter.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.renata.testcenter.model.Grafico;

public interface GraficoRepository extends JpaRepository<Grafico, Long> {
	@Query("SELECT g FROM Grafico g WHERE id_projeto = :id")
	public List<Grafico> graficoByProjeto(@Param("id") Long id);
}
