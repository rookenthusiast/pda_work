package Animals;

public class Dragon extends Animal implements Rideable{
  public String type;

  public Dragon(String cry, int health){
    super(cry, health);›
  }

  public String ride(){
    return "flapping my big wings"
  }
}