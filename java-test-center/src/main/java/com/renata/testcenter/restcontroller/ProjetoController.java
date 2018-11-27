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

import com.renata.testcenter.model.Projeto;
import com.renata.testcenter.service.ProjetoService;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping({"/projeto"})
public class ProjetoController {
	
	@Autowired
	private ProjetoService service;
	
	@GetMapping(path ={"/{id}"})
	public Projeto getProjetoById(@PathVariable("id") Long id) {
		return this.service.getProjetoById(id);
	}
	
	@PostMapping
	public Projeto saveProjeto(@RequestBody Projeto Projeto) {
		return this.service.saveProjeto(Projeto);
	}
	
	@DeleteMapping(path ={"/{id}"})
	public void deleteProjeto(@PathVariable("id") Long id) {
		this.service.deleteProjeto(id);
	}
	
	@GetMapping
	public List<Projeto> getAllProjetos() {
		return this.service.getAllProjetos();
	}

}
