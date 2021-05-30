package sk.kripix.backend.user;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String username;
    private String password;
    private long money;
    private long clickValue;
    private long timesClicked;
    private long moneyEarned;

    public User() {
    }

    public User(String username, String password, long money, long clickValue, long timesClicked, long moneyEarned) {
        this.username = username;
        this.password = password;
        this.money = money;
        this.clickValue = clickValue;
        this.timesClicked = timesClicked;
        this.moneyEarned = moneyEarned;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public long getMoney() {
        return money;
    }

    public void setMoney(long money) {
        this.money = money;
    }

    public long getClickValue() {
        return clickValue;
    }

    public void setClickValue(long clickValue) {
        this.clickValue = clickValue;
    }

    public long getTimesClicked() {
        return timesClicked;
    }

    public void setTimesClicked(long timesClicked) {
        this.timesClicked = timesClicked;
    }

    public long getMoneyEarned() {
        return moneyEarned;
    }

    public void setMoneyEarned(long moneyEarned) {
        this.moneyEarned = moneyEarned;
    }

}