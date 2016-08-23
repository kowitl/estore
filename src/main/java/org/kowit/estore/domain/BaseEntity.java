package org.kowit.estore.domain;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

/**
 * Created by kowitl on 8/20/2016 AD.
 */
@MappedSuperclass
public abstract class BaseEntity {

    @Id
    private Long id;

    public Long getId() {
        return id;
    }

}
