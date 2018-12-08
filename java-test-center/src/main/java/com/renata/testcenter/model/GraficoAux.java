package com.renata.testcenter.model;


public class GraficoAux {

	public Long valor;

	public String label;
	
	
	
	public GraficoAux(Long valor) {
		this.valor = valor;
	}
	
	public GraficoAux(Long valor, String label) {
		this.valor = valor;
		this.label = label;
	}
	public Long getValor() {
		return valor;
	}
	public void setValor(Long valor) {
		this.valor = valor;
	}
	public String getLabel() {
		return label;
	}
	public void setLabel(String label) {
		this.label = label;
	}
}
