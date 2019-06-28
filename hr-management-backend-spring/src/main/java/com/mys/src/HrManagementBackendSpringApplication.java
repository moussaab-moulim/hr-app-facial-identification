package com.mys.src;

import java.io.File;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;

import com.mys.src.dao.EmployeeRepository;

//import com.mys.src.dao.AnsenceScheduleRepository;
import com.mys.src.data.SampleDataJson;
//import com.mys.src.entities.ASId;
//import com.mys.src.entities.AbsenceSchedule;

import com.mys.src.entities.Employee;
import com.mys.src.entities.Gender;

@SpringBootApplication
public class HrManagementBackendSpringApplication implements CommandLineRunner {

	@Autowired
	private EmployeeRepository employeeRepository;

	/*@Autowired
	private AnsenceScheduleRepository absence; */

	//@Autowired
	//private AnsenceScheduleRepository absence; 

	// configure rest to show ids
	@Autowired 
	private RepositoryRestConfiguration restConfiguration;
	
	public static void main(String[] args) {
		SpringApplication.run(HrManagementBackendSpringApplication.class, args);
		
	}

	@Override
	public void run(String... args) throws Exception {
		 //show ids
		restConfiguration.exposeIdsFor(Employee.class);

		//restConfiguration.exposeIdsFor(AbsenceSchedule.class);

		// uncomment the following code to populate your database with sample users from json file in resources
		
		String fileName = "static/sampleData/data.json";
		
		ClassLoader classLoader = ClassLoader.getSystemClassLoader();
		 
		
		File file = new File(classLoader.getResource(fileName).getFile());
		SampleDataJson dataJson= new SampleDataJson(file);
		dataJson.employeesData(employeeRepository);
	
		DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy-MM-dd");
		LocalDate now = LocalDate.now();
		System.out.println(dtf.format(now));
		DateFormat dFormat =new SimpleDateFormat("yyyy-mm-dd");

		Optional<Employee> employee = employeeRepository.findById((long) 1);
		/*
		employee.ifPresent(e -> {
			try {
				//absence.save( new AbsenceSchedule(new ASId(e,dFormat.parse(dtf.format(now))),null,null);
			} catch (ParseException e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
			}

		});*/
		
		
		employeeRepository.findAll().forEach(e-> System.out.println(e.toString()));
		//absence.findAll().forEach(e-> System.out.println(e.toString()));
		
		
	}

}
