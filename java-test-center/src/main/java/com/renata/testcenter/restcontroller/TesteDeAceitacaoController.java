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

import com.renata.testcenter.model.CriterioDeAceitacao;
import com.renata.testcenter.model.CriterioDeAceitacao.CriterioDeAceitacaoPK;
import com.renata.testcenter.model.HistoriaDeUsuario;
import com.renata.testcenter.model.TesteDeAceitacao;
import com.renata.testcenter.model.TesteDeAceitacao.TesteDeAceitacaoPK;
import com.renata.testcenter.service.CriterioDeAceitacaoService;
import com.renata.testcenter.service.HistoriaDeUsuarioService;
import com.renata.testcenter.service.TesteDeAceitacaoService;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping({"/teste-aceitacao"})
public class TesteDeAceitacaoController {
	
	@Autowired
	private TesteDeAceitacaoService service;
	@Autowired
	private CriterioDeAceitacaoService criterioService;
	@Autowired
	private HistoriaDeUsuarioService historiaService;
	
	
	@GetMapping(path ={"/{id_historia}/{id_criterio}/{id_teste}"})
	public TesteDeAceitacao getTesteById(@PathVariable("id_historia") Long id_historia,
			                             @PathVariable("id_criterio") Long id_criterio,
			                             @PathVariable("id_teste") Long id_teste) {
		//buscando a historia de usuaria via id
		HistoriaDeUsuario historiaVar = new HistoriaDeUsuario();
		historiaVar = this.historiaService.getHistoriaDeUsuarioById(id_historia);
		//settando pk de critério para busca
		CriterioDeAceitacaoPK criterioPKVar = new CriterioDeAceitacaoPK();
		criterioPKVar.setIdLinhaCriterio(id_criterio);
		criterioPKVar.setHistoriaDeUsuario(historiaVar);
		//buscando critério de aceitação
		CriterioDeAceitacao criterioVar = new CriterioDeAceitacao();
		criterioVar = this.criterioService.getCriterioDeAceitacaoById(criterioPKVar);
		//settando pk de teste de aceitação para busca
		TesteDeAceitacaoPK testePKVar = new TesteDeAceitacaoPK();
		testePKVar.setCriterioDeAceitacao(criterioVar.getId());
		testePKVar.setIdLinhaTeste(id_teste);
		//buscando teste de aceitação
		return this.service.getTesteDeAceitacaoById(testePKVar);
	}
	
	@PostMapping
	public TesteDeAceitacao saveTeste(@RequestBody TesteDeAceitacao teste) {
		return this.saveTeste(teste);
	}
	
	@DeleteMapping(path ={"/{id_historia}/{id_criterio}/{id_teste}"})
	public void deleteTeste(@PathVariable("id_historia") Long id_historia,
			                @PathVariable("id_criterio") Long id_criterio,
			                @PathVariable("id_teste") Long id_teste) {
		//buscando a historia de usuaria via id
		HistoriaDeUsuario historiaVar = new HistoriaDeUsuario();
		historiaVar = this.historiaService.getHistoriaDeUsuarioById(id_historia);
		//settando pk de critério para busca
		CriterioDeAceitacaoPK criterioPKVar = new CriterioDeAceitacaoPK();
		criterioPKVar.setIdLinhaCriterio(id_criterio);
		criterioPKVar.setHistoriaDeUsuario(historiaVar);
		//buscando critério de aceitação
		CriterioDeAceitacao criterioVar = new CriterioDeAceitacao();
		criterioVar = this.criterioService.getCriterioDeAceitacaoById(criterioPKVar);
		//settando pk de teste de aceitação para busca
		TesteDeAceitacaoPK testePKVar = new TesteDeAceitacaoPK();
		testePKVar.setCriterioDeAceitacao(criterioVar.getId());
		testePKVar.setIdLinhaTeste(id_teste);
		//buscando teste de aceitação
		
		this.service.deleteTesteDeAceitacao(testePKVar);
	}
	
	@GetMapping
	public List<TesteDeAceitacao> getAllTestes() {
		return this.service.getAllTesteDeAceitacao();
	}
	
}
