import java.security.interfaces.ECKey;

public class ResultadoEscolar {
   public static void main(String[] args) {
    
    int nota = 8;

    if (nota >= 7 )// COndição precisa retornar True
        System.out.println("Aprovado");

    else if (nota >=5 && nota <7)//Condição pode retornar true ou false
        System.out.println("Recuperação");

    else
        System.out.println("Reprovado");//Retorno condição false
   } 
}
