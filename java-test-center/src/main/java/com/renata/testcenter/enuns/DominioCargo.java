package com.renata.testcenter.enuns;

public enum DominioCargo {

	T ("T","Testador") ,
	AT ("AT","Analista de Testes"),
	AQ ("AQ","Analista de Qualidade"),
	QA ("QA","Quality Assurence"),
	D ("D","Desenvolvedor"),
	PO ("PO","Product Owner"),
	AS ("AS","Analista de Sistemas"),
	AN ("AN","Analista de Negócios"),
	GP ("GP","Gerente de Projetos"),
	L ("L","Líder"),
	SM("SM","Scrum Master");
	
	private String value;
	private String description;
	
	private DominioCargo(String value, String description) {
		this.value = value;
		this.description = description;
	}

	public String getValue() {
		return value;
	}

	public String getDescription() {
		return description;
	}
}
