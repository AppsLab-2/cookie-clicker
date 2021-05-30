package sk.kripix.backend.upgrade;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Upgrade {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    long id;
    String name;
    long price;
    long priceIncrement;

    public Upgrade(Long id, String name, int price, int priceIncrement) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.priceIncrement = priceIncrement;
    }
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public long getPrice() {
        return price;
    }

    public void setPrice(long price) {
        this.price = price;
    }

    public long getPriceIncrement() {
        return priceIncrement;
    }

    public void setPriceIncrement(long priceIncrement) {
        this.priceIncrement = priceIncrement;
    }
}
