package com.renata.testcenter.enuns;

public enum Parecer {
	I("I","Insatisfeito"),
	P("P","Parcialmente Satisfeito"),
	S("S","Satisfeito");
	
	private String codigo;
	private String descricao;
	
	private Parecer(String codigo, String descricao) {
		this.codigo = codigo;
		this.descricao = descricao;
	}

	public String getCodigo() {
		return codigo;
	}

	public String getDescricao() {
		return descricao;
	}
	
}
