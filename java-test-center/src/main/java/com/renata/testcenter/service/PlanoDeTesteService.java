package com.renata.testcenter.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.renata.testcenter.model.PlanoDeTeste;
import com.renata.testcenter.repository.PlanoDeTesteRepository;

@Service
public class PlanoDeTesteService {

	@Autowired
	private PlanoDeTesteRepository repository;
	
	public PlanoDeTeste getPlanoDeTesteById(Long id) {
		return this.repository.getOne(id);
	}

	public PlanoDeTeste savePlanoDeTeste(PlanoDeTeste planoDeTeste) {
		return this.repository.save(planoDeTeste);
	}
	
	public void deletePlanoDeTeste(Long id) {
		this.repository.deleteById(id);
	}

	public List<PlanoDeTeste> getAllPlanoDeTestes() {
		return this.repository.findAll();
	}
	
	public List<PlanoDeTeste> getPlanoDeTesteByProjeto(Long id) {
		return this.repository.planoDeTesteByProjeto(id);
	}
	
	public List<PlanoDeTeste> getPlanoByTitulo(Long id, String titulo) {
		return this.repository.getPlanoByTitulo(id, titulo);
	}
	
	public PlanoDeTeste updatePlanoDeTeste(PlanoDeTeste plano) {
		if(plano.getId() != null) {
			return this.repository.saveAndFlush(plano);
		}
		return null;
	}
}
