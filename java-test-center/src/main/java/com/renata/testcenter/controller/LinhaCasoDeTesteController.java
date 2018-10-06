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
import com.renata.testcenter.model.LinhaCasoDeTeste;
import com.renata.testcenter.model.LinhaCasoDeTeste.LinhaCasoDeTestePK;
import com.renata.testcenter.service.CasoDeTesteService;
import com.renata.testcenter.service.LinhaCasoDeTesteService;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping({"/linetestcase"})
public class LinhaCasoDeTesteController {

	@Autowired
	private LinhaCasoDeTesteService service;
	private CasoDeTesteService casoDeTesteService;
	
	@GetMapping(path ={"/{idlinha}/{idcasodeteste}"})
	public LinhaCasoDeTeste getLinhaCasoDeTesteById(@PathVariable("idlinha") Long idLinha,
													@PathVariable("idcasodeteste") Long idCasoDeTeste) {
		CasoDeTeste casoDeTeste = casoDeTesteService.getCasoDeTesteById(idCasoDeTeste);
		LinhaCasoDeTestePK linhaCasoDeTestePK = new LinhaCasoDeTestePK();
		linhaCasoDeTestePK.setCasoDeTeste(casoDeTeste);
		linhaCasoDeTestePK.setIdLinha(idLinha);
		return service.getLinhaCasoDeTesteById(linhaCasoDeTestePK);
	}
	
	@PostMapping
	public void saveLinhaCasoDeTeste(@RequestBody LinhaCasoDeTeste linhaCasoDeTeste) {
		 service.saveLinhaCasoDeTeste(linhaCasoDeTeste);
	}
	
	@PutMapping
	public void updateLinhaCasoDeTeste(@RequestBody LinhaCasoDeTeste linhaCasoDeTeste) {
		service.updateLinhaCasoDeTeste(linhaCasoDeTeste);
	}
			
	@DeleteMapping
	public void deleteLinhaCasoDeTeste(@PathVariable("idlinha") Long idLinha,
									   @PathVariable("idcasodeteste") Long idCasoDeTeste) {
		CasoDeTeste casoDeTeste = casoDeTesteService.getCasoDeTesteById(idCasoDeTeste);
		LinhaCasoDeTestePK linhaCasoDeTestePK = new LinhaCasoDeTestePK();
		linhaCasoDeTestePK.setCasoDeTeste(casoDeTeste);
		linhaCasoDeTestePK.setIdLinha(idLinha);
		service.deleteLinhaCasoDeTeste(linhaCasoDeTestePK);
	}
	
	@GetMapping
	public List<LinhaCasoDeTeste> getAllLinhaCasoDeTestes() {
		return service.getAllLinhaCasoDeTestes();
	}
}
