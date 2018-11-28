package com.renata.testcenter.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.renata.testcenter.model.Projeto;

public interface ProjetoRepository extends JpaRepository<Projeto, Long>{
	
	@Query("SELECT p FROM Projeto p inner join p.usuarios u where u.email = :email")
	public List<Projeto> getProjetosByUsuario(@Param("email") String email);
	
}
