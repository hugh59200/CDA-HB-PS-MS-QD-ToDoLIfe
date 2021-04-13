package com.cda.todolife.security.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;
import com.cda.todolife.model.Utilisateur;
import com.cda.todolife.repository.IUtilisateurRepository;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

	@Autowired
	private IUtilisateurRepository utilisateurRepository;

	@Override
	public User loadUserByUsername(String username) {
		if (ObjectUtils.isEmpty(username)) {
			throw new UsernameNotFoundException("username is empty");
		}

		Utilisateur userE = utilisateurRepository.findByUsername(username)
				.orElseThrow(() -> new UsernameNotFoundException("User not found"));

		return new User(userE.getUsername(), userE.getPassword(), List.of(new SimpleGrantedAuthority("USER")));
	}

}
