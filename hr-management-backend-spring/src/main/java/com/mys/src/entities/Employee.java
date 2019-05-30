package com.mys.src.entities;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
@Entity
//annotions to generate constructors and getters and setters (lombok jar must be installed)
@Data @NoArgsConstructor @AllArgsConstructor @ToString
@Getter @Setter
public class Employee implements Serializable {

	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long empNo;
	@Column(length = 15)
	private String firstName;
	@Column(length = 15)
	private String lastName;
	@Temporal(TemporalType.DATE)
	private Date birthDate;
	@Column(length = 120)
	private String email;
	@Column(length = 20)	
	private String phone;
	private String photo;
	@Temporal(TemporalType.DATE)
	private Date hireDate;
	@Enumerated(EnumType.STRING)
	@Column(length = 1)
	private Gender gender;
}
