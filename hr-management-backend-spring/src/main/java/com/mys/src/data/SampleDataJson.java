package com.mys.src.data;

import java.io.File;
import java.io.FileReader;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;

import com.mys.src.dao.EmployeeRepository;
import com.mys.src.entities.Employee;
import com.mys.src.entities.Gender;

public class SampleDataJson {
	public File jsonData;
	public ArrayList<Employee> list;
	
	public SampleDataJson(File jsonData) {
		super();
		this.jsonData = jsonData;
		list = new ArrayList<>();
	}

	public void employeesData(@ Autowired EmployeeRepository employeeRepository){
		//JSON parser object to parse read file
        JSONParser jsonParser = new JSONParser();
         
        try (FileReader reader = new FileReader(jsonData))
        {
            //Read JSON file
            Object obj = jsonParser.parse(reader);
            JSONObject jsonObject = (JSONObject) obj;
            JSONArray employeeList = (JSONArray) jsonObject.get("results");
            //System.out.println(employeeList);
             
            //Iterate over employee array
            employeeList.forEach( emp -> {
				try {
					employeeRepository.save(parseEmployeeObject( (JSONObject) emp ));
					
				} catch (ParseException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			} );
 
        } catch (Exception e) {
            e.printStackTrace();}
        }
        private Employee parseEmployeeObject(JSONObject employeeObject) throws ParseException
        {
        	
        	JSONObject name = (JSONObject) employeeObject.get("name");
            String first = (String) name.get("first");
            String second = (String) name.get("last");
            
            JSONObject dob = (JSONObject) employeeObject.get("dob");
            String birthdate = (String) dob.get("date");  
            
            String email = (String) employeeObject.get("email"); 
            
            String phone = (String) employeeObject.get("phone"); 
            
            JSONObject photo = (JSONObject) employeeObject.get("picture");
            String med = (String) photo.get("large");
            
            JSONObject hd = (JSONObject) employeeObject.get("registered");
            String hireDate = (String) hd.get("date");  
            
            String gender = (String) employeeObject.get("gender");   
            DateFormat dFormat =new SimpleDateFormat("yyyy-mm-dd");
             Employee employee = new Employee(null,first,second,dFormat.parse(birthdate),email,
            		 phone,med,dFormat.parse(hireDate),
            		 (gender.equals("male"))?Gender.M:Gender.F);
            return employee;
        }
    
}
