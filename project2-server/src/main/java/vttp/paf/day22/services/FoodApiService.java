package vttp.paf.day22.services;

import java.io.StringReader;
import java.util.LinkedList;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import jakarta.json.Json;
import jakarta.json.JsonArray;
import jakarta.json.JsonObject;
import jakarta.json.JsonReader;
import vttp.paf.day22.models.Nutrition;
import vttp.paf.day22.models.OrderItem;

@Service
public class FoodApiService {
    //INGREDIENT INFO API
    //https://api.spoonacular.com/food/ingredients/10011111/information?apiKey=cef01d052fb74d4eb19df5ed31c939e8&amount=1

    //IMAGE API
    //https://spoonacular.com/cdn/ingredients_100x100/apple.jpg

    private String API_URL = "https://api.spoonacular.com/food/ingredients/";
    private String apiKey = System.getenv("apiKey");

    public List<OrderItem> getIngredients(Integer numResult, String searchField){
        ResponseEntity<String> resp = null;
        String apiUrl = UriComponentsBuilder
                            .fromUriString(API_URL+"search")
                            .queryParam("apiKey", apiKey)
                            .queryParam("number", numResult)
                            .queryParam("query", searchField)
                            .toUriString();
        
        RestTemplate template = new RestTemplate();
        resp = template.getForEntity(apiUrl, String.class);

        JsonReader reader = Json.createReader(new StringReader(resp.getBody()));
        
        JsonObject result = reader.readObject();
        JsonArray data = result.getJsonArray("results");

        List<OrderItem> items = new LinkedList<>();
        items = data.stream()
                        .map(v -> (JsonObject) v)
                        .map(jo -> OrderItem.create(jo))
                        .toList();

        System.out.println(data);

        List<OrderItem> itemInfo = new LinkedList<>();
        for( OrderItem oi : items){
            itemInfo.add(getIngredientPrice(oi));
        }

        return itemInfo;
    }

    public OrderItem getIngredientPrice(OrderItem ingItem){
        ResponseEntity<String> resp = null;
        String apiUrl = UriComponentsBuilder
                            .fromUriString(API_URL+ingItem.getId()+"/information")
                            .queryParam("apiKey", apiKey)
                            .queryParam("amount", 1)
                            .toUriString();

        RestTemplate template = new RestTemplate();
        resp = template.getForEntity(apiUrl, String.class);

        JsonReader reader = Json.createReader(new StringReader(resp.getBody()));
        
        JsonObject result = reader.readObject();

        JsonObject cost = result.getJsonObject("estimatedCost");
        ingItem.setPrice(cost.getJsonNumber("value").bigDecimalValue().floatValue());
        ingItem.setUnit(cost.getString("unit"));

        return ingItem;
    }

    public OrderItem getIngredientInfo(Integer id){
        ResponseEntity<String> resp = null;
        String apiUrl = UriComponentsBuilder
                            .fromUriString(API_URL+id+"/information")
                            .queryParam("apiKey", apiKey)
                            .queryParam("amount", 1)
                            .toUriString();

        RestTemplate template = new RestTemplate();
        resp = template.getForEntity(apiUrl, String.class);

        JsonReader reader = Json.createReader(new StringReader(resp.getBody()));
        
        JsonObject result = reader.readObject();

        OrderItem ingredient = new OrderItem();
        ingredient.setId(result.getInt("id"));
        ingredient.setName(result.getString("name"));
        
        JsonObject cost = result.getJsonObject("estimatedCost");
        ingredient.setPrice(cost.getJsonNumber("value").bigDecimalValue().floatValue());
        ingredient.setUnit(cost.getString("unit"));

        JsonObject nutrition = result.getJsonObject("nutrition");
        JsonArray nutrients = nutrition.getJsonArray("nutrients");
        List<Nutrition> nList = new LinkedList<>();
        nList = nutrients.stream()
                        .map(v -> (JsonObject) v)
                        .map(jo -> Nutrition.create(jo))
                        .toList();
        ingredient.setNutrition(nList);

        return ingredient;
    }

    // "nutrition": {
    //     "nutrients": [
    //         {
    //             "name": "Poly Unsaturated Fat",
    //             "amount": 0.0,
    //             "unit": "g",
    //             "percentOfDailyNeeds": 0.0
    //         },

        // public List<Nutrition> getNutrientsByID(Integer id){
        //     ResponseEntity<String> resp = null;
        //     String apiUrl = UriComponentsBuilder
        //                         .fromUriString(API_URL+id+"/information")
        //                         .queryParam("apiKey", apiKey)
        //                         .queryParam("amount", 1)
        //                         .toUriString();

        //     RestTemplate template = new RestTemplate();
        //     resp = template.getForEntity(apiUrl, String.class);
    
        //     JsonReader reader = Json.createReader(new StringReader(resp.getBody()));
            
        //     JsonObject result = reader.readObject();
        //     JsonObject nutrition = result.getJsonObject("nutrition");
        //     JsonArray nutrients = nutrition.getJsonArray("nutrients");

    
        //     List<Nutrition> nList = new LinkedList<>();
        //     nList = nutrients.stream()
        //                     .map(v -> (JsonObject) v)
        //                     .map(jo -> Nutrition.create(jo))
        //                     .toList();
        //         return nList;
        // }    
}
