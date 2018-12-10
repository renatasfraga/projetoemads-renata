package com.renata.testcenter.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.renata.testcenter.model.Grafico;
import com.renata.testcenter.model.GraficoAux;

public interface GraficoRepository extends JpaRepository<Grafico, Long> {
	@Query("SELECT g FROM Grafico g WHERE g.projeto.id = :id order by g.id asc")
	public List<Grafico> graficoByProjeto(@Param("id") Long id);
	
	@Query("Select g from Grafico g where g.projeto.id = :id and g.usuarioCriador.email = :email order by g.id asc")
	public List<Grafico> pesquisarPorCriador(@Param("id") Long id, @Param("email") String email);
	
	
	@Query("select new com.renata.testcenter.model.GraficoAux(count(d),d.nivelDeCriticidade) from Defeito d " + 
			       "where d.projeto.id = :id " + 
			       "group by (d.nivelDeCriticidade) order by d.nivelDeCriticidade asc")
	public List<GraficoAux> gerarGraficoCriticidade(@Param("id") Long id);
	
	@Query("Select new com.renata.testcenter.model.GraficoAux(count(h), h.parecerQualidade) from HistoriaDeUsuario h where h.projeto.id = :idProjeto "
			+ "group by(h.parecerQualidade) order by h.parecerQualidade asc")
	public List<GraficoAux> graficoPorQualidade(@Param("idProjeto") Long id);

	
	@Query("Select new com.renata.testcenter.model.GraficoAux(count(d), d.dataCriacao) from Defeito d"
			+ " where d.projeto.id = :idProjeto group by d.dataCriacao order by d.dataCriacao asc")
	public List<GraficoAux> graficoBugsPorMes(@Param("idProjeto") Long id);
	
	@Query("Select new com.renata.testcenter.model.GraficoAux(count(d), d.nivelDeCriticidade) from Defeito d where "
			+ "d.usuarioCriador.email = :email and d.projeto.id = :idProjeto group by(d.nivelDeCriticidade) order by d.nivelDeCriticidade asc")
	public List<GraficoAux> graficoPorCriador(@Param("email") String email, 
											  @Param("idProjeto") Long id);
	
	
	
	@Query("Select new com.renata.testcenter.model.GraficoAux(count(d), d.nivelDeCriticidade) from Defeito d"
			+ " where d.usuarioAtribuido.email = :email and d.projeto.id = :idProjeto group by(d.nivelDeCriticidade)"
			+ " order by d.nivelDeCriticidade asc")
	public List<GraficoAux> graficoPorAtribuido(@Param("email") String email,
												@Param("idProjeto") Long id);
	
	
	@Query("Select new com.renata.testcenter.model.GraficoAux(count(d), d.status) from Defeito d"
			+ " where d.projeto.id = :idProjeto group by (d.status) order by d.status asc")
	public List<GraficoAux> graficoPorStatus(@Param("idProjeto") Long id);
	
} 
