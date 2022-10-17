package ComandosLeituraeGravacao;

//importar o recurso Scanner para que possa ser usado na app
import java.util.Scanner;

public class App{
      

    public static void app(String[] args) {
        
        //Declaração de leitura de dados, Exemplo
        Scanner leitor = new Scanner(System.in);
        int idade = leitor.nextInt();
        float cotacaoDolar = leitor.nextFloat();
        double cotacaoEuro = leitor.nextDouble();
        String nome = leitor.nextLine();
        String codigoRua = leitor.next();
        
        //Declaração de impressão de dados para o usuário
        System.out.println("Entre aspas o texto que será exibido e envia o "
                + "cursosr para pŕoxima lina");
        System.out.print("apresenta o texto e mante o cursor na mesma linha");
        
    }
}
