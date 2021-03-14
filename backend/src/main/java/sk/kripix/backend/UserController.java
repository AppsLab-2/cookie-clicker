package sk.kripix.backend;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
    private UserService x;

    public UserController(UserService x){
        this.x = x;
    }

    @PostMapping("/login")
    public void save(@RequestBody User user){
        x.saveUser(user);
    }
}
