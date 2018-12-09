package com.renata.testcenter.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.renata.testcenter.model.Grafico;
import com.renata.testcenter.model.GraficoAux;
import com.renata.testcenter.repository.GraficoRepository;

@Service
public class GraficoService {

	@Autowired
	private GraficoRepository repository;
	
	public Grafico getGraficoById(Long id) {
		return this.repository.getOne(id);
	}
	
	public Grafico saveGrafico(Grafico grafico) {
		return this.repository.save(grafico);
	}
	
	public void deleteGrafico(Long id) {
		this.repository.deleteById(id);
	}
	
	public List<Grafico> getAllGraficos() {
		return this.repository.findAll();
	}
	
	public List<Grafico> getGraficosByProjeto(Long id) {
		return this.repository.graficoByProjeto(id);
	}
	
	public List<GraficoAux> gerarGraficoCriticidade(Long id) {
		return this.repository.gerarGraficoCriticidade(id);
	}
	
	public List<GraficoAux> graficoPorQualidade(Long id) {
		return this.repository.graficoPorQualidade(id);
	}
	
	public List<GraficoAux> graficoBugsPorMes(Long id) {
		return this.repository.graficoBugsPorMes(id);
	}
	
	public List<GraficoAux> graficoPorCriador(String email, Long id) {
		return this.repository.graficoPorCriador(email, id);
	}
	
	public List<GraficoAux> graficoPorAtribuido(String email, Long id) {
		return this.repository.graficoPorAtribuido(email, id);
	}
	
	public List<GraficoAux> graficoPorStatus(Long id) {
		return this.repository.graficoPorStatus(id);
	}
	
	public List<Grafico> pesquisarPorCriador(Long id, String email) {
		return this.repository.pesquisarPorCriador(id, email);
	}
	
	public Grafico updateGrafico(Grafico grafico) {
		if(grafico.getId() != null) {
			return this.repository.saveAndFlush(grafico);
		}
		return null;
	}
}
