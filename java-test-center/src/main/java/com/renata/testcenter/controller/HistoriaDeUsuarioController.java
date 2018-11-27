package com.renata.testcenter.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.servlet.ModelAndView;

import com.renata.testcenter.model.HistoriaDeUsuario;
import com.renata.testcenter.service.HistoriaDeUsuarioService;

@Controller
public class HistoriaDeUsuarioController {

	@Autowired
	private HistoriaDeUsuarioService historiaDeUsuarioService;
	
	@GetMapping("/historia-de-usuario")
	public ModelAndView historiaDeUsuarioList() {
		ModelAndView mv = new ModelAndView("/historia_de_usuario/historia-listar");
		mv.addObject("historias", historiaDeUsuarioService.getAllHistoriaDeUsuarios());
		
		return mv;
	}
	
	@GetMapping("/addHistoria")
	public ModelAndView addHistoria(HistoriaDeUsuario historiaDeUsuario) {
		
		ModelAndView mv = new ModelAndView("/historia-editar");
		mv.addObject("historia", historiaDeUsuario);
		
		return mv;
	}
	
	
	@GetMapping("/editHistoria/{id}")
	public ModelAndView editHistoria(@PathVariable("id") Long id) {
		return addHistoria(historiaDeUsuarioService.getHistoriaDeUsuarioById(id));
	}
	
	@GetMapping("/deleteHistoria/{id}")
	public ModelAndView delete(@PathVariable("id") Long id) {
		this.historiaDeUsuarioService.deleteHistoriaDeUsuario(id);
		return historiaDeUsuarioList();
	}
}
