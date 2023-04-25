package vttp.paf.day22.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import vttp.paf.day22.models.OrderItem;
import vttp.paf.day22.services.FoodApiService;

@Controller
@RequestMapping(path="/api",produces = MediaType.APPLICATION_JSON_VALUE)
@CrossOrigin(origins="*")
public class FoodController {

    @Autowired
    private FoodApiService foodSvc;

    @GetMapping(path="/food/{query}")
    public ResponseEntity<String> searchIngredients(@PathVariable String query) {
        List<OrderItem> ingList= foodSvc.getIngredients(5, query); 
        Gson gson = new GsonBuilder().setPrettyPrinting().create();
        String json = gson.toJson(ingList);
		return ResponseEntity.ok(json);
    }

    @GetMapping(path="/{id}")
    public ResponseEntity<String> searchIngredientsByID(@PathVariable Integer id) {
        OrderItem ing = foodSvc.getIngredientInfo(id);
        Gson gson = new GsonBuilder().setPrettyPrinting().create();
        String json = gson.toJson(ing);

		return ResponseEntity.ok(json);
    }
        
}
