package sk.kripix.backend.User;
import org.springframework.data.repository.CrudRepository;
import sk.kripix.backend.User.User;

import java.util.Optional;

public interface UserRepository extends CrudRepository<User, Integer> {
        Optional<User> findByUsername(String username);
        boolean existsByUsername(String username);
}
