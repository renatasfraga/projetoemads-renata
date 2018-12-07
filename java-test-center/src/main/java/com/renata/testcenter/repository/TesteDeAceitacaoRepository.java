package com.renata.testcenter.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.renata.testcenter.model.TesteDeAceitacao;
import com.renata.testcenter.model.TesteDeAceitacao.TesteDeAceitacaoPK;

public interface TesteDeAceitacaoRepository extends JpaRepository<TesteDeAceitacao, TesteDeAceitacaoPK> {

	@Query("Select (MAX(t.id.idLinhaTeste) + 1) FROM TesteDeAceitacao t")
	public Long gerarIdLinhaTeste();
	
	@Query("Select t from TesteDeAceitacao t inner join CriterioDeAceitacao c on "
			+ " t.id.criterioDeAceitacao.idLinhaCriterio = c.id.idLinhaCriterio inner join "
			+ " HistoriaDeUsuario h on c.id.historiaDeUsuario.id = h.id and "
			+ " t.id.criterioDeAceitacao.historiaDeUsuario.id = h.id and h.projeto.id = :idProjeto"
			+ " order by t.idOrdenacao asc")
	public List<TesteDeAceitacao> getTesteDeAceitacaoByProjeto(@Param("idProjeto") Long id);
	
	
	@Query("Select t from TesteDeAceitacao t inner join CriterioDeAceitacao c on "
			+ " t.id.criterioDeAceitacao.idLinhaCriterio = c.id.idLinhaCriterio inner join "
			+ " HistoriaDeUsuario h on c.id.historiaDeUsuario.id = h.id and "
			+ " t.id.criterioDeAceitacao.historiaDeUsuario.id = h.id and h.projeto.id = :idProjeto "
			+ " and h.id = :idHistoria and c.id.idLinhaCriterio = :idLinhaCriterio"
			+ " order by t.idOrdenacao asc")
	public List<TesteDeAceitacao> getTesteByProjetoCriterioHistoria(@Param("idHistoria") Long idHistoria,
																	@Param("idLinhaCriterio") Long idLinhaCriterio,
			                                                        @Param("idProjeto") Long idProjeto);

	@Query("Select t from TesteDeAceitacao t where t.id.criterioDeAceitacao.historiaDeUsuario.id = :idHistoria"
			+ " order by t.idOrdenacao asc")
	public List<TesteDeAceitacao> getTesteByHistoria(@Param("idHistoria") Long idHistoria);

	@Query("Select t from TesteDeAceitacao t where t.id.criterioDeAceitacao.idLinhaCriterio = :idLinhaCriteiro"
			+ " order by t.idOrdenacao asc")
	public List<TesteDeAceitacao> getTesteByCriterio(@Param("idLinhaCriteiro") Long idLinhaCriterio);
}
