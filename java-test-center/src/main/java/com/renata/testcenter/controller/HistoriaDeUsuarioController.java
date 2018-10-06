package com.renata.testcenter.controller;

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

import com.renata.testcenter.model.HistoriaDeUsuario;
import com.renata.testcenter.service.HistoriaDeUsuarioService;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping({"/userstory"})
public class HistoriaDeUsuarioController {

	@Autowired
	private HistoriaDeUsuarioService service;
	
	@GetMapping(path ={"/{id}"})
	public HistoriaDeUsuario getHistoriaDeUsuarioById(@PathVariable("id") Long id) {
		return service.getHistoriaDeUsuarioById(id);
	}
	
	@PostMapping
	public void saveHistoriaDeUsuario(@RequestBody HistoriaDeUsuario historiaDeUsuario) {
		 service.saveHistoriaDeUsuario(historiaDeUsuario);
	}
	
	@PutMapping
	public void updateHistoriaDeUsuario(@RequestBody HistoriaDeUsuario historiaDeUsuario) {
		service.updateHistoriaDeUsuario(historiaDeUsuario);
	}
			
	@DeleteMapping
	public void deleteHistoriaDeUsuario(@PathVariable("id") Long id) {
		service.deleteHistoriaDeUsuario(id);
	}
	
	@GetMapping
	public List<HistoriaDeUsuario> getAllHistoriaDeUsuarios() {
		return service.getAllHistoriaDeUsuarios();
	}
}

