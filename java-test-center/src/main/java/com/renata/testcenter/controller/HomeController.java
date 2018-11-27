package com.renata.testcenter.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

import com.renata.testcenter.service.ProjetoService;

@Controller
public class HomeController {

	@Autowired
	private ProjetoService projetoService;
	
	@GetMapping("/")
	public ModelAndView home() {
		ModelAndView mv = new ModelAndView("/home");
		mv.addObject("projetos", projetoService.getAllProjetos());
		
		return mv;
	}
	
	
}
