public class Warrior {
  String name;
  Rideable ride;
  

  public Warrior(String name, Rideable ride){
    this.name = name;
    this.ride = ride;
  }

  public String getName(){
    return this.name;
  }

  public Rideable getRide(){
    return this.ride;
  }