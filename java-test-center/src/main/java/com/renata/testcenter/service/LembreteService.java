package com.renata.testcenter.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.renata.testcenter.model.Lembrete;
import com.renata.testcenter.repository.LembreteRepository;

@Service
public class LembreteService {

	@Autowired
	private LembreteRepository repository;
	
	public Lembrete getLembreteById(Long id) {
		return this.repository.getOne(id);
	}

	public Lembrete saveLembrete(Lembrete lembrete) {
		return this.repository.save(lembrete);
	}
	
	public void deleteLembrete(Long id) {
		this.repository.deleteById(id);
	}

	public List<Lembrete> getAllLembrete() {
		return this.repository.findAll();
	}
}
