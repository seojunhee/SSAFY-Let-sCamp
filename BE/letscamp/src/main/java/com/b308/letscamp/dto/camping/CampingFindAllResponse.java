package com.b308.letscamp.dto.camping;

import com.b308.letscamp.entity.Camping;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CampingFindAllResponse {
	private long id;
	private String name;
	private String simple_des;
	private String description;
	private String running;
	private String category;
	private String environment;
	private String dosi;
	private String gugun;
	private String address;
	private double lon;
	private double lat;
	private String tel;
	private String homepage;
	private String reserve_url;
	private String gramp_fac;
	private String caravan_fac;
	private String running_season;
	private String running_day;
	private String sub_fac;
	private String sur_fac;
	private String exp_program;
	private String theme;
	private String animal;
	private String thumb;
	private String keywords;
	
	public CampingFindAllResponse(Camping camping) {
		this.id = camping.getId();
		this.name = camping.getName();
		this.simple_des = camping.getSimple_des();
		this.description = camping.getDescription();
		this.running = camping.getRunning();
		this.category = camping.getCategory();
		this.environment = camping.getEnvironment();
		this.dosi = camping.getDosi();
		this.gugun = camping.getGugun();
		this.address = camping.getAddress();
		this.lon = camping.getLon();
		this.lat = camping.getLat();
		this.tel = camping.getTel();
		this.homepage = camping.getHomepage();
		this.reserve_url = camping.getReserve_url();
		this.gramp_fac = camping.getGramp_fac();
		this.caravan_fac = camping.getCaravan_fac();
		this.running_season = camping.getRunning_season();
		this.running_day = camping.getRunning_day();
		this.sub_fac = camping.getSub_fac();
		this.sur_fac = camping.getSur_fac();
		this.exp_program = camping.getExp_program();
		this.theme = camping.getTheme();
		this.animal = camping.getAnimal();
		this.thumb = camping.getThumb();
		this.keywords = camping.getKeywords();
	}
}
