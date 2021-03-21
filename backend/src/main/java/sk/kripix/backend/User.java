package sk.kripix.backend;
import org.hibernate.tool.schema.internal.exec.GenerationTarget;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class
User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    int id;

    String name;
    String surname;
    String email;
    String password;
    Long money;


    public User(String name, String surname, String email, String password, Long money) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.password = password;
        this.money = money;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}