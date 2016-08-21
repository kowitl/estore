package org.kowit.estore;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.kowit.estore.domain.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.test.context.jdbc.Sql;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@Sql("/schema.sql")
@Sql("/data.sql")
public class EstoreApplicationIntegrationTests {

    @Autowired
    private TestRestTemplate restTemplate;

    @Test
    public void testGetProduct() throws Exception {

        String json = "{\"id\":1\",\"name\":\"iPhone\"}";
        System.out.println(this.restTemplate.getForEntity("/api/product/1", Product.class).getStatusCode());

    }

}
