package com.renata.testcenter.restcontroller;

import java.util.List;

import javax.validation.Valid;

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

import com.renata.testcenter.model.HistoriaDeUsuario;
import com.renata.testcenter.service.HistoriaDeUsuarioService;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping({"/historia"})
public class HistoriaDeUsuarioController {

	@Autowired
	private HistoriaDeUsuarioService service;
	
	@GetMapping(path ={"/{id}"})
	public HistoriaDeUsuario getHistoriaById(@PathVariable("id") Long id) {
		return this.service.getHistoriaDeUsuarioById(id);
	}
	
	@PostMapping
	public HistoriaDeUsuario saveHistoria(@RequestBody HistoriaDeUsuario historia) {
		return this.service.saveHistoriaDeUsuario(historia);
	}
	
	@DeleteMapping(path ={"/{id}"})
	public void deleteHistoria(@PathVariable("id") Long id) {
		this.service.deleteHistoriaDeUsuario(id);
	}
	
	@GetMapping
	public List<HistoriaDeUsuario> getAllHistorias() {
		return this.service.getAllHistoriaDeUsuarios();
	}
	
	@GetMapping(path ={"/byprojeto/{id}"})
	public List<HistoriaDeUsuario> getHistoriaByProjeto(@PathVariable("id") Long id) {
		return this.service.getHistoriaDeUsuarioByProjeto(id);
	}
	
	@GetMapping(path ={"/{id}/{nome}"})
	public List<HistoriaDeUsuario> historiaDeUsuarioPorNome(@PathVariable("id") Long id,
			                                                @PathVariable("nome") String nome) {
		return this.service.historiaDeUsuarioPorNome(id, nome);
	}
	
	@PutMapping
	public HistoriaDeUsuario updateHistoria(@Valid @RequestBody HistoriaDeUsuario historia) {
		return this.service.updateHistoria(historia);
	}
}
