package com.mys.src.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.mys.src.entities.ASId;
import com.mys.src.entities.AbsenceSchedule;

//rest all rest methods put/get/post/delete
@CrossOrigin(origins = {"*"})
@RepositoryRestResource
public interface AnsenceScheduleRepository extends JpaRepository<AbsenceSchedule, ASId> {

}
