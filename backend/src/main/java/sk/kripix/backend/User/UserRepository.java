package sk.kripix.backend.User;
import org.springframework.data.repository.CrudRepository;
import sk.kripix.backend.User.User;

public interface UserRepository extends CrudRepository<User, Integer> {
}
