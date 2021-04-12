package com.cda.todolife.security;

public enum RoleEnum {
	ADMIN(1,"ADMIN"), USER(2,"USER");
	
	private final int id;
	private final String label;
	
	private RoleEnum(int id, String label) {
		this.id = id;
		this.label = label;
	}

	public int getId() {
		return id;
	}

	public String getLabel() {
		return label;
	}
}
