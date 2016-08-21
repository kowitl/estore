package org.kowit.estore.controller;

import org.kowit.estore.domain.Product;
import org.kowit.estore.domain.ProductRepository;
import org.springframework.stereotype.Component;

import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.UriInfo;
import java.net.URI;

/**
 * Created by kowitl on 8/20/2016 AD.
 */
@Component
@Path("/product")
@Produces(MediaType.APPLICATION_JSON)
public class ProductController {

    @Inject
    private ProductRepository productRepository;

    @Context
    private UriInfo uriInfo;

    @GET
    @Path("{id}")
    public Product findOne(@PathParam("id") Long id) {
        return productRepository.findOne(id);
    }

    @GET
    public Iterable<Product> findAll() {
        return productRepository.findAll();
    }

    @POST
    public Response save(Product product) {

        product = productRepository.save(product);

        URI location = uriInfo.getAbsolutePathBuilder().path("{id}")
                .resolveTemplate("id", product.getId())
                .build();

        return Response.created(location).build();
    }

    @DELETE
    @Path("{id}")
    public Response delete(@PathParam("id") Long id) {
        productRepository.delete(id);
        return Response.accepted().build();
    }

}
