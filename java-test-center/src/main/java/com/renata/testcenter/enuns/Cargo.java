package com.renata.testcenter.enuns;

public enum Cargo {

	TEST("TEST","Testador"),
	ANLTEST("ANLTEST","Analista de Testes"),
	ANLQUAL("ANLQUAL","Analista de Qualidade"),
	QA("QA","Quality Assurence"),
	DEV("DEV","Desenvolvedor"),
	PO("PO","Product Owner"),
	ANLSIS("ANLSIS","Analista de Sistemas"),
	ANLNEG("ANLNEG","Analista de Negócios"),
	GP("GP","Gerente de Projetos"),
	LID("LID","Líder");
	
	private String codigo;
	private String descricao;
	
	private Cargo(String codigo, String descricao) {
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
