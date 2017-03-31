package Animals;

public abstract class Animal {

  public String cry;
  public int health;

  public Animal(String cry, int health){
    this.cry = cry;
    this.health = health;
  }
}

public String getCry(){
  return this.cry;
}

public int getHealth(){
  return this.health
}