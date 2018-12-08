package com.renata.testcenter.restcontroller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.renata.testcenter.model.Grafico;
import com.renata.testcenter.model.GraficoAux;
import com.renata.testcenter.service.GraficoService;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping({"/grafico"})
public class GraficoController {

	@Autowired
	private GraficoService service;
	
	@GetMapping(path ={"/{id}"})
	public Grafico getGraficoById(@PathVariable("id") Long id) {
		return this.service.getGraficoById(id);
	}
	
	@PostMapping
	public Grafico saveGrafico(@RequestBody Grafico grafico) {
		return this.service.saveGrafico(grafico);
	}
	
	@DeleteMapping(path ={"/{id}"})
	public void deleteGrafico(@PathVariable("id") Long id) {
		this.service.deleteGrafico(id);
	}
	
	@GetMapping
	public List<Grafico> getAllGraficos() {
		return this.service.getAllGraficos();
	}
	
	@GetMapping(path ={"/byprojeto/{id}"})
	public List<Grafico> getGraficoByProjeto(@PathVariable("id") Long id) {
		return this.service.getGraficosByProjeto(id);
	}
	
	@GetMapping(path = {"/criticidade/{id}"})
	public List<GraficoAux> gerarGraficoCriticidade(@PathVariable("id") Long id) {
		return this.service.gerarGraficoCriticidade(id);
	}
	
	@GetMapping(path = {"/qualidade/{id}"})
	public List<GraficoAux> gerarGraficoPorQualidade(@PathVariable("id") Long id) {
		return this.service.graficoPorQualidade(id);
	}
	
	@GetMapping(path = {"/bugspormes/{id}"})
	public List<GraficoAux> gerarGraficoBugsPorMes(@PathVariable("id") Long id) {
		return this.service.graficoBugsPorMes(id);
	}
	
	@GetMapping(path = {"/criador/{email}/{id}"})
	public List<GraficoAux> gerarGraficoPorCriador(@PathVariable("email") String email, 
												   @PathVariable("id") Long id) {
		return this.service.graficoPorCriador(email, id);
	}
	
	@GetMapping(path= {"/atribuido/{email}/{id}"})
	public List<GraficoAux> gerarGraficoPorAtribuido(@PathVariable("email") String email,
													 @PathVariable("id") Long id) {
		return this.service.graficoPorAtribuido(email, id);
	}
	
	@GetMapping(path= {"/status/{id}"})
	public List<GraficoAux> gerarGraficoPorStatus(@PathVariable("id") Long id) {
		return this.service.graficoPorStatus(id);
	}
	
	@GetMapping(path = {"/pesquisar/{id}/{email}"})
	public List<Grafico> pesquisarPorCriador(@PathVariable("id") Long id,
											 @PathVariable("email") String email) {
		return this.service.pesquisarPorCriador(id, email);
	}
} 
