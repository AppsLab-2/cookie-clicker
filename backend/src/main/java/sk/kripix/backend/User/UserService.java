package sk.kripix.backend.User;


import java.util.Optional;

public interface UserService {
    void saveUser(User user);
    User addUser(User user);
    Optional<User> getUserByUsername(String username);
    User updateUser(User user);
}