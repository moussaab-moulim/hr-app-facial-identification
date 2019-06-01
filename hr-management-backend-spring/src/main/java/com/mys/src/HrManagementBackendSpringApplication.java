package com.mys.src;

import java.io.File;
import java.text.DateFormat;
import java.text.SimpleDateFormat;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;

import com.mys.src.dao.EmployeeRepository;
import com.mys.src.data.SampleDataJson;
import com.mys.src.entities.Employee;
import com.mys.src.entities.Gender;

@SpringBootApplication
public class HrManagementBackendSpringApplication implements CommandLineRunner {

	@Autowired
	private EmployeeRepository employeeRepository;
	
	// configure rest to show ids
	@Autowired 
	private RepositoryRestConfiguration restConfiguration;
	
	public static void main(String[] args) {
		SpringApplication.run(HrManagementBackendSpringApplication.class, args);
		
	}

	@Override
	public void run(String... args) throws Exception {
		// show ids
		restConfiguration.exposeIdsFor(Employee.class);
		
		// uncomment the following code to populate your database with sample users from json file in resources
		
		String fileName = "static/sampleData/data.json";
		
		ClassLoader classLoader = ClassLoader.getSystemClassLoader();
		 
		
		File file = new File(classLoader.getResource(fileName).getFile());
		SampleDataJson dataJson= new SampleDataJson(file);
		dataJson.employeesData(employeeRepository);
		
		
		
		employeeRepository.findAll().forEach(e-> System.out.println(e.toString()));
		
		
	}

}
