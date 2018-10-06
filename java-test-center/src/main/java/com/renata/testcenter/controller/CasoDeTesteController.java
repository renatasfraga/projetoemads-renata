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

import com.renata.testcenter.model.CasoDeTeste;
import com.renata.testcenter.service.CasoDeTesteService;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping({"/testcase"})
public class CasoDeTesteController {

	@Autowired
	private CasoDeTesteService service;
	
	@GetMapping(path ={"/{id}"})
	public CasoDeTeste getCasoDeTesteById(@PathVariable("id") Long id) {
		return service.getCasoDeTesteById(id);
	}
	
	@PostMapping
	public void saveCasoDeTeste(@RequestBody CasoDeTeste casoDeTeste) {
		 service.saveCasoDeTeste(casoDeTeste);
	}
	
	@PutMapping
	public void updateCasoDeTeste(@RequestBody CasoDeTeste casoDeTeste) {
		service.updateCasoDeTeste(casoDeTeste);
	}
			
	@DeleteMapping
	public void deleteCasoDeTeste(@PathVariable("id") Long id) {
		service.deleteCasoDeTeste(id);
	}
	
	@GetMapping
	public List<CasoDeTeste> getAllCasoDeTestes() {
		return service.getAllCasoDeTestes();
	}
}

