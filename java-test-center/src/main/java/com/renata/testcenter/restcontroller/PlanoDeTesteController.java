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

import com.renata.testcenter.model.PlanoDeTeste;
import com.renata.testcenter.service.PlanoDeTesteService;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping({"/plano-de-teste"})
public class PlanoDeTesteController {
	
	@Autowired
	private PlanoDeTesteService service;
	
	@GetMapping(path ={"/{id}"})
	public PlanoDeTeste getPlanoDeTesteById(@PathVariable("id") Long id) {
		return this.service.getPlanoDeTesteById(id);
	}
	
	@PostMapping
	public PlanoDeTeste savePlanoDeTeste(@RequestBody PlanoDeTeste PlanoDeTeste) {
		return this.service.savePlanoDeTeste(PlanoDeTeste);
	}
	
	@DeleteMapping(path ={"/{id}"})
	public void deletePlanoDeTeste(@PathVariable("id") Long id) {
		this.service.deletePlanoDeTeste(id);
	}
	
	@GetMapping
	public List<PlanoDeTeste> getAllPlanoDeTestes() {
		return this.service.getAllPlanoDeTestes();
	}
	
	@GetMapping(path ={"/byprojeto/{id}"})
	public List<PlanoDeTeste> getPlanoDeTesteByProjeto(@PathVariable("id") Long id) {
		return this.service.getPlanoDeTesteByProjeto(id);
	}

	@GetMapping(path = {"/{id_projeto}/{titulo}"})
	public List<PlanoDeTeste> getPlanoByTitulo(@PathVariable("id") Long id,
			                                   @PathVariable("titulo") String titulo) {
		return this.service.getPlanoByTitulo(id, titulo);
	}
	
	@PutMapping
	public PlanoDeTeste updatePlanoDeTeste(@RequestBody PlanoDeTeste plano) {
		return this.service.updatePlanoDeTeste(plano);
	}
}
