package sk.kripix.backend.item;

import org.springframework.data.domain.Sort;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public interface ItemRepository extends CrudRepository <Item, Long> {

    List<Item> findAll(Sort orderById);
}
