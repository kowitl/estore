package org.kowit.estore;

import org.glassfish.jersey.server.ResourceConfig;
import org.kowit.estore.controller.ProductController;
import org.springframework.stereotype.Component;

import javax.ws.rs.ApplicationPath;

/**
 * Created by kowitl on 8/20/2016 AD.
 */
@Component
@ApplicationPath("/api")
public class JereyConfig extends ResourceConfig {
    public JereyConfig() {
        register(ProductController.class);
    }
}
