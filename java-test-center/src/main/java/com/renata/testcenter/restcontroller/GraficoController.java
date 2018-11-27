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
	
}
