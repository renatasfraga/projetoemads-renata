package com.renata.testcenter.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.renata.testcenter.model.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, String> {

}
