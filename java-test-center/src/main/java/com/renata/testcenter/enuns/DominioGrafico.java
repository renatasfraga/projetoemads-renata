package com.renata.testcenter.enuns;

public enum DominioGrafico {

	PIE("PIE","Pizza"),
	HORIZONTAL_BAR("HORIZONTAL_BAR","Barra Horizontal"),
	LINE("LINE","Linha"),
	BAR("BAR","Barra Vertical");
	
	private String value;
	private String description;
	
	private DominioGrafico(String value, String description) {
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
