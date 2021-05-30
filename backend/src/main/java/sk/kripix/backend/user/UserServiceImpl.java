package sk.kripix.backend.user;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@Service
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public void saveUser(User user){
        userRepository.save(user);
    }

    @Override
    public User addUser(User user) {
        user.setId(0);
        return this.userRepository.save(user);
    }

    @Override
    public Optional<User> getUserByUsername(String username) {
        return this.userRepository.findByUsername(username);
    }

    @Override
    public User updateUser(User user) {
        return this.userRepository.save(user);
    }

    @Override
    public boolean existsByUsername(String username) {
        return userRepository.existsByUsername(username);
    }

    @Override
    public Collection<User> getTopPlayers() {
        Iterable<User> topUsers = this.userRepository.findTop10ByOrderByMoneyEarnedDesc();
        return StreamSupport
                .stream(topUsers.spliterator(), false)
                .collect(Collectors.toSet());
    }
}