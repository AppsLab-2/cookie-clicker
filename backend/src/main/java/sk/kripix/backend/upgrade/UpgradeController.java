package sk.kripix.backend.upgrade;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;

@RestController
@RequestMapping("upgrade")
public class UpgradeController {
    private final UpgradeService upgradeService;

    public UpgradeController(UpgradeService upgradeService) {
        this.upgradeService = upgradeService;
    }

    @GetMapping()
    public Collection<Upgrade> getAllUpgrades() {
        return this.upgradeService.getAllUpgrades();
    }
}
