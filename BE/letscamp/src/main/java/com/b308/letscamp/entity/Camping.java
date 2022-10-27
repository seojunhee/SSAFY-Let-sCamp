package com.b308.letscamp.entity;

import javax.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Builder
public class Camping {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private long id;
	
	@Column(name = "name", nullable = false)
	private String name;
	
	@Column(name = "simple_des", length = 1000)
	private String simple_des;
	
	@Column(name = "description", length = 1000)
	private String description;
	
	@Column(name = "running", nullable = false)
	private String running;
	
	@Column(name = "category", nullable = false)
	private String category;
	
	@Column(name = "environment")
	private String environment;
	
	@Column(name = "dosi", nullable = false)
	private String dosi;
	
	@Column(name = "gugun", nullable = false)
	private String gugun;
	
	@Column(name = "address", nullable = false, length = 1000)
	private String address;
	
	@Column(name = "lon", nullable = false)
	private double lon;
	
	@Column(name = "lat", nullable = false)
	private double lat;
	
	@Column(name = "tel")
	private String tel;
	
	@Column(name = "homepage", length = 1000)
	private String homepage;
	
	@Column(name = "reserve_url", length = 1000)
	private String reserve_url;
	
	@Column(name = "gramp_fac", length = 1000)
	private String gramp_fac;
	
	@Column(name = "caravan_fac", length = 1000)
	private String caravan_fac;
	
	@Column(name = "running_season")
	private String running_season;
	
	@Column(name = "running_day")
	private String running_day;
	
	@Column(name = "sub_fac", length = 1000)
	private String sub_fac;
	
	@Column(name = "sur_fac", length = 1000)
	private String sur_fac;
	
	@Column(name = "exp_program")
	private String exp_program;
	
	@Column(name = "theme")
	private String theme;
	
	@Column(name = "animal", nullable = false)
	private String animal;
	
	@Column(name = "thumb", length = 1000)
	private String thumb;
	
	@Column(name = "keywords", nullable = false, length = 1000)
	private String keywords;
}
