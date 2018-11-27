package com.renata.testcenter.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.renata.testcenter.model.Projeto;
import com.renata.testcenter.repository.ProjetoRepository;

@Service
public class ProjetoService {
	
	@Autowired
	private ProjetoRepository repository;
	
	public Projeto getProjetoById(Long id) {
		return this.repository.getOne(id);
	}

	public Projeto saveProjeto(Projeto projeto) {
		return this.repository.save(projeto);
	}
	
	public void deleteProjeto(Long id) {
		this.repository.deleteById(id);
	}

	public List<Projeto> getAllProjetos() {
		return this.repository.findAll();
	}
}
