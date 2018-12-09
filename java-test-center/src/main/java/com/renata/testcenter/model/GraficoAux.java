package com.renata.testcenter.model;


public class GraficoAux {

	public Long valor;

	public String label;
	
	public String data;
	
	
	public GraficoAux(Long valor) {
		this.valor = valor;
	}
	
	public GraficoAux(Long valor, String label) {
		this.valor = valor;
		this.label = label;
	}
	
	
	public GraficoAux(Long valor, String label, String data) {
		this.valor = valor;
		this.label = label;
		this.data = data;
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

	public String getData() {
		return data;
	}
	public void setData(String data) {
		this.data = data;
	}
	
}
