package com.renata.testcenter.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.renata.testcenter.model.CriterioDeAceitacao;
import com.renata.testcenter.model.CriterioDeAceitacao.CriterioDeAceitacaoPK;

public interface CriterioDeAceitacaoRepository extends JpaRepository<CriterioDeAceitacao, CriterioDeAceitacaoPK> {

	@Query("Select c from CriterioDeAceitacao c inner join HistoriaDeUsuario h on c.id.historiaDeUsuario = h and "
			+ " c.id.historiaDeUsuario.id = :idHistoria and "
			+ " h.projeto.id = :idProjeto ")
	public List<CriterioDeAceitacao> getCriterioByProjetoHistoria(@Param("idHistoria") Long idHistoria,
			                                                      @Param("idProjeto") Long idProjeto);

	@Query("Select c from CriterioDeAceitacao c inner join HistoriaDeUsuario h on h.id = c.id.historiaDeUsuario.id "
			+ " and h.projeto.id = :idProjeto order by c.idOrdenacao asc")
	public List<CriterioDeAceitacao> getCriterioByProjeto(@Param("idProjeto") Long idProjeto);

}
