package com.renata.testcenter.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.renata.testcenter.model.Lembrete;

public interface LembreteRepository extends JpaRepository<Lembrete, Long> {

	@Query("SELECT l FROM Lembrete l WHERE l.projeto.id = :id order by l.dhPostagem desc")
	public List<Lembrete> lembreteByProjeto(@Param("id") Long id);
}
