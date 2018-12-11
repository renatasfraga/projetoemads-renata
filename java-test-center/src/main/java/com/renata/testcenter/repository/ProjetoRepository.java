package com.renata.testcenter.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.renata.testcenter.model.Projeto;

public interface ProjetoRepository extends JpaRepository<Projeto, Long>{
	
	@Query("select m.id.projeto from Membro m where m.id.usuario.email = :email order by m.id.projeto.nome asc")
	public List<Projeto> getProjetosByUsuario(@Param("email") String email);
	
}
