package com.renata.testcenter.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.renata.testcenter.model.Repositorio;
import com.renata.testcenter.repository.RepositorioRepository;

@Service
public class RepositorioService {

	@Autowired
	private RepositorioRepository repository;
	
	public Repositorio getRepositorioById(Long id) {
		return this.repository.getOne(id);
	}

	public Repositorio saveRepositorio(Repositorio repositorio) {
		return this.repository.save(repositorio);
	}
	
	public void deleteRepositorio(Long id) {
		this.repository.deleteById(id);
	}

	public List<Repositorio> getAllRepositorios() {
		return this.repository.findAll();
	}
	
	public List<Repositorio> getRepositorioByProjeto(Long id) {
		return this.repository.repositorioByProjeto(id);
	}
}
