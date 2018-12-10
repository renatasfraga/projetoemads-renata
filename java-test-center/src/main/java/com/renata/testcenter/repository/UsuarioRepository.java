package com.renata.testcenter.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.renata.testcenter.model.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, String> {

	@Query("SELECT u FROM Usuario u WHERE u.email = :email and u.senha = :senha order by u.nome asc")
	public Usuario getLogin(@Param("email") String email,
			                @Param("senha") String senha);
	
	@Query(value = "Select u FROM usuario u inner join membros m on u.email = m.usuario_email inner join projeto "
			      + " p on p.id = m.projeto_id and p.id = :id",
		   nativeQuery = true)
	public List<Usuario> getUsuariosByProjeto(@Param("id") Long id);
}
