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

import com.renata.testcenter.model.Membro;
import com.renata.testcenter.model.Usuario;
import com.renata.testcenter.service.MembroService;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping({"/membro"})
public class MembroController {
	
	@Autowired
	private MembroService service;
	
	@GetMapping(path ={"/{id}/{email}"})
	public Membro getMembroById(@PathVariable("id") Long id, @PathVariable("email") String email) {
		return this.service.getMembroById(id, email);
	}
	
	@PostMapping
	public Membro saveMembro(@RequestBody Membro membro) {
		return this.service.saveMembro(membro);
	}
	
	@DeleteMapping(path ={"/{id}/{email}"})
	public void deleteMembro(@PathVariable("id") Long id, @PathVariable("email") String email) {
		this.service.deleteMembro(id,email);
	}
	
	@GetMapping
	public List<Membro> getAllMembros() {
		return this.service.getAllMembros();
	}
	
	@PutMapping
	public Membro updateMembro(@RequestBody Membro membro) {
		return this.service.updateMembro(membro);
	}
	
	@GetMapping(path ={"/listarmembros/{id}"})
	public List<Usuario> listarMembros(@PathVariable("id") Long id) {
		return this.service.getListarMembros(id);
	}
}
