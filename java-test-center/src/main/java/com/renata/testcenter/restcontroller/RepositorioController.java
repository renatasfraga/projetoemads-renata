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

import com.renata.testcenter.model.Repositorio;
import com.renata.testcenter.service.RepositorioService;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping({"/repositorio"})
public class RepositorioController {

	@Autowired
	private RepositorioService service;
	
	@GetMapping(path ={"/{id}"})
	public Repositorio getRepositorioById(@PathVariable("id") Long id) {
		return this.service.getRepositorioById(id);
	}
	
	@PostMapping
	public Repositorio saveRepositorio(@RequestBody Repositorio Repositorio) {
		return this.service.saveRepositorio(Repositorio);
	}
	
	@DeleteMapping(path ={"/{id}"})
	public void deleteRepositorio(@PathVariable("id") Long id) {
		this.service.deleteRepositorio(id);
	}
	
	@GetMapping
	public List<Repositorio> getAllRepositorios() {
		return this.service.getAllRepositorios();
	}
	
	@GetMapping(path ={"/byprojeto/{id}"})
	public List<Repositorio> getRepositorioByProjeto(@PathVariable("id") Long id) {
		return this.service.getRepositorioByProjeto(id);
	}
}
