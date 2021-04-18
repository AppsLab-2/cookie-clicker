package sk.kripix.backend.upgrade;
import org.springframework.stereotype.Service;

@Service
public class UpgradeServiceImpl implements UpgradeService {
    private UpgradeRepository upgradeRepository;

    @Override
    public void getAllUpgrades() {
        upgradeRepository.findAll();
    }
}
