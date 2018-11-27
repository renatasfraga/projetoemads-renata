package com.renata.testcenter.enuns;

public enum DominioParecer {
	I ("I","Insatisfeito"),
	P ("P","Parcialmente Satisfeito"),
	S ("S","Satisfeito");
	
	private String value;
	private String description;
	
	private DominioParecer(String value, String description) {
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
