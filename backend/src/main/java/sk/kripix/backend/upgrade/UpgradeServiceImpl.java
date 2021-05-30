package sk.kripix.backend.upgrade;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@Service
public class UpgradeServiceImpl implements UpgradeService {
    private UpgradeRepository upgradeRepository;

    @Override
    public Collection<Upgrade> getAllUpgrades() {
        Iterable<Upgrade> upgrades = this.upgradeRepository.findAll();
        return StreamSupport
                .stream(upgrades.spliterator(), false)
                .collect(Collectors.toSet());
    }
}
