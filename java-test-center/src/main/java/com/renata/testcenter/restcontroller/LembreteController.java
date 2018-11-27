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

import com.renata.testcenter.model.Lembrete;
import com.renata.testcenter.service.LembreteService;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping({"/lembrete"})
public class LembreteController {

	@Autowired
	private LembreteService service;
	
	@GetMapping(path ={"/{id}"})
	public Lembrete getLembreteById(@PathVariable("id") Long id) {
		return this.service.getLembreteById(id);
	}
	
	@PostMapping
	public Lembrete saveLembrete(@RequestBody Lembrete lembrete) {
		return this.service.saveLembrete(lembrete);
	}
	
	@DeleteMapping(path ={"/{id}"})
	public void deleteLembrete(@PathVariable("id") Long id) {
		this.service.deleteLembrete(id);
	}
	
	@GetMapping
	public List<Lembrete> getAllLembretes() {
		return this.service.getAllLembrete();
	}
	
	@GetMapping(path ={"/byprojeto/{id}"})
	public List<Lembrete> getLembreteByProjeto(@PathVariable("id") Long id) {
		return this.service.getLembreteByProjeto(id);
	}
}
