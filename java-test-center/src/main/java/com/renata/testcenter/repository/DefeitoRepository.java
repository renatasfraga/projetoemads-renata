package com.renata.testcenter.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.renata.testcenter.model.Defeito;

public interface DefeitoRepository extends JpaRepository<Defeito, Long> {

	@Query("Select d from Defeito d where d.projeto.id = :id order by d.id asc")
	public List<Defeito> defeitosByProjeto(@Param("id") Long id);
	
	@Query("Select d from Defeito d where d.nivelDeCriticidade = :nivel and d.projeto.id = :id and d.titulo like CONCAT(:titulo,'%') order by d.id asc")
	public List<Defeito> defeitoPorNivelTitulo(@Param("id") Long id,
			                                   @Param("nivel") String nivelCriticidade,
			                                   @Param("titulo") String titulo);
	
	@Query("Select d from Defeito d where d.nivelDeCriticidade = :nivel and d.projeto.id = :id order by d.id asc")
	public List<Defeito> defeitoByNivel(@Param("id") Long id,
									    @Param("nivel") String nivelCriticidade);
	
	@Query("Select d from Defeito d where d.projeto.id = :id and d.titulo like CONCAT(:titulo,'%') order by d.id asc")
	public List<Defeito> defeitoByTitulo(@Param("id") Long id,
										 @Param("titulo") String titulo);
	
}
