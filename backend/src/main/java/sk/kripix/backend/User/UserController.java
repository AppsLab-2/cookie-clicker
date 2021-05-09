package sk.kripix.backend.User;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import sk.kripix.backend.dto.RegisterDto;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;

@RestController
public class UserController {
    private final UserService userService;
    private final PasswordEncoder passwordEncoder;

    public UserController(UserService userService, PasswordEncoder passwordEncoder){
        this.userService = userService;
        this.passwordEncoder = passwordEncoder;
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody @Valid @NotNull RegisterDto registerDto){
        String username = registerDto.getUsername();
        String encodedPassword = passwordEncoder.encode(registerDto.getPassword());

        if(userService.existsByUsername(username)) {
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
        }

        User user = new User();
        user.setUsername(username);
        user.setPassword(encodedPassword);
        user.setScore(0);
        userService.saveUser(user);

        return ResponseEntity.ok().build();
    }

    @GetMapping("/login")
    public void login() { }
}