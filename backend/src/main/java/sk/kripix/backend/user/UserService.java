package sk.kripix.backend.user;

import java.util.Collection;
import java.util.Optional;

public interface UserService {
    void saveUser(User user);
    User addUser(User user);
    Optional<User> getUserByUsername(String username);
    User updateUser(User user);
    boolean existsByUsername(String username);
    Collection<User> getTopPlayers();
}