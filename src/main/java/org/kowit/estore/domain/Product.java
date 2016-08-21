package org.kowit.estore.domain;

import javax.persistence.Entity;

/**
 * Created by kowitl on 8/20/2016 AD.
 */
@Entity
public class Product extends BaseEntity {

    String name;

    public Product() {

    }

    public Product(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
