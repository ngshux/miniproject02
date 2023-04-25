package vttp.paf.day22.models;

import jakarta.json.JsonObject;

public class Nutrition {
    String name;
    Float amount;
    String unit;
    Float percentOfDailyNeeds;
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public Float getAmount() {
        return amount;
    }
    public void setAmount(Float amount) {
        this.amount = amount;
    }
    public String getUnit() {
        return unit;
    }
    public void setUnit(String unit) {
        this.unit = unit;
    }
    public Float getPercentOfDailyNeeds() {
        return percentOfDailyNeeds;
    }
    public void setPercentOfDailyNeeds(Float percentOfDailyNeeds) {
        this.percentOfDailyNeeds = percentOfDailyNeeds;
    }

    public static Nutrition create(JsonObject obj){
        Nutrition nutrients = new Nutrition();
        nutrients.setName(obj.getString("name"));
        nutrients.setAmount(obj.getJsonNumber("amount").bigDecimalValue().floatValue());
        nutrients.setUnit(obj.getString("unit"));
        nutrients.setPercentOfDailyNeeds(obj.getJsonNumber("percentOfDailyNeeds").bigDecimalValue().floatValue());

        return nutrients;
    }
}
