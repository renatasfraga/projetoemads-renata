package com.renata.testcenter.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.renata.testcenter.model.Membro;
import com.renata.testcenter.model.Projeto;
import com.renata.testcenter.model.Usuario;
import com.renata.testcenter.model.Membro.MembroPK;
import com.renata.testcenter.repository.MembroRepository;

@Service
public class MembroService {
	
	@Autowired
	private MembroRepository repository;
	@Autowired
	private UsuarioService usuarioService;
	@Autowired
	private ProjetoService projetoService;
	
	public Membro getMembroById(Long id, String email) {
		Usuario varUser = this.usuarioService.getUsuarioById(email);
		Projeto varProjeto = this.projetoService.getProjetoById(id);
		MembroPK membroPK = new MembroPK(varProjeto,varUser);
		return this.repository.getOne(membroPK);
	}

	public Membro saveMembro(Membro membro) {
		return this.repository.save(membro);
	}
	
	public Membro updateMembro(Membro membro) {
		if(membro.getId().getProjeto() != null) {
			return this.repository.saveAndFlush(membro);
		}
		return null;
	}
	
	public void deleteMembro(Long id,String email) {
		Usuario varUser = this.usuarioService.getUsuarioById(email);
		Projeto varProjeto = this.projetoService.getProjetoById(id);
		MembroPK membroPK = new MembroPK(varProjeto,varUser);
		this.repository.deleteById(membroPK);
	}

	public List<Membro> getAllMembros() {
		return this.repository.findAll();
	}
	
	public List<Usuario> getListarMembros(Long id) {
		return this.repository.getListarMembros(id);
	}
	
}
