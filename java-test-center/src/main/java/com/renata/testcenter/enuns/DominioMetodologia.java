package com.renata.testcenter.enuns;

public enum DominioMetodologia {

	S("S","Scrum"),
	XP("XP","Xtreming Programing"),
	A("A","Agile"),
	T("T","Tradicional");
	
	private String value;
	private String description;
	
	private DominioMetodologia(String value, String description) {
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
