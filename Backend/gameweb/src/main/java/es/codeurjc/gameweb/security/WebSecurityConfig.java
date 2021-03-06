package es.codeurjc.gameweb.security;

import java.security.SecureRandom;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

	@Autowired
	RepositoryUserDetailsService userDetailsService;
	
	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder(10, new SecureRandom());
	}

	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {

		auth.userDetailsService(userDetailsService).passwordEncoder(passwordEncoder());
	}   
    
    @Override
    protected void configure(HttpSecurity http) throws Exception {
    	// Public pages
        http.authorizeRequests().antMatchers("/").permitAll();
        http.authorizeRequests().antMatchers("/login").permitAll();
        http.authorizeRequests().antMatchers("/index").permitAll();
        http.authorizeRequests().antMatchers("/gamePage/*").permitAll();
        http.authorizeRequests().antMatchers("/statistics/*").permitAll();
        http.authorizeRequests().antMatchers("/listPosts/*").permitAll();
        http.authorizeRequests().antMatchers("/expandedPost/{id}").permitAll();
        http.authorizeRequests().antMatchers("/singIn").permitAll();


        // Private pages
        http.authorizeRequests().antMatchers("/adminUpdates/*").hasAnyRole("ADMIN");
        http.authorizeRequests().antMatchers("/createPostPage/*").hasAnyRole("ADMIN");
        http.authorizeRequests().antMatchers("/rate/*").hasAnyRole("USER","ADMIN");
        http.authorizeRequests().antMatchers("/agregarChat/*").hasAnyRole("USER","ADMIN");
        http.authorizeRequests().antMatchers("/profile/*").hasAnyRole("USER","ADMIN");
        
        // Login form
        http.formLogin().loginPage("/login");
        http.formLogin().usernameParameter("name");
        http.formLogin().passwordParameter("password");
        http.formLogin().defaultSuccessUrl("/index");
        http.formLogin().failureUrl("/login");

        // Logout
        http.logout().logoutUrl("/logout");
        http.logout().logoutSuccessUrl("/");
    
    }
}
