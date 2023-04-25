package vttp.paf.day22.models;

import java.util.ArrayList;
import java.util.List;

import jakarta.json.JsonObject;

public class OrderItem {
    
    Integer id;
    String name;
    Float price;
    String unit;
    Integer qty = 0;
    String description;
    String image;
    List<Nutrition> nutrition = new ArrayList<Nutrition>();

    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public Float getPrice() {
        return price;
    }
    public void setPrice(Float price) {
        this.price = price;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public String getImage() {
        return image;
    }
    public void setImage(String image) {
        this.image = "https://spoonacular.com/cdn/ingredients_100x100/"+image;
    }

    public Integer getQty() {
        return qty;
    }
    public void setQty(Integer qty) {
        this.qty = qty;
    }
    
    public static OrderItem create(JsonObject obj){
        OrderItem item = new OrderItem();
        item.setId(obj.getInt("id"));
        item.setName(obj.getString("name"));
        item.setImage(obj.getString("image"));
        return item;
    }
    public String getUnit() {
        return unit;
    }
    public void setUnit(String unit) {
        this.unit = unit;
    }
    public List<Nutrition> getNutrition() {
        return nutrition;
    }
    public void setNutrition(List<Nutrition> nutrition) {
        this.nutrition = nutrition;
    }
    
}
