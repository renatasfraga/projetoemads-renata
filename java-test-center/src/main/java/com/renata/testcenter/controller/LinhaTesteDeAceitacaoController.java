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


import com.renata.testcenter.model.LinhaTesteDeAceitacao;
import com.renata.testcenter.model.LinhaTesteDeAceitacao.LinhaTesteDeAceitacaoPK;
import com.renata.testcenter.service.LinhaTesteDeAceitacaoService;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping({"/lineaccepttest"})
public class LinhaTesteDeAceitacaoController {

	@Autowired
	private LinhaTesteDeAceitacaoService service;
	
	@GetMapping(path ={"/{idlinha}/{idcriteriodeaceitacao}"})
	public LinhaTesteDeAceitacao getLinhaTesteDeAceitacaoById(@PathVariable("idlinha") Long idLinha,
															  @PathVariable("idcriteriodeaceitacao") Long idCriterioDeAceitacao) {
		LinhaTesteDeAceitacaoPK linhaTesteDeAceitacaoPK = new LinhaTesteDeAceitacaoPK();
		linhaTesteDeAceitacaoPK.setIdLinhaTesteAceitacao(idLinha);
		linhaTesteDeAceitacaoPK.setLinhaCriterioDeAceitacao(idCriterioDeAceitacao);
		return service.getLinhaTesteDeAceitacaoById(linhaTesteDeAceitacaoPK);
	}
	
	@PostMapping
	public void saveLinhaTesteDeAceitacao(@RequestBody LinhaTesteDeAceitacao linhaTesteDeAceitacao) {
		 service.saveLinhaTesteDeAceitacao(linhaTesteDeAceitacao);
	}
	
	@PutMapping
	public void updateLinhaTesteDeAceitacao(@RequestBody LinhaTesteDeAceitacao linhaTesteDeAceitacao) {
		service.updateLinhaTesteDeAceitacao(linhaTesteDeAceitacao);
	}
			
	@DeleteMapping
	public void deleteLinhaTesteDeAceitacao(@PathVariable("idlinha") Long idLinha,
			  						        @PathVariable("idcriteriodeaceitacao") Long idCriterioDeAceitacao) {
		LinhaTesteDeAceitacaoPK linhaTesteDeAceitacaoPK = new LinhaTesteDeAceitacaoPK();
		linhaTesteDeAceitacaoPK.setIdLinhaTesteAceitacao(idLinha);
		linhaTesteDeAceitacaoPK.setLinhaCriterioDeAceitacao(idCriterioDeAceitacao);
		service.deleteLinhaTesteDeAceitacao(linhaTesteDeAceitacaoPK);
	}
	
	@GetMapping
	public List<LinhaTesteDeAceitacao> getAllLinhaTesteDeAceitacaos() {
		return service.getAllLinhaTesteDeAceitacao();
	}
}
