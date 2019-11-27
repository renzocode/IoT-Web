package com.iotserver.lucumapi.config;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;

@Configuration
@EnableWebMvc
@ComponentScan(basePackages="com.iotserver.lucumapi")
public class MvcConfig implements WebMvcConfigurer{

	 @Override
	 public void addResourceHandlers(ResourceHandlerRegistry registry){
	 	registry
	 	.addResourceHandler("/resources/**")
	 	.addResourceLocations("/resources/");
	 }

	 
}