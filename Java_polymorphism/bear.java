package Animals;

public class Bear extends Animal implements Rideable{
  public String type;

  public Bear(String cry, int health){
    super(cry, health);
  }

  public String ride(){
    return "running through the wood"
  }
}