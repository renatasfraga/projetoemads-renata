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
import com.renata.testcenter.model.LinhaCriterioDeAceitacao;
import com.renata.testcenter.model.LinhaCriterioDeAceitacao.LinhaCriterioDeAceitacaoPK;

import com.renata.testcenter.service.HistoriaDeUsuarioService;
import com.renata.testcenter.service.LinhaCriterioDeAceitacaoService;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping({"/lineacceptcriteria"})
public class LinhaCriterioDeAceitacaoController {

	@Autowired
	private LinhaCriterioDeAceitacaoService service;
	private HistoriaDeUsuarioService historiaDeUsuarioService;
	
	@GetMapping(path ={"/{idlinha}/{idhistoriausuario}"})
	public LinhaCriterioDeAceitacao getLinhaCriterioDeAceitacaoById(@PathVariable("idlinha") Long idLinha,
															 	    @PathVariable("idhistoriadeusuario") Long idHistoriaDeUsuario) {
		HistoriaDeUsuario historiaDeUsuario = historiaDeUsuarioService.getHistoriaDeUsuarioById(idHistoriaDeUsuario);
		LinhaCriterioDeAceitacaoPK linhaCriterioDeAceitacaoPK = new LinhaCriterioDeAceitacaoPK();
		linhaCriterioDeAceitacaoPK.setHistoriaDeUsuario(historiaDeUsuario);
		linhaCriterioDeAceitacaoPK.setIdLinha(idLinha);
		return service.getLinhaCriterioDeAceitacaoById(linhaCriterioDeAceitacaoPK);
	}
	
	@PostMapping
	public void saveLinhaCriterioDeAceitacao(@RequestBody LinhaCriterioDeAceitacao linhaCriterioDeAceitacao) {
		 service.saveLinhaCriterioDeAceitacao(linhaCriterioDeAceitacao);
	}
	
	@PutMapping
	public void updateLinhaCriterioDeAceitacao(@RequestBody LinhaCriterioDeAceitacao linhaCriterioDeAceitacao) {
		service.updateLinhaCriterioDeAceitacao(linhaCriterioDeAceitacao);
	}
			
	@DeleteMapping
	public void deleteLinhaCriterioDeAceitacao(@PathVariable("idlinha") Long idLinha,
											   @PathVariable("idhistoriadeusuario") Long idHistoriaDeUsuario) {
		HistoriaDeUsuario historiaDeUsuario = historiaDeUsuarioService.getHistoriaDeUsuarioById(idHistoriaDeUsuario);
		LinhaCriterioDeAceitacaoPK linhaCriterioDeAceitacaoPK = new LinhaCriterioDeAceitacaoPK();
		linhaCriterioDeAceitacaoPK.setHistoriaDeUsuario(historiaDeUsuario);
		linhaCriterioDeAceitacaoPK.setIdLinha(idLinha);
		service.deleteLinhaCriterioDeAceitacao(linhaCriterioDeAceitacaoPK);
	}
	
	@GetMapping
	public List<LinhaCriterioDeAceitacao> getAllLinhaCriterioDeAceitacaos() {
		return service.getAllLinhaCriterioDeAceitacao();
	}
}

