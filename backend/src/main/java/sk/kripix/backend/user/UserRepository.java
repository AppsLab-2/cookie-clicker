package sk.kripix.backend.user;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface UserRepository extends CrudRepository<User, Integer> {
        Optional<User> findByUsername(String username);
        boolean existsByUsername(String username);
        Iterable<User> findTop10ByOrderByMoneyEarnedDesc();
}
