package com.renata.testcenter.restcontroller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.renata.testcenter.model.Defeito;
import com.renata.testcenter.service.DefeitoService;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping({"/defeito"})
public class DefeitoController {
	
	@Autowired
	private DefeitoService service;
	
	@GetMapping(path ={"/{id}"})
	public Defeito getDefeitoById(@PathVariable("id") Long id) {
		return this.service.getDefeitoById(id);
	}
	
	@PostMapping
	public Defeito saveDefeito(@RequestBody Defeito defeito) {
		return this.service.saveDefeito(defeito);
	}
	
	@DeleteMapping(path ={"/{id}"})
	public void deleteDefeito(@PathVariable("id") Long id) {
		this.service.deleteDefeito(id);
	}
	
	@GetMapping
	public List<Defeito> getAllDefeitos() {
		return this.service.getAllDefeitos();
	}
	
	@GetMapping(path ={"/byprojeto/{id}"})
	public List<Defeito> getDefeitoByProjeto(@PathVariable("id") Long id) {
		return this.service.getDefeitoByProjeto(id);
	}
	
	@PutMapping
	public Defeito updateDefeito(@RequestBody Defeito defeito) {
		return this.updateDefeito(defeito);
	}
}
