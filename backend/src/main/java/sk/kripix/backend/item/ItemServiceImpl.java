package sk.kripix.backend.item;

import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import javax.swing.*;
import java.util.List;

@Service
public class ItemServiceImpl implements ItemService {
    private ItemRepository itemRepository;

    public ItemServiceImpl(ItemRepository itemRepository) {
        this.itemRepository = itemRepository;
    }

    @Override
    public List<Item> getItemById()
    {
         return itemRepository.findAll(orderById());
    }
    private Sort orderById()
    {
        return Sort.by(Sort.Direction.DESC, "id");
    }
}
