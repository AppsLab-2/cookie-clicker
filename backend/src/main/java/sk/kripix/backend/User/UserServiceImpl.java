package sk.kripix.backend.User;
import org.springframework.stereotype.Service;
import sk.kripix.backend.User.User;
import sk.kripix.backend.User.UserRepository;
import sk.kripix.backend.User.UserService;

@Service
public class UserServiceImpl implements UserService {
    private UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public void saveUser(User user){
        userRepository.save(user);
    }
}