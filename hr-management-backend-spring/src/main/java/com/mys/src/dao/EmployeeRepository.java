package com.mys.src.dao;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.mys.src.entities.Employee;
// rest all rest methods put/get/post/delete
@CrossOrigin(origins = {"http://localhost:8100","http://localhost:8080"})
@RepositoryRestResource
public interface EmployeeRepository extends JpaRepository<Employee, Long> {
	//rest link : employees/search/byname?q=exemple search by first name or last name
	@RestResource(path = "/byname")
	@Query("select e from Employee e where (LOWER(e.firstName)LIKE '%' || LOWER(:q) || '%'"
	+"  or LOWER(e.lastName)LIKE '%' || LOWER(:q) || '%') ")
	public Page<Employee> byName(@Param("q") String name,Pageable page);
}
