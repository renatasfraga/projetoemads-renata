package com.renata.testcenter.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.renata.testcenter.model.Defeito;
import com.renata.testcenter.repository.DefeitoRepository;

@Service
public class DefeitoService {
	
	@Autowired
	private DefeitoRepository repository;
	
	public Defeito getDefeitoById(Long id) {
		return this.repository.getOne(id);
	}
	
	public Defeito saveDefeito(Defeito defeito) {
		return this.repository.save(defeito);
	}
	
	public void deleteDefeito(Long id) {
		this.repository.deleteById(id);
	}
	
	public List<Defeito> getAllDefeitos() {
		return this.repository.findAll();
	}
	
	public List<Defeito> getDefeitoByProjeto(Long id) {
		return this.repository.defeitosByProjeto(id);
	}
	
	public Defeito updateDefeito(Defeito defeito) {
		if(defeito.getId() != null) {
			return this.repository.saveAndFlush(defeito);
		}
		return null;
	}
}
