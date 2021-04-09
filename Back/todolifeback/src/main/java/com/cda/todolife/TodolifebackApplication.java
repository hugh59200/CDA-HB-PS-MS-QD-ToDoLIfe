package com.cda.todolife;

import org.modelmapper.ModelMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class TodolifebackApplication {

	public static void main(String[] args) {
		SpringApplication.run(TodolifebackApplication.class, args);
	}
	
	
	@Bean
	public ModelMapper modelMapper() {
		return new ModelMapper();
	}
	
//	@Bean
//	public Docket api() {
//	     return new Docket(DocumentationType.SWAGGER_2)
//	         .select()
//	         .apis(RequestHandlerSelectors.basePackage("com.cda.todolife.controller"))
//	         .paths(PathSelectors.any())
//	         .build();
//	 }

}
