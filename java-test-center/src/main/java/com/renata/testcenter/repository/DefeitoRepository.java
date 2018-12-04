package com.renata.testcenter.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.renata.testcenter.model.Defeito;

public interface DefeitoRepository extends JpaRepository<Defeito, Long> {

	@Query("Select d from Defeito d where d.projeto.id = :id")
	public List<Defeito> defeitosByProjeto(@Param("id") Long id);
}
