package com.renata.testcenter.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.renata.testcenter.model.Grafico;
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
	
}
